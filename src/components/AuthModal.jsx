import { useState, useEffect } from "react";
import Modal from "./Modal";
import Logo from "./Logo";

export default function AuthModal({ open, mode = "login", onClose, onSwitch }) {
  const [form, setForm] = useState({ user: "", pass: "", name: "", email: "" });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setDone(false);
      setForm({ user: "", pass: "", name: "", email: "" });
    }
  }, [open, mode]);

  const isLogin = mode === "login";
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <Modal open={open} onClose={onClose} title={isLogin ? "Log in" : "Register"}>
      <div className="mb-5 flex items-center justify-between">
        <Logo />
        <span className="rounded-full bg-mint-soft px-3 py-1 text-xs font-semibold text-forest">
          Secure log-in
        </span>
      </div>

      {done ? (
        <div className="animate-fadeIn py-6 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-lime">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#024731" strokeWidth="3">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-forest">
            {isLogin ? "Welcome back!" : "Account created"}
          </h3>
          <p className="mt-2 text-sm text-charcoal/70">
            {isLogin
              ? "You'd now be securely signed in to Internet Banking."
              : "Your Loyds profile is ready. Check your email to verify."}
          </p>
          <button onClick={onClose} className="btn-green mt-6 w-full">
            Continue
          </button>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            {isLogin ? "Log in to Internet Banking" : "Register for online banking"}
          </h2>
          <p className="mt-1 text-sm text-charcoal/60">
            {isLogin ? "Enter your details to continue." : "It only takes a few minutes."}
          </p>

          <form onSubmit={submit} className="mt-5 space-y-3">
            {!isLogin && (
              <Field label="Full name" value={form.name} onChange={set("name")} placeholder="Alex Morgan" />
            )}
            {!isLogin && (
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@email.com"
              />
            )}
            <Field
              label={isLogin ? "User ID" : "Choose a User ID"}
              value={form.user}
              onChange={set("user")}
              placeholder="loyds_user"
            />
            <Field
              label="Password"
              type="password"
              value={form.pass}
              onChange={set("pass")}
              placeholder="••••••••"
            />

            <button type="submit" className="btn-green !mt-5 w-full">
              {isLogin ? "Log in securely" : "Create account"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-charcoal/60">
            {isLogin ? "New to Loyds? " : "Already have an account? "}
            <button onClick={onSwitch} className="link-underline">
              {isLogin ? "Register now" : "Log in"}
            </button>
          </p>
        </>
      )}
    </Modal>
  );
}

function Field({ label, type = "text", value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-charcoal/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-charcoal/15 bg-mint-pale px-4 py-3 text-sm outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-lime/60"
      />
    </label>
  );
}
