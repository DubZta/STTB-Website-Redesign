import { Link } from 'react-router';
import { Calendar, Newspaper, Video, Award, Library, LogIn, Mail, Search } from 'lucide-react';
import { useState } from 'react';

export default function TopBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="bg-sttb-navy border-b border-blue-800 hidden lg:block z-[2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            {quickLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[11px] font-medium text-gray-200 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search & Action Links */}
          <div className="flex items-center gap-5">
            {/* Search */}
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari..."
                  className="px-3 py-1 text-[11px] rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 w-48"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-300 hover:text-white text-[11px]"
                >
                  ✕
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-[11px] font-medium text-gray-200 hover:text-white transition-colors group"
              >
                <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Action Links */}
            {actionLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-sttb-red transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}