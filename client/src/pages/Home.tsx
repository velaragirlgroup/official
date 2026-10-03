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
const GALLERY_1 = "https://res.cloudinary.com/anjpczrc/video/upload/v1791027065/VELARA_cinematic_walk_edit_member4_shortened.mp4";
const GALLERY_2 = "https://res.cloudinary.com/anjpczrc/video/upload/v1790941740/VID_20261002134330075.mp4";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
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

  const gallery1Ref = useRef<HTMLVideoElement | null>(null);
  const gallery2Ref = useRef<HTMLVideoElement | null>(null);
  const [g1Muted, setG1Muted] = useState(true);
  const [g2Muted, setG2Muted] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const unmuteGallery1 = () => {
    const v1 = gallery1Ref.current;
    const v2 = gallery2Ref.current;
    if (!v1) return;
    if (v2) {
      v2.pause();
      v2.muted = true;
      setG2Muted(true);
    }
    v1.muted = false;
    v1.play().catch(() => {});
    setG1Muted(false);
  };

  const unmuteGallery2 = () => {
    const v1 = gallery1Ref.current;
    const v2 = gallery2Ref.current;
    if (!v2) return;
    if (v1) {
      v1.pause();
      v1.muted = true;
      setG1Muted(true);
    }
    v2.muted = false;
    v2.play().catch(() => {});
    setG2Muted(false);
  };

  const muteGallery1 = () => {
    const v1 = gallery1Ref.current;
    if (!v1) return;
    v1.muted = true;
    setG1Muted(true);
  };

  const muteGallery2 = () => {
    const v2 = gallery2Ref.current;
    if (!v2) return;
    v2.muted = true;
    setG2Muted(true);
  };

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Home" description="VELARA is an afro girl group from Namibia creating music for a global audience." image={HERO_IMG} />
      <Navigation />

      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img src={HERO_IMG} alt="VELARA Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/60" />
        <div className="absolute inset-0 hero-gradient" style={{ opacity: 1 - scrollY / 800 }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="container relative z-10">
            <span className="section-label block mb-6 animate-fade-up" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Welcome to VELARA
            </span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] mb-6 animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
              }}
            >
              Four Voices. {" "}
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-[#c9956c]" />
        </div>
      </section>

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
            <img src={ABOUT_IMG} alt="VELARA Story" className="reveal-hidden w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

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

          <Link href="/members">
            <button className="reveal-hidden btn-velara flex items-center gap-2">
              All Members <ArrowRight size={12} />
            </button>
          </Link>
        </div>
      </section>

      <section ref={musicRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Music</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              The Sound of <span className="text-[#c9956c]">VELARA</span>
            </h2>
          </div>

          <div className="reveal-hidden grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="music-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[#f0eeec] text-sm" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                    Coming Soon
                  </div>
                  <div className="text-[#c9956c] text-lg" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                    Debut Single · November 2026
                  </div>
                </div>
                <Play size={20} className="text-[#c9956c]/50" />
              </div>
              <p className="text-[#f0eeec]/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                Our first official single is in production. A powerful introduction to the VELARA sound.
              </p>
            </div>

            <div className="music-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[#f0eeec] text-sm" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                    Coming Soon
                  </div>
                  <div className="text-[#c9956c] text-lg" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                    Debut EP · 2027
                  </div>
                </div>
                <Play size={20} className="text-[#c9956c]/50" />
              </div>
              <p className="text-[#f0eeec]/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                Four original tracks showcasing the range and artistry of VELARA.
              </p>
            </div>
          </div>

          <Link href="/music">
            <button className="reveal-hidden btn-velara flex items-center gap-2">
              Explore Music <ArrowRight size={12} />
            </button>
          </Link>
        </div>
      </section>

      <section ref={galleryRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Gallery</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Visual <span className="text-[#c9956c]">World</span>
            </h2>
          </div>

          <div className="reveal-hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="gallery-item h-[300px] md:h-[400px] overflow-hidden relative">
              <video
                ref={gallery1Ref}
                className="w-full h-full object-cover"
                muted={g1Muted}
                autoPlay
                loop
                playsInline
                preload="metadata"
                poster="https://res.cloudinary.com/anjpczrc/image/upload/v1790581387/copy_of_copy_offf_20260925_100344.jpg"
              >
                <source src={GALLERY_1} type="video/mp4" />
              </video>

              {g1Muted ? (
                <button
                  aria-label="Play with sound"
                  onClick={unmuteGallery1}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 text-white"
                >
                  <Play size={48} />
                </button>
              ) : (
                <button
                  aria-label="Mute"
                  onClick={muteGallery1}
                  className="absolute top-3 right-3 p-2 bg-black/50 rounded text-white"
                >
                  Mute
                </button>
              )}

              <div className="gallery-overlay">
                <Play size={40} className="text-[#c9956c]" />
              </div>
            </div>

            <div className="gallery-item h-[300px] md:h-[400px] overflow-hidden relative">
              <video
                ref={gallery2Ref}
                className="w-full h-full object-cover"
                muted={g2Muted}
                autoPlay
                loop
                playsInline
                preload="metadata"
                poster="https://res.cloudinary.com/anjpczrc/image/upload/v1790581387/copy_of_copy_offf_20260925_100344.jpg"
              >
                <source src={GALLERY_2} type="video/mp4" />
              </video>

              {g2Muted ? (
                <button
                  aria-label="Play with sound"
                  onClick={unmuteGallery2}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 text-white"
                >
                  <Play size={48} />
                </button>
              ) : (
                <button
                  aria-label="Mute"
                  onClick={muteGallery2}
                  className="absolute top-3 right-3 p-2 bg-black/50 rounded text-white"
                >
                  Mute
                </button>
              )}

              <div className="gallery-overlay">
                <Play size={40} className="text-[#c9956c]" />
              </div>
            </div>
          </div>

          <Link href="/gallery">
            <button className="reveal-hidden btn-velara flex items-center gap-2">
              Full Gallery <ArrowRight size={12} />
            </button>
          </Link>
        </div>
      </section>

      <section ref={cta1Ref} className="py-24 md:py-32 bg-[#080808] border-t border-white/5">
        <div className="container text-center">
          <span className="section-label reveal-hidden block mb-6">Work With Us</span>
          <h2
            className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Ready to Create{" "}
            <span className="text-[#c9956c]" style={{ display: "block" }}>
              Something Extraordinary?
            </span>
          </h2>
          <div className="reveal-hidden velara-line mx-auto w-24 mb-10" />
          <p
            className="reveal-hidden text-[#f0eeec]/40 max-w-lg mx-auto mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Whether you're a record label, event organizer, fashion brand, or media company — we'd love to hear from you.
          </p>
          <div className="reveal-hidden flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="btn-velara-filled flex items-center gap-2">
                Get In Touch <ArrowRight size={12} />
              </button>
            </Link>
            <Link href="/media">
              <button className="btn-velara">Press Kit</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
