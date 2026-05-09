import { useEffect, useRef } from 'react';
import { Star, MapPin, Coffee, Sparkles } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function WhyUs() {
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

  const stats = [
    { icon: Star, statKey: 'whyus.stat1', labelKey: 'whyus.label1', descKey: 'whyus.desc1' },
    { icon: MapPin, statKey: 'whyus.stat2', labelKey: 'whyus.label2', descKey: 'whyus.desc2' },
    { icon: Coffee, statKey: 'whyus.stat3', labelKey: 'whyus.label3', descKey: 'whyus.desc3' },
    { icon: Sparkles, statKey: 'whyus.stat4', labelKey: 'whyus.label4', descKey: 'whyus.desc4' },
  ];

  return (
    <section
      id="whyus"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative bg-[#0d0d0d] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c9a84c] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">Coffee Nation</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            {t('whyus.title')}
          </h2>
          <p className="font-inter text-[#f5f0e8]/50 max-w-md mx-auto">{t('whyus.sub')}</p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, statKey, labelKey, descKey }, i) => (
            <div
              key={statKey}
              className="reveal group bg-gradient-to-b from-[#1a0a00]/80 to-[#1a0a00]/40 border border-[#c9a84c]/10 rounded-2xl p-7 hover:border-[#c9a84c]/40 hover:shadow-xl hover:shadow-[#c9a84c]/5 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <div className="w-8 h-8 rounded-full border border-[#c9a84c]/20 flex items-center justify-center group-hover:border-[#c9a84c]/50 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors duration-300" />
                </div>
              </div>
              <div className="font-playfair text-3xl font-bold text-[#c9a84c] mb-1">
                {t(statKey)}
              </div>
              <div className="font-inter text-sm font-semibold text-[#f5f0e8] mb-3 uppercase tracking-wide">
                {t(labelKey)}
              </div>
              <p className="font-inter text-xs text-[#f5f0e8]/50 leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
