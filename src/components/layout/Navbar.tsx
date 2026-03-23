import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border-2 border-gold-DEFAULT flex items-center justify-center">
            <span className="text-gold-DEFAULT font-black text-sm tracking-widest" style={{ color: "hsl(43,62%,52%)" }}>P</span>
          </div>
          <span className="text-white font-bold text-lg tracking-[0.2em] uppercase">
            Prestige<span style={{ color: "hsl(43,62%,52%)" }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="ml-4 px-6 py-2.5 text-sm font-semibold tracking-widest uppercase text-black transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "hsl(43,62%,52%)" }}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 px-6 py-3 text-sm font-semibold tracking-widest uppercase text-black w-full"
            style={{ backgroundColor: "hsl(43,62%,52%)" }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
