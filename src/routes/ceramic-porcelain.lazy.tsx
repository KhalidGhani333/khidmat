import { createLazyFileRoute } from "@tanstack/react-router";
import { useApp } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { Sparkles, Droplets, Shield, Clock } from "lucide-react";
import g10 from "@/assets/10.jpeg";
import g11 from "@/assets/11.jpeg";
import g12 from "@/assets/12.jpeg";
import g13 from "@/assets/13.jpeg";

export const Route = createLazyFileRoute("/ceramic-porcelain")({
  component: CeramicPorcelainPage,
});

function CeramicPorcelainPage() {
  const { t, lang } = useApp();

  const content = {
    title: {
      en: "Cleaning ceramic and porcelain",
      ar: "تنظيف السيراميك والبورسلان"
    },
    subtitle: {
      en: "Ceramic and porcelain cleaning in Riyadh",
      ar: "تنظيف السيراميك والبورسلان في الرياض"
    },
    intro: {
      en: "Ceramic and porcelain floor cleaning services in Riyadh are essential for maintaining the cleanliness, beauty, and shine of your floors in the long term. Ceramic and porcelain are among the most commonly used flooring materials in homes, villas, offices, and commercial establishments due to their durability and elegant appearance. However, over time, they accumulate dirt, stains, and grease, and lose their shine due to daily use and improper cleaning methods. This is where the importance of professional cleaning comes in, restoring floors to their original cleanliness and luster without causing any damage. At Marble Polishing in Riyadh, we offer a specialized service for cleaning ceramics and porcelain using the latest equipment and modern technologies, relying on safe and effective cleaning materials that ensure the removal of deep dirt and tough stains, while preserving the surface quality and its original appearance.",
      ar: "خدمات تنظيف أرضيات السيراميك والبورسلان في الرياض ضرورية للحفاظ على نظافة وجمال ولمعان أرضياتك على المدى الطويل. يعتبر السيراميك والبورسلان من أكثر مواد الأرضيات استخداماً في المنازل والفلل والمكاتب والمنشآت التجارية نظراً لمتانتها ومظهرها الأنيق. ومع ذلك، بمرور الوقت، تتراكم الأوساخ والبقع والشحوم، وتفقد لمعانها بسبب الاستخدام اليومي وطرق التنظيف غير المناسبة. وهنا تأتي أهمية التنظيف الاحترافي، لاستعادة الأرضيات إلى نظافتها وبريقها الأصلي دون التسبب في أي ضرر. في جلي الرخام بالرياض، نقدم خدمة متخصصة لتنظيف السيراميك والبورسلان باستخدام أحدث المعدات والتقنيات الحديثة، مع الاعتماد على مواد تنظيف آمنة وفعالة تضمن إزالة الأوساخ العميقة والبقع الصعبة، مع الحفاظ على جودة السطح ومظهره الأصلي."
    },
    section1Title: {
      en: "The importance of professionally cleaning ceramic and porcelain tiles",
      ar: "أهمية التنظيف الاحترافي لبلاط السيراميك والبورسلان"
    },
    section1Content: {
      en: "The importance of professional ceramic and porcelain cleaning lies in preserving the aesthetic appearance of the space and enhancing the feeling of cleanliness and comfort. Traditional cleaning may only remove surface dirt, while dust and grease remain accumulated within the grout and pores, affecting the overall appearance of the floor and causing discoloration over time.\n\nProfessional cleaning also helps extend the life of floors by preventing the accumulation of harmful substances that can damage the surface or weaken the joints. Furthermore, clean floors reduce the spread of germs and bacteria, providing a healthier and safer environment, especially in homes and high-traffic areas.",
      ar: "تكمن أهمية التنظيف الاحترافي للسيراميك والبورسلان في الحفاظ على المظهر الجمالي للمساحة وتعزيز الشعور بالنظافة والراحة. قد يزيل التنظيف التقليدي الأوساخ السطحية فقط، بينما يظل الغبار والشحوم متراكماً داخل الجص والمسام، مما يؤثر على المظهر العام للأرضية ويسبب تغير اللون بمرور الوقت.\n\nيساعد التنظيف الاحترافي أيضاً في إطالة عمر الأرضيات عن طريق منع تراكم المواد الضارة التي يمكن أن تتلف السطح أو تضعف المفاصل. علاوة على ذلك، تقلل الأرضيات النظيفة من انتشار الجراثيم والبكتيريا، مما يوفر بيئة أكثر صحة وأماناً، خاصة في المنازل والمناطق ذات الحركة المرورية العالية."
    },
    section2Title: {
      en: "The difference between cleaning ceramic and cleaning porcelain",
      ar: "الفرق بين تنظيف السيراميك وتنظيف البورسلان"
    },
    section2Content: {
      en: "Despite their similarities, ceramic and porcelain tiles have distinct characteristics that require specific cleaning methods. Ceramic is often more porous, making it more prone to absorbing dirt and stains, especially in the grout lines. Porcelain, on the other hand, has a denser and more durable surface, but it can lose its shine if cleaned with unsuitable products.\n\nAt Marble Polishing in Riyadh, we take these differences into account carefully, and we use cleaning materials and techniques specifically designed for each type, to ensure the best result without affecting the color, texture, or natural shine of the floor.",
      ar: "على الرغم من تشابههما، يتمتع بلاط السيراميك والبورسلان بخصائص مميزة تتطلب طرق تنظيف محددة. غالباً ما يكون السيراميك أكثر مسامية، مما يجعله أكثر عرضة لامتصاص الأوساخ والبقع، خاصة في خطوط الجص. من ناحية أخرى، يتمتع البورسلان بسطح أكثر كثافة ومتانة، لكنه يمكن أن يفقد لمعانه إذا تم تنظيفه بمنتجات غير مناسبة.\n\nفي جلي الرخام بالرياض، نأخذ هذه الاختلافات في الاعتبار بعناية، ونستخدم مواد وتقنيات تنظيف مصممة خصيصاً لكل نوع، لضمان أفضل نتيجة دون التأثير على اللون أو الملمس أو اللمعان الطبيعي للأرضية."
    },
    section3Title: {
      en: "Steps for cleaning ceramic and porcelain",
      ar: "خطوات تنظيف السيراميك والبورسلان"
    },
    section3Content: {
      en: "We are committed to following a well-planned and systematic approach when providing ceramic and porcelain cleaning services to ensure optimal results. The process begins with inspecting the floor to determine the level of soiling and the type of stains present. Surface dirt is then removed using specialized equipment.\n\nThis is followed by a deep cleaning stage using modern equipment and effective cleaning agents that break down grease and accumulated stains within pores and crevices. The floor is then thoroughly rinsed to ensure the removal of any cleaning residue. In the final stage, we dry the floor and polish it, if necessary, to restore its natural shine and give it a clean, uniform appearance.",
      ar: "نحن ملتزمون باتباع نهج مخطط ومنهجي عند تقديم خدمات تنظيف السيراميك والبورسلان لضمان الحصول على أفضل النتائج. تبدأ العملية بفحص الأرضية لتحديد مستوى الاتساخ ونوع البقع الموجودة. ثم تتم إزالة الأوساخ السطحية باستخدام معدات متخصصة.\n\nيتبع ذلك مرحلة تنظيف عميق باستخدام معدات حديثة وعوامل تنظيف فعالة تفتت الشحوم والبقع المتراكمة داخل المسام والشقوق. ثم يتم شطف الأرضية جيداً لضمان إزالة أي بقايا للتنظيف. في المرحلة النهائية، نقوم بتجفيف الأرضية وتلميعها، إذا لزم الأمر، لاستعادة لمعانها الطبيعي ومنحها مظهراً نظيفاً وموحداً."
    },
    jointsSection: {
      en: "Cleaning the joints and removing tough stains",
      ar: "تنظيف المفاصل وإزالة البقع الصعبة"
    },
    jointsContent: {
      en: "Grouts are among the areas where dirt and bacteria accumulate most, and they are often difficult to clean using traditional methods. Therefore, we pay special attention to cleaning grout using specialized tools and techniques that restore its original color and improve the overall appearance of the floor. We also handle various types of tough stains, such as oil stains, paint stains, cement residue, and construction debris, using safe materials that won't damage your ceramic or porcelain floors. This meticulous care makes a noticeable difference in the cleanliness and shine of your floors.",
      ar: "تعد فواصل السيراميك (الترويبة) من بين المناطق التي تتراكم فيها الأوساخ والبكتيريا أكثر من غيرها، وغالباً ما يكون تنظيفها صعباً باستخدام الطرق التقليدية. لذلك، نولي اهتماماً خاصاً لتنظيف فواصل البلاط باستخدام أدوات وتقنيات متخصصة تعيد لونها الأصلي وتحسن المظهر العام للأرضية. كما نتعامل مع أنواع مختلفة من البقع الصعبة، مثل بقع الزيت، وبقع الطلاء، وبقايا الأسمنت، ومخلفات البناء، باستخدام مواد آمنة لا تلحق الضرر بأرضيات السيراميك أو البورسلان الخاصة بك. هذا الاهتمام الدقيق يحدث فرقاً ملحوظاً في نظافة ولمعان أرضياتك."
    },
    homesSection: {
      en: "Cleaning ceramic and porcelain tiles in homes",
      ar: "تنظيف السيراميك والبورسلان في المنازل"
    },
    homesContent: {
      en: "In homes, floors are subjected to constant daily use, leading to dirt buildup and loss of shine. At Marble Polishing in Riyadh, we offer a specialized home cleaning service that prioritizes residents' comfort and safety, using safe, odorless cleaning products. We are committed to completing the work quickly and efficiently without causing any inconvenience, ensuring the space is left clean and tidy after the service is finished. Our goal is to provide a clean and elegant home environment that reflects comfort and beauty.",
      ar: "في المنازل، تتعرض الأرضيات للاستخدام اليومي المستمر، مما يؤدي إلى تراكم الأوساخ وفقدان اللمعان. في جلي الرخام بالرياض، نقدم خدمة تنظيف منزلية متخصصة تضع راحة وسلامة السكان في أولوياتها، باستخدام منتجات تنظيف آمنة وعديمة الرائحة. نحن ملتزمون بإنجاز العمل بسرعة وكفاءة دون التسبب في أي إزعاج، مما يضمن ترك المساحة نظيفة ومرتبة بعد انتهاء الخدمة. هدفنا هو توفير بيئة منزلية نظيفة وأنيقة تعكس الراحة والجمال."
    },
    commercialSection: {
      en: "Ceramic and porcelain cleaning for villas and commercial establishments",
      ar: "تنظيف السيراميك والبورسلان للفلل والمنشآت التجارية"
    },
    commercialContent: {
      en: "Villas and commercial establishments require a high level of cleanliness to maintain a luxurious and professional appearance. Therefore, we offer ceramic and porcelain cleaning services for offices, shops, hotels, and shopping centers, with a firm commitment to punctuality and the highest quality workmanship. We understand the importance of time in these spaces, so we strive to complete the work in the shortest possible time while guaranteeing outstanding, long-lasting results. We also offer regular cleaning plans to keep the floors consistently clean.",
      ar: "تتطلب الفلل والمنشآت التجارية مستوى عالٍ من النظافة للحفاظ على مظهر فاخر واحترافي. لذلك، نقدم خدمات تنظيف السيراميك والبورسلان للمكاتب والمحلات التجارية والفنادق ومراكز التسوق، مع التزام ثابت بالالتزام بالمواعيد وأعلى جودة في العمل. نحن نتفهم أهمية الوقت في هذه المساحات، لذلك نسعى جاهدين لإكمال العمل في أقصر وقت ممكن مع ضمان نتائج متميزة وطويلة الأمد. كما نقدم خطط تنظيف منتظمة للحفاظ على نظافة الأرضيات بشكل مستمر."
    },
    materialsSection: {
      en: "Materials and techniques used in cleaning",
      ar: "المواد والتقنيات المستخدمة في التنظيف"
    },
    materialsContent: {
      en: "In Riyadh, we utilize the latest technologies and advanced technologies for marble polishing, including ceramic and porcelain cleaning. We employ steam cleaning equipment, appropriate pressure devices, and certified, safe cleaning materials that effectively remove dirt without affecting surface quality. Choosing the right materials is a key element in the success of the cleaning process, as we are keen to use detergents that preserve the natural color and prevent damage or corrosion, while taking into account environmental and health standards.",
      ar: "في الرياض، نستخدم أحدث التقنيات والتقنيات المتقدمة لتلميع الرخام، بما في ذلك تنظيف السيراميك والبورسلان. نستخدم معدات التنظيف بالبخار، وأجهزة الضغط المناسبة، ومواد تنظيف معتمدة وآمنة تزيل الأوساخ بفعالية دون التأثير على جودة السطح. يعد اختيار المواد المناسبة عنصراً أساسياً في نجاح عملية التنظيف، حيث نحرص على استخدام منظفات تحافظ على اللون الطبيعي وتمنع الضرر أو التآكل، مع مراعاة المعايير البيئية والصحية."
    },
    advantagesSection: {
      en: "Advantages of our ceramic and porcelain cleaning service",
      ar: "مميزات خدمة تنظيف السيراميك والبورسلان لدينا"
    },
    advantagesContent: {
      en: "What sets our service apart is our attention to detail and high-quality execution. We have a highly trained and experienced team specializing in cleaning various types of flooring, dedicated to providing a professional service that meets our clients' expectations. We also offer competitive prices and a variety of options to suit different needs, while maintaining a strong commitment to quality and transparency. Customer satisfaction is our top priority, and we always strive to deliver results that exceed expectations.",
      ar: "ما يميز خدمتنا هو اهتمامنا بالتفاصيل وجودة التنفيذ العالية. لدينا فريق مدرب وذو خبرة عالية ومتخصص في تنظيف مختلف أنواع الأرضيات، ومكرس لتقديم خدمة احترافية تلبي توقعات عملائنا. كما نقدم أسعاراً تنافسية ومجموعة متنوعة من الخيارات لتناسب الاحتياجات المختلفة، مع الحفاظ على التزام قوي بالجودة والشفافية. رضا العملاء هو أولويتنا القصوى، ونحن نسعى دائماً لتقديم نتائج تتجاوز التوقعات."
    },
    tipsSection: {
      en: "Tips for keeping ceramic and porcelain tiles clean",
      ar: "نصائح للحفاظ على نظافة بلاط السيراميك والبورسلان"
    },
    tipsContent: {
      en: "After completing the cleaning service, we provide our clients with a range of tips for maintaining clean floors, such as regular cleaning with appropriate materials, avoiding the use of harsh detergents, and cleaning up liquids immediately after spillage. Adhering to these tips helps maintain the clean and shiny appearance of floors for longer, and reduces the need for frequent deep cleaning.",
      ar: "بعد الانتهاء من خدمة التنظيف، نقدم لعملائنا مجموعة من النصائح للحفاظ على نظافة الأرضيات، مثل التنظيف المنتظم باستخدام مواد مناسبة، وتجنب استخدام المنظفات القاسية، وتنظيف السوائل فور انسكابها. يساعد اتباع هذه النصائح في الحفاظ على المظهر النظيف واللامع للأرضيات لفترة أطول، ويقلل من الحاجة إلى التنظيف العميق المتكرر."
    },
    whySection: {
      en: "Why choose marble polishing in Riyadh?",
      ar: "لماذا تختار تلميع الرخام في الرياض؟"
    },
    whyContent: {
      en: "Choosing marble polishing services in Riyadh means receiving a comprehensive service based on expertise, quality, and commitment. We work diligently to provide effective solutions that restore your floors' cleanliness and shine, preserving their aesthetic value. Whether you're looking to clean ceramic tiles for your home or porcelain tiles for your business, we guarantee professional results, reliable service, and competitive prices. Your trust in us motivates us to always deliver the best and make your floors a symbol of cleanliness and elegance everywhere.",
      ar: "اختيار خدمات تلميع الرخام في الرياض يعني الحصول على خدمة شاملة قائمة على الخبرة والجودة والالتزام. نحن نعمل بجد لتقديم حلول فعالة تعيد نظافة ولمعان أرضياتك، مع الحفاظ على قيمتها الجمالية. سواء كنت تتطلع إلى تنظيف بلاط السيراميك لمنزلك أو بلاط البورسلان لعملك، فإننا نضمن نتائج احترافية وخدمة موثوقة وأسعاراً تنافسية. ثقتكم بنا تحفزنا دائماً على تقديم الأفضل وجعل أرضياتك رمزاً للنظافة والأناقة في كل مكان."
    },
  };

  const benefits = [
    {
      icon: Sparkles,
      title: lang === "en" ? "Restores Original Shine" : "يعيد اللمعان الأصلي",
      desc: lang === "en" ? "Removes dullness and restores the surface to its original glossy finish" : "يزيل البهتان ويعيد السطح إلى تشطيبه اللامع الأصلي"
    },
    {
      icon: Droplets,
      title: lang === "en" ? "Deep Grout Cleaning" : "تنظيف عميق للجص",
      desc: lang === "en" ? "Eliminates dirt and stains from grout lines for a uniform clean look" : "يزيل الأوساخ والبقع من خطوط الجص للحصول على مظهر نظيف موحد"
    },
    {
      icon: Shield,
      title: lang === "en" ? "Prevents Mold Growth" : "يمنع نمو العفن",
      desc: lang === "en" ? "Professional cleaning removes mold and prevents future growth" : "التنظيف الاحترافي يزيل العفن ويمنع النمو المستقبلي"
    },
    {
      icon: Clock,
      title: lang === "en" ? "Extends Surface Life" : "يطيل عمر السطح",
      desc: lang === "en" ? "Regular maintenance keeps surfaces looking new for years" : "الصيانة المنتظمة تحافظ على الأسطح تبدو جديدة لسنوات"
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
              {lang === "en" ? "Professional Cleaning" : "تنظيف احترافي"}
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

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.intro[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g10} alt="Ceramic Cleaning" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g11} alt="Why Clean" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.section1Title[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.section1Content[lang]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.section3Title[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.section3Content[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g12} alt="Cleaning Steps" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Joints Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g11} alt="Joints Cleaning" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.jointsSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.jointsContent[lang]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Homes Section */}
      <section className="py-16">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.homesSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.homesContent[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g10} alt="Homes Cleaning" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g13} alt="Commercial Cleaning" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.commercialSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.commercialContent[lang]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.materialsSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.materialsContent[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g12} alt="Materials Used" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <Reveal className="text-center max-w-3xl mx-auto">
             <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.advantagesSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.advantagesContent[lang]}
              </p>
          </Reveal>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g11} alt="Tips" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.tipsSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.tipsContent[lang]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <Reveal className="text-center max-w-3xl mx-auto">
             <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.whySection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.whyContent[lang]}
              </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-luxe">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
              {content.section3Title[lang]}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-gold transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
