import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Lumina Spa & Wellness",
    tag: "Health & Beauty",
    description: "Luxury booking website with integrated appointment scheduling and a calming, premium aesthetic.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Steyn Construction",
    tag: "Construction",
    description: "Lead-generation website showcasing completed projects with a bold, trust-driven layout.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Vela Boutique",
    tag: "E-Commerce",
    description: "Full e-commerce store for a local fashion brand — mobile-first with seamless checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "PrimeEdge Financial",
    tag: "Finance",
    description: "Corporate website projecting authority and trust, optimised for high-value client acquisition.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Roots Restaurant",
    tag: "Hospitality",
    description: "Elegant restaurant site with menu display, gallery, and reservation form integration.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Atlas Real Estate",
    tag: "Real Estate",
    description: "Property listing platform with filter search, agent profiles, and WhatsApp contact flow.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
  },
];

const PortfolioSection = () => {
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

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-4 mb-5">
              <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
                Our Work
              </span>
            </div>
            <h2
              className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Built for Results.
              <br />
              Designed to Impress.
            </h2>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-start lg:items-end gap-4">
            <p className="text-black/40 text-sm leading-relaxed max-w-xs lg:text-right">
              A selection of websites we've crafted for businesses across South Africa.
            </p>
            <button
              onClick={handleContact}
              className="text-xs font-bold tracking-[0.3em] uppercase border border-black px-5 py-3 hover:bg-black hover:text-white transition-all duration-200"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 border-r border-b border-black/10 group overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink
                    size={22}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0"
                  />
                </div>
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase text-black"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                >
                  {project.tag}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-black text-base leading-snug">{project.title}</h3>
                <p className="text-black/45 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
