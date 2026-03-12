import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { CoreValues } from './CoreValues';
import { Programs } from './Programs';
import { CampusLife } from './CampusLife';
import { News } from './News';
import { Testimonials } from './Testimonials';
import { AdmissionsCTA } from './AdmissionsCTA';
import { Footer } from './Footer';

export default function HomepageV1() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
    </div>
  );
}
