import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Barwiz Marble & Tile Care Riyadh" },
      { name: "description", content: "Get in touch with Barwiz for professional marble and tile polishing services in Riyadh. Free quotes available." },
      { property: "og:title", content: "Contact — Barwiz Marble & Tile Care Riyadh" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const infoCards = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phone, href: CONTACT.whatsapp },
  { icon: MapPin, label: "Location", value: CONTACT.location },
];

const faqs = [
  { q: "Which areas do you serve in Riyadh?", a: "We serve all districts across Riyadh — North, South, East, West and the city center, including Diplomatic Quarter and surrounding compounds." },
  { q: "How long does marble polishing take?", a: "Most homes are completed within 1–2 days. Larger commercial spaces take 3–5 days depending on scope." },
  { q: "Do you provide a free quote?", a: "Yes — site visit, inspection and a transparent written quote are completely free." },
  { q: "Do you work for homes and commercial spaces?", a: "Both. We handle villas, apartments, hotels, retail showrooms, mosques and offices." },
  { q: "How do I book a service?", a: "Message us on WhatsApp, fill the form on this page or call us directly. We respond within an hour during business hours." },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  }

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.15_95/0.4),transparent_50%)]" />
        <div className="container-luxe relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-black text-balance">Get In Touch</h1>
            <p className="mt-5 text-lg md:text-xl text-gold font-display italic max-w-2xl">
              Contact us for professional marble & tile polishing services in Riyadh
            </p>
          </Reveal>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="py-20 md:py-28">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-black">Reach Us Directly</h2>
            <p className="mt-3 text-muted-foreground">We respond within an hour during business hours.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {infoCards.map((c) => {
                const Inner = (
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-medium text-foreground break-all">{c.value}</div>
                  </div>
                );
                return c.href ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a> : <div key={c.label}>{Inner}</div>;
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Business Hours</div>
              <div className="mt-2 space-y-1 text-sm text-foreground">
                <div className="flex justify-between"><span>Saturday – Thursday</span><span className="font-semibold">8:00 AM – 8:00 PM</span></div>
                <div className="flex justify-between"><span>Friday</span><span className="font-semibold">2:00 PM – 8:00 PM</span></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xl shadow-black/5">
              <h3 className="font-display text-2xl font-bold">Send a Message</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fill the form and we'll get back to you fast.</p>
              <div className="mt-8 space-y-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Full Name *</label>
                  <Input required name="name" className="mt-2 h-12 rounded-xl" placeholder="Your name" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Email *</label>
                    <Input required type="email" name="email" className="mt-2 h-12 rounded-xl" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Phone *</label>
                    <Input required name="phone" className="mt-2 h-12 rounded-xl" placeholder="+966 ..." />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Service Interested In</label>
                  <Select>
                    <SelectTrigger className="mt-2 h-12 rounded-xl"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marble">Marble Polishing</SelectItem>
                      <SelectItem value="tile">Tile Cleaning</SelectItem>
                      <SelectItem value="granite">Granite Polishing</SelectItem>
                      <SelectItem value="stone">Natural Stone Care</SelectItem>
                      <SelectItem value="commercial">Commercial Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Message *</label>
                  <Textarea required name="message" rows={5} className="mt-2 rounded-xl" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" disabled={submitting} className="w-full rounded-full bg-gold py-4 text-sm font-semibold text-gold-foreground shadow-lg shadow-gold/30 transition hover:scale-[1.02] disabled:opacity-60">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-luxe">
          <Reveal>
            <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-xl">
              <iframe
                title="Barwiz Riyadh location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231887.4!2d46.6!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="container-luxe max-w-3xl">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQ</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">Got Questions?</h2>
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
