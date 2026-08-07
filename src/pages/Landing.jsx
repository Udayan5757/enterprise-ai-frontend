import Architecture from "../components/landing/Architecture";
import CTA from "../components/landing/CTA";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import TechStack from "../components/landing/TechStack";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}