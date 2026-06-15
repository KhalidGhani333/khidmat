import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "ar";
type Theme = "light" | "dark";

interface AppCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (k: string) => string;
}

const dict: Record<string, { en: string; ar: string }> = {
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.cta": { en: "Contact", ar: "تواصل" },
  "tagline": { en: "Marble & Tile Care", ar: "العناية بالرخام والسيراميك" },

  "hero.badge": { en: "✦ Riyadh's #1 Marble Specialists", ar: "✦ متخصصو الرخام رقم 1 في الرياض" },
  "hero.title": { en: "Restore the Brilliance of Your Floors", ar: "أعد البريق لأرضياتك" },
  "hero.sub": {
    en: "Professional marble, tile & granite polishing services across all areas of Riyadh — using premium Italian equipment",
    ar: "خدمات تلميع الرخام والسيراميك والجرانيت الاحترافية في جميع مناطق الرياض — باستخدام معدات إيطالية فاخرة",
  },
  "cta.whatsapp": { en: "Get Free Quote on WhatsApp", ar: "احصل على عرض مجاني عبر واتساب" },
  "cta.call": { en: "Call Now +966506435230", ar: "اتصل الآن +966506435230" },
  "cta.whatsappShort": { en: "WhatsApp Us Now", ar: "راسلنا على واتساب" },
  "cta.bookService": { en: "Book Service", ar: "احجز الخدمة" },

  "stats.years": { en: "Years of Experience", ar: "سنوات من الخبرة" },
  "stats.projects": { en: "Projects Completed", ar: "مشروع مكتمل" },
  "stats.satisfaction": { en: "Client Satisfaction", ar: "رضا العملاء" },
  "stats.active": { en: "Active Projects", ar: "مشاريع نشطة" },

  "services.label": { en: "WHAT WE DO", ar: "ماذا نقدم" },
  "services.title": { en: "Our Core Services", ar: "خدماتنا الأساسية" },
  "transform.title": { en: "See the Transformation", ar: "شاهد التحول" },
  "gallery.title": { en: "Our Work Gallery", ar: "معرض أعمالنا" },
  "why.title": { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "testi.title": { en: "What Clients Say", ar: "آراء عملائنا" },
  "finalcta.title": { en: "Ready to Transform Your Space?", ar: "هل أنت مستعد لتحويل مساحتك؟" },
  "finalcta.sub": { en: "Free inspection and quote available across all Riyadh", ar: "فحص وعرض سعر مجاني في جميع أنحاء الرياض" },

  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.contact": { en: "Contact Info", ar: "معلومات الاتصال" },
  "footer.quote": { en: "Get Free Quote", ar: "احصل على عرض مجاني" },
  "footer.desc": {
    en: "Riyadh's trusted experts in marble, tile and stone restoration. Bringing back the shine since 2000.",
    ar: "خبراء الرياض الموثوقون في تجديد الرخام والسيراميك والحجر. نعيد البريق منذ عام 2000.",
  },
};

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const sl = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const st = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    if (sl) setLangState(sl);
    if (st) setTheme(st);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const t = (k: string) => dict[k]?.[lang] ?? k;

  return (
    <Ctx.Provider
      value={{ lang, setLang: setLangState, theme, toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")), t }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useApp must be inside AppProvider");
  return c;
}

export const CONTACT = {
  phone: "+966506435230",
  whatsapp: "https://wa.me/966506435230",
  email: "zahidzahidkhan438@gmail.com",
  location: "Riyadh, Saudi Arabia",
};
