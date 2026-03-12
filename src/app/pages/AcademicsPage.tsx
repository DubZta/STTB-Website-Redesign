import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AcademicsPage() {
  const { t } = useLanguage();

  const undergraduatePrograms = [
    {
      code: 'S.Th.',
      name: t('academics.programs.sth'),
      description: 'Program studi yang mempersiapkan pemimpin gereja yang memiliki pemahaman teologi yang mendalam dan kemampuan pelayanan yang transformatif.',
      href: '/academics/sarjana-teologi',
      duration: '4 tahun',
      credits: '144 SKS',
    },
    {
      code: 'S.Pd.K.',
      name: t('academics.programs.spdk'),
      description: 'Program studi yang memperlengkapi pendidik Kristen dengan landasan teologi yang kuat dan metodologi pendidikan yang efektif.',
      href: '/academics/sarjana-pendidikan',
      duration: '4 tahun',
      credits: '144 SKS',
    },
  ];

  const graduatePrograms = [
    {
      code: 'M.Th.',
      name: t('academics.programs.mth'),
      description: 'Program master teologi yang mengembangkan pastor-scholar dengan kedalaman akademis dan relevansi pelayanan.',
      href: '/academics/magister-teologi',
      duration: '2 tahun',
      credits: '48 SKS',
    },
    {
      code: 'M.Pd.K.',
      name: t('academics.programs.mpdk'),
      description: 'Program master pendidikan Kristen untuk para pemimpin dan praktisi pendidikan Kristen.',
      href: '/academics/magister-pendidikan',
      duration: '2 tahun',
      credits: '48 SKS',
    },
    {
      code: 'M.Div.',
      name: t('academics.programs.mdiv'),
      description: 'Program master divinity yang dirancang untuk memperlengkapi hamba Tuhan dengan pendidikan teologi yang komprehensif.',
      href: '/academics/master-divinity',
      duration: '3 tahun',
      credits: '90 SKS',
    },
    {
      code: 'M.Min. (Pastoral)',
      name: t('academics.programs.mmin_pastoral'),
      description: 'Program magister ministri dengan fokus kepemimpinan pastoral dan pembinaan jemaat.',
      href: '/academics/magister-ministri-pastoral',
      duration: '2 tahun',
      credits: '48 SKS',
    },
    {
      code: 'M.Min. (Marketplace)',
      name: t('academics.programs.mmin_marketplace'),
      description: 'Program magister ministri untuk profesional Kristen yang melayani di dunia kerja.',
      href: '/academics/magister-ministri-marketplace',
      duration: '2 tahun',
      credits: '48 SKS',
    },
    {
      code: 'M.A.',
      name: t('academics.programs.ma'),
      description: 'Program master arts untuk memperlengkapi kaum awam dengan pendidikan teologi yang solid.',
      href: '/academics/master-arts',
      duration: '2 tahun',
      credits: '48 SKS',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-sttb-navy to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-50">
                {t('academics.title')}
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('academics.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Undergraduate Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-sttb-navy to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                {t('academics.undergraduate')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {undergraduatePrograms.map((program, index) => (
                <motion.div
                  key={program.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={program.href}
                    className="block bg-white rounded-xl p-6 shadow-md border-2 border-gray-200 hover:border-sttb-navy hover:shadow-lg transition-all group h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-sttb-navy mb-1 group-hover:text-sttb-red transition-colors">
                          {program.code}
                        </h3>
                        <p className="text-lg font-semibold text-gray-900">
                          {program.name}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">
                          {program.duration}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-semibold">
                          {program.credits}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Graduate Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-sttb-red to-red-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                {t('academics.graduate')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graduatePrograms.map((program, index) => (
                <motion.div
                  key={program.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={program.href}
                    className="block bg-white rounded-xl p-6 shadow-md border-2 border-gray-200 hover:border-sttb-red hover:shadow-lg transition-all group h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-sttb-red mb-1 group-hover:text-sttb-navy transition-colors">
                          {program.code}
                        </h3>
                        <p className="text-base font-semibold text-gray-900">
                          {program.name}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">
                          {program.duration}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-semibold">
                          {program.credits}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
