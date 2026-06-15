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
    en: "Professional marble, tile & granite polishing services across all areas of Riyadh - using premium Italian equipment",
    ar: "خدمات تلميع الرخام والسيراميك والجرانيت الاحترافية في جميع مناطق الرياض - باستخدام معدات إيطالية فاخرة",
  },
  "cta.whatsapp": { en: "Get Free Quote on WhatsApp", ar: "احصل على عرض مجاني عبر واتساب" },
  "cta.call": { en: "Call Now +966 53 650 8959", ar: "اتصل الآن +966 53 650 8959" },
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
    en: "Riyadh's trusted experts in marble, tile and stone restoration. Bringing back the shine since 2015.",
    ar: "خبراء الرياض الموثوقون في تجديد الرخام والسيراميك والحجر. نعيد البريق منذ عام 2015.",
  },

  // Services
  "service.marble.title": { en: "Marble Floor Polishing", ar: "تلميع أرضيات الرخام" },
  "service.marble.desc": { en: "Mirror-finish restoration that brings back the original luster of natural marble surfaces.", ar: "استعادة اللمعان كالمراية التي تعيد البريق الأصلي لأسطح الرخام الطبيعي." },
  "service.tile.title": { en: "Tile Deep Cleaning", ar: "تنظيف عميق للسيراميك" },
  "service.tile.desc": { en: "Industrial-grade cleaning that lifts years of buildup from ceramic and porcelain tiles.", ar: "تنظيف بمستوى صناعي يزيل سنوات من التراكمات عن السيراميك والبورسلين." },
  "service.granite.title": { en: "Granite & Stone Polishing", ar: "تلميع الجرانيت والحجر" },
  "service.granite.desc": { en: "Specialized treatments for granite, travertine and all natural stone surfaces.", ar: "معالجات متخصصة للجرانيت والترافرتين وجميع أسطح الحجر الطبيعي." },

  // Features
  "feature.expert.title": { en: "Expert Technicians", ar: "فنيون خبراء" },
  "feature.expert.desc": { en: "Skilled craftsmen with 10+ years of restoration experience.", ar: "حرفيون مهرة يتمتعون بخبرة تزيد عن 10 عاماً في الترميم." },
  "feature.italy.title": { en: "Italian Equipment", ar: "معدات إيطالية" },
  "feature.italy.desc": { en: "Premium Lavor, Fimap, Ghibli and Klindex machinery.", ar: "ماكينات لافور وفيماب وجيبلي وكليندكس الممتازة." },
  "feature.fast.title": { en: "Fast Turnaround", ar: "إنجاز سريع" },
  "feature.fast.desc": { en: "Most residential jobs completed within 24–48 hours.", ar: "يتم الانتهاء من معظم الأعمال السكنية في غضون 24-48 ساعة." },
  "feature.price.title": { en: "Fair Pricing", ar: "أسعار عادلة" },
  "feature.price.desc": { en: "Transparent quotes with no hidden fees, ever.", ar: "عروض أسعار شفافة بدون رسوم خفية أبداً." },

  // Testimonials
  "testi.ahmed.name": { en: "Ahmed Al-Rashidi", ar: "أحمد الرشيدي" },
  "testi.ahmed.role": { en: "Villa Owner, Al Olaya", ar: "صاحب فيلا، العليا" },
  "testi.ahmed.quote": { en: "Our marble floors look brand new. Khidmat's team was punctual, professional and the result exceeded our expectations.", ar: "تبدو أرضيات الرخام لدينا كأنها جديدة. كان فريق خدمة منضبطاً ومحترفاً والنتيجة تجاوزت توقعاتنا." },
  "testi.sara.name": { en: "Sara Al-Mutairi", ar: "سارة المطيري" },
  "testi.sara.role": { en: "Interior Designer", ar: "مصممة ديكور" },
  "testi.sara.quote": { en: "I recommend Khidmat to every client. Their attention to detail and finish quality is in another league.", ar: "أوصي بخدمة لكل عميل. اهتمامهم بالتفاصيل وجودة التشطيب في مستوى آخر." },
  "testi.khalid.name": { en: "Khalid Al-Dosari", ar: "خالد الدوسري" },
  "testi.khalid.role": { en: "Hotel Manager", ar: "مدير فندق" },
  "testi.khalid.quote": { en: "We've used them across three properties. Consistent, fast and the shine genuinely lasts. Best in Riyadh.", ar: "لقد استخدمناهم في ثلاثة عقارات. أداء ثابت وسريع واللمعان يدوم حقاً. الأفضل في الرياض." },

  // Services Page
  "services.hero.title": { en: "Bring Back the Shine", ar: "أعد البريق" },
  "services.hero.sub": { en: "Premium Marble & Tile Polishing Services", ar: "خدمات تلميع الرخام والسيراميك الممتازة" },
  "services.offer.title": { en: "Built on Excellence", ar: "بني على التميز" },
  "services.offer.label": { en: "What We Offer", ar: "ما نقدمه" },
  "services.special.title": { en: "Surfaces We Polish", ar: "الأسطح التي نلمعها" },
  "services.special.label": { en: "Specialties", ar: "تخصصاتنا" },
  "services.process.title": { en: "Our 6-Step Process", ar: "عمليتنا المكونة من 6 خطوات" },
  "services.process.label": { en: "Methodology", ar: "منهجيتنا" },
  "services.equip.title": { en: "Equipment We Use", ar: "المعدات التي نستخدمها" },
  "services.equip.label": { en: "Tools of the Craft", ar: "أدوات الحرفة" },
  "services.faq.title": { en: "Common Questions", ar: "الأسئلة الشائعة" },

  // Benefits
  "benefit.stains": { en: "Eliminates stains, scratches & dullness", ar: "يزيل البقع والخدوش والبهتان" },
  "benefit.shine": { en: "Restores natural shine & luster", ar: "يعيد اللمعان والبريق الطبيعي" },
  "benefit.new": { en: "Makes floors look brand new", ar: "يجعل الأرضيات تبدو وكأنها جديدة" },
  "benefit.durability": { en: "Increases surface durability", ar: "يزيد من متانة السطح" },
  "benefit.luxury": { en: "Enhances luxury appearance", ar: "يعزز المظهر الفاخر" },
  "benefit.value": { en: "Improves property value", ar: "يحسن قيمة العقار" },
  "benefit.revitalize": { en: "Revitalizes old tiles & marble", ar: "يحيي السيراميك والرخام القديم" },
  "benefit.highend": { en: "High-end polished finish for homes & offices", ar: "تشطيب مصقول راقٍ للمنازل والمكاتب" },
  "benefit.lasting": { en: "Professional shine that lasts", ar: "لمعان احترافي يدوم طويلاً" },
  "benefit.expert": { en: "10+ years of expert experience", ar: "أكثر من 10 عاماً من الخبرة" },

  // Surfaces
  "surface.marble": { en: "Marble Floor Polishing", ar: "تلميع أرضيات الرخام" },
  "surface.granite": { en: "Granite Polishing", ar: "تلميع الجرانيت" },
  "surface.tile": { en: "Tile Deep Cleaning", ar: "تنظيف عميق للسيراميك" },
  "surface.stone": { en: "Natural Stone Care", ar: "العناية بالحجر الطبيعي" },
  "surface.bathroom": { en: "Bathroom & Kitchen Restoration", ar: "ترميم الحمامات والمطابخ" },
  "surface.commercial": { en: "Commercial Spaces", ar: "المساحات التجارية" },

  // Steps
  "step.inspection.title": { en: "Inspection & Assessment", ar: "الفحص والتقييم" },
  "step.inspection.desc": { en: "We evaluate surface condition, damage and the right treatment plan.", ar: "نقيم حالة السطح والأضرار وخطة العلاج المناسبة." },
  "step.cleaning.title": { en: "Deep Cleaning", ar: "التنظيف العميق" },
  "step.cleaning.desc": { en: "Industrial cleaners lift dirt, grease and built-up residue.", ar: "المنظفات الصناعية تزيل الأوساخ والشحوم والبقايا المتراكمة." },
  "step.honing.title": { en: "Honing", ar: "التنعيم" },
  "step.honing.desc": { en: "Diamond pads remove scratches and level the surface evenly.", ar: "أقراص الألماس تزيل الخدوش وتساوي السطح بشكل متجانس." },
  "step.polishing.title": { en: "Polishing", ar: "التلميع" },
  "step.polishing.desc": { en: "Progressive grits restore the high-gloss mirror finish.", ar: "درجات تلميع متدرجة تعيد اللمعان العالي كالمراية." },
  "step.sealing.title": { en: "Sealing", ar: "العزل" },
  "step.sealing.desc": { en: "Penetrating sealers protect against stains and moisture.", ar: "مواد العزل المتغلغلة تحمي من البقع والرطوبة." },
  "step.final.title": { en: "Final Inspection", ar: "الفحص النهائي" },
  "step.final.desc": { en: "Quality check, walkthrough and care guidance for you.", ar: "فحص الجودة، جولة نهائية وإرشادات العناية لك." },

  // Equipment
  "equip.lavor.name": { en: "Industrial Floor Scrubber", ar: "جلاية أرضيات صناعية" },
  "equip.lavor.desc": { en: "High-performance floor scrubber dryer for efficient and precise cleaning in various commercial environments.", ar: "ماكينة غسيل وتجفيف الأرضيات عالية الأداء لتنظيف فعال ودقيق في مختلف البيئات التجارية." },
  "equip.fimap.name": { en: "Automatic Walk-Behind Scrubber", ar: "جلاية أوتوماتيكية خلفية" },
  "equip.fimap.desc": { en: "Advanced walk-behind scrubber designed for high-productivity floor maintenance and superior drying results.", ar: "جلاية متطورة مصممة لصيانة الأرضيات بإنتاجية عالية ونتائج تجفيف فائقة." },
  "equip.ghibli.name": { en: "Single-Disc Floor Polisher", ar: "ماكينة تلميع أحادية القرص" },
  "equip.ghibli.desc": { en: "Versatile single-disc machine ideal for professional floor restoration, including deep cleaning and surface polishing.", ar: "ماكينة أحادية القرص متعددة الاستخدامات مثالية لترميم الأرضيات الاحترافي، بما في ذلك التنظيف العميق وتلميع الأسطح." },
  "equip.klindex.name": { en: "Planetary Marble Grinder", ar: "جلاية رخام كوكبية" },
  "equip.klindex.desc": { en: "Powerful planetary floor grinder engineered for heavy-duty marble restoration and high-gloss mirror finishing.", ar: "ماكينة جلي أرضيات كوكبية قوية مصممة لترميم الرخام الشاق والحصول على تشطيب عالي اللمعان كالمراية." },

  // FAQs
  "faq.duration.q": { en: "How long does polishing take?", ar: "كم من الوقت يستغرق التلميع؟" },
  "faq.duration.a": { en: "Most residential projects are completed within 1–2 days depending on surface area. Larger commercial spaces may take 3–5 days.", ar: "يتم الانتهاء من معظم المشاريع السكنية في غضون 1-2 يوم حسب المساحة. قد تستغرق المساحات التجارية الكبيرة 3-5 أيام." },
  "faq.shine.q": { en: "Will the shine last?", ar: "هل سيدوم اللمعان؟" },
  "faq.shine.a": { en: "With proper care, our high-gloss finish typically lasts 2–5 years. We provide aftercare guidance to extend it.", ar: "مع العناية المناسبة، عادة ما يدوم التشطيب عالي اللمعان من 2 إلى 5 سنوات. نحن نقدم إرشادات العناية اللاحقة لإطالته." },
  "faq.safety.q": { en: "Is it safe for kids or pets?", ar: "هل هو آمن للأطفال أو الحيوانات الأليفة؟" },
  "faq.safety.a": { en: "Yes. We use non-toxic cleaners and sealers. The area is safe to use a few hours after finishing.", ar: "نعم. نحن نستخدم منظفات وعوازل غير سامة. المنطقة آمنة للاستخدام بعد بضع ساعات من الانتهاء." },
  "faq.frequency.q": { en: "How often should polishing be done?", ar: "كم مرة يجب إجراء التلميع؟" },
  "faq.frequency.a": { en: "Residential marble: every 2–3 years. High-traffic commercial floors: yearly or as needed.", ar: "الرخام السكني: كل 2-3 سنوات. الأرضيات التجارية ذات الحركة المرورية العالية: سنوياً أو حسب الحاجة." },
  "faq.warranty.q": { en: "Do you provide a warranty?", ar: "هل تقدمون ضماناً؟" },
  "faq.warranty.a": { en: "Yes, we offer a satisfaction guarantee and warranty on all polishing work performed.", ar: "نعم، نحن نقدم ضمان الرضا وضماناً على جميع أعمال التلميع التي نقوم بها." },

  // Contact Page
  "contact.hero.title": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.hero.sub": { en: "Contact us for professional marble & tile polishing services in Riyadh", ar: "اتصل بنا للحصول على خدمات تلميع الرخام والسيراميك الاحترافية في الرياض" },
  "contact.direct.title": { en: "Reach Us Directly", ar: "تواصل معنا مباشرة" },
  "contact.direct.sub": { en: "We respond within an hour during business hours.", ar: "نرد في غضون ساعة خلال ساعات العمل." },
  "contact.form.title": { en: "Send a Message", ar: "أرسل رسالة" },
  "contact.form.sub": { en: "Fill the form and we'll get back to you fast.", ar: "املأ النموذج وسنقوم بالرد عليك بسرعة." },
  "contact.hours.title": { en: "Business Hours", ar: "ساعات العمل" },
  "contact.hours.sat": { en: "Saturday – Thursday: 8:00 AM – 8:00 PM", ar: "السبت – الخميس: 8:00 صباحاً – 8:00 مساءً" },
  "contact.hours.fri": { en: "Friday: Off", ar: "الجمعة: مغلق" },
  "contact.form.name": { en: "Full Name *", ar: "الاسم الكامل *" },
  "contact.form.email": { en: "Email *", ar: "البريد الإلكتروني *" },
  "contact.form.phone": { en: "Phone *", ar: "رقم الهاتف *" },
  "contact.form.service": { en: "Service Interested In", ar: "الخدمة المطلوبة" },
  "contact.form.message": { en: "Message *", ar: "الرسالة *" },
  "contact.form.submit": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.form.sending": { en: "Sending...", ar: "جاري الإرسال..." },
  "contact.form.success": { en: "Message sent! We'll be in touch shortly.", ar: "تم إرسال الرسالة! سنتواصل معك قريباً." },

  // Info Cards
  "info.phone": { en: "Phone", ar: "الهاتف" },
  "info.email": { en: "Email", ar: "البريد الإلكتروني" },
  "info.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "info.location": { en: "Location", ar: "الموقع" },

  // Contact FAQs
  "contact.faq.riyadh.q": { en: "Which areas do you serve in Riyadh?", ar: "ما هي المناطق التي تخدمونها في الرياض؟" },
  "contact.faq.riyadh.a": { en: "We serve all districts across Riyadh - North, South, East, West and the city center, including Diplomatic Quarter and surrounding compounds.", ar: "نحن نخدم جميع الأحياء في الرياض - الشمال والجنوب والشرق والغرب ووسط المدينة، بما في ذلك الحي الدبلوماسي والمجمعات السكنية المحيطة." },
  "contact.faq.duration.q": { en: "How long does marble polishing take?", ar: "كم من الوقت يستغرق تلميع الرخام؟" },
  "contact.faq.duration.a": { en: "Most homes are completed within 1–2 days. Larger commercial spaces take 3–5 days depending on scope.", ar: "يتم الانتهاء من معظم المنازل في غضون 1-2 يوم. تستغرق المساحات التجارية الكبيرة 3-5 أيام حسب النطاق." },
  "contact.faq.quote.q": { en: "Do you provide a free quote?", ar: "هل تقدمون عرض سعر مجاني؟" },
  "contact.faq.quote.a": { en: "Yes - site visit, inspection and a transparent written quote are completely free.", ar: "نعم - زيارة الموقع والفحص وعرض السعر المكتوب الشفاف كلها مجانية تماماً." },
  "contact.faq.type.q": { en: "Do you work for homes and commercial spaces?", ar: "هل تعملون للمنازل والمساحات التجارية؟" },
  "contact.faq.type.a": { en: "Both. We handle villas, apartments, hotels, retail showrooms, mosques and offices.", ar: "كلاهما. نحن نتعامل مع الفلل والشقق والفنادق ومعارض البيع بالتجزئة والمساجد والمكاتب." },
  "contact.faq.booking.q": { en: "How do I book a service?", ar: "كيف يمكنني حجز خدمة؟" },
  "contact.faq.booking.a": { en: "Message us on WhatsApp, fill the form on this page or call us directly. We respond within an hour during business hours.", ar: "راسلنا على واتساب، أو املأ النموذج في هذه الصفحة أو اتصل بنا مباشرة. نرد في غضون ساعة خلال ساعات العمل." },
};

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const sl = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (sl) setLangState(sl);
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
  phone: "+966 53 650 8959",
  whatsapp: "https://wa.me/966536508959",
  whatsappDisplay: "+92 324 2836415",
  email: "zahidzahidkhan438@gmail.com",
  location: "Riyadh, Saudi Arabia",
};
