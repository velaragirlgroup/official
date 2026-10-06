/* VELARA Music Page — Obsidian Empress Design */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Play, Pause, Music2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const MUSIC_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_music_bg-WtMtnLGFSA85b5NP4daeDs.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663654751519/8LJbc7dpqWYxTfrtzQxCU5/velara_hero_main-6VKafWfFYMoFtjwM7Je8kc.webp";

const songs = [
  {
    title: "Debut Single",
    artist: "VELARA",
    duration: "2:13",
    genre: "Progressive Afropop/Dance",
    status: "2026",
  },
  {
    title: "Second Single",
    artist: "VELARA",
    duration: "TBA",
    genre: "Afro House",
    status: "2027",
  },
  {
    title: "Third Single",
    artist: "VELARA",
    duration: "TBA",
    genre: "To Be Announced",
    status: "2027",
  },
];

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com" },
  { name: "Apple Music", url: "https://music.apple.com" },
  { name: "YouTube Music", url: "https://music.youtube.com" },
  { name: "Amazon Music", url: "https://music.amazon.com" },
  { name: "Tidal", url: "https://tidal.com" },
  { name: "SoundCloud", url: "https://soundcloud.com/velaragroup" },
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

export default function Music() {
  const [playing, setPlaying] = useState<string | null>(null);
  const songsRef = useReveal();
  const platformsRef = useReveal();
  const upcomingRef = useReveal();

  return (
    <div className="bg-[#080808] min-h-screen">
      <PageSEO title="Music" description="Explore the music of VELARA — original songs, upcoming releases, and streaming links. Afropop, R&B, and Soul from Namibia." />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={MUSIC_BG} alt="VELARA Music" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080808]/75" />
        <div className="absolute inset-0 hero-gradient-bottom" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container">
            <span className="section-label block mb-4 animate-fade-up">Music</span>
            <h1
              className="font-display font-bold italic text-[#f0eeec] animate-fade-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              The Sound of <span className="text-[#c9956c]">VELARA</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Music Description */}
      <section className="py-16 md:py-24 bg-[#080808] border-b border-white/5">
        <div className="container">
          <div className="max-w-3xl">
            <p
              className="text-[#f0eeec]/50 leading-relaxed text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              VELARA’s sound is built around a progressive Afro sound, bringing together African influences, international inspiration, contemporary production, dance-driven rhythms and our own creative approach. With four distinct voices and a shared vision, we create music that feels fresh, expressive and unmistakably our own. Singing in English and Rukwangali allows us to carry our Namibian identity into our music while connecting with listeners across cultures. As our sound evolves, we continue to explore influences from Africa and around the world while staying connected to who we are and where we come from.
            </p>
          </div>
        </div>
      </section>

      {/* Songs */}
      <section ref={songsRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Releases</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Original <span className="text-[#c9956c]">Music</span>
            </h2>
          </div>

          <div className="space-y-4">
            {songs.map((song, i) => (
              <div
                key={song.title}
                className="reveal-hidden music-card p-6 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-6 flex-1 min-w-0">
                  <button
                    onClick={() => {
                      setPlaying(playing === song.title ? null : song.title);
                      toast.info("Music player coming soon!");
                    }}
                    className="flex-shrink-0 w-12 h-12 border border-[#c9956c]/30 flex items-center justify-center hover:border-[#c9956c] transition-colors"
                  >
                    {playing === song.title ? (
                      <Pause size={16} className="text-[#c9956c]" />
                    ) : (
                      <Play size={16} className="text-[#c9956c]" />
                    )}
                  </button>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="text-[#f0eeec] font-semibold truncate"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {song.title}
                    </h3>
                    <div className="flex gap-4 mt-2 text-xs text-[#f0eeec]/40">
                      <span>{song.genre}</span>
                      <span>{song.duration}</span>
                      <span className="text-[#c9956c]">{song.status}</span>
                    </div>
                  </div>
                </div>
                <Music2 size={20} className="text-[#c9956c]/20 flex-shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section ref={platformsRef} className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="mb-14">
            <span className="section-label reveal-hidden block mb-4">Listen</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Streaming <span className="text-[#c9956c]">Soon</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((platform, i) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-hidden border border-white/5 p-6 text-center hover:border-[#c9956c]/30 transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="text-[#f0eeec]/60 text-sm flex items-center justify-center gap-2 hover:text-[#c9956c] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {platform.name}
                  <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section ref={upcomingRef} className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label reveal-hidden block mb-6">Coming Soon</span>
            <h2
              className="reveal-hidden font-display font-bold italic text-[#f0eeec] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Debut <span className="text-[#c9956c]">EP</span>
            </h2>
            <div className="reveal-hidden velara-line-left w-24 mb-8" />
            <p
              className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              VELARA’s debut EP is set for 2027 and will feature four original tracks exploring different sides of our sound. From progressive Afropop to Afro-house and dance influences, the project is designed to showcase who we are while offering a fresh take on modern African pop. The EP reflects our growth as artists and the sound we want to share with the world.
            </p>
            <p
              className="reveal-hidden text-[#f0eeec]/50 leading-relaxed mt-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              More details, including the EP title, tracklist and release date, will be announced as the project develops.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
