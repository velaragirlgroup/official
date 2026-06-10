/* VELARA 404 Page */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#080808] min-h-screen flex items-center justify-center">
      <div className="container text-center py-24">
        <div
          className="text-[#c9956c] font-display font-bold italic mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem" }}
        >
          404
        </div>
        <h1
          className="text-[#f0eeec] font-display font-bold italic mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem" }}
        >
          Page Not Found
        </h1>
        <p
          className="text-[#f0eeec]/50 mb-8 max-w-md mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          The page you're looking for doesn't exist. Let's get you back to VELARA.
        </p>
        <Link href="/">
          <button className="btn-velara-filled flex items-center gap-2 mx-auto">
            Return Home <ArrowRight size={12} />
          </button>
        </Link>
      </div>
    </div>
  );
}
