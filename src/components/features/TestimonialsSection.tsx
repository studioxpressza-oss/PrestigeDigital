import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thabo M.",
    business: "Luxury Hair Studio, Johannesburg",
    avatar: "TM",
    rating: 5,
    quote:
      "Prestige Digital completely transformed our online presence. Within two weeks of launching our new website, we had 3x more enquiries. The design is stunning — our clients always compliment it.",
  },
  {
    name: "Lerato K.",
    business: "Financial Consulting Firm, Pretoria",
    avatar: "LK",
    rating: 5,
    quote:
      "Professional, fast, and absolutely beautiful. They understood exactly what we needed and delivered beyond our expectations. Our website now positions us as the premium brand we truly are.",
  },
  {
    name: "Sipho D.",
    business: "Construction Company, Durban",
    avatar: "SD",
    rating: 5,
    quote:
      "I was skeptical at first, but the results speak for themselves. We're getting calls from clients who found us online — that never happened before. Best investment we've made for our business.",
  },
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="bg-black py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
            <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
              Client Results
            </span>
          </div>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-black p-10 lg:p-12 flex flex-col border border-white/5 hover:border-white/15 transition-colors group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} fill="hsl(43,62%,52%)" color="hsl(43,62%,52%)" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div
                  className="w-10 h-10 flex items-center justify-center text-black font-bold text-xs flex-shrink-0"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs mt-0.5">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
