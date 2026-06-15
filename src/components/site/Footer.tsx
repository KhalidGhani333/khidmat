import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Music2, Mail, Phone, MapPin } from "lucide-react";
import { useApp, CONTACT } from "@/lib/i18n";
import logoImg from "@/assets/logo.jpeg";

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Khidmat Logo" className="h-10 w-10 rounded-full object-cover border border-gold" />
            <div className="leading-tight">
              <div className="font-display font-black text-xl">KHIDMAT</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">{t("tagline")}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">{t("footer.desc")}</p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.facebook.com/share/1EFU3Md8QZ/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold text-blue-500">
              <Facebook className="h-5 w-5 fill-current" />
            </a>
            <a href="https://www.instagram.com/arshad62857?utm_source=qr&igsh=ZGZ4NjRkYTBiZXZq" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold text-pink-500">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@user651311276?_r=1&_t=ZS-97BD0F4Sv0Z" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold text-white">
              <Music2 className="h-5 w-5" />
            </a>
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

      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Khidmat Marble & Tile Care. All rights reserved.
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

