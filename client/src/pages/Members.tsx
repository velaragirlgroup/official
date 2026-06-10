/* VELARA Members Page — Obsidian Empress Design */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Instagram, Twitter } from "lucide-react";

const MEMBER_IMGS = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_member_1-TraWSqfxbKfZqdLiv24qsf.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_member_2-eif7eUjc2Awdn5KE76LwSN.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_member_3-jFCvhFHBRQDGKXFXdN6vqk.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_member_4-kTfKjLkL5FQmJGGVGQH2Yd.webp",
];
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_hero_main-6VKafWfFYMoFtjwM7Je8kc.webp";

const members = [
  {
    name: "Amara",
    role: "Lead Vocalist",
    bio: "Amara is the voice of VELARA. With a 3-octave range and classical training, she brings emotional depth to every performance.",
    talents: ["Vocals", "Songwriting", "Piano"],
    origin: "Windhoek, Namibia",
  },
  {
    name: "Zuri",
    role: "Songwriter & Vocalist",
    bio: "Zuri crafts the stories behind VELARA's music. Her lyrics blend poetic storytelling with contemporary themes.",
    talents: ["Songwriting", "Vocals", "Production"],
    origin: "Swakopmund, Namibia",
  },
  {
    name: "Nadia",
    role: "Performer & Vocalist",
    bio: "Nadia brings energy and charisma to the stage. Her dynamic performances captivate audiences worldwide.",
    talents: ["Performance", "Vocals", "Choreography"],
    origin: "Walvis Bay, Namibia",
  },
  {
    name: "Leila",
    role: "Dancer & Vocalist",
    bio: "Leila's movement vocabulary is rooted in African dance traditions. She adds visual artistry to VELARA's sound.",
    talents: ["Dance", "Vocals", "Visual Art"],
    origin: "Oshakati, Namibia",
  },
];

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

export default function Members() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const gridRef = useReveal();
  const profilesRef = useReveal();

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Members" description="Meet Amara, Zuri, Nadia, and Leila — the four talented members of VELARA, a modern girl group from Namibia." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMG} alt="VELARA Members" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">The Members</span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              Meet <span className="text-[#c9956c]">VELARA</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section ref={gridRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {members.map((member, i) => (
              <div
                key={member.name}
                className="reveal-hidden member-card relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
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
        </div>
      </section>

      {/* Member Profiles */}
      <section ref={profilesRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="reveal-hidden mb-16 last:mb-0 border-b border-white/5 last:border-b-0 pb-16 last:pb-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <img src={MEMBER_IMGS[i]} alt={member.name} className="w-full h-[400px] object-cover md:col-span-1" />
                <div className="md:col-span-2">
                  <h2
                    className="font-display italic text-[#f0eeec] mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.5rem",
                    }}
                  >
                    {member.name}
                  </h2>
                  <div
                    className="text-[#c9956c] text-sm mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 300 }}
                  >
                    {member.role}
                  </div>
                  <div className="velara-line-left w-16 mb-6" />
                  <p
                    className="text-[#f0eeec]/50 leading-relaxed mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {member.bio}
                  </p>

                  <div className="mb-8">
                    <div
                      className="text-[#c9956c] text-xs mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.3em", fontWeight: 200 }}
                    >
                      TALENTS & SKILLS
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {member.talents.map((talent) => (
                        <span
                          key={talent}
                          className="px-4 py-2 border border-[#c9956c]/30 text-[#f0eeec]/70 text-xs"
                          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                        >
                          {talent}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div
                      className="text-[#c9956c] text-xs mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.3em", fontWeight: 200 }}
                    >
                      FROM
                    </div>
                    <div
                      className="text-[#f0eeec]/60"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {member.origin}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="social-icon">
                      <Instagram size={16} />
                    </a>
                    <a href="#" className="social-icon">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
