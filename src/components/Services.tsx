import { useEffect, useRef } from 'react';
import { UtensilsCrossed, ShoppingBag, ChefHat, Users, Wifi, Coffee } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((c) => c.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: UtensilsCrossed, titleKey: 'services.dinein.title', descKey: 'services.dinein.desc' },
    { icon: ShoppingBag, titleKey: 'services.takeaway.title', descKey: 'services.takeaway.desc' },
    { icon: ChefHat, titleKey: 'services.catering.title', descKey: 'services.catering.desc' },
    { icon: Users, titleKey: 'services.events.title', descKey: 'services.events.desc' },
    { icon: Wifi, titleKey: 'services.wifi.title', descKey: 'services.wifi.desc' },
    { icon: Coffee, titleKey: 'services.roastery.title', descKey: 'services.roastery.desc' },
  ];

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#1a0a00] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">Coffee Nation</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            {t('services.title')}
          </h2>
          <p className="font-inter text-[#f5f0e8]/50 max-w-md mx-auto">{t('services.sub')}</p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div
              key={titleKey}
              className="reveal gold-border-hover group bg-[#0d0d0d]/60 rounded-2xl p-7 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                <Icon size={22} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-[#f5f0e8] mb-2">{t(titleKey)}</h3>
              <p className="font-inter text-sm text-[#f5f0e8]/55 leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
