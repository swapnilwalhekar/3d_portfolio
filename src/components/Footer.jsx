import React from "react";
import { styles } from "../styles";
import { MagneticDock } from "@/components/ui/magnetic-dock";

const Glyph = ({ title, children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <title>{title}</title>
    {children}
  </svg>
);

// Hoisted: `items` drives the dock's re-measure effect, so a fresh array each
// render would churn it.
const SOCIALS = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/swapnilwalhekar",
    tint: ["#7f9fff", "#4f7cff"],
    icon: (
      <Glyph title="Github">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </Glyph>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/swapnil_w_0805/",
    tint: ["#ff6b5e", "#f6b94a"],
    icon: (
      <Glyph title="Instagram">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </Glyph>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/swapnil-walhekar-a1617a209/",
    tint: ["#22c7d9", "#38bdf8"],
    icon: (
      <Glyph title="LinkedIn">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </Glyph>
    ),
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:walhekar.swapnil2018@gmail.com",
    tint: ["#32d583", "#22c7d9"],
    icon: (
      <Glyph title="Email">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </Glyph>
    ),
  },
];

const openSocial = (id) => {
  const item = SOCIALS.find((s) => s.id === id);
  if (!item) return;
  if (item.url.startsWith("mailto:")) {
    window.location.href = item.url;
  } else {
    window.open(item.url, "_blank", "noopener,noreferrer");
  }
};

const Footer = () => {
  return (
    <>
      {/* `dark` engages the dock's dark design tokens — the site is always dark. */}
      <div className="dark mx-auto w-full max-w-xl px-4">
        <MagneticDock
          items={SOCIALS}
          onSelect={openSocial}
          magnetRadius={95}
          maxScale={1.6}
          lift={18}
        />
      </div>
      <div className="flex flex-col items-center text-center pb-10 mt-4 mx-auto gap-2 max-w-3xl">
        <p className={`${styles.sectionSubText} blue-text-gradient`}>
          Inspirations from Andrain
        </p>
        <p className={`${styles.sectionSubText} blue-text-gradient`}>
          Developed by Swapnil Walhekar
        </p>
      </div>
    </>
  );
};

export default Footer;
