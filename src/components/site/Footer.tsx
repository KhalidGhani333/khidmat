import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Music2, Mail, Phone, MapPin } from "lucide-react";
import { useApp, CONTACT } from "@/lib/i18n";

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-gold-foreground font-display font-black text-lg">B</div>
            <div className="leading-tight">
              <div className="font-display font-black text-xl">BARWIZ</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">{t("tagline")}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">{t("footer.desc")}</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, MessageCircle, Music2].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">{t("footer.quickLinks")}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-gold">{t("nav.home")}</Link></li>
            <li><Link to="/services" className="hover:text-gold">{t("nav.services")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> {CONTACT.phone}</li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> <span className="break-all">{CONTACT.email}</span></li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> {CONTACT.location}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">{t("footer.quote")}</h4>
          <p className="text-sm text-white/70 mb-4">Get a free inspection and quote within 24 hours.</p>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition hover:scale-105">
            <MessageCircle className="h-4 w-4" /> {t("footer.quote")}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Barwiz Marble & Tile Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-xl animate-pulse-gold transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
