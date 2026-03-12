import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Building2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const resources = [
    { name: t('footer.library'), href: '/library' },
    { name: t('footer.digital_library'), href: '/digital-library' },
    { name: t('footer.journal'), href: '/journal' },
    { name: t('footer.podcast'), href: '/podcast' },
    { name: t('footer.video'), href: '/videos' },
    { name: t('footer.bulletin'), href: '/bulletin' },
  ];

  const helpLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Student Portal', href: 'https://portal.sttb.ac.id' },
    { name: 'Staff Portal', href: 'https://staff.sttb.ac.id' },
    { name: 'E-Learning', href: 'https://elearning.sttb.ac.id' },
  ];

  return (
    <footer className="bg-gray-900 text-white z-[2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sttb-navy to-sttb-navy-light rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">ST</span>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight text-white">Sekolah Tinggi Teologi</div>
                <div className="font-extrabold text-base leading-tight text-sttb-red">BANDUNG</div>
              </div>
            </div>
            <h3 className="font-semibold mb-4 text-lg text-white">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <span>+62 22 250 4872</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@sttb.ac.id" className="hover:text-white transition-colors">
                  info@sttb.ac.id
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - Sumber Daya */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">{t('footer.quick_links')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">{t('footer.help_links')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Connect With Us</h3>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://facebook.com/sttbbandung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-sttb-navy rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-sttb-navy"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://instagram.com/sttbbandung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-sttb-red rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-sttb-red"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://youtube.com/@sttbbandung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-sttb-red rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-sttb-red"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://twitter.com/sttbbandung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-sttb-navy rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-sttb-navy"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
            <div className="mt-6 w-full">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2 w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sttb-red focus:border-transparent transition-all"
                />
                <button className="px-4 py-2.5 bg-sttb-red hover:bg-sttb-red/90 rounded-lg text-sm font-semibold transition-all whitespace-nowrap shadow-lg hover:shadow-xl flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Account Information */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-sttb-navy/20 to-sttb-red/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sttb-red rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white">Informasi Rekening</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-400 mb-2 text-xs uppercase tracking-wider">Bank</p>
                <p className="text-white font-semibold text-base">BCA Cab. Surya Sumantri</p>
                <p className="text-gray-300 text-sm">Bandung</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2 text-xs uppercase tracking-wider">No. Rekening</p>
                <p className="text-white font-mono text-xl font-bold">282.300.5555</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2 text-xs uppercase tracking-wider">Atas Nama</p>
                <p className="text-white font-semibold text-base">Yayasan STT Bandung</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}