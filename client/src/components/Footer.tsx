/* VELARA Footer Component — Obsidian Empress Design */

import { Link } from "wouter";
import { Instagram, Twitter, Youtube, Facebook, Music2 } from "lucide-react";

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14.5 3c.5 1.5 1.6 2.6 3.2 3.1v2.7a6.9 6.9 0 0 1-3.2-1v7.6a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v2.8a3 3 0 1 0 1.8 2.7V3h3.5Z" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5">
      <div className="container py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3
              className="text-[#f0eeec] font-display font-bold italic text-lg mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              VELARA
            </h3>
            <p
              className="text-[#f0eeec]/40 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              An Afro girl group with four voices, one vision, and a sound of our own.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#c9956c] text-xs mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 300 }}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Members", href: "/members" },
                { label: "Music", href: "/music" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      className="text-[#f0eeec]/50 text-sm hover:text-[#c9956c] transition-colors cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4
              className="text-[#c9956c] text-xs mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 300 }}
            >
              EXPLORE
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "Media & Press", href: "/media" },
                { label: "Fan Community", href: "/community" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      className="text-[#f0eeec]/50 text-sm hover:text-[#c9956c] transition-colors cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-[#c9956c] text-xs mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em", fontWeight: 300 }}
            >
              FOLLOW
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/velaragirlgroup" },
                { icon: Twitter, label: "Twitter", url: "https://x.com/velaragirlgroup" },
                { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@velaragirlgroup" },
                { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/velaragroup" },
                { icon: Music2, label: "Spotify", url: "https://open.spotify.com" },
                { icon: TikTokIcon, label: "TikTok", url: "https://www.tiktok.com/@velaragroup" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="social-icon"
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[#f0eeec]/30 text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              © {currentYear} VELARA. All rights reserved. | Namibia × Africa × World
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[#f0eeec]/30 text-xs hover:text-[#c9956c] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[#f0eeec]/30 text-xs hover:text-[#c9956c] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
