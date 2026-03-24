import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AdmissionsFooter() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-sttb-navy via-blue-900 to-sttb-navy py-12 mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Bantuan & Informasi */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'en'
                ? 'Help & Document Return Information'
                : 'Bantuan & Informasi Pengembalian Berkas'}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-sttb-red/10 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-sttb-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">0815 7336 0009</p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'WhatsApp / Phone' : 'WhatsApp / Telepon'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-sttb-red/10 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-sttb-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">admisi@sttb.ac.id</p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Admissions Email' : 'Email Bagian Admisi'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'For document return information or admission inquiries, please contact our team through the above contacts.'
                  : 'Untuk informasi pengembalian berkas atau pertanyaan seputar admisi, silakan hubungi tim kami melalui kontak di atas.'}
              </p>
            </div>
          </motion.div>

          {/* Right - Pendaftaran Online */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-sttb-red to-red-700 rounded-xl p-8 shadow-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              {language === 'en'
                ? 'Ready to Apply?'
                : 'Siap Mendaftar?'}
            </h3>
            <p className="text-red-50 mb-6 leading-relaxed">
              {language === 'en'
                ? 'Start your journey with STTB by applying online. Our system makes the application process easy for you.'
                : 'Mulai perjalanan Anda bersama STTB dengan mendaftar secara online. Sistem kami memudahkan proses pendaftaran Anda.'}
            </p>

            <a
              href="https://sis.sttb.ac.id/pmb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-sttb-red font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                {language === 'en' ? 'APPLY ONLINE' : 'DAFTAR ONLINE'}
              </motion.button>
            </a>

            <div className="mt-6 pt-6 border-t border-red-400/30">
              <p className="text-sm text-red-50">
                {language === 'en'
                  ? 'Note: Registration form is available online and accessible 24/7'
                  : 'Catatan: Formulir pendaftaran tersedia secara online dan dapat diakses 24/7'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}