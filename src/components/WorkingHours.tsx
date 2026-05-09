import { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const DAYS: { key: string; jsDay: number }[] = [
  { key: 'hours.mon', jsDay: 1 },
  { key: 'hours.tue', jsDay: 2 },
  { key: 'hours.wed', jsDay: 3 },
  { key: 'hours.thu', jsDay: 4 },
  { key: 'hours.fri', jsDay: 5 },
  { key: 'hours.sat', jsDay: 6 },
  { key: 'hours.sun', jsDay: 0 },
];

export default function WorkingHours() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const today = new Date().getDay();

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

  return (
    <section
      id="hours"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#0d0d0d] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">Coffee Nation</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            {t('hours.title')}
          </h2>
          <p className="font-inter text-[#f5f0e8]/50 max-w-md mx-auto">{t('hours.sub')}</p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-6" />
        </div>

        <div className="reveal reveal-delay-1 bg-gradient-to-b from-[#1a0a00] to-[#1a0a00]/60 border border-[#c9a84c]/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="flex items-center gap-3 px-7 py-5 border-b border-[#c9a84c]/10">
            <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
              <Clock size={18} className="text-[#c9a84c]" />
            </div>
            <span className="font-playfair text-lg font-semibold text-[#f5f0e8]">{t('hours.title')}</span>
          </div>

          {/* Days list */}
          <div className="divide-y divide-[#c9a84c]/5">
            {DAYS.map(({ key, jsDay }, i) => {
              const isToday = today === jsDay;
              return (
                <div
                  key={key}
                  className={`flex items-center justify-between px-7 py-4 transition-colors duration-200 ${
                    isToday ? 'bg-[#c9a84c]/8' : 'hover:bg-[#c9a84c]/5'
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                    )}
                    {!isToday && <div className="w-1.5 h-1.5 rounded-full bg-[#f5f0e8]/10" />}
                    <span
                      className={`font-inter text-sm ${
                        isToday ? 'text-[#f5f0e8] font-semibold' : 'text-[#f5f0e8]/60'
                      }`}
                    >
                      {t(key)}
                    </span>
                    {isToday && (
                      <span className="font-inter text-xs px-2 py-0.5 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30">
                        {t('hours.today')}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-inter text-sm ${
                        isToday ? 'text-[#c9a84c] font-semibold' : 'text-[#f5f0e8]/50'
                      }`}
                    >
                      {t('hours.time')}
                    </span>
                    {isToday && (
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-7 py-4 border-t border-[#c9a84c]/10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-inter text-xs text-[#f5f0e8]/40">{t('hours.open')} · 09:00 — 21:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
