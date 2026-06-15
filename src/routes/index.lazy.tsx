import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import React, { Suspense, useState } from "react";
import {
  ArrowRight, ChevronDown, Sparkles, Droplets, Gem, Award, Wrench, Zap, Wallet, MessageCircle, Phone, X,
} from "lucide-react";
import heroImg from "@/assets/hero-marble.jpg";
import { useApp, CONTACT } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Gallery & Transformation Images
import g1 from "@/assets/1.jpeg";
import g2 from "@/assets/2.jpeg";
import g3 from "@/assets/3.jpeg";
import g4 from "@/assets/4.jpeg";
import g5 from "@/assets/5.jpeg";
import g6 from "@/assets/6.jpeg";
import g7 from "@/assets/7.jpeg";
import g8 from "@/assets/8.jpeg";
import g9 from "@/assets/9.jpeg";
import g15 from "@/assets/15.jpeg";
import g16 from "@/assets/16.jpeg";

// Lazy load the heavy slider component
const ReactCompareSlider = React.lazy(() => import("react-compare-slider").then(m => ({ default: m.ReactCompareSlider })));
const ReactCompareSliderImage = React.lazy(() => import("react-compare-slider").then(m => ({ default: m.ReactCompareSliderImage })));

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t } = useApp();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const services = [
    { icon: Sparkles, title: t("service.marble.title"), desc: t("service.marble.desc") },
    { icon: Droplets, title: t("service.tile.title"), desc: t("service.tile.desc") },
    { icon: Gem, title: t("service.granite.title"), desc: t("service.granite.desc") },
  ];

  const features = [
    { icon: Award, title: t("feature.expert.title"), desc: t("feature.expert.desc") },
    { icon: Wrench, title: t("feature.italy.title"), desc: t("feature.italy.desc") },
    { icon: Zap, title: t("feature.fast.title"), desc: t("feature.fast.desc") },
    { icon: Wallet, title: t("feature.price.title"), desc: t("feature.price.desc") },
  ];

  const gallery = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

  const ba = [
    { after: g2, id: "ba1" },
    { after: g15, id: "ba2" },
    { after: g16, id: "ba3" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt={t("service.marble.title")} 
            className="h-full w-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/85" />
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
              <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="inline-block mr-3 last:mr-0">
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
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold hover:text-gold">
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
            { n: 10, s: "+", l: t("stats.years") },
            { n: 50, s: "+", l: t("stats.projects") },
            { n: 100, s: "%", l: t("stats.satisfaction") },
            { n: 5, s: "", l: t("stats.active") },
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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("transform.title")}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">{t("transform.title")}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {ba.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-border bg-muted aspect-[4/3]">
                  <Suspense fallback={<div className="w-full h-full animate-pulse bg-muted" />}>
                    <ReactCompareSlider
                      itemOne={
                        <div className="relative h-full w-full">
                          <img 
                            src={p.after} 
                            alt="Before Restoration" 
                            className="h-full w-full object-cover filter grayscale-[0.4] brightness-[0.7] contrast-[0.8] sepia-[0.2] blur-[1px]" 
                          />
                          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                        </div>
                      }
                      itemTwo={
                        <img 
                          src={p.after} 
                          alt="After Restoration" 
                          className="h-full w-full object-cover" 
                        />
                      }
                      style={{ height: "100%" }}
                    />
                  </Suspense>
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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("gallery.title")}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">{t("gallery.title")}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div 
                  className="group relative overflow-hidden rounded-xl bg-muted aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImg(src)}
                >
                  <img 
                    src={src} 
                    alt={`${t("gallery.title")} ${i + 1}`} 
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110" 
                    loading="lazy"
                    decoding="async"
                  />
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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("why.title")}</span>
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

      {/* FINAL CTA */}
      <section className="bg-navy text-navy-foreground py-24 md:py-32">
        <div className="container-luxe text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black text-balance">
              {t("finalcta.title")}
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">{t("finalcta.sub")}</p>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition hover:scale-105">
              <MessageCircle className="h-5 w-5" /> {t("cta.whatsappShort")}
            </a>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX DIALOG */}
      <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-[80vw] p-0 overflow-visible border-none bg-transparent shadow-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none">
          <DialogTitle className="sr-only">Gallery Image Preview</DialogTitle>
          <DialogDescription className="sr-only">Fullscreen view of the selected project image.</DialogDescription>
          
          <div className="relative flex items-center justify-center min-h-[50vh] max-h-[90vh]">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-xl transition-transform hover:scale-110 active:scale-95 border-2 border-white/20"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6 stroke-[3]" />
            </button>

            <AnimatePresence mode="wait">
              {selectedImg && (
                <motion.img
                  key={selectedImg}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  src={selectedImg}
                  alt="Gallery Preview"
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
                />
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
