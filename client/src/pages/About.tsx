/* VELARA About Page — Obsidian Empress Design */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_about_image-UBFngBNUeszp4fnAGUQSdu.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_hero_main-6VKafWfFYMoFtjwM7Je8kc.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    el.querySelectorAll(".reveal-hidden").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const storyRef = useReveal();
  const valuesRef = useReveal();
  const inspirationRef = useReveal();

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="About" description="Learn the story of VELARA — four young women from Namibia who dared to dream beyond borders, combining African culture with international artistry." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={ABOUT_IMG} alt="VELARA About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">About VELARA</span>
            <h1 className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Our <span className="text-[#c9956c]">Story</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img src={HERO_IMG} alt="VELARA Story" className="reveal-hidden w-full h-[500px] object-cover" />
            <div>
              <span className="section-label reveal-hidden block mb-6">Our Journey</span>
              <h2 className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Four Voices, <span className="text-[#c9956c]">One Dream</span>
              </h2>
              <div className="reveal-hidden velara-line-left w-24 mb-8" />
              <p className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                VELARA is a four-member afropop girl group from Namibia founded with a shared vision: to create world-class music while celebrating the identity and creativity of a new generation of African artists. 
                
                Inspired by a global sound and driven by originality, we combine contemporary production, expressive performances, and meaningful storytelling to create music that resonates across cultures.
              </p>
              <p className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                As independent artists, we are building VELARA step by step—from our first songs to our first performances—with a commitment to growth, authenticity, and artistic excellence. VELARA represents confidence, unity, elegance, and ambition—qualities that define both our music and our identity as a group.
              </p>
              <p className="reveal-hidden text-[#f0eeec]/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                Every song, performance, and visual is an opportunity to grow as artists and connect with audiences around the world. We believe great music has no borders, and we are committed to building a career that reflects creativity, professionalism, and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section ref={valuesRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Our Foundation</span>
            <h2 className="reveal-hidden font-display font-bold italic text-[#f0eeec]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Vision & <span className="text-[#c9956c]">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Elegance", desc: "We carry ourselves with grace and sophistication in every aspect of our artistry." },
              { title: "Authenticity", desc: "Our music and message come from the heart. We never compromise our truth." },
              { title: "Empowerment", desc: "We inspire women and youth across Africa to dream boldly and pursue excellence." },
            ].map((item, i) => (
              <div key={item.title} className="reveal-hidden border border-white/5 p-8 hover:border-[#c9956c]/20 transition-colors" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-display italic text-[#c9956c] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}>
                  {item.title}
                </h3>
                <p className="text-[#f0eeec]/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration */}
      <section ref={inspirationRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label reveal-hidden block mb-6">Our Message</span>
            <h2 className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Inspiration & <span className="text-[#c9956c]">Impact</span>
            </h2>
            <div className="reveal-hidden velara-line-left w-24 mb-8" />
            <p className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              We are inspired by the strength of African women, the richness of our cultures, and the artists who have paved the way before us. From Namibian female groups to Southern African icon Brenda Fassie and East African artists such as Vanessa Mdee, their creativity reminds us that our voices can reach beyond borders.
            </p>
            <p className="reveal-hidden text-[#f0eeec]/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Through our music, we hope to inspire young people across Africa and the diaspora to believe in themselves, pursue their passions, and create without limits.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
