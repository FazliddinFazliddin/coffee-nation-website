import { MapPin, Phone, Mail, Coffee, Instagram, Facebook } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Afrosiab+14/1+46+Tashkent+Uzbekistan';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-[#0d0d0d] border-t border-[#c9a84c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center">
                <Coffee size={16} className="text-[#1a0a00]" />
              </div>
              <span className="font-playfair text-lg font-bold text-[#f5f0e8]">
                Coffee <span className="text-[#c9a84c]">Nation</span>
              </span>
            </div>
            <p className="font-inter text-sm text-[#f5f0e8]/40 leading-relaxed max-w-xs">
              Specialty coffee, own roastery, exotic drinks. The finest café experience in Tashkent.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#c9a84c]/20 flex items-center justify-center text-[#f5f0e8]/40 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#c9a84c]/20 flex items-center justify-center text-[#f5f0e8]/40 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-[#f5f0e8] mb-5">
              {t('nav.contact')}
            </h4>
            <div className="space-y-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center mt-0.5">
                  <MapPin size={14} className="text-[#c9a84c]" />
                </div>
                <span className="font-inter text-sm text-[#f5f0e8]/50 group-hover:text-[#c9a84c] transition-colors duration-200 leading-relaxed">
                  {t('footer.address')}
                </span>
              </a>

              <a href={`tel:${t('footer.phone').replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                  <Phone size={14} className="text-[#c9a84c]" />
                </div>
                <span className="font-inter text-sm text-[#f5f0e8]/50 group-hover:text-[#c9a84c] transition-colors duration-200">
                  {t('footer.phone')}
                </span>
              </a>

              <a href={`mailto:${t('footer.email')}`} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                  <Mail size={14} className="text-[#c9a84c]" />
                </div>
                <span className="font-inter text-sm text-[#f5f0e8]/50 group-hover:text-[#c9a84c] transition-colors duration-200">
                  {t('footer.email')}
                </span>
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-[#f5f0e8] mb-5">Navigation</h4>
            <div className="space-y-2.5">
              {[
                ['nav.menu', '#menu'],
                ['nav.services', '#services'],
                ['nav.whyus', '#whyus'],
                ['nav.gallery', '#gallery'],
                ['nav.hours', '#hours'],
                ['nav.faq', '#faq'],
              ].map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  className="block font-inter text-sm text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </div>

          {/* Hours summary */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-[#f5f0e8] mb-5">
              {t('hours.title')}
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-inter text-sm text-green-400">{t('hours.open')}</span>
            </div>
            <p className="font-inter text-sm text-[#f5f0e8]/50 mb-1">
              {t('hours.mon')} — {t('hours.sun')}
            </p>
            <p className="font-playfair text-lg font-semibold text-[#c9a84c]">09:00 — 21:00</p>
            <p className="font-inter text-xs text-[#f5f0e8]/30 mt-3">
              50 000 — 100 000 UZS / person
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#c9a84c]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#f5f0e8]/25">{t('footer.rights')}</p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#c9a84c]" />
            <span className="font-inter text-xs text-[#f5f0e8]/25">
              Afrosiab 14/1, 46 · Tashkent
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
