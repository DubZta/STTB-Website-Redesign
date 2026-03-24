import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router';
import { ChevronRight, Award, Target, Users as UsersIcon } from 'lucide-react';
import { AuroraBackground } from '../../components/homepage_v1_1/ui/aurora-background';

export default function SenatePage() {
  const { language } = useLanguage();

  const trainingGroups = [
    {
      title: language === 'en' ? 'GENERAL MANAGER TRAINING' : 'TRAINING UMUM MANAGER',
      items: [
        language === 'en' ? 'TRAINING FOR NEW STUDENTS' : 'TRAINING UNTUK MAHASISWA BARU',
        language === 'en' ? 'TRAINING FOR ROOMS AND HALLWAYS' : 'TRAINING UNTUK KAMAR DAN LORONG',
      ],
    },
    {
      title: language === 'en' ? 'TRAINING GROUP' : 'TRAINING GROUP',
      items: [
        language === 'en' ? 'ACADEMIC TRAINING' : 'TRAINING AKADEMIS',
        language === 'en' ? 'STUDENT AFFAIRS TRAINING' : 'TRAINING KEMAHASISWAAN',
        language === 'en' ? 'SPIRITUAL TRAINING' : 'TRAINING KEROHANIAN',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <AuroraBackground
          className="h-full w-full z-10"
          showRadialGradient={false}
        >
          <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-sttb-navy mb-2 font-[Plus_Jakarta_Sans]">
                STTB SENAT
              </h2>
              <h1 className="text-4xl md:text-7xl font-extrabold text-sttb-navy leading-tight font-[Plus_Jakarta_Sans]">
                Students Today, Leaders Tomorrow!
              </h1>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Award className="w-10 h-10 text-sttb-navy mb-3" />
              <h4 className="text-sm font-extrabold text-sttb-navy mb-2">
                {language === 'en' ? 'Senate Vision' : 'Visi Senat'}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'To be a student organization that serves with integrity, develops leadership, and builds a transformative community for the glory of God.'
                  : 'Menjadi organisasi mahasiswa yang melayani dengan integritas, mengembangkan kepemimpinan, dan membangun komunitas yang transformatif bagi kemuliaan Tuhan.'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Target className="w-10 h-10 text-sttb-navy mb-3" />
              <h4 className="text-sm font-extrabold text-sttb-navy mb-2">
                {language === 'en' ? 'Senate Mission' : 'Misi Senat'}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Facilitating academic, spiritual, and social growth of students through holistic programs relevant to campus needs.'
                  : 'Memfasilitasi pertumbuhan akademik, rohani, dan sosial mahasiswa melalui program-program yang holistik dan relevan dengan kebutuhan kampus.'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <UsersIcon className="w-10 h-10 text-sttb-navy mb-3" />
              <h4 className="text-sm font-extrabold text-sttb-navy mb-2">
                {language === 'en' ? 'Senate Role' : 'Peran Senat'}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Bridging communication between students and campus authorities, and coordinating student activities to create a conducive campus environment.'
                  : 'Menjembatani komunikasi antara mahasiswa dan pihak kampus, serta mengkoordinasikan kegiatan kemahasiswaan untuk menciptakan lingkungan kampus yang kondusif.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-extrabold text-sttb-navy mb-8">
              {language === 'en' ? 'Senate Training Programs' : 'Program Pelatihan Senat'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-sttb-navy to-sttb-navy-light rounded-lg p-6 text-white shadow-sm"
                >
                  <h4 className="text-sm font-extrabold mb-4 border-b border-white/20 pb-3 text-white">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-sttb-red rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gray-100 text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Campus Activities & Formation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white shadow-sm">
              <h4 className="text-base font-extrabold mb-4 text-white">
                {language === 'en' ? 'CAMPUS ACTIVITIES' : 'KEGIATAN KAMPUS'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'NEW STUDENT ORIENTATION' : 'ORIENTASI MAHASISWA BARU'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'ISLAND TRIP' : 'PERGI PULAU'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'STTB WORKSHOPS AND SEMINARS' : 'WORKSHOP DAN SEMINAR STTB'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'SPORTS ACTIVITIES' : 'KEGIATAN OLAH RAGA'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sttb-red to-red-700 rounded-lg p-6 text-white shadow-sm">
              <h4 className="text-base font-extrabold mb-4 text-white">
                {language === 'en' ? 'FORMATION & FREEDOM' : 'PEMBINAAN & KEBEBASAN'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'CAMPUS EVALUATION' : 'EVALUASI KAMPUS'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'DISCUSSION FORUM' : 'FORUM BICARA'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{language === 'en' ? 'FAMILY DAY / STTB COMMEMORATION' : 'FAMILY DAY / PERINGATAN STTB'}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-sttb-navy to-sttb-navy-light rounded-lg p-8 text-center text-white shadow-sm"
          >
            <h3 className="text-xl font-extrabold mb-3 text-white">
              {language === 'en' ? 'Learn More' : 'Pelajari Lebih Lanjut'}
            </h3>
            <p className="text-xs text-gray-100 mb-6 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Discover more information about student development programs and how the STTB Senate serves the campus community.'
                : 'Temukan lebih banyak informasi tentang program pembinaan mahasiswa dan bagaimana Senat STTB melayani komunitas kampus.'}
            </p>
            <Link
              to="/campus-life/student-development"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sttb-red hover:bg-sttb-red/90 text-white rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {language === 'en' ? 'Go to Student Development' : 'Menuju Pembinaan Mahasiswa'}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}