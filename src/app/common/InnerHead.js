"use client";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/app/GlobalContext";
import { IntroPhoto } from "@/components/IntroPhoto";
import { navigation, event } from "@/content/event-2026";
import { Reveal, usePointerParallax } from "@/components/motion";

// Left-aligned page title with the parent section as eyebrow and up to two photos that float and follow the pointer.
export default function InnerHead({ title = "", photos = [] }) {
  const pathname = usePathname();
  const { state: { lang } } = useGlobalContext();
  const surfaceRef = useRef(null);
  const photosRef = useRef(null);
  usePointerParallax(photosRef, surfaceRef);
  const parent = navigation
    .filter((item) => pathname.startsWith(item.href))
    .sort((a, b) => b.href.length - a.href.length)[0];
  const eyebrow = parent && parent.label[lang] !== title ? parent.label[lang] : event.date[lang];
  return (
    <div className="inner-head" ref={surfaceRef}>
      <div className="container">
        <div className="inner-head__inner">
          <Reveal as="p" intro className="inner-head__eyebrow">{eyebrow}</Reveal>
          <Reveal as="h1" intro step={1} className="inner-head__title">{title}</Reveal>
          {photos.length > 0 && (
            <div className="inner-head__photos" ref={photosRef} aria-hidden="true">
              {photos.map((photo, i) => (
                <span
                  key={photo.src}
                  className={`inner-head__photo inner-head__photo--${i + 1}`}
                  data-depth={i ? -5 : 7}
                  style={photo.ratio ? { aspectRatio: photo.ratio } : undefined}
                >
                  <IntroPhoto src={photo.src} position={photo.position ?? "50% 50%"} priority step={2 + i} />
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
