import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Calendar, Newspaper, Video, Award, Library, LogIn, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/', dropdown: null },
    {
      name: 'Tentang STTB',
      href: '/about',
      dropdown: [
        { name: 'Sejarah', href: '/about/history' },
        { name: 'Visi & Misi', href: '/about/vision-mission' },
        { name: 'Himne', href: '/about/hymn' },
        { name: 'Pengakuan Iman', href: '/about/confession' },
        { name: 'Dosen & Staf', href: '/about/faculty' },
        { name: 'Yayasan', href: '/about/foundation' },
      ],
    },
    { name: 'Akademik', href: '/academics', dropdown: null },
    { name: 'Penerimaan', href: '/admissions', dropdown: null },
    { name: 'Keuangan', href: '/finance', dropdown: null },
    {
      name: 'Kehidupan Kampus',
      href: '/campus-life',
      dropdown: [
        { name: 'Fasilitas', href: '/campus-life/facilities' },
        { name: 'Pembinaan Mahasiswa', href: '/campus-life/student-development' },
        { name: 'Senat', href: '/campus-life/senate' },
      ],
    },
  ];

  const quickLinks = [
    { name: 'Kegiatan', href: '/activities', icon: Calendar },
    { name: 'Berita', href: '/news', icon: Newspaper },
    { name: 'Media', href: '/media', icon: Video },
    { name: 'LEAD', href: '/lead', icon: Award },
    { name: 'Perpustakaan', href: '/library', icon: Library },
  ];

  const actionLinks = [
    { name: 'Kontak', href: '/contact', icon: Mail },
    { name: 'Login', href: '/login', icon: LogIn },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`relative z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-sttb-navy to-sttb-navy-light rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
              <span className="text-white text-xl font-bold">ST</span>
            </div>
            <div className="hidden md:block">
              <div className="text-gray-900 font-bold text-sm tracking-wide leading-tight">
                Sekolah Tinggi Teologi
              </div>
              <div className="text-sttb-red font-extrabold text-base leading-tight">
                BANDUNG
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-[12px] font-medium transition-colors flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-sttb-red bg-sttb-light-grey'
                      : 'text-sttb-dark-slate hover:text-sttb-navy hover:bg-sttb-light-grey'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="w-3 h-3 transition-transform" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-[12px] text-sttb-dark-slate hover:bg-sttb-light-grey hover:text-sttb-navy transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/admissions"
              className="px-5 py-2 bg-sttb-red text-white rounded-md text-[12px] font-medium hover:bg-sttb-red/90 transition-all shadow-sm hover:shadow-md"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-sttb-navy hover:bg-sttb-light-grey transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {/* Quick Links Section */}
            <div className="pb-3 mb-3 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
                Menu Cepat
              </p>
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-sttb-red bg-sttb-light-grey'
                        : 'text-sttb-dark-slate hover:bg-sttb-light-grey'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Main Navigation */}
            <div className="pb-3 mb-3 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
                Navigasi Utama
              </p>
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-sttb-red bg-sttb-light-grey'
                        : 'text-sttb-dark-slate hover:bg-sttb-light-grey'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-sttb-dark-slate hover:bg-sttb-light-grey rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-2">
              {actionLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'text-sttb-red bg-sttb-light-grey'
                        : 'text-sttb-navy hover:bg-sttb-light-grey'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/admissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-2.5 bg-sttb-red text-white text-center rounded-md font-medium hover:bg-sttb-red/90 transition-colors mt-4"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}