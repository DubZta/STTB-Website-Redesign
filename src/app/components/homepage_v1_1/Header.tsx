import { useState, useEffect, useRef } from "react";
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
import LanguageSwitcher from "../navigation/LanguageSwitcher";
import { useLanguage } from "../../contexts/LanguageContext";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<
    string | null
  >(null);

  const headerRef = useRef<HTMLElement>(null);

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

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    
    // Update height initially and on window resize
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    // Also update height periodically or after a short delay since top bar visibility changes
    const heightTimer = setInterval(updateHeaderHeight, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
      clearInterval(heightTimer);
    };
  }, [lastScrollY]);

  const navItems = [
    { label: t("nav.home"), href: "/", dropdown: null },
    {
      label: t("nav.about"),
      href: "/about",
      dropdown: [
        { name: t("nav.about.history"), href: "/about/history" },
        { name: t("nav.about.vision_mission"), href: "/about/vision-mission" },
        { name: t("nav.about.hymn"), href: "/about/hymn" },
        { name: t("nav.about.confession"), href: "/about/confession" },
        { name: t("nav.about.faculty"), href: "/about/faculty" },
        { name: t("nav.about.foundation"), href: "/about/foundation" },
      ],
    },
    {
      label: t("nav.academics"),
      href: "/academics",
      dropdown: [
        { name: t("programs.sth.full"), href: "/academics/sarjana-teologi" },
        { name: t("programs.spdk.full"), href: "/academics/sarjana-pendidikan-kristen" },
        { name: t("programs.mth_ppgu.full"), href: "/academics/magister-teologi-pelayanan-pastoral-gereja-urban" },
        { name: t("programs.mth_tbm.full"), href: "/academics/magister-teologi-transformasi-budaya-masyarakat" },
        { name: t("programs.mpdk.full"), href: "/academics/magister-pendidikan-kristen" },
        { name: t("programs.mmin_mp.full"), href: "/academics/magister-ministri-marketplace" },
        { name: t("programs.mmin_kp.full"), href: "/academics/magister-ministri-kepemimpinan-pastoral" },
        { name: t("programs.mmin_tpg.full"), href: "/academics/magister-ministri-teologi-pelayanan-gerejawi" },
      ],
    },
    {
      label: t("nav.admissions"),
      href: "/admissions",
      dropdown: [
        { name: t("admissions.online"), href: "/admissions/schedule" },
        { name: t("admissions.test"), href: "/admissions/procedure" },
        { name: t("admissions.announcement"), href: "/admissions/requirements" },
        { name: "FAQ", href: "/admissions/faq" },
      ],
    },
    {
      label: t("nav.finance"),
      href: "/finance",
      dropdown: [
        { name: t("finance.biaya.title"), href: "/finance/biaya-studi" },
        { name: t("finance.beasiswa.title"), href: "/finance/beasiswa" },
        { name: t("finance.dukung.title"), href: "/finance/dukung-sttb" },
      ],
    },
    {
      label: t("nav.campus_life"),
      href: "/campus-life",
      dropdown: [
        { name: t("nav.faculties"), href: "/campus-life/facilities" },
        {
          name: t("nav.student_development"),
          href: "/campus-life/student-development",
        },
        { name: t("nav.senate"), href: "/campus-life/senate" },
      ],
    },
  ];

  const quickLinks = [
    { name: language === 'id' ? "Kegiatan" : "Activities", href: "/activities", icon: Calendar },
    { name: language === 'id' ? "Berita" : "News", href: "/news", icon: Newspaper },
    { name: language === 'id' ? "Media" : "Media", href: "/media", icon: Video },
    { name: "LEAD", href: "/lead", icon: Award },
    { name: language === 'id' ? "Perpustakaan" : "Library", href: "/library", icon: Library },
  ];

  const actionLinks = [
    { name: language === 'id' ? "Kontak" : "Contact", href: "/contact", icon: Mail },
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
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 font-[Plus_Jakarta_Sans]"
    >
      <div
        className={`transition-all duration-300 ${isTopBarVisible
          ? "translate-y-0"
          : "-translate-y-full"
          }`}
      >
        <div className="bg-[#1e3a8a] border-b border-blue-800/50 hidden lg:block">
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
                      placeholder={t('nav.search') + "..."}
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
                    <span>{t('nav.search')}</span>
                  </button>
                )}

                {/* Action Links */}
                {actionLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                     <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-100 hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-white border-b-4 shadow-sm transition-all duration-300 ${isScrolled
            ? "border-gray-200 shadow-md"
            : "border-[#D4AF37] shadow-sm"
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
                        ? "text-[#dc2626] bg-red-50"
                        : "text-slate-600 hover:text-[#1e3a8a] hover:bg-slate-50"
                        }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${openDropdown === item.label
                            ? "rotate-180 text-[#1e3a8a]"
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
                              className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-colors border-l-2 border-transparent hover:border-[#dc2626]"
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
                <div className="flex items-center gap-2 border-r border-gray-200 pr-3">
                  <LanguageSwitcher />
                </div>

                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-[#1e3a8a] text-white rounded-md text-[13px] font-bold hover:bg-[#1e40af] transition-all shadow-sm hover:shadow-md active:transform active:scale-95"
                >
                  {t('nav.contact')}
                </Link>

                <Link
                  to="/admissions"
                  className="px-5 py-2.5 bg-[#dc2626] text-white rounded-md text-[13px] font-bold hover:bg-[#b91c1c] transition-all shadow-sm hover:shadow-md active:transform active:scale-95"
                >
                  {t('hero.cta')}
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
                      <button
                        className={`text-xs font-bold ${language === 'id' ? 'text-[#1e3a8a]' : 'text-slate-400'}`}
                        onClick={() => setLanguage('id')}
                      >
                        ID
                      </button>
                      <span className="text-xs text-gray-300">
                        |
                      </span>
                      <button
                        className={`text-xs font-bold ${language === 'en' ? 'text-[#1e3a8a]' : 'text-slate-400'}`}
                        onClick={() => setLanguage('en')}
                      >
                        EN
                      </button>
                    </div>
                    <Link
                      to="/login"
                      className="text-xs font-semibold text-slate-600 flex items-center gap-1"
                    >
                      <LogIn size={14} /> {t('nav.login')}
                    </Link>
                  </div>

                  <div className="px-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {t('nav.quick_menu')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickLinks.map((link) => {
                        const Icon = link.icon;
                         return (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={() =>
                              setMobileMenuOpen(false)
                            }
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-medium hover:bg-[#1e3a8a] hover:text-white transition-colors"
                          >
                            <Icon className="w-3 h-3" />
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-4 space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {t('nav.navigation')}
                    </p>
                    {navItems.map((item) => (
                      <div key={item.label}>
                        <Link
                          to={item.href}
                          className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive(item.href)
                            ? "text-[#dc2626] bg-red-50"
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
                                className="block px-3 py-1.5 text-sm text-slate-500 hover:text-[#1e3a8a]"
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
                      className="flex items-center justify-center w-full px-4 py-3 bg-[#1e3a8a] text-white rounded-md text-sm font-bold hover:bg-[#1e40af] transition-all shadow-md active:transform active:scale-95"
                    >
                      {t('nav.contact')}
                    </Link>
                    <Link
                      to="/admissions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full px-4 py-3 bg-[#dc2626] text-white rounded-md text-sm font-bold hover:bg-[#b91c1c] transition-colors shadow-md"
                    >
                      {t('hero.cta')}
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