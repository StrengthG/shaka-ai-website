/**
 * SHAKA AI — Home Page
 * Design: Obsidian Command
 * Single-page layout with smooth anchor navigation
 * Sections: Hero → Problem → Platform → Architecture → Trust → Founder → Vision → Footer
 * Performance: Hero + Navigation load eagerly; below-fold sections lazy-loaded
 */

import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";

// Lazy-load below-fold sections to improve mobile initial render time
const Problem = lazy(() => import("@/components/sections/Problem"));
const Platform = lazy(() => import("@/components/sections/Platform"));
const Architecture = lazy(() => import("@/components/sections/Architecture"));
const Trust = lazy(() => import("@/components/sections/Trust"));
const Founder = lazy(() => import("@/components/sections/Founder"));
const Vision = lazy(() => import("@/components/sections/Vision"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal section placeholder — same dark bg, no flash
function SectionFallback() {
  return <div style={{ background: "#080A0D", minHeight: "200px" }} />;
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#080A0D" }}>
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Problem />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Platform />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Architecture />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Trust />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Founder />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Vision />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
