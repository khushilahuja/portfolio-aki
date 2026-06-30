import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <Hero />

      <div className="dot-grid relative">
        {/* orbs — staggered delays so they drift out of phase with each other */}
        <div className="orb-1 pointer-events-none absolute -top-20 -left-52 h-150 w-150 rounded-full bg-indigo-500/25 blur-[130px]" />
        <div className="orb-2 pointer-events-none absolute top-[30%] -right-52 h-175 w-175 rounded-full bg-violet-500/20 blur-[130px]" />
        <div className="orb-3 pointer-events-none absolute top-[60%] -left-32 h-125 w-125 rounded-full bg-purple-600/18 blur-[110px]" />
        <div className="orb-4 pointer-events-none absolute bottom-0 right-1/4 h-125 w-125 rounded-full bg-indigo-400/15 blur-[110px]" />

        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
