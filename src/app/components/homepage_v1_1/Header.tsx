import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Calendar,
  Newspaper,
  Video,
  Award,
  Library,
  Mail,
  LogIn,
  Globe,
} from "lucide-react";
import { Link } from 'react-router';

export function Header() {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Beranda', href: "/", dropdown: null },
    {
      label: 'Tentang Kami',
      href: "/about",
      dropdown: [
        { name: 'Sejarah', href: "/about/history" },
        { name: 'Visi & Misi', href: "/about/vision-mission" },
        { name: 'Mars STTB', href: "/about/hymn" },
        { name: 'Pengakuan Iman', href: "/about/confession" },
        { name: 'Dewan Dosen', href: "/about/faculty" },
        { name: 'Yayasan', href: "/about/foundation" },
      ],
    },
    {
      label: 'Akademik',
      href: "/academics",
      dropdown: [
        { name: 'Sarjana Teologi', href: "/academics/sarjana-teologi" },
        { name: 'Sarjana Pendidikan Kristen', href: "/academics/sarjana-pendidikan-kristen" },
        { name: 'Magister Teologi', href: "/academics/magister-teologi" },
        { name: 'Magister Pendidikan Kristen', href: "/academics/magister-pendidikan-kristen" },
        { name: 'Master of Divinity', href: "/academics/master-divinity" },
        { name: 'Magister Ministri (Pastoral)', href: "/academics/magister-ministri-pastoral" },
        { name: 'Magister Ministri (Marketplace)', href: "/academics/magister-ministri-marketplace" },
      ],
    },
    {
      label: 'Admisi',
      href: "/admissions",
      dropdown: [
        { name: 'Daftar Online', href: "/admissions/schedule" }, // Using schedule or online? Check translations
        { name: 'Tes Masuk', href: "/admissions/procedure" },
        { name: 'Pengumuman', href: "/admissions/requirements" },
        { name: "FAQ", href: "/admissions/faq" },
      ],
    },
    {
      label: 'Keuangan',
      href: "/finance",
      dropdown: [
        { name: 'Biaya Studi', href: "/finance/biaya-studi" },
        { name: 'Beasiswa & Bantuan', href: "/finance/beasiswa" },
        { name: 'Dukung STTB', href: "/finance/dukung-sttb" },
      ],
    },
    {
      label: 'Kehidupan Kampus',
      href: "/campus-life",
      dropdown: [
        { name: "Fasilitas", href: "/campus-life/facilities" },
        {
          name: "Pembinaan Mahasiswa",
          href: "/campus-life/student-development",
        },
        { name: "Senat", href: "/campus-life/senate" },
      ],
    },
  ];

  const quickLinks = [
    { name: "Kegiatan", href: "/activities", icon: Calendar },
    { name: "Berita", href: "/news", icon: Newspaper },
    { name: "Media", href: "/media", icon: Video },
    { name: "LEAD", href: "/lead", icon: Award },
    { name: "Perpustakaan", href: "/library", icon: Library },
  ];

  const actionLinks = [
    { name: "Kontak", href: "/contact", icon: Mail },
    { name: "Login", href: "/login", icon: LogIn },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const isActive = (href: string) => {
    if (typeof window === "undefined") return false;
    if (href === "/") return window.location.pathname === "/";
    return window.location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 font-[Plus_Jakarta_Sans]">
      <div
        className={`transition-all duration-300 ${isTopBarVisible
          ? "translate-y-0"
          : "-translate-y-full"
          }`}
      >
        <div className="bg-sttb-navy border-b border-blue-800/50 hidden lg:block">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              {/* Quick Links */}
              <nav className="flex items-center gap-5">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-1.5 text-[12px] font-medium text-blue-100 hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 opacity-80" />
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              {/* Search & Action Links */}
              <div className="flex items-center gap-5">
                {isSearchOpen ? (
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(e.target.value)
                      }
                      placeholder="Cari..."
                      className="px-3 py-1 text-xs rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-1 focus:ring-white/50 w-48"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="text-blue-200 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center gap-1.5 text-[12px] font-medium text-blue-100 hover:text-white transition-colors"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Cari</span>
                  </button>
                )}

                {/* Action Links */}
                {actionLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-100 hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-white border-b-4 shadow-sm transition-all duration-300 ${isScrolled
            ? "border-gray-200 shadow-md"
            : "border-yellow-500 shadow-sm"
            }`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link
                to="/"
                className="flex items-center group"
              >
                <img
                  src="/SSTB TEXT LOGO.png"
                  alt="STTB - Sekolah Tinggi Teologi Bandung"
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.dropdown && setOpenDropdown(item.label)
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-[13px] font-medium transition-all flex items-center gap-1 ${isActive(item.href)
                        ? "text-sttb-red bg-red-50"
                        : "text-slate-600 hover:text-sttb-navy hover:bg-slate-50"
                        }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${openDropdown === item.label
                            ? "rotate-180 text-sttb-navy"
                            : "text-slate-400"
                            }`}
                        />
                      )}
                    </Link>

                    {item.dropdown &&
                      openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-sttb-navy transition-colors border-l-2 border-transparent hover:border-sttb-red"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-sttb-navy text-white rounded-md text-[13px] font-bold hover:bg-blue-800 transition-all shadow-sm hover:shadow-md active:transform active:scale-95"
                >
                  Kontak
                </Link>

                <Link
                  to="/admissions"
                  className="px-5 py-2.5 bg-sttb-red text-white rounded-md text-[13px] font-bold hover:bg-red-700 transition-all shadow-sm hover:shadow-md active:transform active:scale-95"
                >
                  {'Daftar Sekarang'}
                </Link>
              </div>

              <button
                className="lg:hidden text-slate-600 p-2 hover:bg-slate-100 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>

            {mobileMenuOpen && (
              <nav className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top bg-white">
                <div className="space-y-4 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold text-sttb-navy`}
                      >
                        ID
                      </span>
                    </div>
                    <Link
                      to="/login"
                      className="text-xs font-semibold text-slate-600 flex items-center gap-1"
                    >
                      <LogIn size={14} /> Login
                    </Link>
                  </div>

                  <div className="px-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Menu Cepat
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() =>
                              setMobileMenuOpen(false)
                            }
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-medium hover:bg-sttb-navy hover:text-white transition-colors"
                          >
                            <Icon className="w-3 h-3" />
                            {link.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-4 space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Navigasi
                    </p>
                    {navItems.map((item) => (
                      <div key={item.label}>
                        <Link
                          to={item.href}
                          className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive(item.href)
                            ? "text-sttb-red bg-red-50"
                            : "text-slate-700 hover:bg-slate-50"
                            }`}
                          onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            {item.label}
                            {item.dropdown && (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                        </Link>
                        {item.dropdown && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                onClick={() =>
                                  setMobileMenuOpen(false)
                                }
                                className="block px-3 py-1.5 text-sm text-slate-500 hover:text-sttb-navy"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pt-4 space-y-2">
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full px-4 py-3 bg-sttb-navy text-white rounded-md text-sm font-bold hover:bg-blue-800 transition-colors shadow-md"
                    >
                      Kontak
                    </Link>
                    <Link
                      to="/admissions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full px-4 py-3 bg-sttb-red text-white rounded-md text-sm font-bold hover:bg-red-700 transition-colors shadow-md"
                    >
                      {'Daftar Sekarang'}
                    </Link>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}