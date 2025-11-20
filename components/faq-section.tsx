import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which areas of Dubai do you cover?",
    a: "We serve all major areas of Dubai, including Deira, Bur Dubai, Business Bay, Downtown, JLT, Marina, JVC, and surrounding communities.",
  },
  {
    q: "Do you provide free site visits and quotations?",
    a: "Yes. For most fit out, renovation and maintenance projects we provide a free site visit followed by a detailed quotation.",
  },
  {
    q: "Can you work after hours or on weekends?",
    a: "We can schedule work during evenings, nights or weekends depending on building management approvals and project scope.",
  },
  {
    q: "Are your workers certified and insured?",
    a: "Our team includes certified technicians and all works follow local regulations and safety requirements.",
  },
];

export function FaqSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0  bg-gradient-to-br from-[#fa8f4d] via-[#fa8f4d] to-[#fa8f4d]/15" />

      <div className="container relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr,1.3fr]">
          {/* LEFT SIDE — STAYS AT TOP */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground md:text-base section-subtitle">
              Answers to common questions about our fit out, renovation and
              maintenance services.
            </p>
          </div>

          {/* RIGHT SIDE — ACCORDION CENTERED VERTICALLY */}
          <div className="flex items-center">
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-3xl border bg-background/80 p-3 shadow-sm md:p-5"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${index}`}
                  className="border-b last:border-b-0"
                >
                  <AccordionTrigger className="flex w-full items-start gap-3 py-4 text-left text-base font-medium hover:no-underline">
                    {/* Number badge */}
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.q}</span>
                  </AccordionTrigger>

                  <AccordionContent className="pl-10 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
