import { createLazyFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useApp, CONTACT } from "@/lib/i18n";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createLazyFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { t } = useApp();

  const infoCards = [
    { icon: Phone, label: t("info.phone"), value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: t("info.email"), value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MessageCircle, label: t("info.whatsapp"), value: CONTACT.whatsappDisplay, href: CONTACT.whatsapp },
    { icon: MapPin, label: t("info.location"), value: CONTACT.location },
  ];

  const faqs = [
    { q: t("contact.faq.riyadh.q"), a: t("contact.faq.riyadh.a") },
    { q: t("contact.faq.duration.q"), a: t("contact.faq.duration.a") },
    { q: t("contact.faq.quote.q"), a: t("contact.faq.quote.a") },
    { q: t("contact.faq.type.q"), a: t("contact.faq.type.a") },
    { q: t("contact.faq.booking.q"), a: t("contact.faq.booking.a") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.15_95/0.4),transparent_50%)]" />
        <div className="container-luxe relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("nav.contact")}</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-black text-balance">{t("contact.hero.title")}</h1>
            <p className="mt-5 text-lg md:text-xl text-gold font-display italic max-w-2xl">
              {t("contact.hero.sub")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* INFO */}
      <section className="py-12 md:py-20">
        <div className="container-luxe max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-black">{t("contact.direct.title")}</h2>
            <p className="mt-3 text-muted-foreground">{t("contact.direct.sub")}</p>
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((c) => {
              const Inner = (
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium text-foreground break-all">{c.value}</div>
                </div>
              );
              return c.href ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a> : <div key={c.label}>{Inner}</div>;
            })}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xl shadow-black/5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("contact.hours.title")}</div>
                  <div className="mt-2 grid gap-1 text-sm text-foreground">
                    <div>{t("contact.hours.sat")}</div>
                    <div>{t("contact.hours.fri")}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-luxe">
          <Reveal>
            <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-xl bg-muted">
              <iframe
                title="Khidmat Riyadh location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231887.4!2d46.6!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16 md:py-24">
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
    </>
  );
}
