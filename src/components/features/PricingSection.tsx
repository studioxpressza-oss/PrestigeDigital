import { useEffect, useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "R5,000",
    subtitle: "Perfect for small businesses starting out",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1–2 revisions included",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "R9,000",
    subtitle: "Our most popular — for growing businesses",
    features: [
      "Up to 10 pages",
      "Custom design & branding",
      "Mobile + tablet optimized",
      "Advanced SEO setup",
      "WhatsApp integration",
      "2–3 revisions included",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Custom",
    price: "Custom",
    subtitle: "Tailored solutions for ambitious brands",
    features: [
      "Fully custom design",
      "Advanced functionality",
      "E-commerce & booking systems",
      "Ongoing support & maintenance",
      "Unlimited revisions",
      "Priority turnaround",
    ],
    featured: false,
    cta: "Let's Talk",
  },
];

const PricingSection = () => {
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

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-white py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
            <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
              Investment
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
          </div>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-black leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Transparent Pricing
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-black/40 text-base mt-4 max-w-md mx-auto leading-relaxed">
            No hidden fees. No surprises. Just premium websites at clear, honest prices.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col p-10 lg:p-12 relative ${
                plan.featured
                  ? "bg-black text-white"
                  : "bg-white text-black border-black/10"
              } ${i < plans.length - 1 ? "border-r border-black/10" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.featured && (
                <div
                  className="absolute top-0 right-0 px-4 py-2 text-[10px] font-bold tracking-[0.3em] uppercase text-black flex items-center gap-1"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                >
                  <Star size={10} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <p className={`text-xs font-semibold tracking-[0.3em] uppercase mb-3 ${plan.featured ? "text-white/40" : "text-black/40"}`}>
                  {plan.name} Plan
                </p>
                <div
                  className="font-black leading-none mb-3"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    color: plan.featured ? "hsl(43,62%,52%)" : "hsl(43,62%,52%)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </div>
                <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/50" : "text-black/40"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className={`h-px mb-8 ${plan.featured ? "bg-white/10" : "bg-black/10"}`} />

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "hsl(43,62%,52%)" }}
                    >
                      <Check size={11} color="#000" strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-white/70" : "text-black/60"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleContact}
                className={`w-full py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:opacity-85 hover:scale-[1.01] active:scale-100 ${
                  plan.featured
                    ? "text-black"
                    : "text-white bg-black hover:bg-black/80"
                }`}
                style={plan.featured ? { backgroundColor: "hsl(43,62%,52%)" } : {}}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 text-center text-black/30 text-xs tracking-wide">
          All prices are quoted in South African Rands (ZAR) · Deposit required to begin
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
