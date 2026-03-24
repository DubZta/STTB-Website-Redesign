import { useEffect, useState } from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { CoreValues } from './CoreValues';
import { Programs } from './Programs';
import { CampusLife } from './CampusLife';
import { News } from './News';
import { Testimonials } from './Testimonials';
import { AdmissionsCTA } from './AdmissionsCTA';
import WillemLoader from '../animations/WillemLoader';

export default function HomepageV1() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('sttb-loader-shown');
    if (!hasSeenLoader) {
      setShowLoader(true);
      sessionStorage.setItem('sttb-loader-shown', 'true');
    }
  }, []);

  return (
    <div className="bg-white">
      {showLoader && <WillemLoader onComplete={() => setShowLoader(false)} />}
      <main>
        <Hero />
        <About />
        <CoreValues />
        <Programs />
        <CampusLife />
        <News />
        <Testimonials />
        <AdmissionsCTA />
      </main>
    </div>
  );
}