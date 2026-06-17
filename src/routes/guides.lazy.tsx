import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { 
  ShieldCheck, Droplets, Info, ArrowRight, HelpCircle, 
  Sparkles, Zap, Layers, CheckCircle2, XCircle
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useApp } from "@/lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createLazyFileRoute("/guides")({
  component: GuidesPage,
});

function GuidesPage() {
  const { t } = useApp();

  const mainGuides = [
    {
      title: t("guide.cracks.title"),
      sub: t("guide.cracks.sub"),
      icon: Info,
      color: "bg-blue-500/10 text-blue-600",
      content: [
        { q: t("edu.cracks.types"), a: t("edu.cracks.desc") },
        { q: t("edu.cracks.causes"), a: "Temperature fluctuations, foundation settling, or improper initial installation are the most common culprits in Riyadh's climate." },
      ]
    },
    {
      title: t("guide.marble.title"),
      sub: t("guide.marble.sub"),
      icon: ShieldCheck,
      color: "bg-gold/10 text-gold",
      content: [
        { q: t("edu.maintenance.acid"), a: "Acids etch the surface of marble, leaving dull white marks. Use pH-neutral cleaners specifically designed for stone." },
        { q: t("edu.maintenance.dust"), a: t("edu.maintenance.dust") },
      ]
    },
    {
      title: t("guide.tanks.title"),
      sub: t("guide.tanks.sub"),
      icon: Droplets,
      color: "bg-cyan-500/10 text-cyan-600",
      content: [
        { q: "Why Clean Tanks?", a: "Stagnant water in high temperatures can lead to algae growth and bacterial buildup. Regular cleaning ensures safe water for your family." },
      ]
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.15_95/0.4),transparent_70%)]" />
        <div className="container-luxe relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("nav.guides")}</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-black text-balance">{t("guides.hero.title")}</h1>
            <p className="mt-5 text-lg md:text-xl text-gold font-display italic max-w-2xl">
              {t("guides.hero.sub")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED GUIDES */}
      <section className="py-20 md:py-32">
        <div className="container-luxe">
          <div className="grid gap-8 lg:grid-cols-3">
            {mainGuides.map((guide, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Card className="h-full border-border bg-card transition hover:border-gold hover:shadow-lg">
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${guide.color}`}>
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display text-2xl font-bold">{guide.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{guide.sub}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {guide.content.map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border-none">
                          <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline py-3">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIAMOND POLISHING - ENHANCED SECTION */}
      <section className="bg-muted/40 py-24 md:py-32 border-y border-border">
        <div className="container-luxe">
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("edu.process.diamond")}</span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-black">{t("edu.process.diamond.desc")}</h2>
              <p className="mt-6 text-muted-foreground max-w-3xl text-lg">
                Diamond polishing is not just a cleaning service; it's a structural restoration process that transforms your stone from the inside out using industrial-grade precision tools.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                icon: Layers, 
                title: t("edu.process.diamond.leveling"), 
                desc: t("edu.process.diamond.leveling.desc"),
                detail: "Removing 'lippage' makes your floor one continuous, safe surface."
              },
              { 
                icon: Droplets, 
                title: t("edu.process.diamond.wet"), 
                desc: t("edu.process.diamond.wet.desc"),
                detail: "We use water to trap particles, keeping your air pure and surfaces clean."
              },
              { 
                icon: Zap, 
                title: t("edu.process.diamond.longevity"), 
                desc: t("edu.process.diamond.longevity.desc"),
                detail: "Natural shine doesn't peel or yellow over time like artificial waxes."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <div className="h-full bg-card p-8 rounded-3xl border border-border hover:border-gold transition-all group">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="pt-4 border-t border-border/50 text-xs font-semibold text-gold flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5" /> {item.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* COMPARISON TABLE */}
          <Reveal delay={0.3} className="mt-20">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="grid grid-cols-3 bg-navy text-white p-6 font-display font-bold text-center italic">
                <div className="text-left">Feature</div>
                <div>{t("comp.diamond")}</div>
                <div className="text-white/50">{t("comp.wax")}</div>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Result", d: t("comp.res.diamond"), w: t("comp.res.wax") },
                  { label: "Durability", d: t("comp.dur.diamond"), w: t("comp.dur.wax") },
                  { label: "Process", d: "Wet (Dust-Free)", w: "Dry/Buffed" },
                  { label: "Yellowing", d: "Never", w: "High Risk" },
                  { label: "Value", d: "Increases Property Value", w: "Temporary Fix" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 p-6 text-sm items-center text-center">
                    <div className="text-left font-bold text-foreground">{row.label}</div>
                    <div className="flex items-center justify-center gap-2 text-gold font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> {row.d}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground italic">
                      <XCircle className="h-4 w-4 text-red-400" /> {row.w}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DUST-FREE PROMISE */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container-luxe">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1 text-xs font-bold text-green-600 mb-6">
                <ShieldCheck className="h-3.5 w-3.5" /> 100% HEALTH SAFE
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black mb-6">Our Clean-Air Promise</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Traditional floor grinding creates clouds of silica dust that can settle in your furniture and lungs for weeks. 
                <br /><br />
                At Khidmat, we use <strong>Wet-Shield Technology</strong>. By using water during the grinding process, we turn potential dust into a slurry that is instantly vacuumed up, leaving your air as clean as your new floors.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-muted">
                  <div className="font-bold text-foreground">No Dust</div>
                  <div className="text-xs text-muted-foreground">Safe for Asthma/Allergies</div>
                </div>
                <div className="p-4 rounded-2xl bg-muted">
                  <div className="font-bold text-foreground">No Mess</div>
                  <div className="text-xs text-muted-foreground">Furniture stays clean</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border bg-navy flex items-center justify-center p-12 text-center text-white">
                <div>
                  <Sparkles className="h-16 w-16 text-gold mx-auto mb-6" />
                  <h3 className="font-display text-3xl font-black mb-4 italic">"The Diamond Difference"</h3>
                  <p className="text-white/60 text-lg">
                    True stone restoration reveals the natural crystals within the marble, creating a depth of shine that chemicals simply cannot replicate.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL FAQ */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="container-luxe max-w-3xl">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">KNOWLEDGE BASE</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Maintenance & Care</h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="mt-12">
              <AccordionItem value="item-1" className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:text-gold hover:no-underline">
                  {t("edu.maintenance.acid")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Marble is made of calcium carbonate. Acids like vinegar, lemon, and bleach react with the calcium and eat away at the stone, creating "etch marks." Always use pH-balanced cleaners.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:text-gold hover:no-underline">
                  How often should I seal my marble?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  In Riyadh's dry climate, we recommend sealing every 6 to 12 months for high-traffic areas like kitchens and entryways, and every 2 years for bathrooms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:text-gold hover:no-underline">
                  Can I polish marble myself?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  While minor spots can be treated with DIY kits, professional diamond-grinding is required to remove deep scratches and achieve a uniform mirror-like finish without damaging the stone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
