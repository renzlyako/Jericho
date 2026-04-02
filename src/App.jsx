import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import WildBeauty from './components/WildBeauty';
import FlyHorizon from './components/FlyHorizon';
import SolidarityBanner from './components/SolidarityBanner';
import AnimalCards from './components/AnimalCards';
import Testimonials from './components/Testimonials';
import FreedomCTA from './components/FreedomCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <QuoteSection />
      <WildBeauty />
      <FlyHorizon />
      <SolidarityBanner />
      <AnimalCards />
      <Testimonials />
      <FreedomCTA />
      <Footer />
    </div>
  );
}
