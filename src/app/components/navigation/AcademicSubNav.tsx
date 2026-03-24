import { Link, useLocation } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AcademicSubNav() {
  const location = useLocation();
  const { t } = useLanguage();

  const links = [
    // Undergraduate Programs
    {
      name: 'S.Th.',
      fullName: t('programs.sth.full'),
      href: '/academics/sarjana-teologi',
      category: 'undergraduate',
    },
    {
      name: 'S.Pd',
      fullName: t('programs.spdk.full'),
      href: '/academics/sarjana-pendidikan-kristen',
      category: 'undergraduate',
    },

    // Graduate Programs - Magister Teologi
    {
      name: 'M.Th. (PPGU)',
      fullName: t('programs.mth_ppgu.full'),
      href: '/academics/magister-teologi-pelayanan-pastoral-gereja-urban',
      category: 'graduate',
    },
    {
      name: 'M.Th. (TB&M)',
      fullName: t('programs.mth_tbm.full'),
      href: '/academics/magister-teologi-transformasi-budaya-masyarakat',
      category: 'graduate',
    },

    // Graduate Programs - Magister Pendidikan
    {
      name: 'M.Pd.',
      fullName: t('programs.mpdk.full'),
      href: '/academics/magister-pendidikan-kristen',
      category: 'graduate',
    },

    // Graduate Programs - Magister Ministri
    {
      name: 'M.Min. (MP)',
      fullName: t('programs.mmin_mp.full'),
      href: '/academics/magister-ministri-marketplace',
      category: 'graduate',
    },
    {
      name: 'M.Min. (KP)',
      fullName: t('programs.mmin_kp.full'),
      href: '/academics/magister-ministri-kepemimpinan-pastoral',
      category: 'graduate',
    },
    {
      name: 'M.Min. (TPG)',
      fullName: t('programs.mmin_tpg.full'),
      href: '/academics/magister-ministri-teologi-pelayanan-gerejawi',
      category: 'graduate',
    },
  ];

  const currentIndex = links.findIndex(link => link.href === location.pathname);
  const prevLink = currentIndex > 0 ? links[currentIndex - 1] : links[links.length - 1];
  const nextLink = currentIndex < links.length - 1 ? links[currentIndex + 1] : links[0];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[var(--header-height,80px)] z-30">
      {/* Desktop Navigation */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 py-4 flex-wrap">
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
                title={link.fullName}
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
              {links[currentIndex]?.name || 'S.Th.'}
            </span>
            <p className="text-xs text-gray-500 mt-0.5">
              {links[currentIndex]?.fullName || t('programs.sth.full')}
            </p>
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
            <optgroup label="Program Sarjana">
              {links.filter(l => l.category === 'undergraduate').map((link) => (
                <option key={link.href} value={link.href}>
                  {link.name} - {link.fullName}
                </option>
              ))}
            </optgroup>
            <optgroup label="Magister Teologi">
              {links.filter(l => l.category === 'graduate' && l.name.startsWith('M.Th.')).map((link) => (
                <option key={link.href} value={link.href}>
                  {link.name} - {link.fullName}
                </option>
              ))}
            </optgroup>
            <optgroup label="Magister Pendidikan">
              {links.filter(l => l.category === 'graduate' && l.name === 'M.Pd.').map((link) => (
                <option key={link.href} value={link.href}>
                  {link.name} - {link.fullName}
                </option>
              ))}
            </optgroup>
            <optgroup label="Magister Ministri">
              {links.filter(l => l.category === 'graduate' && l.name.startsWith('M.Min.')).map((link) => (
                <option key={link.href} value={link.href}>
                  {link.name} - {link.fullName}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
}