import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, FileText, HelpCircle, ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import AdmissionsFooter from '../components/admissions/AdmissionsFooter';

export default function AdmissionsPage() {
  const { t } = useLanguage();

  const quickLinks = [
    {
      icon: Calendar,
      title: t('lang') === 'id' ? 'Jadwal Admisi' : 'Admission Schedule',
      description: t('lang') === 'id' ? 'Lihat tanggal penting dan batas waktu' : 'View important dates and deadlines',
      link: '/admissions/schedule',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: FileText,
      title: t('lang') === 'id' ? 'Prosedur' : 'Procedure',
      description: t('lang') === 'id' ? 'Langkah-langkah proses pendaftaran' : 'Step-by-step application process',
      link: '/admissions/procedure',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: Users,
      title: t('lang') === 'id' ? 'Persyaratan' : 'Requirements',
      description: t('lang') === 'id' ? 'Cek persyaratan pendaftaran' : 'Check admission requirements',
      link: '/admissions/requirements',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: t('lang') === 'id' ? 'Temukan jawaban untuk pertanyaan umum' : 'Find answers to common questions',
      link: '/admissions/faq',
      color: 'from-red-600 to-red-400',
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
              {t('lang') === 'id' ? 'Admisi STTB' : 'STTB Admissions'}
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              {t('lang') === 'id'
                ? 'Mulai perjalanan teologis Anda bersama STTB. Kami membuka kesempatan bagi Anda untuk mengembangkan pelayanan dan akademis dalam iman Reformed.'
                : 'Start your theological journey with STTB. We open opportunities for you to develop your ministry and academics in the Reformed faith.'}
            </p>
          </motion.div>

          {/* Quick Links Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {quickLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg group-hover:text-sttb-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sttb-red font-medium text-xs">
                    {t('lang') === 'id' ? 'Lihat Detail' : 'View Details'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Why Choose STTB Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('lang') === 'id' ? 'Mengapa Memilih STTB?' : 'Why Choose STTB?'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sttb-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-sttb-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  {t('lang') === 'id' ? 'Akreditasi Unggul' : 'Excellent Accreditation'}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t('lang') === 'id'
                    ? 'Program studi terakreditasi BAN-PT dan ATA untuk jaminan kualitas pendidikan'
                    : 'Study programs accredited by BAN-PT and ATA for quality education assurance'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sttb-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-sttb-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  {t('lang') === 'id' ? 'Teologi Reformed' : 'Reformed Theology'}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t('lang') === 'id'
                    ? 'Fondasi teologi Reformed Injili yang kuat dengan pengajaran berkualitas'
                    : 'Strong Reformed Evangelical theological foundation with quality teaching'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sttb-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-sttb-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  {t('lang') === 'id' ? 'Komunitas Pelayanan' : 'Ministry Community'}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t('lang') === 'id'
                    ? 'Komunitas mahasiswa dan dosen yang mendukung pertumbuhan spiritual dan akademis'
                    : 'Community of students and lecturers supporting spiritual and academic growth'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}