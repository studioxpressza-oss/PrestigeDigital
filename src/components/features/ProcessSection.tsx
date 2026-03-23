import { useEffect, useRef } from "react";
import { Search, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start by understanding your business, your goals, and your target audience. This ensures every design decision is rooted in strategy — not guesswork.",
    duration: "1–2 Days",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "Our designers craft a bespoke visual identity for your website. You'll review and approve the design before a single line of code is written.",
    duration: "3–5 Days",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "We bring the approved design to life with clean, fast code. Every website is built mobile-first, SEO-ready, and optimised for performance.",
    duration: "5–10 Days",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "After final revisions and your sign-off, we launch your website. You're then handed over full access and we provide a smooth handover session.",
    duration: "1–2 Days",
  },
];

const ProcessSection = () => {
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
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-black py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
            <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
              How We Work
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
          </div>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            From Brief to
            <br />
            <span style={{ color: "hsl(43,62%,52%)" }}>Brilliant Website</span>
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-white/40 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            A streamlined, transparent process — so you always know exactly where your project stands.
          </p>
        </div>

        {/* Steps — Desktop timeline */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div
            className="absolute top-[3.25rem] left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px"
            style={{ backgroundColor: "hsl(43,62%,52%)", opacity: 0.3 }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center text-center px-6"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number circle */}
                <div
                  className="relative w-[104px] h-[104px] flex items-center justify-center mb-8 flex-shrink-0"
                  style={{ border: "1px solid hsl(43,62%,52%)" }}
                >
                  <span
                    className="font-black text-3xl leading-none"
                    style={{ color: "hsl(43,62%,52%)" }}
                  >
                    {step.number}
                  </span>
                  {/* Corner dot */}
                  <div
                    className="absolute -top-1.5 -right-1.5 w-3 h-3"
                    style={{ backgroundColor: "hsl(43,62%,52%)" }}
                  />
                </div>

                <Icon size={20} className="mb-4" style={{ color: "hsl(43,62%,52%)" }} />

                <h3 className="font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{step.description}</p>

                <div
                  className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5"
                  style={{ border: "1px solid hsl(43,62%,52%)", color: "hsl(43,62%,52%)" }}
                >
                  {step.duration}
                </div>
              </div>
            );
          })}
        </div>

        {/* Steps — Mobile stacked */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div
                key={step.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 flex gap-6 relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Left: number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{
                      border: "1px solid hsl(43,62%,52%)",
                      color: "hsl(43,62%,52%)",
                    }}
                  >
                    {step.number}
                  </div>
                  {!isLast && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{ backgroundColor: "hsl(43,62%,52%)", opacity: 0.3, minHeight: "40px" }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10">
                  <Icon size={18} className="mb-2" style={{ color: "hsl(43,62%,52%)" }} />
                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-3">{step.description}</p>
                  <div
                    className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 inline-block"
                    style={{ border: "1px solid hsl(43,62%,52%)", color: "hsl(43,62%,52%)" }}
                  >
                    {step.duration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
