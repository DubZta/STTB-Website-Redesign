import { Outlet } from 'react-router';
import { Header } from '../components/homepage_v1_1/Header';
import { Footer } from '../components/homepage_v1_1/Footer';
import ScrollToTop from '../components/utils/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
