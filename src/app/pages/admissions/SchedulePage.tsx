import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar, MapPin, Clock, ExternalLink, Mail, Phone } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function SchedulePage() {
  const { language } = useLanguage();

  const schedules = [
    {
      title: language === 'en' ? 'Wave 1' : 'Gelombang 1',
      period: language === 'en' ? 'January - February 2026' : 'Januari - Februari 2026',
      registration: language === 'en' ? 'January 1 - February 15, 2026' : '1 Januari - 15 Februari 2026',
      test: language === 'en' ? 'February 20-22, 2026' : '20 - 22 Februari 2026',
      announcement: language === 'en' ? 'March 1, 2026' : '1 Maret 2026',
    },
    {
      title: language === 'en' ? 'Wave 2' : 'Gelombang 2',
      period: language === 'en' ? 'March - April 2026' : 'Maret - April 2026',
      registration: language === 'en' ? 'March 1 - April 15, 2026' : '1 Maret - 15 April 2026',
      test: language === 'en' ? 'April 20-22, 2026' : '20 - 22 April 2026',
      announcement: language === 'en' ? 'May 1, 2026' : '1 Mei 2026',
    },
    {
      title: language === 'en' ? 'Wave 3' : 'Gelombang 3',
      period: language === 'en' ? 'May - June 2026' : 'Mei - Juni 2026',
      registration: language === 'en' ? 'May 1 - June 15, 2026' : '1 Mei - 15 Juni 2026',
      test: language === 'en' ? 'June 20-22, 2026' : '20 - 22 Juni 2026',
      announcement: language === 'en' ? 'July 1, 2026' : '1 Juli 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {language === 'en' ? 'New Student Admission Schedule' : 'Jadwal Admisi Mahasiswa Baru'}
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              {language === 'en'
                ? 'Academic Year 2026/2027'
                : 'Tahun Akademik 2026/2027'}
            </p>
          </motion.div>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {schedules.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-sttb-navy to-blue-900 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{schedule.title}</h3>
                  <p className="text-xs md:text-sm text-blue-100">{schedule.period}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-sttb-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-xs md:text-sm">
                        {language === 'en' ? 'Registration' : 'Pendaftaran'}
                      </p>
                      <p className="text-xs text-gray-600">{schedule.registration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sttb-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-xs md:text-sm">
                        {language === 'en' ? 'Entrance Test' : 'Tes Masuk'}
                      </p>
                      <p className="text-xs text-gray-600">{schedule.test}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sttb-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-xs md:text-sm">
                        {language === 'en' ? 'Announcement' : 'Pengumuman'}
                      </p>
                      <p className="text-xs text-gray-600">{schedule.announcement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 mb-12 border border-red-200"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Important Information' : 'Informasi Penting'}
            </h3>
            <ul className="space-y-3 text-gray-700 text-xs md:text-sm">
              <li className="flex items-start gap-3">
                <span className="text-sttb-red font-bold">•</span>
                <span>
                  {language === 'en'
                    ? 'Registration can be done online through STTB admission system'
                    : 'Pendaftaran dapat dilakukan secara online melalui sistem admisi STTB'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sttb-red font-bold">•</span>
                <span>
                  {language === 'en'
                    ? 'Registration fee of Rp 500,000 (non-refundable)'
                    : 'Biaya pendaftaran sebesar Rp 500.000,- (tidak dapat dikembalikan)'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sttb-red font-bold">•</span>
                <span>
                  {language === 'en'
                    ? 'Entrance test is conducted online and interviews can be done online or in-person'
                    : 'Tes masuk dilaksanakan secara online dan wawancara dapat dilakukan secara daring atau tatap muka'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sttb-red font-bold">•</span>
                <span>
                  {language === 'en'
                    ? 'Announcement results will be sent via email and WhatsApp'
                    : 'Hasil pengumuman akan dikirimkan melalui email dan WhatsApp'}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Poster Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                {language === 'en' ? 'New Student Registration 2026/2027' : 'Pendaftaran Mahasiswa Baru TA 2026/2027'}
              </h3>
              
              <div className="grid md:grid-cols-5 gap-8 items-center mb-8">
                {/* Left - Info */}
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-sttb-navy to-blue-900 text-white rounded-xl p-6">
                      <h4 className="font-bold text-base md:text-lg mb-3">
                        {language === 'en' ? 'Registration Information' : 'Informasi Pendaftaran'}
                      </h4>
                      <ul className="space-y-3 text-xs md:text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-200">•</span>
                          <span>3 Gelombang Pendaftaran</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-200">•</span>
                          <span>Proses pendaftaran online mudah dan cepat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-200">•</span>
                          <span>Tes masuk dilaksanakan secara online</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-200">•</span>
                          <span>Hasil pengumuman via email & WhatsApp</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h5 className="font-bold text-gray-900 mb-2 text-sm">Biaya Pendaftaran</h5>
                      <p className="text-xl md:text-2xl font-bold text-sttb-red mb-2">Rp 500.000,-</p>
                      <p className="text-[10px] md:text-xs text-gray-600">*Biaya tidak dapat dikembalikan</p>
                    </div>

                    <a
                      href="https://sis.sttb.ac.id/pmb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-sttb-red to-red-600 hover:from-sttb-red/90 hover:to-red-600/90 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
                      >
                        {language === 'en' ? 'Register Online Now' : 'Daftar Online Sekarang'}
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </a>
                  </div>
                </div>

                {/* Right - Poster (Larger) */}
                <div className="md:col-span-3">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src="https://sttb.ac.id/storage/2022/04/Poster-Admisi-STTB-TA-2026-2027-2.png"
                      alt="STTB Admission Poster 2026-2027"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info Bottom */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-center text-gray-600 mb-4 text-xs md:text-sm">
                  {language === 'en' 
                    ? 'For more information, contact:'
                    : 'Untuk informasi lebih lanjut, hubungi:'}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                    <Mail className="w-4 h-4 text-sttb-red" />
                    <span className="font-semibold">admisi@sttb.ac.id</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                    <Phone className="w-4 h-4 text-sttb-red" />
                    <span className="font-semibold">0815 7336 0009</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}