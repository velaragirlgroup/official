/* VELARA Navigation Component — Obsidian Empress Design */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Members", href: "/members" },
    { label: "Music", href: "/music" },
    { label: "Gallery", href: "/gallery" },
    { label: "Media & Press", href: "/media" },
    { label: "Fan Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div
              className="text-[#f0eeec] font-display font-bold italic text-xl cursor-pointer hover:text-[#c9956c] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              VELARA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <button
              className="hidden lg:block btn-velara-filled text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BOOK VELARA
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#f0eeec] hover:text-[#c9956c] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#080808]/95 backdrop-blur-sm">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      isActive(item.href)
                        ? "text-[#c9956c] border-l-2 border-[#c9956c]"
                        : "text-[#f0eeec]/70 hover:text-[#f0eeec]"
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em" }}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-white/5">
                <Link href="/contact">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn-velara-filled w-full text-xs"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    BOOK VELARA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
