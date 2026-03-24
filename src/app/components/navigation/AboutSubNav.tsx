import { Link, useLocation } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSubNav() {
  const location = useLocation();
  const { t } = useLanguage();

  const links = [
    {
      name: t('nav.about.history'),
      href: '/about/history',
    },
    {
      name: t('nav.about.vision_mission'),
      href: '/about/vision-mission',
    },
    {
      name: t('nav.about.hymn'),
      href: '/about/hymn',
    },
    {
      name: t('nav.about.confession'),
      href: '/about/confession',
    },
    {
      name: t('nav.about.faculty'),
      href: '/about/faculty',
    },
    {
      name: t('nav.about.foundation'),
      href: '/about/foundation',
    },
  ];

  const currentIndex = links.findIndex(link => link.href === location.pathname);
  const prevLink = currentIndex > 0 ? links[currentIndex - 1] : links[links.length - 1];
  const nextLink = currentIndex < links.length - 1 ? links[currentIndex + 1] : links[0];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[var(--header-height,80px)] z-30">
      {/* Desktop Navigation */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 py-4">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${isActive
                  ? 'bg-sttb-navy text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation with Prev/Next */}
      <div className="md:hidden max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Previous Button */}
          <Link
            to={prevLink.href}
            className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </Link>

          {/* Current Page */}
          <div className="flex-1 text-center">
            <span className="text-sm font-bold text-sttb-navy">
              {links[currentIndex]?.name || t('nav.about.history')}
            </span>
          </div>

          {/* Next Button */}
          <Link
            to={nextLink.href}
            className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Dropdown for Direct Navigation */}
        <div className="mt-2">
          <select
            value={location.pathname}
            onChange={(e) => window.location.href = e.target.value}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-sttb-navy"
          >
            {links.map((link) => (
              <option key={link.href} value={link.href}>
                {link.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
