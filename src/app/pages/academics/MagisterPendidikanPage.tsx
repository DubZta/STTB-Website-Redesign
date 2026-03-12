import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Award, Users, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MagisterPendidikanPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <AcademicSubNav />

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold mb-2">M.Pd.K.</h1>
                  <p className="text-2xl font-semibold text-purple-100 mb-4">
                    Magister Pendidikan Kristen
                  </p>
                  <p className="text-lg text-purple-200 italic">
                    Master of Christian Education
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold">
                    2 Tahun (4 Semester)
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold">
                    48 SKS
                  </span>
                  <span className="bg-green-500/90 px-4 py-2 rounded-lg text-sm font-semibold">
                    Terakreditasi B (BAN-PT)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center"
          >
            <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Program Details Coming Soon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detail lengkap untuk program Magister Pendidikan Kristen akan segera tersedia. 
              Untuk informasi lebih lanjut, silakan hubungi kami.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
