import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AcademicsPage() {
  const { t, language } = useLanguage();

  const undergraduatePrograms = [
    {
      code: 'S.Th.',
      name: language === 'id' ? 'Sarjana Teologi' : 'Bachelor of Theology',
      description: language === 'id' 
        ? 'Program studi yang mempersiapkan pemimpin gereja yang memiliki pemahaman teologi yang mendalam dan kemampuan pelayanan yang transformatif.' 
        : 'A study program that prepares church leaders with a deep theological understanding and transformative ministry skills.',
      href: '/academics/sarjana-teologi',
      duration: language === 'id' ? '4 tahun' : '4 years',
      credits: '144 SKS',
    },
    {
      code: 'S.Pd',
      name: language === 'id' ? 'Sarjana Pendidikan Kristen' : 'Bachelor of Christian Education',
      description: language === 'id' 
        ? 'Program studi yang memperlengkapi pendidik Kristen dengan landasan teologi yang kuat dan metodologi pendidikan yang efektif.'
        : 'A study program that equips Christian educators with a strong theological foundation and effective educational methodology.',
      href: '/academics/sarjana-pendidikan-kristen',
      duration: language === 'id' ? '4 tahun' : '4 years',
      credits: '144 SKS',
    },
  ];

  const graduatePrograms = [
    {
      code: 'M.Th.',
      name: language === 'id' ? 'Magister Teologi Pelayanan Pastoral Gereja Urban' : 'Master of Theology in Urban Church Pastoral Ministry',
      description: language === 'id'
        ? 'Program master teologi dengan fokus pelayanan pastoral dalam konteks gereja urban yang dinamis.'
        : 'A master of theology program focusing on pastoral ministry within a dynamic urban church context.',
      href: '/academics/magister-teologi-pelayanan-pastoral-gereja-urban',
      duration: language === 'id' ? '2 tahun' : '2 years',
      credits: '60 SKS',
      featured: false,
    },
    {
      code: 'M.Th.',
      name: language === 'id' ? 'Magister Teologi Transformasi Budaya & Masyarakat' : 'Master of Theology in Transformation of Culture & Society',
      description: language === 'id'
        ? 'Program master teologi yang mempersiapkan pemimpin untuk transformasi budaya dan masyarakat.'
        : 'A master of theology program that prepares leaders for cultural and societal transformation.',
      href: '/academics/magister-teologi-transformasi-budaya-masyarakat',
      duration: language === 'id' ? '2 tahun' : '2 years',
      credits: '60 SKS',
      featured: false,
    },
    {
      code: 'M.Pd.',
      name: language === 'id' ? 'Magister Pendidikan Kristen' : 'Master of Christian Education',
      description: language === 'id'
        ? 'Program master pendidikan Kristen untuk para pemimpin dan praktisi pendidikan Kristen.'
        : 'A master of Christian education program for Christian education leaders and practitioners.',
      href: '/academics/magister-pendidikan-kristen',
      duration: language === 'id' ? '2 tahun' : '2 years',
      credits: '60 SKS',
      featured: false,
    },
    {
      code: 'M.Min.',
      name: language === 'id' ? 'Magister Ministri Marketplace' : 'Master of Ministry in Marketplace',
      description: language === 'id'
        ? 'Program magister ministri untuk profesional Kristen yang melayani di dunia kerja dan bisnis.'
        : 'A master of ministry program for Christian professionals serving in the working world and business.',
      href: '/academics/magister-ministri-marketplace',
      duration: language === 'id' ? '2 tahun' : '2 years',
      credits: '60 SKS',
      featured: true,
    },
    {
      code: 'M.Min.',
      name: language === 'id' ? 'Magister Ministri Kepemimpinan Pastoral' : 'Master of Ministry in Pastoral Leadership',
      description: language === 'id'
        ? 'Program magister ministri dengan fokus kepemimpinan pastoral dan pembinaan jemaat.'
        : 'A master of ministry program focusing on pastoral leadership and congregational development.',
      href: '/academics/magister-ministri-kepemimpinan-pastoral',
      duration: language === 'id' ? '2 tahun' : '2 years',
      credits: '60 SKS',
      featured: false,
    },
    {
      code: 'M.Min.',
      name: language === 'id' ? 'Magister Ministri Teologi Pelayanan Gerejawi' : 'Master of Ministry in Ecclesial Ministry Theology',
      description: language === 'id'
        ? 'Program magister ministri untuk pelayanan gerejawi yang komprehensif dan transformatif.'
        : 'A master of ministry program for comprehensive and transformative ecclesial ministry.',
      href: '/academics/magister-ministri-teologi-pelayanan-gerejawi',
      duration: language === 'id' ? '2 tahun' : '2 years',
      credits: '60 SKS',
      featured: false,
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
                  key={`${program.code}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={program.href}
                    className={`block bg-white rounded-xl p-6 shadow-md border-2 transition-all group h-full ${program.featured
                      ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-white hover:border-teal-600 hover:shadow-xl'
                      : 'border-gray-200 hover:border-sttb-red hover:shadow-lg'
                      }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-xl font-bold mb-1 group-hover:text-sttb-navy transition-colors ${program.featured ? 'text-teal-600' : 'text-sttb-red'
                            }`}>
                            {program.code}
                          </h3>
                          {program.featured && (
                            <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded font-semibold">
                            {language === 'id' ? 'POPULER' : 'POPULAR'}
                            </span>
                          )}
                        </div>
                        <p className="text-base font-semibold text-gray-900">
                          {program.name}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-xs px-2 py-1 rounded font-semibold ${program.featured
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-red-100 text-red-800'
                          }`}>
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