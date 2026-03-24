import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Landmark, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();
  const quickLinks = [
    { label: t('footer.library'), href: '/library' },
    { label: t('footer.digital_library'), href: 'https://login.ebsco.com/' },
    { label: t('footer.journal'), href: 'https://e-journal.sttb.ac.id/index.php/transformatio' },
    { label: t('footer.podcast'), href: '/media' },
    { label: t('footer.video'), href: '/media' },
    { label: t('footer.bulletin'), href: '/media' }
  ];

  const academicLinks = [
    { label: t('footer.academic_system'), href: 'https://lms.sttb.ac.id/' },
    { label: t('footer.elearning'), href: 'https://lms.sttb.ac.id/' },
    { label: t('footer.lib_system'), href: '/library' },
    { label: t('footer.collaboration'), href: 'https://sinergi.sttb.ac.id/' },
    { label: t('footer.alumni_portal'), href: 'https://sis.sttb.ac.id/' },
    { label: t('footer.mail_server'), href: 'https://mail.sttb.ac.id/' },
  ];

  const admissionLinks = [
    { label: t('footer.how_to_apply'), href: '/admissions/procedure' },
    { label: t('footer.tuition_fees'), href: '/finance/biaya-studi' },
    { label: t('footer.scholarships'), href: '/finance/beasiswa' },
    { label: t('footer.faq'), href: '/admissions/faq' },
  ];

  return (
    <footer id="footer" className="bg-[#082d5e] text-white pt-20 pb-10 border-t-2 border-[#D4AF37]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border-2 border-white">
                <img
                  src="/STTB Logo.png"
                  alt="STTB Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <h3 className="mt-6 text-base font-bold text-[#FFFFFF] font-[Plus_Jakarta_Sans]">
              {t('footer.contact')}
            </h3>
            <p className="text-white/70 leading-relaxed max-w-xs text-[14px] font-[Inter] mt-3">
              {t('footer.description')}
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="font-[Inter]">Jl. Dr. Djunjunan No. 105 Bandung 40173</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="font-[Inter]">(+62) 22 601-6454, 607-7920</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="font-[Inter]">official@sttb.ac.id</span>
              </li>
            </ul>
          </div>

          {/* Sumber Daya */}
          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wide relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-px after:bg-[#D4AF37] font-[Plus_Jakarta_Sans] text-white">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-200 text-sm font-[Inter] hover:translate-x-1 inline-flex"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Bantuan */}
          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wide relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-px after:bg-[#D4AF37] font-[Plus_Jakarta_Sans] text-white">
              {t('footer.help_links')}
            </h3>
            <ul className="space-y-4">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-200 text-sm font-[Inter] hover:translate-x-1 inline-flex"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter + Rekening */}
          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wide relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-px after:bg-[#D4AF37] font-[Plus_Jakarta_Sans] text-white">
              {language === 'id' ? 'Sosial & Buletin' : 'Social & Newsletter'}
            </h3>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/sttbandung.bts/"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/sekolahtinggiteologibandung/?hl=en"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/c/SekolahTinggiTeologiBandung"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://wa.me/6281573360009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm font-semibold mb-3 text-white font-[Plus_Jakarta_Sans]">Newsletter</p>
              <div className="flex gap-2 items-stretch">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 bg-white text-slate-700 placeholder:text-slate-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 min-w-0"
                />
                <button
                  type="button"
                  className="bg-[#E31D1A] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md transition-all whitespace-nowrap h-auto"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-xs text-white/60 font-[Inter]">
                Get updates on events, research, and campus news.
              </p>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#214F97] to-[#183C72] border border-white/10 rounded-xl p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Landmark size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/70 font-[Plus_Jakarta_Sans]">Informasi Rekening</p>
                  <p className="text-sm font-semibold text-white">BCA</p>
                </div>
              </div>
              <p className="text-xl font-semibold tracking-widest text-white">282.300.5555</p>
              <p className="text-xs text-white/70 mt-2 font-[Inter]">a.n. Sekolah Tinggi Teologi Bandung</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white">
          <p className="font-[Plus_Jakarta_Sans] text-white">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}