"use client";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";
import { MOTION_QUERY } from "./motion";

// Fades in only once the image has decoded, so nothing pops in half-way through the entrance animation.
export function IntroPhoto({ src, position, priority, step = 2 }) {
  const ref = useRef(null);
  const [status, setStatus] = useState("static");
  useEffect(() => {
    const img = ref.current;
    if (!img) return undefined;
    let mounted = true;
    if (!window.matchMedia(MOTION_QUERY).matches || window.scrollY > 30 || document.documentElement.dataset.navigation === "history") return undefined;
    if (!img.complete) setStatus("loading");
    img.decode().catch(() => {}).then(() => { if (mounted) setStatus("ready"); });
    return () => { mounted = false; };
  }, []);
  return (
    <span className={`photo-enter is-${status}`} style={{ "--motion-step": step }}
      onAnimationEnd={(event) => { if (event.target === event.currentTarget) setStatus("settled"); }}>
      <img
        ref={ref}
        src={asset(src)}
        alt=""
        width="509"
        height="339"
        style={{ objectPosition: position }}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
      />
    </span>
  );
}
