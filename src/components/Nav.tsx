/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Angebot", href: "#offerings" },
  { name: "Behandlung", href: "#process" },
  { name: "Buchen", href: "#buchung" },
  { name: "Über mich", href: "#about" },
  { name: "Kontakt", href: "#contact" },
];

type NavProps = {
  /** Prefix for the in-page anchors. "" on the homepage, "/" on sub-pages. */
  base?: string;
  /** Force the opaque style on pages without a hero image behind the nav. */
  solid?: boolean;
};

export default function Nav({ base = "", solid = false }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (solid) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [solid]);

  const opaque = solid || scrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        opaque ? "bg-cream/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href={`${base}#home`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-2xl font-serif font-medium tracking-tight transition-colors ${
            opaque ? "text-rose" : "text-rose-dark drop-shadow-sm"
          }`}
        >
          Stella Anastasio
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`${base}${link.href}`}
              className={`text-sm uppercase tracking-widest font-bold transition-all hover:text-rose relative group ${
                opaque ? "text-rose-dark" : "text-rose-dark drop-shadow-sm"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={`${base}#buchung`}
            className="bg-rose text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-rose/90 transition-all shadow-lg shadow-rose/20"
          >
            Termin Buchen
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${opaque ? "text-rose" : "text-rose-dark"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-cream border-t border-stone-100 p-6 md:hidden shadow-2xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`${base}${link.href}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-serif text-stone-800 hover:text-rose py-2 border-b border-stone-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`${base}#buchung`}
              onClick={() => setIsMenuOpen(false)}
              className="bg-rose text-white px-6 py-4 rounded-xl text-center font-bold uppercase tracking-widest mt-4"
            >
              Termin Buchen
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
