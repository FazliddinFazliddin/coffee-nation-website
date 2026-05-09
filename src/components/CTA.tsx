import { MapPin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Afrosiab+14/1+46+Tashkent+Uzbekistan';

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#1a0a00]/90 to-[#0d0d0d]/95" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">
            Coffee Nation · Tashkent
          </span>
        </div>

        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] mb-6 leading-tight">
          {t('cta.headline')}
        </h2>

        <p className="font-inter text-lg text-[#f5f0e8]/60 mb-10 max-w-xl mx-auto">
          {t('cta.sub')}
        </p>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-inter font-semibold text-sm px-8 py-4 bg-[#c9a84c] text-[#1a0a00] rounded-full hover:bg-[#e0c06e] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c9a84c]/40"
        >
          <MapPin size={18} />
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
}
