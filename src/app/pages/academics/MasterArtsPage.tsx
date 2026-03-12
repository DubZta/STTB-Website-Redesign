import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function MasterArtsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <AcademicSubNav />
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl p-8 text-white shadow-lg">
              <h1 className="text-4xl font-extrabold mb-2">M.A.</h1>
              <p className="text-2xl font-semibold text-teal-100">Master of Arts</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center">
            <BookOpen className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Program Details Coming Soon</h2>
            <p className="text-gray-600">Detail program akan segera tersedia.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
