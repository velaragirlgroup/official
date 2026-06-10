/* VELARA Fan Community Page — Obsidian Empress Design */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Heart, Send, Star, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_hero_main-6VKafWfFYMoFtjwM7Je8kc.webp";
const GALLERY_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_gallery_2-2qRwmzBGdiVbhgh4BjDwiy.webp";

const fanMessages = [
  {
    name: "Amahle K.",
    location: "Johannesburg, SA",
    message: "VELARA is exactly what Africa needed. Four queens representing us on the world stage. I'm so proud!",
    initials: "AK",
  },
  {
    name: "Precious N.",
    location: "Windhoek, Namibia",
    message: "Seeing Namibian girls shine like this gives me so much hope. VELARA, you are our pride!",
    initials: "PN",
  },
  {
    name: "Fatima O.",
    location: "Lagos, Nigeria",
    message: "The elegance, the talent, the vision — VELARA is not just a group, they're a movement. Can't wait for the music!",
    initials: "FO",
  },
  {
    name: "Zanele M.",
    location: "Cape Town, SA",
    message: "I discovered VELARA last week and I'm already obsessed. The aesthetic alone is everything!",
    initials: "ZM",
  },
  {
    name: "Kefilwe B.",
    location: "Gaborone, Botswana",
    message: "Southern Africa is rising and VELARA is leading the way. So beautiful, so talented, so powerful!",
    initials: "KB",
  },
  {
    name: "Yemi A.",
    location: "London, UK",
    message: "As an African living abroad, VELARA makes me feel represented and proud. This is the global Africa I know!",
    initials: "YA",
  },
];

const merchandise = [
  { name: "VELARA Signature Tee", price: "Coming Soon", category: "Apparel" },
  { name: "VELARA Logo Hoodie", price: "Coming Soon", category: "Apparel" },
  { name: "VELARA Phone Case", price: "Coming Soon", category: "Accessories" },
  { name: "VELARA Poster Set", price: "Coming Soon", category: "Collectibles" },
  { name: "VELARA Tote Bag", price: "Coming Soon", category: "Accessories" },
  { name: "VELARA Debut EP", price: "Coming Soon", category: "Music" },
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

export default function Community() {
  const [email, setEmail] = useState("");
  const [fanName, setFanName] = useState("");
  const [fanMessage, setFanMessage] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const newsletterRef = useReveal();
  const messagesRef = useReveal();
  const merchRef = useReveal();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubscribing(false);
    toast.success("You're on the list!", {
      description: "Welcome to the VELARA family. We'll keep you updated.",
    });
    setEmail("");
  };

  const handleFanMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fanName || !fanMessage) return;
    setSendingMessage(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSendingMessage(false);
    toast.success("Message sent to VELARA!", {
      description: "Thank you for your love and support.",
    });
    setFanName("");
    setFanMessage("");
  };

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Fan Community" description="Join the VELARA family. Sign up for the newsletter, send fan messages, and stay connected with Namibia's most exciting girl group." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={GALLERY_2} alt="VELARA Fan Community" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">Fan Community</span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              The <span className="text-[#c9956c]">VELARA</span> Family
            </h1>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section ref={newsletterRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label reveal-hidden block mb-6">Stay Connected</span>
              <h2
                className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Join the <span className="text-[#c9956c]">Newsletter</span>
              </h2>
              <div className="reveal-hidden velara-line-left w-24 mb-8" />
              <p
                className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-10"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Be the first to know about new music, tour dates, exclusive content, merchandise drops, and behind-the-scenes moments from VELARA.
              </p>

              <form onSubmit={handleSubscribe} className="reveal-hidden space-y-6">
                <div>
                  <label className="section-label block mb-3">Email Address</label>
                  <input
                    type="email"
                    className="velara-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-velara-filled flex items-center gap-2"
                  disabled={subscribing}
                >
                  {subscribing ? "Subscribing..." : (
                    <>
                      <Heart size={12} />
                      Join the Family
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="reveal-hidden">
              <img
                src={HERO_IMG}
                alt="VELARA Community"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fan Messages */}
      <section ref={messagesRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Fan Love</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              What Fans Are <span className="text-[#c9956c]">Saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {fanMessages.map((msg, i) => (
              <div
                key={msg.name}
                className="reveal-hidden border border-white/5 p-6 hover:border-[#c9956c]/15 transition-colors duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full bg-[#c9956c]/20 flex items-center justify-center flex-shrink-0"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#c9956c",
                    }}
                  >
                    {msg.initials}
                  </div>
                  <div>
                    <div
                      className="text-[#f0eeec]/80 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                    >
                      {msg.name}
                    </div>
                    <div
                      className="text-[#f0eeec]/25 text-xs"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em", fontWeight: 200 }}
                    >
                      {msg.location}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={10} className="text-[#c9956c]" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p
                  className="text-[#f0eeec]/50 text-sm leading-relaxed italic"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  "{msg.message}"
                </p>
              </div>
            ))}
          </div>

          {/* Send a Message Form */}
          <div className="reveal-hidden border border-white/5 p-8 md:p-12 max-w-2xl">
            <h3
              className="font-display italic text-[#f0eeec] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem" }}
            >
              Send VELARA a <span className="text-[#c9956c]">Message</span>
            </h3>
            <form onSubmit={handleFanMessage} className="space-y-6">
              <div>
                <label className="section-label block mb-3">Your Name</label>
                <input
                  type="text"
                  className="velara-input"
                  placeholder="Your Name"
                  value={fanName}
                  onChange={(e) => setFanName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-3">Your Message</label>
                <textarea
                  className="velara-input resize-none"
                  placeholder="Write your message to VELARA..."
                  rows={4}
                  value={fanMessage}
                  onChange={(e) => setFanMessage(e.target.value)}
                  required
                  style={{ borderBottom: "1px solid rgba(240,238,236,0.2)" }}
                />
              </div>
              <button
                type="submit"
                className="btn-velara flex items-center gap-2"
                disabled={sendingMessage}
              >
                {sendingMessage ? "Sending..." : (
                  <>
                    <Send size={12} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Merchandise */}
      <section ref={merchRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Merchandise</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              VELARA <span className="text-[#c9956c]">Store</span>
            </h2>
            <p
              className="reveal-hidden text-[#f0eeec]/40 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Official VELARA merchandise is coming soon. Join the newsletter to be the first to know when the store opens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {merchandise.map((item, i) => (
              <div
                key={item.name}
                className="reveal-hidden border border-white/5 p-6 flex flex-col items-center gap-3 hover:border-[#c9956c]/20 transition-all duration-300 group cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => toast.info("VELARA Store coming soon!", { description: "Join the newsletter to be notified." })}
              >
                <ShoppingBag size={20} className="text-[#c9956c]/30 group-hover:text-[#c9956c]/60 transition-colors" />
                <div className="text-center">
                  <div
                    className="text-[#f0eeec]/60 text-xs mb-1 group-hover:text-[#f0eeec]/80 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="text-[#c9956c]/40 text-xs"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em", fontWeight: 200 }}
                  >
                    {item.price}
                  </div>
                </div>
                <span
                  className="text-[#f0eeec]/15 text-xs"
                  style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em", fontWeight: 200 }}
                >
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
