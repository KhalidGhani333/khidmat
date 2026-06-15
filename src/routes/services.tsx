import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone, MessageCircle, Search, Droplets, Layers, Sparkles, Shield, ClipboardCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/i18n";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Marble, Tile & Granite Polishing | Barwiz" },
      { name: "description", content: "Professional marble polishing, tile deep cleaning and granite restoration services in Riyadh. Italian equipment, expert technicians." },
      { property: "og:title", content: "Services — Marble, Tile & Granite Polishing | Barwiz" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const benefits = [
  "Eliminates stains, scratches & dullness",
  "Restores natural shine & luster",
  "Makes floors look brand new",
  "Increases surface durability",
  "Enhances luxury appearance",
  "Improves property value",
  "Revitalizes old tiles & marble",
  "High-end polished finish for homes & offices",
  "Professional shine that lasts",
  "18+ years of expert experience",
];

const surfaces = [
  { title: "Marble Floor Polishing", img: "https://picsum.photos/seed/s1/600/400" },
  { title: "Granite Polishing", img: "https://picsum.photos/seed/s2/600/400" },
  { title: "Tile Deep Cleaning", img: "https://picsum.photos/seed/s3/600/400" },
  { title: "Natural Stone Care", img: "https://picsum.photos/seed/s4/600/400" },
  { title: "Bathroom & Kitchen Restoration", img: "https://picsum.photos/seed/s5/600/400" },
  { title: "Commercial Spaces", img: "https://picsum.photos/seed/s6/600/400" },
];

const steps = [
  { icon: Search, title: "Inspection & Assessment", desc: "We evaluate surface condition, damage and the right treatment plan." },
  { icon: Droplets, title: "Deep Cleaning", desc: "Industrial cleaners lift dirt, grease and built-up residue." },
  { icon: Layers, title: "Honing", desc: "Diamond pads remove scratches and level the surface evenly." },
  { icon: Sparkles, title: "Polishing", desc: "Progressive grits restore the high-gloss mirror finish." },
  { icon: Shield, title: "Sealing", desc: "Penetrating sealers protect against stains and moisture." },
  { icon: ClipboardCheck, title: "Final Inspection", desc: "Quality check, walkthrough and care guidance for you." },
];

const equipment = [
  { name: "Lavor Comfort XXS", desc: "Compact Italian scrubber for precision work in tight spaces.", img: "https://picsum.photos/seed/eq1/500/400" },
  { name: "Fimap EMx", desc: "Professional auto-scrubber for high-volume floor cleaning.", img: "https://picsum.photos/seed/eq2/500/400" },
  { name: "Ghibli & Wirbel SB 143", desc: "Heavy-duty single disc for honing and polishing stone.", img: "https://picsum.photos/seed/eq3/500/400" },
  { name: "Klindex Hercules", desc: "Industrial planetary machine for premium marble restoration.", img: "https://picsum.photos/seed/eq4/500/400" },
];

const faqs = [
  { q: "How long does polishing take?", a: "Most residential projects are completed within 1–2 days depending on surface area. Larger commercial spaces may take 3–5 days." },
  { q: "Will the shine last?", a: "With proper care, our high-gloss finish typically lasts 2–5 years. We provide aftercare guidance to extend it." },
  { q: "Is it safe for kids or pets?", a: "Yes. We use non-toxic cleaners and sealers. The area is safe to use a few hours after finishing." },
  { q: "How often should polishing be done?", a: "Residential marble: every 2–3 years. High-traffic commercial floors: yearly or as needed." },
  { q: "Do you provide a warranty?", a: "Yes, we offer a satisfaction guarantee and warranty on all polishing work performed." },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.15_95/0.4),transparent_50%)]" />
        <div className="container-luxe relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Services</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-black text-balance">Bring Back the Shine</h1>
            <p className="mt-5 text-xl md:text-2xl text-gold font-display italic">Premium Marble & Tile Polishing Services</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition hover:scale-105">
                <MessageCircle className="h-5 w-5" /> Get Free Quote
              </a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Offer</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Built on Excellence</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.04}>
                <div className="flex items-start gap-4 border-b border-border pb-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SURFACES */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Specialties</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Surfaces We Polish</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:-translate-y-1 hover:ring-gold">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Methodology</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Our 6-Step Process</h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="relative rounded-2xl border border-border bg-card p-7">
                  <div className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-base font-black text-gold-foreground shadow-lg">
                    {i + 1}
                  </div>
                  <div className="pt-4">
                    <s.icon className="h-7 w-7 text-gold" />
                    <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="bg-navy text-navy-foreground py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Tools of the Craft</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Equipment We Use</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-gold">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img src={e.img} alt={e.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-white">{e.name}</h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-luxe max-w-3xl">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQ</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Common Questions</h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-display text-lg font-bold hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
