/* VELARA Home Page — Obsidian Empress Design */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Play, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";

const HERO_IMG = "https://res.cloudinary.com/anjpczrc/image/upload/v1790532190/copy_of_copy_of_20260925_095531.jpg";
const ABOUT_IMG = "https://res.cloudinary.com/anjpczrc/image/upload/v1790504267/IMG_9618_1_1_1_2.jpg";
const MEMBER_IMGS = [
  "https://res.cloudinary.com/anjpczrc/image/upload/v1790598562/copy_of_copy_of_20260927_070726.jpg",
  "https://res.cloudinary.com/anjpczrc/image/upload/v1790504342/IMG_9632_1.jpg",
  "https://res.cloudinary.com/anjpczrc/image/upload/v1790504364/IMG_9638_1.jpg",
  "https://res.cloudinary.com/anjpczrc/image/upload/v1790504295/20260925_043652.jpg",
];
const GALLERY_1 = "https://res.cloudinary.com/anjpczrc/video/upload/v1790941834/VID_20261002094616617.mp4";
const GALLERY_2 = "https://res.cloudinary.com/anjpczrc/image/upload/v1790581387/copy_of_copy_offf_20260925_100344.jpg";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal-hidden").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const storyRef = useReveal();
  const membersRef = useReveal();
  const musicRef = useReveal();
  const galleryRef = useReveal();
  const cta1Ref = useReveal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to detect video URLs (Cloudinary video uploads include '/video/upload/')
  const isVideoUrl = (url: string) => /\.(mp4|webm|ogg)(\?.*)?$/.test(url) || url.includes("/video/upload/");

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO
        title="Home"
        description="VELARA is an afro girl group from Namibia creating music for a global audience."
        image={HERO_IMG}
      />
      <Navigation />

      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img src={HERO_IMG} alt="VELARA Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/60" />
        <div className="absolute inset-0 hero-gradient" style={{ opacity: 1 - scrollY / 800 }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="container relative z-10">
            <span
              className="section-label block mb-6 animate-fade-up"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Welcome to VELARA
            </span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] mb-6 animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
              }}
            >
              Four Voices.{" "}
              <span className="text-[#c9956c]" style={{ display: "block" }}>
                One Vision.
              </span>
            </h1>
            <p
              className="text-[#f0eeec]/50 max-w-2xl mx-auto mb-10 animate-fade-up delay-300"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.1rem" }}
            >
              An afro girl group from Namibia creating music for a global audience.

            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-up delay-400">
              <Link href="/music">
                <button className="btn-velara-filled flex items-center gap-2">
                  <Play size={12} />
                  Listen Now
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-velara flex items-center gap-2">
                  Our Story <ArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-[#c9956c]" />
        </div>
      </section>

      {/* ── MARQUEE SECTION ── */}
      <section className="py-8 bg-[#0d0d0d] overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-block px-12 text-[#c9956c]/40 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200 }}
            >
              VELARA · NAMIBIA · MUSIC · FASHION · POWER · ELEGANCE · AFRICA · INTERNATIONAL
            </span>
          ))}
        </div>
      </section>

      {/* ── OUR STORY SECTION ── */}
      <section ref={storyRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label reveal-hidden block mb-6">Our Story</span>
              <h2
                className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Born in Namibia.{" "}
                <span className="text-[#c9956c]" style={{ display: "block" }}>
                  Built for the World.
                </span>
              </h2>
              <div className="reveal-hidden velara-line-left w-24 mb-8" />
              <p
                className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                VELARA is a four-member female group from Namibia. We create progressive afro music that blends strong melodies, 
                polished performances, and authentic storytelling with our African roots. Our goal is simple: to create music that 
                connects with audiences everywhere while proudly representing where we come from.
              </p>
              <p
                className="reveal-hidden text-[#f0eeec]/40 leading-relaxed mb-10"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                VELARA represents confidence, unity, and artistic ambition. Every song, performance and visual is created
                with intention, reflecting the identity we are building as artists.
              </p>
              <Link href="/about">
                <button className="reveal-hidden btn-velara flex items-center gap-2">
                  Read Our Full Story <ArrowRight size={12} />
                </button>
              </Link>
            </div>
            <img
              src={ABOUT_IMG}
              alt="VELARA Story"
              className="reveal-hidden w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── MEMBERS SECTION ── */}
      <section ref={membersRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">The Group</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Meet <span className="text-[#c9956c]">VELARA</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            {[
              { name: "Angeline", role: "Vocalist & Songwriter" },
              { name: "Magdalena", role: "Vocalist & Performer" },
              { name: "Annalisa", role: "Vocalist & Performer" },
              { name: "Penny", role: "Dancer & Performer" },
            ].map((member, i) => (
              <div
                key={member.name}
                className="reveal-hidden member-card relative h-[300px] md:h-[400px] overflow-hidden group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img src={MEMBER_IMGS[i]} alt={member.name} className="w-full h-full object-cover" />
                <div className="member-overlay" />
                <div className="member-info">
                  <div
                    className="text-[#f0eeec] text-lg md:text-xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {member.name}
                  </div>
                  <div
                    className="member-bio text-[#c9956c] text-xs md:text-sm"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em", fontWeight: 200 }}
                  >
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

We will update rest of file content in next message due to token limits