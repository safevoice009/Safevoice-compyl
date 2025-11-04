import { FC, useRef } from 'react';
import Hero from '../landing/Hero';
import Features from '../landing/Features';
import CTASection from '../landing/CTASection';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BottomNav from '../layout/BottomNav';

const Landing: FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Features ref={featuresRef} />
      <CTASection scrollToFeatures={scrollToFeatures} />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Landing;
