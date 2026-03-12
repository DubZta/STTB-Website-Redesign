import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function SarjanaPendidikanPage() {
  const { t } = useLanguage();

  const programInfo = {
    code: 'S.Pd.K.',
    name: 'Sarjana Pendidikan Kristen',
    nameEn: 'Bachelor of Christian Education',
    duration: '4 Tahun (8 Semester)',
    credits: '144 SKS',
    accreditation: 'Terakreditasi B (BAN-PT)',
  };

  const description = {
    overview: 'Program Sarjana Pendidikan Kristen dirancang untuk mempersiapkan pendidik Kristen yang profesional dengan landasan teologi yang kokoh dan kemampuan pedagogis yang efektif. Program ini mengintegrasikan teologi, pendidikan, dan praktik pelayanan untuk menghasilkan pemimpin pendidikan Kristen yang transformatif.',
    objectives: [
      'Menghasilkan lulusan yang memiliki pemahaman teologi dan filsafat pendidikan Kristen yang solid',
      'Membentuk pendidik Kristen yang kompeten dalam metodologi pengajaran dan manajemen pendidikan',
      'Mengembangkan kemampuan merancang dan melaksanakan program pendidikan Kristen yang efektif',
      'Mempersiapkan pemimpin pendidikan Kristen yang inovatif dan berorientasi pada transformasi',
    ],
    careerPaths: [
      'Guru Pendidikan Agama Kristen',
      'Kepala Sekolah Kristen',
      'Koordinator Pendidikan Gereja',
      'Pengembang Kurikulum Kristen',
      'Dosen Pendidikan Kristen',
      'Konsultan Pendidikan Kristen',
    ],
  };

  const curriculum = {
    semester1: [
      { code: 'BI101', name: 'Pengantar Perjanjian Lama', sks: 3 },
      { code: 'BI102', name: 'Pengantar Perjanjian Baru', sks: 3 },
      { code: 'CE101', name: 'Pengantar Pendidikan Kristen', sks: 3 },
      { code: 'ED101', name: 'Psikologi Perkembangan', sks: 3 },
      { code: 'LA101', name: 'Bahasa Inggris I', sks: 2 },
      { code: 'GE101', name: 'Filsafat Pendidikan', sks: 2 },
    ],
    semester2: [
      { code: 'BI201', name: 'Eksegesis Perjanjian Lama', sks: 3 },
      { code: 'BI202', name: 'Eksegesis Perjanjian Baru', sks: 3 },
      { code: 'CE201', name: 'Teologi Pendidikan Kristen', sks: 3 },
      { code: 'ED201', name: 'Psikologi Pendidikan', sks: 3 },
      { code: 'LA201', name: 'Bahasa Inggris II', sks: 2 },
      { code: 'ED202', name: 'Kurikulum & Pembelajaran', sks: 2 },
    ],
    semester3: [
      { code: 'ST301', name: 'Teologi Sistematika I', sks: 3 },
      { code: 'CE301', name: 'Metode Pengajaran PAK', sks: 3 },
      { code: 'ED301', name: 'Manajemen Pendidikan', sks: 3 },
      { code: 'CE302', name: 'Pendidikan Anak', sks: 3 },
      { code: 'ED302', name: 'Media Pembelajaran', sks: 2 },
      { code: 'PM101', name: 'Musik Gereja', sks: 2 },
    ],
    semester4: [
      { code: 'ST401', name: 'Teologi Sistematika II', sks: 3 },
      { code: 'CE401', name: 'Pendidikan Remaja', sks: 3 },
      { code: 'ED401', name: 'Evaluasi Pembelajaran', sks: 3 },
      { code: 'CE402', name: 'Kepemimpinan Pendidikan', sks: 3 },
      { code: 'PM201', name: 'Konseling Pendidikan', sks: 2 },
      { code: 'ED402', name: 'Penelitian Pendidikan', sks: 2 },
    ],
    semester5: [
      { code: 'CE501', name: 'Pendidikan Dewasa', sks: 3 },
      { code: 'CE502', name: 'Sejarah Pendidikan Kristen', sks: 3 },
      { code: 'ED501', name: 'Administrasi Pendidikan', sks: 3 },
      { code: 'ET101', name: 'Etika Kristen', sks: 3 },
      { code: 'CE503', name: 'Pengembangan Kurikulum PAK', sks: 3 },
      { code: 'EL101', name: 'Mata Kuliah Pilihan I', sks: 2 },
    ],
    semester6: [
      { code: 'CE601', name: 'Pendidikan Keluarga', sks: 3 },
      { code: 'CE602', name: 'Teori Belajar & Pembelajaran', sks: 3 },
      { code: 'ED601', name: 'Supervisi Pendidikan', sks: 2 },
      { code: 'CE603', name: 'Teknologi Pendidikan Kristen', sks: 3 },
      { code: 'PM301', name: 'Pemuridan', sks: 2 },
      { code: 'EL201', name: 'Mata Kuliah Pilihan II', sks: 3 },
    ],
    semester7: [
      { code: 'CE701', name: 'Praktikum Mengajar', sks: 4 },
      { code: 'CE702', name: 'Isu Kontemporer Pendidikan Kristen', sks: 3 },
      { code: 'CE703', name: 'Pendidikan Inklusif', sks: 3 },
      { code: 'ED701', name: 'Manajemen Kelas', sks: 2 },
      { code: 'EL301', name: 'Mata Kuliah Pilihan III', sks: 3 },
    ],
    semester8: [
      { code: 'CE801', name: 'Magang Pendidikan', sks: 6 },
      { code: 'CE802', name: 'Skripsi', sks: 6 },
      { code: 'CE803', name: 'Seminar Pendidikan Kristen', sks: 2 },
    ],
  };

  const requirements = {
    academic: [
      'Lulusan SMA/SMK/sederajat dengan nilai rata-rata minimal 7.0',
      'Memiliki minat dan passion dalam dunia pendidikan',
      'Surat rekomendasi dari sekolah atau guru',
    ],
    spiritual: [
      'Memiliki komitmen mengikut Kristus',
      'Aktif dalam pelayanan gereja atau organisasi Kristen',
      'Mendapat rekomendasi dari gembala/pemimpin gereja',
    ],
    administrative: [
      'Mengisi formulir pendaftaran online',
      'Menyerahkan transkrip nilai dan ijazah',
      'Pas foto terbaru 3x4 (4 lembar)',
      'Fotokopi KTP dan Kartu Keluarga',
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold mb-2">
                    {programInfo.code}
                  </h1>
                  <p className="text-2xl font-semibold text-blue-100 mb-4">
                    {programInfo.name}
                  </p>
                  <p className="text-lg text-blue-200 italic">
                    {programInfo.nameEn}
                  </p>
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
                <BookOpen className="w-6 h-6 text-blue-600" />
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
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t('academics.objectives')}
                </h3>
              </div>
              <ul className="space-y-2">
                {description.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed">
                      {obj}
                    </span>
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
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t('academics.career')}
                </h3>
              </div>
              <ul className="space-y-2">
                {description.careerPaths.map((career, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700">{career}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

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
                  transition={{ duration: 0.5, delay: semIndex * 0.05 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
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
                            <span className="text-gray-700 ml-2">
                              {course.name}
                            </span>
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
                <h3 className="text-base font-bold text-blue-600 mb-3">
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
                <h3 className="text-base font-bold text-blue-600 mb-3">
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
                <h3 className="text-base font-bold text-blue-600 mb-3">
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
