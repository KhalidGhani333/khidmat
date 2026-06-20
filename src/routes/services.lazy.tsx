import { createLazyFileRoute } from "@tanstack/react-router";
import { Check, Phone, MessageCircle, Search, Droplets, Layers, Sparkles, Shield, ClipboardCheck, Gem, Home, Building2, ArrowUpDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useApp, CONTACT } from "@/lib/i18n";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

// Specialties Images
import s1 from "@/assets/1.jpeg";
import s2 from "@/assets/2.jpeg";
import s3 from "@/assets/3.jpeg";
import s4 from "@/assets/4.jpeg";
import s5 from "@/assets/5.jpeg";
import s6 from "@/assets/6.jpeg";
import s18 from "@/assets/18.jpeg";

// Equipment Images
import t1 from "@/assets/tool 1.jpg";
import t2 from "@/assets/tool 2.jpg";
import t3 from "@/assets/tool 3.jpg";
import t4 from "@/assets/tool 4.webp";

export const Route = createLazyFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useApp();

  const benefits = [
    t("benefit.stains"),
    t("benefit.shine"),
    t("benefit.new"),
    t("benefit.durability"),
    t("benefit.luxury"),
    t("benefit.value"),
    t("benefit.revitalize"),
    t("benefit.highend"),
    t("benefit.lasting"),
    t("benefit.expert"),
  ];

  const allServices = [
    { icon: Sparkles, title: t("service.marble.title"), desc: t("service.marble.desc") },
    { icon: Layers, title: t("service.tile.title"), desc: t("service.tile.desc") },
    { icon: Droplets, title: t("service.ceramic.title"), desc: t("service.ceramic.desc") },
    { icon: Home, title: t("service.courtyard.title"), desc: t("service.courtyard.desc") },
    { icon: Building2, title: t("service.tanks.title"), desc: t("service.tanks.desc") },
  ];

  const surfaces = [
    { title: t("surface.marble"), img: s1 }, // 1.jpeg
    { title: t("surface.granite"), img: s18 }, // 18.jpeg
    { title: t("surface.tile"), img: s2 }, // 2.jpeg
    { title: t("surface.bathroom"), img: s5 }, // 5.jpeg
    { title: t("surface.courtyard"), img: s6 }, // 6.jpeg
  ];


  const steps = [
    { icon: Search, title: t("step.inspection.title"), desc: t("step.inspection.desc") },
    { icon: Droplets, title: t("step.cleaning.title"), desc: t("step.cleaning.desc") },
    { icon: Layers, title: t("step.honing.title"), desc: t("step.honing.desc") },
    { icon: Sparkles, title: t("step.polishing.title"), desc: t("step.polishing.desc") },
    { icon: Shield, title: t("step.sealing.title"), desc: t("step.sealing.desc") },
    { icon: ClipboardCheck, title: t("step.final.title"), desc: t("step.final.desc") },
  ];

  const equipment = [
    { name: t("equip.lavor.name"), desc: t("equip.lavor.desc"), img: t1 },
    { name: t("equip.fimap.name"), desc: t("equip.fimap.desc"), img: t2 },
    { name: t("equip.ghibli.name"), desc: t("equip.ghibli.desc"), img: t3 },
    { name: t("equip.klindex.name"), desc: t("equip.klindex.desc"), img: t4 },
  ];


  const faqs = [
    { q: t("faq.duration.q"), a: t("faq.duration.a") },
    { q: t("faq.shine.q"), a: t("faq.shine.a") },
    { q: t("faq.safety.q"), a: t("faq.safety.a") },
    { q: t("faq.frequency.q"), a: t("faq.frequency.a") },
    { q: t("faq.warranty.q"), a: t("faq.warranty.a") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.15_95/0.4),transparent_50%)]" />
        <div className="container-luxe relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.offer.label")}</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-black text-balance">{t("services.hero.title")}</h1>
            <p className="mt-5 text-lg md:text-xl text-gold font-display italic">{t("services.hero.sub")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition hover:scale-105">
                <MessageCircle className="h-5 w-5" /> {t("footer.quote")}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                <Phone className="h-5 w-5" /> {t("cta.call")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.all.label")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">{t("services.all.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_20px_60px_-20px_rgba(201,180,0,0.25)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.offer.label")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">{t("services.offer.title")}</h2>
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
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.special.label")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">{t("services.special.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:-translate-y-1 hover:ring-gold">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110" 
                      loading="lazy"
                      decoding="async"
                    />
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
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.process.label")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">{t("services.process.title")}</h2>
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
      <section className="bg-navy text-navy-foreground py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.equip.label")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">{t("services.equip.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-gold">
                  <div className="aspect-[5/4] overflow-hidden bg-white/10">
                    <img 
                      src={e.img} 
                      alt={e.name} 
                      className="h-full w-full object-cover" 
                      loading="lazy"
                      decoding="async"
                    />
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
      <section className="py-16 md:py-24">
        <div className="container-luxe max-w-3xl">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("faq.label")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">{t("services.faq.title")}</h2>
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

      {/* EDUCATIONAL SECTION (NEW) */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("edu.cracks.title")}</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-black">{t("edu.cracks.types")}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                {t("edu.cracks.desc")}
              </p>
              <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
                <h4 className="font-bold text-foreground mb-2">{t("edu.cracks.causes")}</h4>
                <p className="text-sm text-muted-foreground italic">Understanding these factors helps us choose the right filler and reinforcement for a lasting repair.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("edu.process.diamond")}</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-black">{t("edu.process.diamond.desc")}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Unlike simple waxing, diamond polishing is a physical restoration of the stone's surface. We use industrial-grade diamonds to remove the microscopic layer of damage, revealing the pure, unblemished stone beneath.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  t("edu.maintenance.acid"),
                  t("edu.maintenance.dust"),
                  "Sealing provides a 'breathable' barrier against stains."
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium">
                    <span className="text-gold">✦</span> {tip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
