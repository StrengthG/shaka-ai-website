import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Platform from "@/components/sections/Platform";
import Architecture from "@/components/sections/Architecture";
import Trust from "@/components/sections/Trust";
import Founder from "@/components/sections/Founder";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <Architecture />
        <Trust />
        <Founder />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
