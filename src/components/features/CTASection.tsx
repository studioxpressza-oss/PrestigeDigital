import { useEffect, useRef, useState } from "react";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: CTA copy */}
          <div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-4 mb-5">
              <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
                Let's Work Together
              </span>
            </div>

            <h2
              className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-black leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Ready to Grow
              <br />
              Your Business?
            </h2>

            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-black/50 text-base leading-relaxed mb-10 max-w-sm">
              Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
            </p>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col gap-5">
              <a
                href="tel:0836119916"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                >
                  <Phone size={16} color="#000" />
                </div>
                <div>
                  <div className="text-xs text-black/30 tracking-widest uppercase mb-0.5">Call Us</div>
                  <div className="text-black font-semibold text-sm group-hover:underline">083 611 9916</div>
                </div>
              </a>

              <a
                href="mailto:PrestigeDigitalAgency@outlook.com"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                >
                  <Mail size={16} color="#000" />
                </div>
                <div>
                  <div className="text-xs text-black/30 tracking-widest uppercase mb-0.5">Email Us</div>
                  <div className="text-black font-semibold text-sm group-hover:underline break-all">
                    PrestigeDigitalAgency@outlook.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-black p-10 lg:p-12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px] gap-5">
                <CheckCircle size={48} style={{ color: "hsl(43,62%,52%)" }} />
                <h3 className="text-white font-bold text-xl">Message Received!</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. We'll review your request and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-white font-bold text-lg tracking-tight mb-2">Get Your Free Quote</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs tracking-widest uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder-white/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs tracking-widest uppercase">Business Name</label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder-white/20"
                      placeholder="Your Business"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder-white/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder-white/20"
                    placeholder="083 000 0000"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Tell Us About Your Project</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition-colors placeholder-white/20 resize-none"
                    placeholder="What kind of website are you looking for?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 text-sm font-bold tracking-[0.2em] uppercase text-black flex items-center justify-center gap-3 hover:opacity-90 hover:scale-[1.01] active:scale-100 transition-all duration-200"
                  style={{ backgroundColor: "hsl(43,62%,52%)" }}
                >
                  Get Your Website
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
