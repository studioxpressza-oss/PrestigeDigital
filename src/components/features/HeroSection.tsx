import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100");
            e.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      ref={ref}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Gold vertical accent line */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] opacity-60"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(43,62%,52%), transparent)" }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-8 flex items-center gap-4"
          >
            <div className="h-px w-12 opacity-60" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
            <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
              Premium Web Design Agency
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-white font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            Websites That
            <br />
            <span style={{ color: "hsl(43,62%,52%)" }}>Bring You</span>
            <br />
            Customers.
          </h1>

          {/* Subheadline */}
          <p
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-white/60 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl"
          >
            We build high-converting websites for businesses that want to grow — crafted to impress, engineered to perform.
          </p>

          {/* CTA Buttons */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#pricing")}
              className="px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase text-black transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100"
              style={{ backgroundColor: "hsl(43,62%,52%)" }}
            >
              View Packages
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase text-white border border-white/30 hover:border-white/80 hover:bg-white/5 transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Trust stats */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "R25K+", label: "Top Projects" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 tracking-wide uppercase leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
