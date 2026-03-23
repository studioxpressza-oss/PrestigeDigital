import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer:
      "Most projects are completed within 10–21 business days from the start date, depending on the package and scope. The Essential Plan typically takes 7–10 days, while the Professional Plan takes 14–21 days. Custom projects are scoped individually. You'll always receive a clear timeline before we begin.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "We require a 50% deposit upfront to secure your project slot and begin work. The remaining 50% is due upon completion, before the website goes live. For Custom Plan projects, payment milestones are agreed upon in your bespoke proposal. We accept EFT (direct bank transfer).",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Revisions are included in every plan: the Essential Plan includes 1–2 rounds, the Professional Plan includes 2–3 rounds, and the Custom Plan includes unlimited revisions until you are fully satisfied. A revision round is a consolidated set of feedback — we ask that you compile all changes together to keep the project moving efficiently.",
  },
  {
    question: "Do you handle hosting and domain?",
    answer:
      "We can advise on and assist with hosting and domain registration, but these are not included in the base pricing. We typically recommend reputable South African hosting providers and can set everything up on your behalf for a small once-off fee. Ongoing hosting costs are billed directly to you by the hosting provider.",
  },
  {
    question: "Will my website work on mobile and tablets?",
    answer:
      "Absolutely — every website we build is fully mobile-responsive as standard. We design and test across smartphones, tablets, and desktops to ensure a seamless experience on all screen sizes. Mobile optimisation is not an add-on; it's built into every project from day one.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. The Custom Plan includes ongoing support as part of the package. For Essential and Professional clients, we offer affordable monthly maintenance and support retainers. This covers content updates, security checks, performance monitoring, and minor changes — so your website stays fresh and functional.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. Website redesigns are one of our specialities. Whether your current site looks outdated, loads slowly, or isn't converting visitors into customers — we'll audit it and rebuild it into a high-performing asset for your business. Redesign projects are priced similarly to new builds depending on scope.",
  },
  {
    question: "Do I own the website once it's built?",
    answer:
      "Yes — 100%. Once the final payment is received and the website is handed over, you own the full website and all its assets. We provide you with all login credentials, source files, and access. You are never locked in or dependent on us to manage your own site.",
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-white py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-4 mb-5">
              <div className="h-px w-12" style={{ backgroundColor: "hsl(43,62%,52%)" }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "hsl(43,62%,52%)" }}>
                FAQ
              </span>
            </div>
            <h2
              className="reveal opacity-0 translate-y-8 transition-all duration-700 font-black text-black leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-black/40 text-sm leading-relaxed max-w-xs">
              Still have questions? Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-8">
              <a
                href="mailto:PrestigeDigitalAgency@outlook.com"
                className="inline-block text-xs font-bold tracking-[0.3em] uppercase border border-black px-5 py-3 hover:bg-black hover:text-white transition-all duration-200"
              >
                Ask a Question
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 divide-y divide-black/10 border-t border-black/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`font-semibold text-sm lg:text-base leading-snug transition-colors duration-200 ${
                      openIndex === i ? "text-black" : "text-black/70 group-hover:text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
                    style={{
                      backgroundColor: openIndex === i ? "hsl(43,62%,52%)" : "transparent",
                      border: `1px solid ${openIndex === i ? "hsl(43,62%,52%)" : "rgba(0,0,0,0.2)"}`,
                    }}
                  >
                    {openIndex === i ? (
                      <Minus size={13} color="#000" strokeWidth={2.5} />
                    ) : (
                      <Plus size={13} color="rgba(0,0,0,0.5)" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? "400px" : "0px",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p className="text-black/50 text-sm leading-relaxed pb-6 pr-10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
