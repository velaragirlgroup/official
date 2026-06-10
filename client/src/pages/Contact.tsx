/* VELARA Contact Page — Obsidian Empress Design */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Instagram, Twitter, Youtube, Facebook, Music2, Send } from "lucide-react";
import { toast } from "sonner";

const MUSIC_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_music_bg-WtMtnLGFSA85b5NP4daeDs.webp";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useReveal();
  const socialRef = useReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast.success("Message sent!", {
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", company: "", type: "", message: "" });
  };

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Contact" description="Get in touch with VELARA for bookings, press inquiries, brand collaborations, and more. Based in Namibia, available worldwide." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={MUSIC_BG} alt="Contact VELARA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/80" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">Get In Touch</span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              Let's <span className="text-[#c9956c]">Connect</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label reveal-hidden block mb-6">Contact Info</span>
              <h2
                className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Business <span className="text-[#c9956c]">Inquiries</span>
              </h2>
              <div className="reveal-hidden velara-line-left w-24 mb-8" />

              <div className="space-y-8">
                {[
                  { title: "Booking & Tours", desc: "Event appearances, concert bookings, festival performances" },
                  { title: "Press & Media", desc: "Interviews, features, press kits, media partnerships" },
                  { title: "Brand Collaborations", desc: "Fashion, lifestyle, and corporate partnerships" },
                  { title: "Record Labels", desc: "Music distribution, recording contracts, label inquiries" },
                ].map((item, i) => (
                  <div key={item.title} className="reveal-hidden" style={{ transitionDelay: `${i * 60}ms` }}>
                    <h3
                      className="text-[#c9956c] text-sm mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 300 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#f0eeec]/50 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-hidden border border-white/5 p-8 md:p-12">
              <h3
                className="font-display italic text-[#f0eeec] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem" }}
              >
                Send us a <span className="text-[#c9956c]">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="section-label block mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="velara-input"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="section-label block mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="velara-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="section-label block mb-3">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    className="velara-input"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="section-label block mb-3">Inquiry Type *</label>
                  <select
                    name="type"
                    className="velara-input"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="booking">Booking & Tours</option>
                    <option value="press">Press & Media</option>
                    <option value="collaboration">Brand Collaboration</option>
                    <option value="label">Record Label</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="section-label block mb-3">Message *</label>
                  <textarea
                    name="message"
                    className="velara-input resize-none"
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ borderBottom: "1px solid rgba(240,238,236,0.2)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-velara-filled flex items-center gap-2 w-full justify-center"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : (
                    <>
                      <Send size={12} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section ref={socialRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container text-center">
          <span className="section-label reveal-hidden block mb-6">Follow</span>
          <h2
            className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Connect on <span className="text-[#c9956c]">Social</span>
          </h2>
          <div className="reveal-hidden velara-line mx-auto w-24 mb-12" />

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Instagram", icon: Instagram, url: "#" },
              { name: "Twitter", icon: Twitter, url: "#" },
              { name: "YouTube", icon: Youtube, url: "#" },
              { name: "Facebook", icon: Facebook, url: "#" },
              { name: "Spotify", icon: Music2, url: "#" },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info(`${social.name} links coming soon!`);
                  }}
                  className="reveal-hidden social-icon"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  title={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
