import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const faqKeys = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
];

export default function FAQ() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
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

  return (
    <section
      id="faq"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#1a0a00] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">Coffee Nation</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            {t('faq.title')}
          </h2>
          <p className="font-inter text-[#f5f0e8]/50 max-w-md mx-auto">{t('faq.sub')}</p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-6" />
        </div>

        <div className="space-y-3">
          {faqKeys.map(({ q, a }, i) => (
            <div
              key={q}
              className="reveal border border-[#c9a84c]/15 rounded-xl overflow-hidden hover:border-[#c9a84c]/30 transition-colors duration-300 bg-[#0d0d0d]/40"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-inter text-sm sm:text-base font-medium text-[#f5f0e8] pr-4">
                  {t(q)}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] transition-all duration-300 ${
                    openIdx === i ? 'rotate-45 bg-[#c9a84c]/10 border-[#c9a84c]' : ''
                  }`}
                >
                  <Plus size={16} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIdx === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-[#c9a84c]/10 mb-4" />
                  <p className="font-inter text-sm text-[#f5f0e8]/60 leading-relaxed">{t(a)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
