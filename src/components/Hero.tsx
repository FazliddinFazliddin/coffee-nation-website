import { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const PLACEHOLDER_EXAMPLES = [
  'Soat 3 da 2 kishi uchun',
  'Ertaga kechqurun 4 kishi',
  'Shanba 19:00 da, 6 kishi',
];

export default function Hero() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIdx((i) => (i + 1) % PLACEHOLDER_EXAMPLES.length);
        setPlaceholderVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-[#0d0d0d]/60 to-[#0d0d0d]/90" />
      <div className="absolute inset-0 bg-[#1a0a00]/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen md:min-h-0">
          {/* Left: copy */}
          <div
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">
                Specialty Coffee · Tashkent
              </span>
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-[#f5f0e8] mb-6">
              {t('hero.headline').split(' ').map((word, i) => (
                <span
                  key={i}
                  className={i === 1 || i === 3 ? 'text-[#c9a84c] italic' : ''}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p
              className={`font-inter text-base sm:text-lg text-[#f5f0e8]/70 leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('hero.sub')}
            </p>

            <div
              className={`flex gap-4 mt-8 transition-all duration-1000 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#menu"
                className="font-inter text-sm font-medium px-6 py-3 bg-[#c9a84c] text-[#1a0a00] rounded-full hover:bg-[#e0c06e] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c9a84c]/30"
              >
                {t('nav.menu')}
              </a>
              <a
                href="#contact"
                className="font-inter text-sm font-medium px-6 py-3 border border-[#c9a84c]/50 text-[#f5f0e8] rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>

          {/* Right: reservation form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-[#0d0d0d]/80 backdrop-blur-xl border border-[#c9a84c]/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50">
              <h3 className="font-playfair text-2xl font-semibold text-[#f5f0e8] mb-1">
                {t('nav.contact')}
              </h3>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <CheckCircle size={48} className="text-[#c9a84c]" />
                  <p className="font-inter text-[#f5f0e8]/80">{t('hero.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: 'hero.form.name', field: 'name', type: 'text' },
                    { key: 'hero.form.phone', field: 'phone', type: 'tel' },
                  ].map(({ key, field, type }) => (
                    <input
                      key={field}
                      type={type}
                      placeholder={t(key)}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      required={field !== 'date'}
                      className="w-full bg-[#1a0a00]/60 border border-[#c9a84c]/20 rounded-xl px-4 py-3 font-inter text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200"
                    />
                  ))}
                  <div className="relative">
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full bg-[#1a0a00]/60 border border-[#c9a84c]/20 rounded-xl px-4 py-3 font-inter text-sm text-[#f5f0e8] placeholder-transparent focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200 resize-none peer"
                    />
                    {!form.message && (
                      <span
                        className={`pointer-events-none absolute left-4 top-3 font-inter text-sm transition-opacity duration-400 ${
                          placeholderVisible ? 'opacity-40' : 'opacity-0'
                        } text-[#f5f0e8]`}
                      >
                        {PLACEHOLDER_EXAMPLES[placeholderIdx]}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e0c06e] text-[#1a0a00] font-inter font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c9a84c]/30"
                  >
                    <Send size={16} />
                    {t('hero.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
