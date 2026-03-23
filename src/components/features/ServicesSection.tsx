import { useEffect, useRef } from "react";
import { Monitor, RefreshCw, ShoppingBag, MousePointerClick } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description:
      "From concept to launch, we craft bespoke websites that reflect your brand and convert visitors into paying customers.",
    tag: "Most Popular",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Outdated website holding you back? We'll transform it into a modern, high-performing digital asset your business deserves.",
    tag: null,
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Websites",
    description:
      "Sell online with confidence. We build fast, secure, and user-friendly online stores that drive sales around the clock.",
    tag: null,
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "Single-page powerhouses built for one goal: conversion. Perfect for campaigns, product launches, or lead generation.",
    tag: null,
  },
];

const ServicesSection = () => {
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
    <section id="services" className="bg-white py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
            <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
              What We Offer
            </span>
          </div>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-black leading-tight max-w-lg"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Our Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 bg-white p-10 lg:p-12 group hover:bg-black cursor-default`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center border border-black/10 group-hover:border-white/20 transition-colors duration-300"
                  >
                    <Icon
                      size={20}
                      className="text-black group-hover:text-white transition-colors duration-300"
                      style={{ color: undefined }}
                    />
                  </div>
                  {service.tag && (
                    <span
                      className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1"
                      style={{ backgroundColor: "hsl(43,62%,52%)", color: "#000" }}
                    >
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-xl text-black group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-black/50 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
                <div
                  className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
