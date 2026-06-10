/* VELARA Footer Component — Obsidian Empress Design */

import { Link } from "wouter";
import { Instagram, Twitter, Youtube, Facebook, Music2 } from "lucide-react";

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
              Four voices. One vision. A modern girl group from Namibia with an international vision.
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
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
                { icon: Facebook, label: "Facebook" },
                { icon: Music2, label: "Spotify" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="social-icon"
                    title={social.label}
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
