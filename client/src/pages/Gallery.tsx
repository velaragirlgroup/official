/* VELARA Gallery Page — Obsidian Empress Design */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { X, ZoomIn } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_hero_main-6VKafWfFYMoFtjwM7Je8kc.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_about_image-UBFngBNUeszp4fnAGUQSdu.webp";

const galleryItems = [
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790507991/copy_of_20260925_095531.jpg", category: "Editorial", title: "VELARA Group Portrait" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790504267/IMG_9618_1_1_1_2.jpg", category: "Behind the Scenes", title: "Studio Session" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790508638/20260925_100344.jpg", category: "Fashion", title: "Fashion Editorial" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790504299/20260925_085814.jpg", category: "Performance", title: "Live Performance" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790508404/20260925_042343.jpg", category: "Editorial", title: "Individual Portraits" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790504358/IMG_9640_1.jpg", category: "Lifestyle", title: "Candid Moments" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790504341/IMG_9635_1.jpg", category: "Portrait", title: "Portrait 7" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790504322/20260925_053959.jpg", category: "Portrait", title: "Portrait 8" },
  { img: "https://res.cloudinary.com/anjpczrc/image/upload/v1790504335/IMG_9634.jpg", category: "Fashion", title: "Fashion 9" },
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

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useReveal();

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Gallery" description="Browse the official VELARA photo gallery — editorial portraits, group shots, behind-the-scenes, and fashion imagery." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={ABOUT_IMG} alt="VELARA Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">Gallery</span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              Visual <span className="text-[#c9956c]">World</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="reveal-hidden gallery-item relative h-[250px] md:h-[350px] overflow-hidden group cursor-pointer"
                style={{ transitionDelay: `${i * 50}ms` }}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="gallery-overlay">
                  <ZoomIn size={32} className="text-[#c9956c]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#080808] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="text-[#c9956c] text-xs"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 200 }}
                  >
                    {item.category}
                  </div>
                  <div
                    className="text-[#f0eeec] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-[#f0eeec] hover:text-[#c9956c] transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-4xl w-full">
            <img
              src={galleryItems[lightboxIndex].img}
              alt={galleryItems[lightboxIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-6 text-center">
              <div
                className="text-[#c9956c] text-sm mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 200 }}
              >
                {galleryItems[lightboxIndex].category}
              </div>
              <div
                className="text-[#f0eeec] text-lg"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {galleryItems[lightboxIndex].title}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)}
                className="btn-velara"
              >
                Previous
              </button>
              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryItems.length)}
                className="btn-velara"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
