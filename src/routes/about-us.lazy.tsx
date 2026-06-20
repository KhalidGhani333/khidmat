import { createLazyFileRoute } from "@tanstack/react-router";
import { useApp } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Award, Users, Target, Wrench, Clock, Shield } from "lucide-react";
import g7 from "@/assets/7.jpeg";
import g8 from "@/assets/8.jpeg";
import g9 from "@/assets/9.jpeg";

export const Route = createLazyFileRoute("/about-us")({
  component: AboutUsPage,
});

function AboutUsPage() {
  const { t, lang } = useApp();

  const content = {
    title: {
      en: "About marble polishing in Riyadh",
      ar: "حول جلي وتلميع الرخام في الرياض"
    },
    subtitle: {
      en: "Restoring the original, luxurious, and elegant appearance of your marble floors.",
      ar: "استعادة المظهر الأصلي والفاخر والأنيق لأرضيات الرخام الخاصة بك."
    },
    intro: {
      en: "We specialize in marble polishing in Riyadh, offering professional services designed to restore your marble to its original, luxurious, and elegant appearance. We utilize the latest polishing equipment and advanced treatment techniques to remove scratches, stains, and fading, while fully preserving the marble's quality and integrity, giving your floors a long-lasting, brilliant shine.",
      ar: "نحن متخصصون في جلي وتلميع الرخام في الرياض، ونقدم خدمات احترافية مصممة لاستعادة مظهر الرخام الأصلي والفاخر والأنيق. نحن نستخدم أحدث معدات التلميع وتقنيات المعالجة المتقدمة لإزالة الخدوش والبقع والبهتان، مع الحفاظ الكامل على جودة الرخام وسلامته، مما يمنح أرضياتك لمعاناً رائعاً يدوم طويلاً."
    },
    experience: {
      en: "Our team possesses extensive practical experience working with all types of marble and natural stone, whether in homes, villas, offices, or commercial establishments. We adhere to the highest standards of quality and precision at every stage of the work, and we strive to complete the service as quickly as possible without compromising the quality of the final results.",
      ar: "يمتلك فريقنا خبرة عملية واسعة في التعامل مع جميع أنواع الرخام والحجر الطبيعي، سواء في المنازل أو الفلل أو المكاتب أو المنشآت التجارية. نحن نلتزم بأعلى معايير الجودة والدقة في كل مرحلة من مراحل العمل، ونسعى جاهدين لإكمال الخدمة في أسرع وقت ممكن دون المساس بجودة النتائج النهائية."
    },
    satisfaction: {
      en: "We believe that customer satisfaction is the foundation of our success, so we provide customized solutions tailored to each client's needs, with competitive prices and reliable service. With marble polishing in Riyadh, we guarantee an elegant appearance, high quality, and professional care that enhances the beauty and value of your space.",
      ar: "نحن نؤمن بأن رضا العملاء هو أساس نجاحنا، لذلك نقدم حلولاً مخصصة تناسب احتياجات كل عميل، بأسعار تنافسية وخدمة موثوقة. مع جلي وتلميع الرخام في الرياض، نضمن مظهراً أنيقاً وجودة عالية وعناية احترافية تعزز جمال وقيمة مساحتك."
    },
    additionalInfo1: {
      en: "We offer marble, tile, granite, and staircase polishing services using the latest technologies and state-of-the-art equipment. We pay special attention to polishing stairs and marble facades to achieve a luxurious, long-lasting crystal-like shine. We are committed to the highest standards of precision and professionalism in our work and are fully punctual.",
      ar: "نقدم خدمات جلي وتلميع الرخام والبلاط والجرانيت والسلالم باستخدام أحدث التقنيات والمعدات المتطورة. نولي اهتماماً خاصاً لتلميع السلالم وواجهات الرخام لتحقيق لمعان فاخر يدوم طويلاً كالكريستال. نحن ملتزمون بأعلى معايير الدقة والمهنية في عملنا ونلتزم بالمواعيد بدقة."
    },
    additionalInfo2: {
      en: "We rely on Syrian expertise specializing in marble polishing and cleaning, and we offer our services in the Eastern Province for all types of marble, tiles, stone facades, and granite. Our professional technicians have extensive experience, and we use only genuine diamond polishing stones and crystal polishing materials to guarantee the best results. We also provide real photos of our previous marble polishing projects in Dammam to showcase the quality of our work and our clients' satisfaction.",
      ar: "نعتمد على الخبرة السورية المتخصصة في جلي وتلميع الرخام والتنظيف، ونقدم خدماتنا في المنطقة الشرقية لجميع أنواع الرخام والبلاط وواجهات الحجر والجرانيت. يتمتع فنيونا المحترفون بخبرة واسعة، ونستخدم فقط أحجار جلي الألماس الأصلية ومواد التلميع الكريستالية لضمان أفضل النتائج. كما نقدم صوراً حقيقية لمشاريعنا السابقة في جلي وتلميع الرخام في الدمام لعرض جودة عملنا ورضا عملائنا."
    },
    cracksTitle: {
      en: "Repairing tile cracks and making special arrangements for polishing old tiles",
      ar: "إصلاح تشققات البلاط وعمل ترتيبات خاصة لتلميع البلاط القديم"
    },
    cracksContent: {
      en: "In Riyadh, we offer specialized marble polishing services, including tile cleaning and crack repair. We understand that tile cracks are among the most common problems and require prompt intervention to prevent further damage. These cracks can result from natural factors such as temperature and humidity changes, or from technical issues like poor installation or excessive pressure on the tiles over time. We carefully assess cracks to determine their type, whether they are superficial cracks caused by weather conditions or deep cracks that may indicate a problem in the underlying structure. After inspection, we choose the most suitable repair method that addresses the root cause while preserving the quality and durability of the tiles.",
      ar: "في الرياض، نقدم خدمات متخصصة في جلي وتلميع الرخام، بما في ذلك تنظيف البلاط وإصلاح التشققات. نحن ندرك أن تشققات البلاط من بين المشاكل الأكثر شيوعاً وتتطلب تدخلاً فورياً لمنع المزيد من الضرر. يمكن أن تنتج هذه التشققات عن عوامل طبيعية مثل تغيرات درجات الحرارة والرطوبة، أو عن مشاكل فنية مثل سوء التركيب أو الضغط الزائد على البلاط بمرور الوقت. نحن نقيم التشققات بعناية لتحديد نوعها، سواء كانت تشققات سطحية ناتجة عن الظروف الجوية أو تشققات عميقة قد تشير إلى مشكلة في الهيكل الأساسي. بعد الفحص، نختار طريقة الإصلاح الأكثر ملاءمة التي تعالج السبب الجذري مع الحفاظ على جودة ومتانة البلاط."
    },
    patioTitle: {
      en: "The importance of polishing patio tiles",
      ar: "أهمية جلي وتلميع بلاط الحوش"
    },
    patioContent: {
      en: "We believe that polishing patio tiles is essential for maintaining the elegance and cleanliness of outdoor spaces. Over time, tiles accumulate dust, stains, and weather elements that affect their appearance and shine. We utilize modern techniques and specialized cleaning materials that effectively remove dirt and restore the tiles' natural luster and vitality, leaving your patio looking stylish and refreshed. The tile polishing process begins with a deep cleaning that removes stubborn deposits and stains using advanced equipment, ensuring the tiles are protected from any damage. Whether you're looking for routine maintenance or a complete overhaul of your faded patio tiles, our team offers flexible and tailored solutions for every situation, transforming your patio into a comfortable and inviting space for everyday use.",
      ar: "نحن نؤمن بأن جلي وتلميع بلاط الحوش ضروري للحفاظ على أناقة ونظافة المساحات الخارجية. بمرور الوقت، يتراكم الغبار والبقع والعوامل الجوية على البلاط مما يؤثر على مظهره ولمعانه. نحن نستخدم تقنيات حديثة ومواد تنظيف متخصصة تزيل الأوساخ بفعالية وتعيد للبلاط بريقه وحيويته الطبيعية، مما يترك حوش منزلك يبدو أنيقاً ومتجدداً. تبدأ عملية تلميع البلاط بتنظيف عميق يزيل الترسبات والبقع المستعصية باستخدام معدات متقدمة، مما يضمن حماية البلاط من أي ضرر. سواء كنت تبحث عن صيانة روتينية أو تجديد شامل لبلاط الحوش الباهت، يقدم فريقنا حلولاً مرنة ومخصصة لكل موقف، مما يحول حوش منزلك إلى مساحة مريحة وجذابة للاستخدام اليومي."
    },
    team: {
      en: "Our Professional Team",
      ar: "فريقنا المحترف"
    },
    teamContent: {
      en: "Our team consists of highly skilled and trained specialists who understand the unique characteristics of different marble and tile surfaces. With years of hands-on experience, they execute every project with utmost precision and care, ensuring a spotless and shining finish.",
      ar: "يتكون فريقنا من أخصائيين مدربين وذوي مهارات عالية يفهمون الخصائص الفريدة لمختلف أسطح الرخام والبلاط. مع سنوات من الخبرة العملية، يقومون بتنفيذ كل مشروع بأقصى درجات الدقة والعناية، مما يضمن تشطيباً خالياً من العيوب ولامعاً."
    }
  };

  const values = [
    {
      icon: Award,
      title: lang === "en" ? "Quality Excellence" : "التميز في الجودة",
      desc: lang === "en" ? "We never compromise on quality and always use premium materials" : "لا نتنازل أبداً عن الجودة ونستخدم دائماً مواد متميزة"
    },
    {
      icon: Users,
      title: lang === "en" ? "Customer First" : "العميل أولاً",
      desc: lang === "en" ? "Your satisfaction is our top priority in every project" : "رضاك هو أولويتنا القصوى في كل مشروع"
    },
    {
      icon: Target,
      title: lang === "en" ? "Precision Work" : "عمل دقيق",
      desc: lang === "en" ? "Meticulous attention to detail in every step of the process" : "اهتمام دقيق بالتفاصيل في كل خطوة من العملية"
    },
    {
      icon: Wrench,
      title: lang === "en" ? "Professional Tools" : "أدوات احترافية",
      desc: lang === "en" ? "Italian equipment and genuine diamond polishing materials" : "معدات إيطالية ومواد جلي ألماس أصلية"
    },
    {
      icon: Clock,
      title: lang === "en" ? "Timely Delivery" : "التسليم في الوقت المحدد",
      desc: lang === "en" ? "We respect your time and complete projects on schedule" : "نحترم وقتك ونكمل المشاريع في الموعد المحدد"
    },
    {
      icon: Shield,
      title: lang === "en" ? "Guaranteed Results" : "نتائج مضمونة",
      desc: lang === "en" ? "Satisfaction guarantee on all our polishing and cleaning work" : "ضمان الرضا على جميع أعمال التلميع والتنظيف"
    },
  ];

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
              {lang === "en" ? "Who We Are" : "من نحن"}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: 5, s: "+", l: lang === "en" ? "Years Experience" : "سنوات خبرة" },
              { n: 100, s: "+", l: lang === "en" ? "Projects Done" : "مشاريع منجزة" },
              { n: 100, s: "%", l: lang === "en" ? "Satisfaction Rate" : "نسبة الرضا" },
              { n: 50, s: "+", l: lang === "en" ? "Regular Clients" : "عملاء منتظمين" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-black text-gold">
                  <Counter to={stat.n} suffix={stat.s} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{stat.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-luxe">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
              {content.title[lang]}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {content.intro[lang]}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {content.experience[lang]}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {content.satisfaction[lang]}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {content.additionalInfo1[lang]}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.additionalInfo2[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cracks Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
              {content.cracksTitle[lang]}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.cracksContent[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Patio Section */}
      <section className="py-16">
        <div className="container-luxe">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
              {content.patioTitle[lang]}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.patioContent[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-luxe">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
              {lang === "en" ? "Our Values" : "قيمنا"}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-gold transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
              {content.team[lang]}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.teamContent[lang]}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
