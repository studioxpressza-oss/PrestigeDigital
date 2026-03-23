import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border-2 flex items-center justify-center" style={{ borderColor: "hsl(43,62%,52%)" }}>
                <span className="font-black text-sm" style={{ color: "hsl(43,62%,52%)" }}>P</span>
              </div>
              <span className="font-bold text-lg tracking-[0.2em] uppercase">
                Prestige<span style={{ color: "hsl(43,62%,52%)" }}>.</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              We build premium websites that turn visitors into customers. Based in South Africa, serving businesses nationwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: <Instagram size={16} />, href: "https://www.instagram.com/prestigedigital.co/" },
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/steven-steyn-081b333b7" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Process", href: "#process" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Get Started", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm tracking-wide transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0836119916"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-200 group"
              >
                <Phone size={15} className="flex-shrink-0" style={{ color: "hsl(43,62%,52%)" }} />
                083 611 9916
              </a>
              <a
                href="mailto:PrestigeDigitalAgency@outlook.com"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-200 break-all"
              >
                <Mail size={15} className="flex-shrink-0" style={{ color: "hsl(43,62%,52%)" }} />
                PrestigeDigitalAgency@outlook.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest">
            © {new Date().getFullYear()} PRESTIGE DIGITAL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-white/20 text-xs tracking-wide">
            Premium Web Design · South Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
