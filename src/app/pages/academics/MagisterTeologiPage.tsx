import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MagisterTeologiPage() {
  const { t } = useLanguage();

  const programInfo = {
    code: 'M.Th.',
    name: 'Magister Teologi',
    nameEn: 'Master of Theology',
    duration: '2 Tahun (4 Semester)',
    credits: '48 SKS',
    accreditation: 'Terakreditasi B (BAN-PT)',
  };

  const description = {
    overview: 'Program Magister Teologi dirancang untuk menghasilkan pastor-scholar yang memiliki kedalaman teologis, kompetensi akademis, dan relevansi pelayanan. Program ini menekankan penelitian teologi yang rigorous, refleksi kritis terhadap isu-isu kontemporer, dan aplikasi praktis dalam konteks gereja dan masyarakat.',
    objectives: [
      'Menghasilkan lulusan yang mampu melakukan penelitian teologi yang berkualitas tinggi',
      'Membentuk pemikir teologi yang kritis dan reflektif terhadap isu-isu kontemporer',
      'Mengembangkan kemampuan mengajar dan membimbing dalam pendidikan teologi',
      'Mempersiapkan pemimpin gereja yang akademis dan transformatif',
    ],
    careerPaths: [
      'Dosen/Pengajar Teologi',
      'Peneliti Teologi',
      'Pendeta/Gembala Senior',
      'Penulis/Penerbit Teologi',
      'Konsultan Teologi',
      'Pemimpin Lembaga Teologi',
    ],
  };

  const curriculum = {
    semester1: [
      { code: 'RM501', name: 'Metodologi Penelitian', sks: 3 },
      { code: 'TH501', name: 'Teologi Kontemporer', sks: 3 },
      { code: 'HE501', name: 'Hermeneutika Lanjutan', sks: 3 },
      { code: 'LA501', name: 'Bahasa Penelitian (Yunani/Ibrani)', sks: 3 },
      { code: 'EL501', name: 'Mata Kuliah Konsentrasi I', sks: 3 },
    ],
    semester2: [
      { code: 'BT501', name: 'Teologi Biblika Lanjutan', sks: 3 },
      { code: 'ST501', name: 'Teologi Sistematika Lanjutan', sks: 3 },
      { code: 'HT501', name: 'Teologi Historis', sks: 3 },
      { code: 'EL502', name: 'Mata Kuliah Konsentrasi II', sks: 3 },
      { code: 'EL503', name: 'Mata Kuliah Konsentrasi III', sks: 3 },
    ],
    semester3: [
      { code: 'PT501', name: 'Teologi Praktis Lanjutan', sks: 3 },
      { code: 'CT501', name: 'Teologi & Budaya', sks: 3 },
      { code: 'EL504', name: 'Mata Kuliah Konsentrasi IV', sks: 3 },
      { code: 'TH601', name: 'Proposal Tesis', sks: 3 },
    ],
    semester4: [
      { code: 'TH701', name: 'Tesis', sks: 12 },
    ],
  };

  const concentrations = [
    'Biblika (Old Testament / New Testament)',
    'Teologi Sistematika',
    'Teologi Praktis',
    'Transformasi Budaya & Masyarakat',
  ];

  const requirements = {
    academic: [
      'Lulusan S.Th., M.Div., atau S1 bidang terkait dengan IPK min. 2.75',
      'Surat rekomendasi akademis dari dosen/pembimbing',
      'Proposal penelitian (untuk konsentrasi tertentu)',
    ],
    spiritual: [
      'Surat rekomendasi dari gembala/pemimpin gereja',
      'Aktif dalam pelayanan gereja minimal 2 tahun',
      'Memiliki visi untuk pelayanan akademis/teologis',
    ],
    administrative: [
      'Mengisi formulir pendaftaran online',
      'Transkrip dan ijazah S1 yang dilegalisir',
      'Pas foto terbaru 3x4 (4 lembar)',
      'CV dan essay motivasi',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AcademicSubNav />

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-gradient-to-br from-sttb-red to-red-700 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold mb-2 text-white">{programInfo.code}</h1>
                  <p className="text-2xl font-semibold text-red-100 mb-4">
                    {programInfo.name}
                  </p>
                  <p className="text-lg text-red-200 italic">{programInfo.nameEn}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold">
                    {programInfo.duration}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold">
                    {programInfo.credits}
                  </span>
                  <span className="bg-green-500/90 px-4 py-2 rounded-lg text-sm font-semibold">
                    {programInfo.accreditation}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-sttb-red" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {t('academics.overview')}
                </h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {description.overview}
              </p>
            </div>
          </motion.div>

          {/* Objectives & Career */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-sttb-red" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t('academics.objectives')}
                </h3>
              </div>
              <ul className="space-y-2">
                {description.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-sttb-red" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t('academics.career')}
                </h3>
              </div>
              <ul className="space-y-2">
                {description.careerPaths.map((career, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700">{career}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Concentrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Konsentrasi Studi
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {concentrations.map((conc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3"
                  >
                    <CheckCircle className="w-5 h-5 text-sttb-red flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{conc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                {t('academics.curriculum')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(curriculum).map(([semester, courses], semIndex) => (
                <motion.div
                  key={semester}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: semIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-sttb-red to-red-700 px-4 py-3">
                    <h3 className="text-base font-bold text-white">
                      Semester {semIndex + 1}
                    </h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {courses.map((course: any, index: number) => (
                        <li
                          key={index}
                          className="flex items-start justify-between gap-2 text-xs"
                        >
                          <div className="flex-1">
                            <span className="font-semibold text-gray-900">
                              {course.code}
                            </span>
                            <span className="text-gray-700 ml-2">{course.name}</span>
                          </div>
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-700 font-semibold flex-shrink-0">
                            {course.sks} SKS
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                {t('academics.requirements')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                <h3 className="text-base font-bold text-sttb-red mb-3">
                  Persyaratan Akademis
                </h3>
                <ul className="space-y-2">
                  {requirements.academic.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                <h3 className="text-base font-bold text-sttb-red mb-3">
                  Persyaratan Spiritual
                </h3>
                <ul className="space-y-2">
                  {requirements.spiritual.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                <h3 className="text-base font-bold text-sttb-red mb-3">
                  Persyaratan Administratif
                </h3>
                <ul className="space-y-2">
                  {requirements.administrative.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
