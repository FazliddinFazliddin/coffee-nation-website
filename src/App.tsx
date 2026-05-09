import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/Menu';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import WorkingHours from './components/WorkingHours';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d0d0d]">
        <Navbar />
        <Hero />
        <MenuSection />
        <Services />
        <WhyUs />
        <Gallery />
        <WorkingHours />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
