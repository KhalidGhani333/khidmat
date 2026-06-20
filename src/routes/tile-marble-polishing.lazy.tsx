import { createLazyFileRoute } from "@tanstack/react-router";
import { useApp } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { Gem, Sparkles, Shield, Zap } from "lucide-react";
import g14 from "@/assets/14.jpeg";
import g15 from "@/assets/15.jpeg";
import g16 from "@/assets/16.jpeg";
import g17 from "@/assets/17.jpeg";

export const Route = createLazyFileRoute("/tile-marble-polishing")({
  component: TileMarblePolishingPage,
});

function TileMarblePolishingPage() {
  const { t, lang } = useApp();

  const content = {
    title: {
      en: "Tile cleaning and marble polishing in Riyadh",
      ar: "جلي بلاط وتلميع رخام في الرياض"
    },
    subtitle: {
      en: "Professional diamond polishing services for tiles and marble surfaces",
      ar: "خدمات تلميع احترافية بالألماس للبلاط والرخام"
    },
    intro: {
      en: "Tile and marble polishing services in Riyadh are essential for maintaining the beauty and elegance of floors and restoring their luxurious appearance over time. Marble and tile floors are affected by daily use, foot traffic, spills, and weather conditions, leading to loss of shine and the appearance of scratches and stains. This is where the importance of professional polishing comes in, addressing these problems with specialized methods that guarantee clear results and a long-lasting shine.",
      ar: "خدمات جلي وتلميع البلاط والرخام في الرياض ضرورية للحفاظ على جمال وأناقة الأرضيات واستعادة مظهرها الفاخر بمرور الوقت. تتأثر الأرضيات الرخامية والبلاط بالاستخدام اليومي، وحركة المرور، والانسكابات، والظروف الجوية، مما يؤدي إلى فقدان اللمعان وظهور الخدوش والبقع. وهنا تأتي أهمية التلميع الاحترافي، لمعالجة هذه المشاكل بطرق متخصصة تضمن نتائج واضحة ولمعاناً يدوم طويلاً."
    },
    tileSection: {
      en: "The importance of tile cleaning and marble polishing",
      ar: "أهمية جلي وتنظيف البلاط والرخام"
    },
    tileContent: {
      en: "The importance of tile and marble polishing lies in maintaining the aesthetic appearance of any space, whether it's a home, office, or commercial establishment. Clean, shiny floors create a positive first impression and convey a sense of luxury and cleanliness. Furthermore, the polishing process helps remove damaged layers and deep scratches that can lead to the accumulation of dirt and bacteria.",
      ar: "تكمن أهمية جلي البلاط وتلميع الرخام في الحفاظ على المظهر الجمالي لأي مساحة، سواء كانت منزلاً أو مكتباً أو منشأة تجارية. تخلق الأرضيات النظيفة واللامعة انطباعاً أولياً إيجابياً وتضفي شعوراً بالفخامة والنظافة. علاوة على ذلك، تساعد عملية التلميع في إزالة الطبقات التالفة والخدوش العميقة التي يمكن أن تؤدي إلى تراكم الأوساخ والبكتيريا."
    },
    marbleSection: {
      en: "Steps for tile cleaning and marble polishing",
      ar: "خطوات جلي وتنظيف البلاط والرخام"
    },
    marbleContent: {
      en: "At our marble polishing service in Riyadh, we are committed to following well-planned and meticulous steps to ensure the best results in every project. The process begins with inspecting the floor to determine the level of damage and the type of marble or tile used. Following this, the surface is thoroughly cleaned to remove dirt and any remaining impurities. This is followed by a polishing stage using specialized equipment and diamond discs of varying grit, where the surface is smoothed and deep scratches and stains are removed. After polishing is complete, we move to the buffing stage, which highlights the natural color of the marble and gives it an attractive and consistent shine. In the final stage, special protective materials are applied to help maintain the shine and prevent liquid absorption.",
      ar: "في خدمة جلي الرخام لدينا في الرياض، نحن ملتزمون باتباع خطوات مخططة ومدروسة بعناية لضمان أفضل النتائج في كل مشروع. تبدأ العملية بفحص الأرضية لتحديد مستوى الضرر ونوع الرخام أو البلاط المستخدم. بعد ذلك، يتم تنظيف السطح جيداً لإزالة الأوساخ وأي شوائب متبقية. يتبع ذلك مرحلة تلميع باستخدام معدات متخصصة وأقراص ألماس بدرجات خشنة مختلفة، حيث يتم تنعيم السطح وإزالة الخدوش العميقة والبقع. بعد اكتمال التلميع، ننتقل إلى مرحلة الصقل، التي تبرز اللون الطبيعي للرخام وتمنحه لمعاناً جذاباً ومتسقاً. في المرحلة النهائية، يتم تطبيق مواد حماية خاصة للمساعدة في الحفاظ على اللمعان ومنع امتصاص السوائل."
    },
    processSection: {
      en: "Types of marble and tiles we serve",
      ar: "أنواع الرخام والبلاط التي نخدمها"
    },
    processContent: {
      en: "We have extensive experience handling all types of marble and tiles used in Riyadh. Whether it's natural marble, engineered marble, ceramic tiles, or porcelain, our team can choose the optimal polishing and buffing method to suit the specific characteristics of each surface. We use equipment and materials compatible with the specific flooring type to ensure no damage or discoloration occurs. This expertise allows us to provide a professional service suitable for various spaces, from small homes to palaces and large shopping centers.",
      ar: "لدينا خبرة واسعة في التعامل مع جميع أنواع الرخام والبلاط المستخدمة في الرياض. سواء كان رخاماً طبيعياً، أو رخاماً صناعياً، أو بلاط سيراميك، أو بورسلان، يمكن لفريقنا اختيار طريقة التلميع والصقل المثالية لتناسب الخصائص المحددة لكل سطح. نستخدم معدات ومواد متوافقة مع نوع الأرضيات المحددة لضمان عدم حدوث أي ضرر أو تغير في اللون. تتيح لنا هذه الخبرة تقديم خدمة احترافية مناسبة لمساحات متنوعة، من المنازل الصغيرة إلى القصور ومراكز التسوق الكبيرة."
    },
    homesSection: {
      en: "Tile polishing for homes and villas",
      ar: "جلي البلاط للمنازل والفلل"
    },
    homesContent: {
      en: "Homes and villas require special floor care to maintain their beauty and cleanliness. Tile polishing restores the floors' luster and removes the effects of daily use, such as stains, scratches, and dullness. Our marble polishing services in Riyadh are tailored to the specific needs of residential use, ensuring quick and precise work without disturbing the residents.",
      ar: "تتطلب المنازل والفلل عناية خاصة بالأرضيات للحفاظ على جمالها ونظافتها. يعيد جلي البلاط للأرضيات بريقها ويزيل آثار الاستخدام اليومي، مثل البقع والخدوش والبهتان. تم تصميم خدمات تلميع الرخام لدينا في الرياض لتلبية الاحتياجات المحددة للاستخدام السكني، مما يضمن عملاً سريعاً ودقيقاً دون إزعاج السكان."
    },
    commercialSection: {
      en: "Marble polishing and cleaning for offices and commercial establishments",
      ar: "تلميع وتنظيف الرخام للمكاتب والمنشآت التجارية"
    },
    commercialContent: {
      en: "Flooring plays a crucial role in defining the identity of offices and commercial establishments. A bright and clean appearance reflects professionalism and leaves a positive impression on clients and visitors. Therefore, we offer marble polishing and cleaning services for offices, companies, shops, and hotels, taking into account the specific nature of the work and adhering to agreed-upon schedules. We execute the work with high efficiency and in the shortest possible time to minimize any disruption to the workflow. We also ensure long-lasting solutions that maintain the floor's shine and reduce the need for frequent maintenance.",
      ar: "تلعب الأرضيات دوراً حاسماً في تحديد هوية المكاتب والمنشآت التجارية. المظهر المشرق والنظيف يعكس الاحترافية ويترك انطباعاً إيجابياً لدى العملاء والزوار. لذلك، نقدم خدمات تلميع وتنظيف الرخام للمكاتب والشركات والمحلات التجارية والفنادق، مع مراعاة الطبيعة المحددة للعمل والالتزام بالجداول الزمنية المتفق عليها. نقوم بتنفيذ العمل بكفاءة عالية وفي أقصر وقت ممكن لتقليل أي تعطيل لسير العمل. كما نضمن حلولاً طويلة الأمد تحافظ على لمعان الأرضية وتقلل من الحاجة إلى الصيانة المتكررة."
    },
    materialsSection: {
      en: "Materials and techniques used",
      ar: "المواد والتقنيات المستخدمة"
    },
    materialsContent: {
      en: "In Riyadh, we rely on the latest technologies and advanced materials for marble polishing, guaranteeing professional results. We use state-of-the-art polishing equipment and high-quality diamond discs, enabling us to treat floors with precision. We also select certified and safe polishing and protecting materials that preserve the marble's natural color and give it a consistent shine. Paying attention to the quality of materials used is one of the most important factors in the success of our service, as it ensures the integrity of the surface and extends the lifespan of the flooring. We are committed to staying up-to-date with the latest developments in this field to provide the best possible service to our clients.",
      ar: "في الرياض، نعتمد على أحدث التقنيات والمواد المتقدمة لتلميع الرخام، مما يضمن نتائج احترافية. نستخدم معدات تلميع متطورة وأقراص ألماس عالية الجودة، مما يمكننا من معالجة الأرضيات بدقة. كما نختار مواد تلميع وحماية معتمدة وآمنة تحافظ على اللون الطبيعي للرخام وتمنحه لمعاناً متسقاً. إن الاهتمام بجودة المواد المستخدمة هو أحد أهم عوامل نجاح خدمتنا، حيث يضمن سلامة السطح ويطيل عمر الأرضيات. نحن ملتزمون بمواكبة أحدث التطورات في هذا المجال لتقديم أفضل خدمة ممكنة لعملائنا."
    },
    advantagesSection: {
      en: "Advantages of our tile cleaning and marble polishing service",
      ar: "مميزات خدمة تنظيف البلاط وتلميع الرخام لدينا"
    },
    advantagesContent: {
      en: "What sets us apart in marble polishing in Riyadh is our combination of experience, quality, and commitment. We offer a professional service delivered by a highly trained team with extensive practical experience in floor polishing and cleaning. We are committed to precision in execution and meticulous attention to detail to ensure customer satisfaction. We also offer competitive prices to suit various budgets, while maintaining the highest quality standards. Our goal is to build long-term, trusting relationships with our clients by delivering expectations that exceed expectations.",
      ar: "ما يميزنا في تلميع الرخام في الرياض هو مزيجنا من الخبرة والجودة والالتزام. نقدم خدمة احترافية يقدمها فريق مدرب تدريباً عالياً ولديه خبرة عملية واسعة في جلي وتنظيف الأرضيات. نحن ملتزمون بالدقة في التنفيذ والاهتمام الدقيق بالتفاصيل لضمان رضا العملاء. كما نقدم أسعاراً تنافسية لتناسب مختلف الميزانيات، مع الحفاظ على أعلى معايير الجودة. هدفنا هو بناء علاقات ثقة طويلة الأمد مع عملائنا من خلال تقديم توقعات تتجاوز التوقعات."
    },
    careSection: {
      en: "Floor care after scrubbing and polishing",
      ar: "العناية بالأرضيات بعد الجلي والتلميع"
    },
    careContent: {
      en: "After completing tile and marble polishing, we provide our clients with important tips to maintain their floors for as long as possible. These tips include using appropriate cleaning materials, avoiding harsh chemicals, and cleaning up spills immediately to prevent them from soaking in. Following these guidelines helps maintain the shine and reduces the need for frequent polishing and buffing. We believe that consistent care is key to preserving the beauty of your floors.",
      ar: "بعد الانتهاء من جلي وتلميع البلاط والرخام، نقدم لعملائنا نصائح مهمة للحفاظ على أرضياتهم لأطول فترة ممكنة. تتضمن هذه النصائح استخدام مواد تنظيف مناسبة، وتجنب المواد الكيميائية القاسية، وتنظيف الانسكابات على الفور لمنعها من النفاذ. يساعد اتباع هذه الإرشادات في الحفاظ على اللمعان ويقلل من الحاجة إلى التلميع والصقل المتكرر. نحن نؤمن بأن العناية المستمرة هي المفتاح للحفاظ على جمال أرضياتك."
    },
    whySection: {
      en: "Why choose marble polishing in Riyadh?",
      ar: "لماذا تختار تلميع الرخام في الرياض؟"
    },
    whyContent: {
      en: "Choosing marble polishing services in Riyadh means receiving a comprehensive service based on professionalism and high quality. We prioritize customer satisfaction and always strive to provide effective solutions that restore the natural beauty of your floors and preserve their value. Whether you're looking for tile cleaning for your home, marble polishing for your office or commercial establishment, we guarantee outstanding results, on-time delivery, and competitive prices. Your trust in us motivates us to always deliver the best and make your floors a symbol of elegance and luxury everywhere you go.",
      ar: "اختيار خدمات تلميع الرخام في الرياض يعني الحصول على خدمة شاملة قائمة على الاحترافية والجودة العالية. نحن نعطي الأولوية لرضا العملاء ونسعى دائماً لتقديم حلول فعالة تعيد الجمال الطبيعي لأرضياتك وتحافظ على قيمتها. سواء كنت تبحث عن تنظيف بلاط لمنزلك، أو تلميع رخام لمكتبك أو منشأتك التجارية، نضمن لك نتائج متميزة، وتسليماً في الموعد، وأسعاراً تنافسية. ثقتكم بنا تحفزنا دائماً لتقديم الأفضل وجعل أرضياتك رمزاً للأناقة والفخامة أينما ذهبت."
    },
  };

  const benefits = [
    {
      icon: Gem,
      title: lang === "en" ? "Diamond Polishing" : "التلميع بالألماس",
      desc: lang === "en" ? "Genuine diamond pads for superior shine and durability" : "أقراص ألماس أصلية للمعان متفوق ومتانة"
    },
    {
      icon: Sparkles,
      title: lang === "en" ? "Mirror Finish" : "تشطيب كالمراية",
      desc: lang === "en" ? "Achieves deep, crystal-clear reflection on all surfaces" : "يحقق انعكاساً عميقاً وواضحاً على جميع الأسطح"
    },
    {
      icon: Shield,
      title: lang === "en" ? "Long-Lasting Protection" : "حماية طويلة الأمد",
      desc: lang === "en" ? "Sealed surfaces resist stains and moisture for years" : "الأسطح المعزولة تقاوم البقع والرطوبة لسنوات"
    },
    {
      icon: Zap,
      title: lang === "en" ? "Fast Completion" : "إنجاز سريع",
      desc: lang === "en" ? "Most residential projects done within 1-2 days" : "معظم المشاريع السكنية تنتهي في 1-2 يوم"
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
              {lang === "en" ? "Premium Polishing" : "تلميع متميز"}
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
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.intro[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tile Polishing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g14} alt="Tile Polishing" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.tileSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.tileContent[lang]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marble Polishing Section */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.marbleSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.marbleContent[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g15} alt="Marble Polishing" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g16} alt="Polishing Process" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.processSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.processContent[lang]}
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
                <img src={g14} alt="Homes Polishing" className="w-full h-full object-cover" />
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
                <img src={g15} alt="Commercial Polishing" className="w-full h-full object-cover" />
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
                <img src={g16} alt="Materials" className="w-full h-full object-cover" />
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

      {/* Care Section */}
      <section className="py-16">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={g17} alt="Floor Care" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
                {content.careSection[lang]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.careContent[lang]}
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
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
              {lang === "en" ? "Why Choose Our Polishing Service" : "لماذا تختار خدمة التلميع لدينا"}
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
