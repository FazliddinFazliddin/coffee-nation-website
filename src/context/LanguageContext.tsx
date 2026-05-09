import React, { createContext, useContext, useState } from 'react';

export type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'uz',
  setLang: () => {},
  t: (k) => k,
});

export const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Nav
    'nav.menu': 'Menyu',
    'nav.services': 'Xizmatlar',
    'nav.whyus': 'Nima uchun biz',
    'nav.gallery': 'Galereya',
    'nav.hours': 'Ish vaqti',
    'nav.faq': 'FAQ',
    'nav.contact': 'Aloqa',

    // Hero
    'hero.headline': 'Har bir qultumda — buyuklik',
    'hero.sub': "Toshkentning eng yaxshi specialty kofe do'koni. O'z qovurxonamiz, ekzotik ichimliklar va unutilmas atmosfera.",
    'hero.form.name': 'Ismingiz',
    'hero.form.phone': 'Telefon raqamingiz',
    'hero.form.date': 'Sana',
    'hero.form.message': 'Xabaringiz',
    'hero.form.submit': 'Bron qilish',
    'hero.form.success': "Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.",

    // Menu
    'menu.title': 'Bizning Menyumiz',
    'menu.sub': 'Har bir taom va ichimlik sevgi bilan tayyorlanadi',
    'menu.tab.hot': 'Issiq ichimliklar',
    'menu.tab.cold': 'Sovuq ichimliklar',
    'menu.tab.pastry': 'Pishiriqlar',
    'menu.tab.food': 'Taomlar',
    'menu.tab.special': 'Maxsus',

    // Services
    'services.title': 'Bizning Xizmatlarimiz',
    'services.sub': 'Sizga eng yaxshi tajribani taqdim etamiz',
    'services.dinein.title': "Zalda o'tirib yeyish",
    'services.dinein.desc': "Qulay va zamonaviy muhitda kofe ichishning rohatini his qiling",
    'services.takeaway.title': 'Olib ketish',
    'services.takeaway.desc': "Sevimli ichimligingizni yo'lda ham olib keting",
    'services.catering.title': 'Kateqoring',
    'services.catering.desc': "Har qanday tadbir uchun professional kofe xizmati",
    'services.events.title': 'Xususiy tadbirlar',
    'services.events.desc': "Kichik yig'inlar va maxsus kunlar uchun joy band qiling",
    'services.wifi.title': 'Bepul Wi-Fi',
    'services.wifi.desc': "Tez va ishonchli internet ulanishi bilan ishlang",
    'services.roastery.title': "O'z qovurxona",
    'services.roastery.desc': "Eng sifatli donalarni o'zimiz qovuramiz",

    // Why Us
    'whyus.title': 'Nima uchun Coffee Nation?',
    'whyus.sub': 'Sifat va tajriba bizning asosimiz',
    'whyus.stat1': '116+',
    'whyus.label1': "5 yulduzli sharh",
    'whyus.stat2': '4.7',
    'whyus.label2': 'Google reyting',
    'whyus.stat3': "O'z qovurxona",
    'whyus.label3': 'Specialty qahva',
    'whyus.stat4': 'Nitro & Batch',
    'whyus.label4': "Noyob ichimliklar",
    'whyus.desc1': "Mehmonlarimiz bizni sevishadi — 116 dan ortiq yuqori baholangan sharhlar buning isboti.",
    'whyus.desc2': "Google Maps'da 4.7 yulduz — Toshkentning eng yuqori baholangan kofexonalaridan biri.",
    'whyus.desc3': "Biz donalarni o'zimiz qovuramiz, eng yangi va eng aromatik qahvani taqdim etamiz.",
    'whyus.desc4': 'Nitro kofe, ziravorli batch brew — boshqa joylarda topa olmaydigan ichimliklar.',

    // Gallery
    'gallery.title': 'Galereya',
    'gallery.sub': 'Bizning muhitimiz va ichimliklarimizdan lavhalar',

    // Hours
    'hours.title': 'Ish Vaqtimiz',
    'hours.sub': "Har kuni sizga xizmat ko'rsatishga tayyormiz",
    'hours.mon': 'Dushanba',
    'hours.tue': 'Seshanba',
    'hours.wed': 'Chorshanba',
    'hours.thu': 'Payshanba',
    'hours.fri': 'Juma',
    'hours.sat': 'Shanba',
    'hours.sun': 'Yakshanba',
    'hours.time': '09:00 — 21:00',
    'hours.today': 'Bugun',
    'hours.open': 'Ochiq',

    // FAQ
    'faq.title': "Ko'p so'raladigan savollar",
    'faq.sub': "Savolaringizga javob topasiz",
    'faq.q1': 'Bron qilish kerakmi?',
    'faq.a1': "Odatda bron shart emas, lekin katta guruhlar uchun oldindan qo'ng'iroq qilishingizni maslahat beramiz.",
    'faq.q2': "Qaysi to'lov usullari qabul qilinadi?",
    'faq.a2': "Naqd pul, bank kartasi va mobil to'lovlar qabul qilinadi.",
    'faq.q3': 'Vegetarianlar uchun taomlar bormi?',
    'faq.a3': "Ha, bizning menyumizda vegetarian va vegan taomlar mavjud.",
    'faq.q4': 'Noutbuk bilan ishlash mumkinmi?',
    'faq.a4': "Albatta! Bizda tez bepul Wi-Fi va rozetkalari mavjud.",
    'faq.q5': 'Xususiy tadbir uchun joy band qilish mumkinmi?',
    'faq.a5': "Ha, kichik guruhlar uchun joy band qilish imkoniyati mavjud. Batafsil ma'lumot uchun biz bilan bog'laning.",
    'faq.q6': 'Kofe donalarini sotib olish mumkinmi?',
    'faq.a6': "Ha! Bizning qovurxonamizdan yangi qovurilgan donalarni sotib olishingiz mumkin.",

    // CTA
    'cta.headline': 'Bugun bizga tashrif buyuring',
    'cta.sub': "Har bir qultumda Toshkentning eng yaxshi kofesini tatib ko'ring",
    'cta.button': "Yo'l topish",

    // Footer
    'footer.address': "Afrosiab 14/1, 46, Toshkent, O'zbekiston",
    'footer.phone': '+998 99 222 50 49',
    'footer.email': 'info@coffeenation.uz',
    'footer.rights': "© 2026 Coffee Nation. Barcha huquqlar himoyalangan.",
    'footer.follow': 'Bizni kuzating',
  },
  ru: {
    'nav.menu': 'Меню',
    'nav.services': 'Услуги',
    'nav.whyus': 'Почему мы',
    'nav.gallery': 'Галерея',
    'nav.hours': 'Часы работы',
    'nav.faq': 'FAQ',
    'nav.contact': 'Контакт',

    'hero.headline': 'Величие в каждом глотке',
    'hero.sub': 'Лучшая specialty кофейня Ташкента. Собственная обжарка, экзотические напитки и незабываемая атмосфера.',
    'hero.form.name': 'Ваше имя',
    'hero.form.phone': 'Номер телефона',
    'hero.form.date': 'Дата',
    'hero.form.message': 'Сообщение',
    'hero.form.submit': 'Забронировать',
    'hero.form.success': 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.',

    'menu.title': 'Наше Меню',
    'menu.sub': 'Каждое блюдо и напиток приготовлены с любовью',
    'menu.tab.hot': 'Горячие напитки',
    'menu.tab.cold': 'Холодные напитки',
    'menu.tab.pastry': 'Выпечка',
    'menu.tab.food': 'Еда',
    'menu.tab.special': 'Специальные',

    'services.title': 'Наши Услуги',
    'services.sub': 'Мы предоставляем лучший опыт',
    'services.dinein.title': 'В заведении',
    'services.dinein.desc': 'Насладитесь кофе в уютной современной обстановке',
    'services.takeaway.title': 'На вынос',
    'services.takeaway.desc': 'Возьмите любимый напиток с собой',
    'services.catering.title': 'Кейтеринг',
    'services.catering.desc': 'Профессиональный кофе-сервис для любого мероприятия',
    'services.events.title': 'Частные мероприятия',
    'services.events.desc': 'Забронируйте место для встречи или особого случая',
    'services.wifi.title': 'Бесплатный Wi-Fi',
    'services.wifi.desc': 'Работайте с быстрым и надёжным интернетом',
    'services.roastery.title': 'Собственная обжарка',
    'services.roastery.desc': 'Мы сами обжариваем лучшие зёрна',

    'whyus.title': 'Почему Coffee Nation?',
    'whyus.sub': 'Качество и опыт — наша основа',
    'whyus.stat1': '116+',
    'whyus.label1': 'Отзывов 5 звёзд',
    'whyus.stat2': '4.7',
    'whyus.label2': 'Рейтинг Google',
    'whyus.stat3': 'Своя обжарка',
    'whyus.label3': 'Specialty кофе',
    'whyus.stat4': 'Nitro & Batch',
    'whyus.label4': 'Уникальные напитки',
    'whyus.desc1': 'Наши гости любят нас — более 116 высокооценённых отзывов подтверждают это.',
    'whyus.desc2': '4.7 звезды на Google Maps — одна из самых высокооценённых кофеен Ташкента.',
    'whyus.desc3': 'Мы обжариваем зёрна сами, предлагая самый свежий и ароматный кофе.',
    'whyus.desc4': 'Nitro кофе, batch brew со специями — напитки, которые нигде больше не найдёте.',

    'gallery.title': 'Галерея',
    'gallery.sub': 'Атмосфера и напитки нашего заведения',

    'hours.title': 'Часы Работы',
    'hours.sub': 'Мы готовы обслужить вас каждый день',
    'hours.mon': 'Понедельник',
    'hours.tue': 'Вторник',
    'hours.wed': 'Среда',
    'hours.thu': 'Четверг',
    'hours.fri': 'Пятница',
    'hours.sat': 'Суббота',
    'hours.sun': 'Воскресенье',
    'hours.time': '09:00 — 21:00',
    'hours.today': 'Сегодня',
    'hours.open': 'Открыто',

    'faq.title': 'Часто задаваемые вопросы',
    'faq.sub': 'Найдите ответы на ваши вопросы',
    'faq.q1': 'Нужно ли бронировать столик?',
    'faq.a1': 'Как правило, бронь не обязательна, но для больших групп рекомендуем позвонить заранее.',
    'faq.q2': 'Какие способы оплаты принимаются?',
    'faq.a2': 'Принимаются наличные, банковские карты и мобильные платежи.',
    'faq.q3': 'Есть ли блюда для вегетарианцев?',
    'faq.a3': 'Да, в нашем меню есть вегетарианские и веганские блюда.',
    'faq.q4': 'Можно ли работать с ноутбуком?',
    'faq.a4': 'Конечно! У нас есть быстрый бесплатный Wi-Fi и розетки.',
    'faq.q5': 'Можно ли забронировать место для частного мероприятия?',
    'faq.a5': 'Да, есть возможность бронирования для небольших групп. Свяжитесь с нами для подробностей.',
    'faq.q6': 'Можно ли купить кофейные зёрна?',
    'faq.a6': 'Да! Вы можете купить свежеобжаренные зёрна из нашей обжарки.',

    'cta.headline': 'Посетите нас сегодня',
    'cta.sub': 'Откройте для себя лучший кофе Ташкента в каждом глотке',
    'cta.button': 'Найти нас',

    'footer.address': 'Афросиаб 14/1, 46, Ташкент, Узбекистан',
    'footer.phone': '+998 99 222 50 49',
    'footer.email': 'info@coffeenation.uz',
    'footer.rights': '© 2026 Coffee Nation. Все права защищены.',
    'footer.follow': 'Следите за нами',
  },
  en: {
    'nav.menu': 'Menu',
    'nav.services': 'Services',
    'nav.whyus': 'Why Us',
    'nav.gallery': 'Gallery',
    'nav.hours': 'Hours',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    'hero.headline': 'Greatness in Every Sip',
    'hero.sub': "Tashkent's finest specialty coffee shop. Own roastery, exotic drinks, and an unforgettable atmosphere.",
    'hero.form.name': 'Your Name',
    'hero.form.phone': 'Phone Number',
    'hero.form.date': 'Date',
    'hero.form.message': 'Message',
    'hero.form.submit': 'Reserve a Table',
    'hero.form.success': 'Your message has been sent! We will get back to you shortly.',

    'menu.title': 'Our Menu',
    'menu.sub': 'Every dish and drink prepared with love',
    'menu.tab.hot': 'Hot Drinks',
    'menu.tab.cold': 'Cold Drinks',
    'menu.tab.pastry': 'Pastries',
    'menu.tab.food': 'Food',
    'menu.tab.special': 'Specials',

    'services.title': 'Our Services',
    'services.sub': 'We offer the best experience for you',
    'services.dinein.title': 'Dine-In',
    'services.dinein.desc': 'Enjoy your coffee in a cozy, modern setting',
    'services.takeaway.title': 'Takeaway',
    'services.takeaway.desc': 'Take your favorite drink on the go',
    'services.catering.title': 'Catering',
    'services.catering.desc': 'Professional coffee service for any event',
    'services.events.title': 'Private Events',
    'services.events.desc': 'Reserve a space for meetings or special occasions',
    'services.wifi.title': 'Free Wi-Fi',
    'services.wifi.desc': 'Work with fast and reliable internet',
    'services.roastery.title': 'Own Roastery',
    'services.roastery.desc': 'We roast the finest beans ourselves',

    'whyus.title': 'Why Coffee Nation?',
    'whyus.sub': 'Quality and experience are our foundation',
    'whyus.stat1': '116+',
    'whyus.label1': '5-Star Reviews',
    'whyus.stat2': '4.7',
    'whyus.label2': 'Google Rating',
    'whyus.stat3': 'Own Roastery',
    'whyus.label3': 'Specialty Coffee',
    'whyus.stat4': 'Nitro & Batch',
    'whyus.label4': 'Unique Drinks',
    'whyus.desc1': 'Our guests love us — over 116 highly-rated reviews prove it.',
    'whyus.desc2': '4.7 stars on Google Maps — one of the highest-rated cafés in Tashkent.',
    'whyus.desc3': 'We roast our own beans, offering the freshest and most aromatic coffee.',
    'whyus.desc4': 'Nitro coffee, spiced batch brew — drinks you won\'t easily find anywhere else.',

    'gallery.title': 'Gallery',
    'gallery.sub': 'Glimpses of our atmosphere and drinks',

    'hours.title': 'Working Hours',
    'hours.sub': 'Ready to serve you every day',
    'hours.mon': 'Monday',
    'hours.tue': 'Tuesday',
    'hours.wed': 'Wednesday',
    'hours.thu': 'Thursday',
    'hours.fri': 'Friday',
    'hours.sat': 'Saturday',
    'hours.sun': 'Sunday',
    'hours.time': '09:00 — 21:00',
    'hours.today': 'Today',
    'hours.open': 'Open',

    'faq.title': 'Frequently Asked Questions',
    'faq.sub': 'Find answers to your questions',
    'faq.q1': 'Do I need to make a reservation?',
    'faq.a1': 'A reservation is usually not required, but we recommend calling ahead for large groups.',
    'faq.q2': 'Which payment methods are accepted?',
    'faq.a2': 'We accept cash, bank cards, and mobile payments.',
    'faq.q3': 'Are there vegetarian options?',
    'faq.a3': 'Yes, our menu includes vegetarian and vegan dishes.',
    'faq.q4': 'Can I work with my laptop?',
    'faq.a4': 'Absolutely! We have fast free Wi-Fi and power outlets.',
    'faq.q5': 'Can I book the space for a private event?',
    'faq.a5': 'Yes, booking is available for small groups. Contact us for details.',
    'faq.q6': 'Can I buy coffee beans?',
    'faq.a6': 'Yes! You can purchase freshly roasted beans from our roastery.',

    'cta.headline': 'Visit Us Today',
    'cta.sub': "Discover Tashkent's finest coffee in every sip",
    'cta.button': 'Find Us',

    'footer.address': 'Afrosiab 14/1, 46, Tashkent, Uzbekistan',
    'footer.phone': '+998 99 222 50 49',
    'footer.email': 'info@coffeenation.uz',
    'footer.rights': '© 2026 Coffee Nation. All rights reserved.',
    'footer.follow': 'Follow Us',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[lang][key] ?? translations['en'][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
