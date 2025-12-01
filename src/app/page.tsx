"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Розроби очко"
          navItems={[
            { name: "Про нас", id: "about" },
            { name: "Послуги", id: "services" },
            { name: "Команда", id: "team" },
            { name: "Контакти", id: "contact" },
            { name: "Блог", id: "blog" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Інноваційні IT рішення для вашого бізнесу"
          description="Розроби очко - український IT-партнер з глибокою експертизою у розробці вебсайтів, мобільних додатків та облачних рішень. Ми допомагаємо компаніям трансформуватись у цифрову епоху."
          tag="Розроби очко"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601692392-j8658rjh.jpg",
              imageAlt: "Український розробник за комп'ютером"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601693182-v20e6dd5.jpg",
              imageAlt: "Командна робота в технологічному стартапі"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601693937-uaacjm5a.jpg",
              imageAlt: "Веб-розробка на екрані"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601694937-6538mvoi.jpg",
              imageAlt: "Робочий простір IT компанії"
            }
          ]}
          buttons={[
            { text: "Розпочати проект", href: "contact" },
            { text: "Дізнатися більше", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Про Розроби очко"
          description="Ми - команда досвідчених розробників, дизайнерів та консультантів, спеціалізуємось на створенні високоякісних IT рішень для українських та міжнародних компаній."
          tag="Наша історія"
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601695631-d0crv7qa.jpg"
          imageAlt="Команда Розроби очко на зустрічі"
          bulletPoints={[
            {
              title: "Експертиза",
              description: "10+ років досвіду в розробці веб та мобільних додатків для різних галузей"
            },
            {
              title: "Команда",
              description: "30+ спеціалістів: розробники, дизайнери, PM та QA інженери"
            },
            {
              title: "Якість",
              description: "Строгі стандарти тестування та забезпечення якості для кожного проекту"
            }
          ]}
          buttons={[
            { text: "Переглянути портфоліо", href: "#" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Наші послуги"
          description="Комплексний спектр IT рішень для вашого бізнесу. Від концепції до запуску та підтримки."
          tag="Послуги"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Веб-розробка",
              description: "Сучасні,響ивні сайти та веб-додатки з використанням новітніх технологій та найкращих практик",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601696413-eoju3ex6.jpg"
            },
            {
              title: "Мобільні додатки",
              description: "Розробка нативних та крос-платформних мобільних додатків для iOS та Android",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601697156-8kka0xwx.jpg"
            },
            {
              title: "Облачні рішення",
              description: "Архітектура та розгортання масштабованих облачних систем на AWS, Azure та інших платформах",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601698187-xknstswl.jpg"
            },
            {
              title: "Цифрова трансформація",
              description: "Консультування та впровадження сучасних технологій для оптимізації ваших бізнес-процесів",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601698721-pfgx2vl4.jpg"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Наша команда"
          description="Познайомтеся з досвідченими спеціалістами, які створюють видатні IT рішення"
          tag="Лідери"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Олександр П.",
              role: "CTO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601699469-l1410oh3.jpg",
              imageAlt: "Олександр П. - CTO"
            },
            {
              id: "2",
              name: "Марія К.",
              role: "Lead Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601700188-ei3fezvt.jpg",
              imageAlt: "Марія К. - Lead Designer"
            },
            {
              id: "3",
              name: "Іван М.",
              role: "Frontend Developer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601700790-irjmw5aq.jpg",
              imageAlt: "Іван М. - Frontend Developer"
            },
            {
              id: "4",
              name: "Ольга В.",
              role: "Project Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601701505-bwzpfag4.jpg",
              imageAlt: "Ольга В. - Project Manager"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Відгуки клієнтів"
          description="Послухайте, що говорять наші клієнти про спільну роботу з Розроби очко"
          tag="Відгуки"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Сергій Т.",
              role: "CEO",
              company: "TechStudio Ukraine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601702171-x49ohpsg.jpg",
              imageAlt: "Сергій Т."
            },
            {
              id: "2",
              name: "Наталія С.",
              role: "Директор проектів",
              company: "Digital Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601703032-99dm7vs3.jpg",
              imageAlt: "Наталія С."
            },
            {
              id: "3",
              name: "Андрій Л.",
              role: "Засновник",
              company: "StartupFlow",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601703717-8c4nvajs.jpg",
              imageAlt: "Андрій Л."
            },
            {
              id: "4",
              name: "Уляна П.",
              role: "Менеджер продукту",
              company: "InnovateTech",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601703934-qadx02qi.jpg",
              imageAlt: "Уляна П."
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Довіряють нам"
          description="Ми працюємо з провідними компаніями та стартапами по всьому світу"
          tag="Партнери"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601708845-uye17r1m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601709341-mj6ybley.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601710409-jpcqm3ku.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601710954-hkaqy0qx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/ibm-company-logo-1764601712969-364fbde3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601713464-010ta2gu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/cisco-systems-logo-1764601716116-2d2d0f6c.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Контакти"
          title="Готові розпочати проект?"
          description="Зв'яжіться з нами, щоб обговорити ваші потреби та отримати безкоштовну консультацію від нашої команди експертів"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764601708373-8j7bbe74.jpg"
          imageAlt="Офіс Розроби очко"
          mediaPosition="right"
          inputPlaceholder="Введіть вашу електронну пошту"
          buttonText="Відправити"
          termsText="Натиснувши 'Відправити', ви підтверджуєте, що згідні з нашою Політикою конфіденційності."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          copyrightText="© 2025 Розроби очко | Українська IT компанія"
          columns={[
            {
              title: "Продукти",
              items: [
                { label: "Послуги", href: "services" },
                { label: "Портфоліо", href: "#" },
                { label: "Технології", href: "#" }
              ]
            },
            {
              title: "Компанія",
              items: [
                { label: "Про нас", href: "about" },
                { label: "Команда", href: "team" },
                { label: "Карієра", href: "#" }
              ]
            },
            {
              title: "Правова інформація",
              items: [
                { label: "Умови використання", href: "#" },
                { label: "Політика конфіденційності", href: "#" },
                { label: "Контакти", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}