import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { useLang, Language } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { key: 'nav.menu', href: '#menu' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.whyus', href: '#whyus' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.hours', href: '#hours' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: 'uz', label: "O'zbek" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Coffee size={16} className="text-[#1a0a00]" />
            </div>
            <span className="font-playfair text-lg font-bold text-[#f5f0e8] tracking-wide">
              Coffee <span className="text-[#c9a84c]">Nation</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="font-inter text-sm text-[#f5f0e8]/70 hover:text-[#c9a84c] transition-colors duration-200 tracking-wide"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Language switcher + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 border border-[#c9a84c]/30 rounded-full px-1 py-1">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-xs font-inter px-3 py-1 rounded-full transition-all duration-200 ${
                    lang === l.code
                      ? 'bg-[#c9a84c] text-[#1a0a00] font-semibold'
                      : 'text-[#f5f0e8]/60 hover:text-[#c9a84c]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              className="lg:hidden text-[#f5f0e8] hover:text-[#c9a84c] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0d0d0d]/98 backdrop-blur-md border-t border-[#c9a84c]/10`}
      >
        <div className="px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-inter text-sm text-[#f5f0e8]/80 hover:text-[#c9a84c] py-2 transition-colors duration-200"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-[#c9a84c]/10">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-xs font-inter px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  lang === l.code
                    ? 'bg-[#c9a84c] border-[#c9a84c] text-[#1a0a00] font-semibold'
                    : 'border-[#c9a84c]/30 text-[#f5f0e8]/60 hover:text-[#c9a84c]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
