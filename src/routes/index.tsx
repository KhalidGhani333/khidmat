import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import {
  ArrowRight, ChevronDown, Sparkles, Droplets, Gem, Award, Wrench, Zap, Wallet, Star, Quote, MessageCircle, Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-marble.jpg";
import { useApp, CONTACT } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barwiz | Marble & Tile Polishing Riyadh" },
      { name: "description", content: "Riyadh's #1 marble specialists. Restore the brilliance of your floors with premium Italian polishing equipment." },
      { property: "og:title", content: "Barwiz | Marble & Tile Polishing Riyadh" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Sparkles, title: "Marble Floor Polishing", desc: "Mirror-finish restoration that brings back the original luster of natural marble surfaces." },
  { icon: Droplets, title: "Tile Deep Cleaning", desc: "Industrial-grade cleaning that lifts years of buildup from ceramic and porcelain tiles." },
  { icon: Gem, title: "Granite & Stone Polishing", desc: "Specialized treatments for granite, travertine and all natural stone surfaces." },
];

const features = [
  { icon: Award, title: "Expert Technicians", desc: "Skilled craftsmen with 25+ years of restoration experience." },
  { icon: Wrench, title: "Italian Equipment", desc: "Premium Lavor, Fimap, Ghibli and Klindex machinery." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most residential jobs completed within 24–48 hours." },
  { icon: Wallet, title: "Fair Pricing", desc: "Transparent quotes with no hidden fees, ever." },
];

const testimonials = [
  { name: "Ahmed Al-Rashidi", role: "Villa Owner, Al Olaya", quote: "Our marble floors look brand new. Barwiz's team was punctual, professional and the result exceeded our expectations." },
  { name: "Sara Al-Mutairi", role: "Interior Designer", quote: "I recommend Barwiz to every client. Their attention to detail and finish quality is in another league." },
  { name: "Khalid Al-Dosari", role: "Hotel Manager", quote: "We've used them across three properties. Consistent, fast and the shine genuinely lasts. Best in Riyadh." },
];

const gallery = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/barwiz${i}/600/${i % 3 === 0 ? 800 : 600}`);
const ba = [
  { before: "https://picsum.photos/seed/before1/800/600", after: "https://picsum.photos/seed/after1/800/600" },
  { before: "https://picsum.photos/seed/before2/800/600", after: "https://picsum.photos/seed/after2/800/600" },
  { before: "https://picsum.photos/seed/before3/800/600", after: "https://picsum.photos/seed/after3/800/600" },
];

function HomePage() {
  const { t } = useApp();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Polished marble floor" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/95" />
        </div>
        <div className="container-luxe relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {t("hero.badge")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 max-w-4xl font-display text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl text-balance"
          >
            {t("hero.title").split(" ").map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="inline-block mr-3">
                {w === "Brilliance" || w === "البريق" ? <span className="text-gold italic">{w}</span> : w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {t("hero.sub")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-10 flex flex-wrap gap-4">
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition hover:scale-105">
              <MessageCircle className="h-5 w-5" /> {t("cta.whatsapp")}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold hover:text-gold">
              <Phone className="h-5 w-5" /> {t("cta.call")}
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-navy text-navy-foreground py-16 md:py-20">
        <div className="container-luxe grid grid-cols-2 gap-10 md:grid-cols-4">
          {[
            { n: 25, s: "+", l: t("stats.years") },
            { n: 780, s: "+", l: t("stats.projects") },
            { n: 100, s: "%", l: t("stats.satisfaction") },
            { n: 11, s: "", l: t("stats.active") },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-black text-gold">
                <Counter to={stat.n} suffix={stat.s} />
              </div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-white/60">{stat.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.label")}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black text-foreground">{t("services.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_20px_60px_-20px_rgba(201,180,0,0.3)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    {t("cta.bookService")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Transformation</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">{t("transform.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {ba.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-border">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={p.before} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={p.after} alt="After" />}
                    style={{ height: 320 }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Portfolio</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">{t("gallery.title")}</h2>
          </Reveal>
          <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {gallery.map((src, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <div className="group relative mb-4 overflow-hidden rounded-xl">
                  <img src={src} alt={`Project ${i + 1}`} className="w-full transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition group-hover:bg-navy/60 group-hover:opacity-100">
                    <span className="rounded-full border border-gold bg-gold/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-sm">View</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Barwiz</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">{t("why.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card p-7 ring-1 ring-border transition hover:ring-gold">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-gold-foreground">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Testimonials</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">{t("testi.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((tst, i) => (
              <Reveal key={tst.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 relative">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/20" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-5 text-foreground leading-relaxed">"{tst.quote}"</p>
                  <div className="mt-6 border-t border-border pt-5">
                    <div className="font-semibold text-foreground">{tst.name}</div>
                    <div className="text-xs text-muted-foreground">{tst.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-navy-foreground py-24 md:py-32">
        <div className="container-luxe text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black text-balance">
              {t("finalcta.title").split(" ").slice(0, -1).join(" ")} <span className="text-gold italic">{t("finalcta.title").split(" ").slice(-1)}</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">{t("finalcta.sub")}</p>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition hover:scale-105">
              <MessageCircle className="h-5 w-5" /> {t("cta.whatsappShort")}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
