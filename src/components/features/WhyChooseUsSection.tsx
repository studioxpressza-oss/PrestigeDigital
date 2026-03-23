import { useEffect, useRef } from "react";
import { Paintbrush, Smartphone, TrendingUp, Zap } from "lucide-react";

const reasons = [
  {
    icon: Paintbrush,
    title: "Clean, Modern Design",
    description:
      "Every pixel is intentional. We design with purpose — creating websites that feel premium and represent your brand at the highest level.",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Optimization",
    description:
      "Over 70% of traffic is mobile. We build for mobile first, ensuring flawless experiences across every screen size and device.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    description:
      "Beautiful means nothing without results. Every design decision is made with one goal: turning your visitors into paying customers.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Fast Loading Speed",
    description:
      "Speed is everything online. Our websites are optimized for lightning-fast load times, keeping users engaged and Google happy.",
    number: "04",
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="bg-black py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-4 mb-5">
              <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
                The Prestige Difference
              </span>
            </div>
            <h2
              className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Why Choose
              <br />
              <span style={{ color: "hsl(43,62%,52%)" }}>Prestige Digital</span>
            </h2>
          </div>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-white/40 text-sm leading-relaxed max-w-xs">
            We don't just build websites. We build growth engines for your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-black p-8 lg:p-10 group border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-black text-5xl mb-6 opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: "hsl(43,62%,52%)" }}>
                  {reason.number}
                </div>
                <div className="mb-5">
                  <Icon size={22} style={{ color: "hsl(43,62%,52%)" }} />
                </div>
                <h3 className="font-bold text-white text-base mb-3 leading-snug">{reason.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
