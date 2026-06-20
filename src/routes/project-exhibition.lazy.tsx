import { createLazyFileRoute } from "@tanstack/react-router";
import { useApp } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { Award, CheckCircle, Users, Target } from "lucide-react";
import g1 from "@/assets/1.jpeg";
import g2 from "@/assets/2.jpeg";
import g3 from "@/assets/3.jpeg";
import g4 from "@/assets/4.jpeg";
import g5 from "@/assets/5.jpeg";
import g6 from "@/assets/6.jpeg";
import g7 from "@/assets/7.jpeg";
import g8 from "@/assets/8.jpeg";

export const Route = createLazyFileRoute("/project-exhibition")({
  component: ProjectExhibitionPage,
});

function ProjectExhibitionPage() {
  const { t, lang } = useApp();

  const content = {
    title: {
      en: "Project Exhibition",
      ar: "معرض المشاريع"
    },
    subtitle: {
      en: "Showcasing our finest marble and tile restoration projects across Riyadh",
      ar: "عرض أفضل مشاريع ترميم الرخام والبلاط في الرياض"
    },
    intro: {
      en: "Explore our portfolio of completed projects that demonstrate our commitment to excellence in marble polishing, tile restoration, and comprehensive cleaning services. Each project reflects our dedication to quality craftsmanship and customer satisfaction.",
      ar: "استكشف محفظة مشاريعنا المكتملة التي تظهر التزامنا بالتميز في تلميع الرخام وترميم البلاط وخدمات التنظيف الشاملة. يعكس كل مشروع تفانينا في الحرفية الجودة ورضا العملاء."
    },
    residential: {
      en: "Residential Projects",
      ar: "المشاريع السكنية"
    },
    residentialDesc: {
      en: "We have successfully completed hundreds of residential projects in villas, apartments, and private homes across all Riyadh districts. Our services include marble floor polishing, ceramic cleaning, bathroom restoration, and outdoor patio refinishing.",
      ar: "لقد أكملنا بنجاح المئات من المشاريع السكنية في الفلل والشقق والمنازل الخاصة في جميع أحياء الرياض. تشمل خدماتنا تلميع أرضيات الرخام وتنظيف السيراميك وترميم الحمامات وتجديد الباحات الخارجية."
    },
    commercial: {
      en: "Commercial Projects",
      ar: "المشاريع التجارية"
    },
    commercialDesc: {
      en: "Our expertise extends to large-scale commercial spaces including hotels, office buildings, retail showrooms, and mosques. We use industrial-grade equipment to deliver exceptional results on time and within budget.",
      ar: "تمتد خبرتنا إلى المساحات التجارية الكبيرة بما في ذلك الفنادق والمباني المكتبية وصالات العرض التجارية والمساجد. نستخدم معدات صناعية لتحقيق نتائج استثنائية في الوقت المحدد وضمن الميزانية."
    },
    specialty: {
      en: "Specialty Services",
      ar: "الخدمات المتخصصة"
    },
    specialtyDesc: {
      en: "In addition to standard polishing, we offer specialized services including crack repair, staircase restoration, water tank cleaning, and protective sealing. Every project receives customized treatment based on surface type and condition.",
      ar: "بالإضافة إلى التلميع القياسي، نقدم خدمات متخصصة تشمل إصلاح التشققات وترميم الدرج وتنظيف خزانات المياه والعزل الواقي. يتلقى كل مشروع معاملة مخصصة بناءً على نوع السطح وحالته."
    },
  };

  const stats = [
    {
      icon: Award,
      number: "100+",
      label: lang === "en" ? "Completed Projects" : "مشاريع مكتملة"
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: lang === "en" ? "Client Satisfaction" : "رضا العملاء"
    },
    {
      icon: Users,
      number: "50+",
      label: lang === "en" ? "Regular Clients" : "عملاء منتظمين"
    },
    {
      icon: Target,
      number: "5+",
      label: lang === "en" ? "Years Experience" : "سنوات خبرة"
    },
  ];

  const gallery = [g1, g2, g3, g4, g5, g6, g7, g8];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0M5QjQwMCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] animate-[slide_60s_linear_infinite]" />
        </div>
        <div className="container-luxe relative z-10 py-20">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {lang === "en" ? "Our Portfolio" : "محفظة أعمالنا"}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {content.title[lang]}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {content.subtitle[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                      <stat.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="font-display text-3xl font-black text-gold">{stat.number}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.intro[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Residential Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.residential[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.residentialDesc[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img src={g1} alt="Residential Project 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img src={g2} alt="Residential Project 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img src={g3} alt="Commercial Project 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img src={g4} alt="Commercial Project 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.commercial[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.commercialDesc[lang]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.specialty[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.specialtyDesc[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img src={g5} alt="Specialty Service 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img src={g6} alt="Specialty Service 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
              {lang === "en" ? "Complete Project Gallery" : "معرض المشاريع الكامل"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                  <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
