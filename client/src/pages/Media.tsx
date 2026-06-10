/* VELARA Media & Press Page — Obsidian Empress Design */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Download, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_about_image-UBFngBNUeszp4fnAGUQSdu.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_hero_main-6VKafWfFYMoFtjwM7Je8kc.webp";

const articles = [
  {
    title: "VELARA: The Future of African Pop",
    publication: "Music Industry Weekly",
    date: "Coming Soon",
    excerpt: "An in-depth feature on VELARA's vision and impact on the global music scene.",
  },
  {
    title: "Four Voices, One Vision: Inside VELARA",
    publication: "African Artists Magazine",
    date: "Coming Soon",
    excerpt: "An exclusive interview with the members of VELARA about their journey and aspirations.",
  },
  {
    title: "Namibia's Rising Stars: VELARA",
    publication: "Global Music News",
    date: "Coming Soon",
    excerpt: "How VELARA is putting Namibia on the map in the international music industry.",
  },
];

const pressKitItems = [
  { name: "VELARA Press Kit (PDF)", size: "2.4 MB", type: "PDF" },
  { name: "High-Resolution Photos", size: "156 MB", type: "ZIP" },
  { name: "Band Biography", size: "45 KB", type: "PDF" },
  { name: "Logo & Brand Assets", size: "8.2 MB", type: "ZIP" },
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

export default function Media() {
  const articlesRef = useReveal();
  const kitRef = useReveal();
  const contactRef = useReveal();

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Media & Press" description="Press coverage, interviews, articles, and downloadable media assets for VELARA — Namibia's premier girl group." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={ABOUT_IMG} alt="VELARA Media" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">Press</span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              Media & <span className="text-[#c9956c]">Press</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section ref={articlesRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Coverage</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              In the <span className="text-[#c9956c]">Press</span>
            </h2>
          </div>

          <div className="space-y-6">
            {articles.map((article, i) => (
              <div
                key={article.title}
                className="reveal-hidden border border-white/5 p-8 hover:border-[#c9956c]/20 transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3
                      className="text-[#f0eeec] text-lg mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                    >
                      {article.title}
                    </h3>
                    <div className="flex gap-4 text-xs text-[#f0eeec]/40 mb-4">
                      <span>{article.publication}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <ExternalLink size={20} className="text-[#c9956c]/40 flex-shrink-0" />
                </div>
                <p
                  className="text-[#f0eeec]/50 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section ref={kitRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Resources</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Press <span className="text-[#c9956c]">Kit</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressKitItems.map((item, i) => (
              <button
                key={item.name}
                onClick={() => toast.info(`${item.name} download coming soon!`)}
                className="reveal-hidden border border-white/5 p-6 text-left hover:border-[#c9956c]/30 hover:bg-[#1a1a1a] transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3
                      className="text-[#f0eeec] font-semibold mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.name}
                    </h3>
                    <div
                      className="text-[#f0eeec]/40 text-xs"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em", fontWeight: 200 }}
                    >
                      {item.size} · {item.type}
                    </div>
                  </div>
                  <Download size={20} className="text-[#c9956c]/50 flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section ref={contactRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label reveal-hidden block mb-6">Get in Touch</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Press & Media <span className="text-[#c9956c]">Inquiries</span>
            </h2>
            <div className="reveal-hidden velara-line-left w-24 mb-8" />
            <p
              className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              For press inquiries, interview requests, or media partnerships, please reach out to our team. We're excited to share VELARA's story with the world.
            </p>
            <Link href="/contact">
              <button className="reveal-hidden btn-velara-filled flex items-center gap-2">
                Contact Press Team <ArrowRight size={12} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
