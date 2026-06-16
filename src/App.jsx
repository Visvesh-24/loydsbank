import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { renderRoute } from "./pages/registry";
import { SECTIONS } from "./lib/slug";

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [section, slug] = raw.split("/");
  return {
    section: SECTIONS.includes(section) ? section : "personal",
    slug: slug || "",
  };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);
  const [auth, setAuth] = useState({ open: false, mode: "login" });

  // Hash is the single source of truth for navigation.
  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (section, slug = "") => {
    window.location.hash = `/${section}${slug ? `/${slug}` : ""}`;
  };

  const { section, slug } = route;

  return (
    <div className="min-h-screen bg-white" id="top">
      <Navbar
        section={section}
        slug={slug}
        go={go}
        onAuth={(mode) => setAuth({ open: true, mode })}
      />

      <main key={`${section}/${slug}`} className="animate-fadeIn">
        {renderRoute(section, slug)}
      </main>

      <Footer />

      <AuthModal
        open={auth.open}
        mode={auth.mode}
        onClose={() => setAuth((a) => ({ ...a, open: false }))}
        onSwitch={() => setAuth((a) => ({ ...a, mode: a.mode === "login" ? "register" : "login" }))}
      />
    </div>
  );
}
