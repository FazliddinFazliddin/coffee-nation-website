import { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';

const photos = [
  { url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-64' },
  { url: 'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-48' },
  { url: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-72' },
  { url: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-48' },
  { url: 'https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-64' },
  { url: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-52' },
  { url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-60' },
  { url: 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=600', h: 'h-44' },
];

export default function Gallery() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#1a0a00] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="font-inter text-xs text-[#c9a84c] tracking-widest uppercase">Coffee Nation</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="font-inter text-[#f5f0e8]/50 max-w-md mx-auto">{t('gallery.sub')}</p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-6" />
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="reveal break-inside-avoid overflow-hidden rounded-xl group cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`relative ${photo.h} w-full overflow-hidden`}>
                <img
                  src={photo.url}
                  alt={`Coffee Nation gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
