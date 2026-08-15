"use client";

import { MagneticDock } from "@/components/ui/magnetic-dock";

const G = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d={d} />
  </svg>
);

// Hoisted: `items` drives a re-measure effect, so a fresh array each render churns it.
const ITEMS = [
  { id: "finder", label: "Finder", tint: ["#4f7cff", "#22c7d9"] as [string, string], icon: <G d="M3 7h18M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M3 7l2-3h14l2 3" /> },
  { id: "search", label: "Search", tint: ["#22c7d9", "#38bdf8"] as [string, string], icon: <G d="m21 21-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" /> },
  { id: "ship", label: "Deploy", tint: ["#32d583", "#22c7d9"] as [string, string], icon: <G d="M12 19V5M5 12l7-7 7 7" /> },
  { id: "stats", label: "Insights", tint: ["#f6b94a", "#ff6b5e"] as [string, string], icon: <G d="M4 20V10M10 20V4M16 20v-7M22 20h-20" /> },
  { id: "audio", label: "Audio", tint: ["#ff6b5e", "#e9564a"] as [string, string], icon: <G d="M4 12v2M8 8v10M12 5v14M16 9v6M20 11v2" /> },
  { id: "vault", label: "Vault", tint: ["#7f9fff", "#4f7cff"] as [string, string], icon: <G d="M6 11V8a6 6 0 1 1 12 0v3M5 11h14v9H5z" /> },
  { id: "send", label: "Send", tint: ["#45d5e4", "#4f7cff"] as [string, string], icon: <G d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /> },
];

export default function MagneticDockDemo() {
  return (
    <div className="flex min-h-[380px] w-full items-center justify-center p-10">
      <div className="w-full max-w-2xl">
        <MagneticDock items={ITEMS} magnetRadius={140} maxScale={1.65} lift={16} idleWave tooltip />
        <p className="mt-6 text-center text-sm text-[var(--motiq-muted)]">
          Sweep the dock, or Tab through it.
        </p>
      </div>
    </div>
  );
}
