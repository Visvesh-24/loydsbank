import { useState } from "react";
import { FALLBACK_GRADIENTS } from "../data/images";

/**
 * Image with a graceful gradient fallback so a failed remote load never looks broken.
 * `seed` keeps the fallback gradient stable per slot.
 */
export default function SmartImage({ src, alt = "", className = "", seed = 0, imgClass = "" }) {
  const [failed, setFailed] = useState(false);
  const gradient = FALLBACK_GRADIENTS[seed % FALLBACK_GRADIENTS.length];

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ background: gradient }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)]" />
        <span className="absolute bottom-3 right-4 text-3xl opacity-70">✦</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClass} object-cover`}
    />
  );
}
