import { useState, useEffect, useRef } from 'react';
import { Coffee } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

type MenuItem = {
  name: Record<string, string>;
  desc: Record<string, string>;
  price: string;
};

type Category = {
  key: string;
  items: MenuItem[];
};

const menuData: Category[] = [
  {
    key: 'hot',
    items: [
      { name: { uz: 'Espresso', ru: 'Эспрессо', en: 'Espresso' }, desc: { uz: 'Klassik italyan espresso', ru: 'Классический итальянский эспрессо', en: 'Classic Italian espresso' }, price: '25 000 UZS' },
      { name: { uz: 'Americano', ru: 'Американо', en: 'Americano' }, desc: { uz: 'Espresso va issiq suv', ru: 'Эспрессо с горячей водой', en: 'Espresso with hot water' }, price: '28 000 UZS' },
      { name: { uz: 'Cappuccino', ru: 'Капучино', en: 'Cappuccino' }, desc: { uz: 'Espresso, bug\'latilgan sut va ko\'pik', ru: 'Эспрессо, вспененное молоко и пенка', en: 'Espresso, steamed milk and foam' }, price: '35 000 UZS' },
      { name: { uz: 'Latte', ru: 'Латте', en: 'Latte' }, desc: { uz: 'Espresso va ko\'p sut', ru: 'Эспрессо с большим количеством молока', en: 'Espresso with lots of steamed milk' }, price: '38 000 UZS' },
      { name: { uz: 'Flat White', ru: 'Флэт Уайт', en: 'Flat White' }, desc: { uz: 'Double espresso va sich sut', ru: 'Двойной эспрессо и бархатистое молоко', en: 'Double espresso with velvety milk' }, price: '40 000 UZS' },
      { name: { uz: 'Pour Over', ru: 'Пуровер', en: 'Pour Over' }, desc: { uz: 'Filtrli qo\'lda tayyorlangan kofe', ru: 'Фильтр-кофе ручной заварки', en: 'Handcrafted filter coffee' }, price: '45 000 UZS' },
      { name: { uz: 'Batch Brew', ru: 'Батч Брю', en: 'Batch Brew' }, desc: { uz: 'Ziravorli maxsus filtrlangan kofe', ru: 'Специальный фильтр-кофе со специями', en: 'Specialty filtered coffee with spices' }, price: '35 000 UZS' },
      { name: { uz: 'Cortado', ru: 'Кортадо', en: 'Cortado' }, desc: { uz: 'Espresso teng miqdor sutda', ru: 'Эспрессо с равным количеством молока', en: 'Espresso with equal parts milk' }, price: '33 000 UZS' },
      { name: { uz: 'Ristretto', ru: 'Ристретто', en: 'Ristretto' }, desc: { uz: 'Qisqa va kuchli espresso', ru: 'Короткий и крепкий эспрессо', en: 'Short and strong espresso' }, price: '25 000 UZS' },
      { name: { uz: 'Macchiato', ru: 'Маккиато', en: 'Macchiato' }, desc: { uz: 'Espresso va bir oz sut ko\'pigi', ru: 'Эспрессо с небольшим количеством молочной пенки', en: 'Espresso with a dollop of milk foam' }, price: '30 000 UZS' },
    ],
  },
  {
    key: 'cold',
    items: [
      { name: { uz: 'Nitro Coffee', ru: 'Нитро Кофе', en: 'Nitro Coffee' }, desc: { uz: 'Azot bilan sovuq demlengan kofe', ru: 'Холодный кофе на азоте', en: 'Cold brew infused with nitrogen' }, price: '55 000 UZS' },
      { name: { uz: 'Cold Brew', ru: 'Колд Брю', en: 'Cold Brew' }, desc: { uz: '12 soat sovuq suvda demlengan', ru: '12 часов холодного заваривания', en: '12-hour cold steep' }, price: '45 000 UZS' },
      { name: { uz: 'Iced Latte', ru: 'Айс Латте', en: 'Iced Latte' }, desc: { uz: 'Muzdek latte muz bilan', ru: 'Ледяной латте со льдом', en: 'Chilled latte over ice' }, price: '40 000 UZS' },
      { name: { uz: 'Iced Cappuccino', ru: 'Айс Капучино', en: 'Iced Cappuccino' }, desc: { uz: 'Sovuq cappuccino muz bilan', ru: 'Холодный капучино со льдом', en: 'Cold cappuccino over ice' }, price: '40 000 UZS' },
      { name: { uz: 'Cold Matcha Latte', ru: 'Холодный Матча Латте', en: 'Cold Matcha Latte' }, desc: { uz: 'Yaponcha yashil choy sut bilan', ru: 'Японский зелёный чай с молоком', en: 'Japanese green tea with milk' }, price: '42 000 UZS' },
      { name: { uz: 'Lemonade', ru: 'Лимонад', en: 'Lemonade' }, desc: { uz: 'Yangi limon va limon\' bilan', ru: 'Свежий лимонад с мятой', en: 'Fresh squeezed with mint' }, price: '30 000 UZS' },
      { name: { uz: 'Espresso Tonic', ru: 'Эспрессо Тоник', en: 'Espresso Tonic' }, desc: { uz: 'Espresso tonik suv ustida', ru: 'Эспрессо над тоником', en: 'Espresso over tonic water' }, price: '45 000 UZS' },
    ],
  },
  {
    key: 'pastry',
    items: [
      { name: { uz: 'Croissant', ru: 'Круассан', en: 'Croissant' }, desc: { uz: 'Yog\'li va qatlamli frantsuz krossani', ru: 'Масляный слоёный французский круассан', en: 'Buttery flaky French croissant' }, price: '20 000 UZS' },
      { name: { uz: 'Cheesecake', ru: 'Чизкейк', en: 'Cheesecake' }, desc: { uz: 'Limonli yumshoq chezkeyк', ru: 'Нежный чизкейк с лимоном', en: 'Smooth lemon cheesecake' }, price: '35 000 UZS' },
      { name: { uz: 'Tiramisu', ru: 'Тирамису', en: 'Tiramisu' }, desc: { uz: 'Klassik italyan tiramishu', ru: 'Классическое итальянское тирамису', en: 'Classic Italian tiramisu' }, price: '38 000 UZS' },
      { name: { uz: 'Brownie', ru: 'Брауни', en: 'Brownie' }, desc: { uz: 'Shocoladli nam browni', ru: 'Шоколадный влажный брауни', en: 'Rich chocolate brownie' }, price: '28 000 UZS' },
      { name: { uz: 'Muffin', ru: 'Маффин', en: 'Muffin' }, desc: { uz: 'Kunlik yangi pishirilgan maffin', ru: 'Ежедневно свежеиспечённый маффин', en: 'Daily fresh-baked muffin' }, price: '22 000 UZS' },
      { name: { uz: 'Cinnamon Roll', ru: 'Булочка с корицей', en: 'Cinnamon Roll' }, desc: { uz: 'Iliq dalchili rulon', ru: 'Тёплая булочка с корицей', en: 'Warm spiral with cinnamon' }, price: '25 000 UZS' },
    ],
  },
  {
    key: 'food',
    items: [
      { name: { uz: 'Tuxum bilan tost', ru: 'Тост с яйцом', en: 'Egg Toast' }, desc: { uz: 'Qovurilgan tuxum va avokado bilan', ru: 'Жареное яйцо с авокадо', en: 'Fried egg with avocado' }, price: '45 000 UZS' },
      { name: { uz: 'Avokado tost', ru: 'Тост с авокадо', en: 'Avocado Toast' }, desc: { uz: 'Yangi avokado va pomidor bilan', ru: 'Свежий авокадо с томатами', en: 'Fresh avocado with tomatoes' }, price: '48 000 UZS' },
      { name: { uz: 'Granola', ru: 'Гранола', en: 'Granola Bowl' }, desc: { uz: 'Yogurt va meva bilan granola', ru: 'Гранола с йогуртом и фруктами', en: 'Granola with yogurt and fruit' }, price: '40 000 UZS' },
      { name: { uz: 'Sandwich', ru: 'Сэндвич', en: 'Club Sandwich' }, desc: { uz: 'Tovuq, salat, pomidor bilan', ru: 'Курица, салат, томат', en: 'Chicken, lettuce, tomato' }, price: '55 000 UZS' },
      { name: { uz: 'Qaynoq shurpa', ru: 'Суп дня', en: 'Soup of the Day' }, desc: { uz: 'Kunlik yangi tayyorlangan sho\'rva', ru: 'Ежедневно свежеприготовленный суп', en: 'Daily freshly prepared soup' }, price: '42 000 UZS' },
    ],
  },
  {
    key: 'special',
    items: [
      { name: { uz: 'Chili Batch Brew', ru: 'Чили Батч Брю', en: 'Chili Batch Brew' }, desc: { uz: 'Qalampir va ziravorli filtr kofe — noyob tajriba', ru: 'Фильтр-кофе с перцем чили и специями — уникальный опыт', en: 'Filter coffee with chili and spices — unique experience' }, price: '45 000 UZS' },
      { name: { uz: 'Signature Espresso', ru: 'Сигнатурный Эспрессо', en: 'Signature Espresso' }, desc: { uz: 'Maxsus qovurilgan donalardan', ru: 'Из специально обжаренных зёрен', en: 'From our specially roasted beans' }, price: '40 000 UZS' },
      { name: { uz: 'Seasonal Drink', ru: 'Сезонный напиток', en: 'Seasonal Drink' }, desc: { uz: 'Mavsumiy ingredientlar bilan maxsus ichimlik', ru: 'Специальный напиток с сезонными ингредиентами', en: 'Special drink with seasonal ingredients' }, price: '50 000 UZS' },
      { name: { uz: 'Ethiopian Pour Over', ru: 'Эфиопский Пуровер', en: 'Ethiopian Pour Over' }, desc: { uz: 'Efiopiyadan specialty donalar', ru: 'Specialty зёрна из Эфиопии', en: 'Specialty beans from Ethiopia' }, price: '60 000 UZS' },
      { name: { uz: 'Colombian Aeropress', ru: 'Колумбийский Аэропресс', en: 'Colombian Aeropress' }, desc: { uz: 'Kolumbiyalik donalar Aeropress usulida', ru: 'Колумбийские зёрна методом Aeropress', en: 'Colombian beans via Aeropress method' }, price: '55 000 UZS' },
    ],
  },
];

function CoffeeIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#1a0a00]">
      <Coffee size={32} className="text-[#c9a84c]/40" />
    </div>
  );
}

export default function MenuSection() {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child) => child.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { key: 'menu.tab.hot', cat: 'hot' },
    { key: 'menu.tab.cold', cat: 'cold' },
    { key: 'menu.tab.pastry', cat: 'pastry' },
    { key: 'menu.tab.food', cat: 'food' },
    { key: 'menu.tab.special', cat: 'special' },
  ];

  const currentItems = menuData[activeTab].items;

  return (
    <section id="menu" ref={sectionRef as React.RefObject<HTMLElement>} className="bg-[#0d0d0d] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">Coffee Nation</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            {t('menu.title')}
          </h2>
          <p className="font-inter text-[#f5f0e8]/50 max-w-md mx-auto">{t('menu.sub')}</p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal reveal-delay-1">
          {tabs.map((tab, i) => (
            <button
              key={tab.cat}
              onClick={() => setActiveTab(i)}
              className={`font-inter text-sm px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeTab === i
                  ? 'bg-[#c9a84c] border-[#c9a84c] text-[#1a0a00] font-semibold'
                  : 'border-[#c9a84c]/20 text-[#f5f0e8]/60 hover:border-[#c9a84c]/50 hover:text-[#f5f0e8]'
              }`}
            >
              {t(tab.key)}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentItems.map((item, i) => (
            <div
              key={i}
              className="reveal gold-border-hover group bg-[#1a0a00]/40 rounded-xl overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex gap-4 p-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-[#1a0a00] border border-[#c9a84c]/10">
                  <CoffeeIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-playfair text-base font-semibold text-[#f5f0e8] leading-tight">
                      {item.name[lang] ?? item.name.en}
                    </h3>
                    <span className="font-inter text-sm font-semibold text-[#c9a84c] whitespace-nowrap flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-inter text-xs text-[#f5f0e8]/50 mt-1 leading-relaxed">
                    {item.desc[lang] ?? item.desc.en}
                  </p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
