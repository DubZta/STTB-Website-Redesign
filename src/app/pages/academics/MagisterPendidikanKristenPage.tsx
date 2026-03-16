import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Calendar, Clock, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, Heart, FileCheck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function MagisterPendidikanKristenPage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'M.Pd.',
    name: language === 'id' ? 'Magister Pendidikan Kristen' : 'Master of Christian Education',
    nameEn: 'Master of Christian Education',
    duration: language === 'id' ? '2 Tahun (4 Semester)' : '2 Years (4 Semesters)',
    credits: '60 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id'
      ? 'Program Magister Pendidikan Kristen dirancang bagi pendidik and pemimpin sekolah yang rindu memperdalam kompetensi keguruan and manajemen pendidikan. Fokus kami adalah membangun integritas pendidik yang mampu merancang strategi belajar-mengajar yang transformatif and menginspirasi karakter Kristiani pada peserta didik.'
      : 'The Master of Christian Education program is designed for educators and school leaders who desire to deepen their teaching competencies and educational management. Our focus is on building educator integrity capable of designing transformative teaching-learning strategies and inspiring Christian character in students.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Menyiapkan pemimpin and pengelola institusi pendidikan Kristen yang profesional',
      'Mengembangkan keahlian dalam riset kependidikan yang berbasis nilai alkitabiah',
      'Memperkuat kompetensi pedagogi and andragogi dalam berbagai konteks mengajar',
      'Membentuk pendidik yang memiliki filosofi pendidikan Kristen yang mendalam',
    ] : [
      'Prepare professional leaders and managers of Christian educational institutions',
      'Develop expertise in Bible-based educational research',
      'Strengthen pedagogical and andragogical competencies in various teaching contexts',
      'Form educators with a deep philosophy of Christian education',
    ],
  };

  const careerProspects = {
    title: 'Prospek Karir',
    careers: [
      'Guru Agama Kristen Senior',
      'Dosen Pendidikan Agama Kristen',
      'Kepala Sekolah/Pimpinan Institusi Pendidikan',
      'Koordinator Kurikulum di Gereja/Sekolah',
      'Konsultan Pendidikan Kristen',
      'Peneliti di Bidang Pendidikan Kristen',
    ],
  };

  const profilLulusan = [
    {
      title: 'Informed',
      desc: 'Pendidik Kristen yang memiliki dasar teologis yang kokoh, menguasai ilmu kependidikan Kristen yang bersifat transformatif, and berwawasan luas guna meningkatkan mutu pendidikan Kristen di era global.'
    },
    {
      title: 'Transformed',
      desc: 'Pendidik Kristen yang hidupnya terus mengalami pembaruan terus menerus di dalam Kristus and memiliki kematangan karakter Kristiani.'
    },
    {
      title: 'Transformative',
      desc: 'Pendidik Kristen yang secara aktif menghadirkan nilai-nilai Kerajaan Allah yang transformatif melalui dedikasi and kompetensi kependidikan Kristen baik di institusi pendidikan Kristen formal maupun non-formal.'
    }
  ];

  const curriculumCategories = {
    fondasiBiblika: {
      title: 'Fondasi Biblika',
      totalSks: 9,
      courses: [
        { code: 'FB1', name: 'Fondasi Perjanjian Lama', sks: 3, description: 'Studi kitab-kitab Perjanjian Lama dengan penekanan pada latar belakang sejarah, teologi, and relevansi untuk pendidikan Kristen.' },
        { code: 'FB2', name: 'Fondasi Perjanjian Baru', sks: 3, description: 'Studi kitab-kitab Perjanjian Baru dengan penekanan pada konteks sejarah, teologi, and aplikasi pendidikan.' },
        { code: 'FB3', name: 'Hermeneutika', sks: 3, description: 'Prinsip-prinsip penafsiran Alkitab yang bertanggung jawab untuk aplikasi dalam konteks pendidikan.' },
      ]
    },
    fondasiSistematika: {
      title: 'Fondasi Sistematika - Historika',
      totalSks: 12,
      courses: [
        { code: 'FSH1', name: 'Allah, Alkitab & Penciptaan', sks: 3, description: 'Doktrin dasar kekristenan dalam kerangka metanarasi Alkitab tentang penciptaan and implikasinya bagi pendidikan.' },
        { code: 'FSH2', name: 'Kristus & Keselamatan', sks: 3, description: 'Doktrin tentang pribadi and karya Yesus Kristus serta keselamatan dalam perspektif pendidikan.' },
        { code: 'FSH3', name: 'Roh Kudus & Gereja', sks: 3, description: 'Pemahaman tentang peran Roh Kudus and gereja dalam konteks pembinaan warga jemaat.' },
        { code: 'FSH4', name: 'Gereja Dalam Konteks Sosio-Historis', sks: 3, description: 'Kajian tentang sejarah gereja and tantangan sosialnya untuk aplikasi pendidikan masa kini.' },
      ]
    },
    mataKuliahInti: {
      title: 'Mata Kuliah Inti Pendidikan',
      totalSks: 12,
      courses: [
        { code: 'MKI1', name: 'Filsafat Pendidikan Kristen', sks: 3, description: 'Kajian mendalam tentang dasar-dasar pemikiran and filsafat pendidikan dari perspektif Kristen.' },
        { code: 'MKI2', name: 'Teologi dan Pendidikan', sks: 3, description: 'Integrasi doktrin Kristen dalam proses belajar mengajar and pengembangan kurikulum.' },
        { code: 'MKI3', name: 'Sosiologi Pendidikan', sks: 3, description: 'Analisis dinamika sosial dalam lingkungan pendidikan and dampaknya bagi pendidikan Kristen.' },
        { code: 'MKI4', name: 'Kepemimpinan dan Manajemen Pendidikan', sks: 3, description: 'Prinsip tata kelola and kepemimpinan Kristen dalam institusi pendidikan.' },
      ]
    },
    mataKuliahKonsentrasi: {
      title: 'Mata Kuliah Konsentrasi',
      totalSks: 6,
      courses: [
        { code: 'MKK1', name: 'Psikologi Pendidikan Kristen', sks: 3, description: 'Pemahaman tentang proses psikologis peserta didik dalam kerangka worldview Kristen.' },
        { code: 'MKK2', name: 'Inovasi Pembelajaran Transformatif', sks: 3, description: 'Pengembangan metode pengajaran yang inovatif and berorientasi pada perubahan hidup.' },
      ]
    },
    mataKuliahPenelitian: {
      title: 'Mata Kuliah Penelitian & Tugas Akhir',
      totalSks: 15,
      courses: [
        { code: 'MKP1', name: 'Metodologi Penelitian Pendidikan', sks: 3, description: 'Teknik and desain penelitian ilmiah untuk bidang pendidikan Kristen.' },
        { code: 'MKP2', name: 'Statistik Pendidikan', sks: 3, description: 'Penggunaan statistika dalam pengolahan data penelitian pendidikan.' },
        { code: 'MKP3', name: 'Seminar Proposal', sks: 3, description: 'Presentasi and diskusi rencana penelitian tugas akhir.' },
        { code: 'MKP4', name: 'Tesis', sks: 6, description: 'Penulisan karya ilmiah akhir sebagai syarat kelulusan program magister.' },
      ]
    },
  };

  const requirements = {
    academic: [
      'Lulusan S1 Pendidikan (S.Pd.) atau S1 Teologi (S.Th.) dari institusi terakreditasi',
      'IPK minimal 2.75',
    ],
    spiritual: [
      'Sudah baptis dewasa/sidi',
      'Sudah melayani di gereja atau lembaga pendidikan Kristen',
    ],
    professional: [
      'Aktif dalam pelayanan gereja atau lembaga pendidikan Kristen minimal 2 tahun',
    ],
    administrative: [
      'Memenuhi syarat and prosedur admisi STTB',
      'Mengisi formulir pendaftaran online',
      'Menyerahkan transkrip nilai and ijazah',
    ],
  };

  const toggleCourse = (courseCode: string) => {
    setExpandedCourses(prev =>
      prev.includes(courseCode)
        ? prev.filter(c => c !== courseCode)
        : [...prev, courseCode]
    );
  };

  const totalSks = Object.values(curriculumCategories).reduce((sum, cat) => sum + cat.totalSks, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <AcademicSubNav />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-xl p-8 text-white shadow-lg mb-8">
              <h1 className="text-5xl font-extrabold mb-2 text-white">{programInfo.code}</h1>
              <p className="text-3xl font-semibold text-red-100">{programInfo.name}</p>
              <p className="text-xl text-red-200 italic mt-2">{programInfo.nameEn}</p>
            </div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: Clock, label: "Masa Studi", value: programInfo.duration, color: "text-blue-600" },
                { icon: GraduationCap, label: "Total Kredit", value: programInfo.credits, color: "text-red-600" },
                { icon: ShieldCheck, label: "Akreditasi", value: programInfo.accreditation, color: "text-green-600" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-200 cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gray-50 rounded-xl group-hover:bg-red-50 transition-colors duration-300`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                        {item.label}
                      </p>
                      <p className="text-sm font-extrabold text-gray-900 mt-0.5 tracking-tight">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 to-red-900 rounded-b-2xl transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Program Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-red-700" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {programOverview.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {programOverview.description}
              </p>
            </div>
          </motion.div>

          {/* Program Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-red-700" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {programObjectives.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {programObjectives.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Career Prospects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-red-700" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {careerProspects.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {careerProspects.careers.map((career, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profil Lulusan Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Profil Lulusan: <span className="text-red-700">Transformative Educators</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profilLulusan.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-red-700 font-bold text-lg border-l-4 border-red-700 pl-3">{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requirements Section - 4 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Persyaratan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Persyaratan Akademis */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-red-700" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Akademis
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.academic.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persyaratan Spiritual */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-700" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Spiritual
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.spiritual.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persyaratan Professional */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-red-700" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Pengalaman
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.professional.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persyaratan Administratif */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-6 h-6 text-red-700" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Administratif
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.administrative.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* System Perkuliahan Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-6 shadow-md border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-red-700" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Sistem Perkuliahan
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Kuliah dimulai pada bulan Agustus (semester ganjil)</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Kuliah dalam bentuk block teaching secara daring and luring
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Setiap Jumat 18.00 - 21.00 and Sabtu 09.00 - 16.00 WIB</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Dalam satu semester rata-rata terdapat 3 mata kuliah online and 1 mata kuliah onsite di kampus STTB
                  </span>
                </li>
                <li className="text-xs text-gray-500 italic pl-6">
                  *Jadwal dapat berubah dengan pemberitahuan sebelumnya
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Curriculum by Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                Daftar Mata Kuliah
              </h2>
              <p className="text-sm text-gray-600">Total: <span className="font-bold text-red-700">{totalSks} SKS</span></p>
            </div>

            {/* Sidebar + Main Content Layout */}
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Category Summary */}
              <aside className="lg:col-span-1">
                <div className="bg-red-700 text-white rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 text-white">KATEGORI MATA KULIAH</h3>
                  <ul className="space-y-3 text-sm">
                    {Object.entries(curriculumCategories).map(([key, category]) => (
                      <li key={key}>
                        <a
                          href={`#${key}`}
                          className="block hover:text-red-200 transition-colors"
                        >
                          <span className="font-semibold">{category.title}</span>
                          <span className="text-red-200 ml-2">({category.totalSks} SKS)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-red-800">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="text-xl font-bold text-red-200">{totalSks} SKS</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content - Course Tables */}
              <main className="lg:col-span-3 space-y-8">
                {Object.entries(curriculumCategories).map(([key, category]) => (
                  <div key={key} id={key} className="scroll-mt-24">
                    <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-700 rounded-sm"></div>
                      {category.title} <span className="text-gray-500 font-normal">({category.totalSks} SKS)</span>
                    </h3>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-red-700 text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold w-16">No</th>
                            <th className="px-4 py-3 text-left font-semibold">Mata Kuliah</th>
                            <th className="px-4 py-3 text-center font-semibold w-20">SKS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.courses.map((course, index) => (
                            <React.Fragment key={course.code}>
                              <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-4 py-3">
                                  <span className="bg-red-800 text-white px-2 py-1 rounded text-xs font-bold">{index + 1}</span>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-semibold text-gray-900">{course.name}</p>
                                      <p className="text-xs text-gray-500">{course.code}</p>
                                    </div>
                                    <button
                                      onClick={() => toggleCourse(course.code)}
                                      className={`p-1 rounded transition-all ${expandedCourses.includes(course.code)
                                        ? 'bg-red-700 text-white rotate-180'
                                        : 'text-red-700 hover:bg-red-50'
                                        }`}
                                    >
                                      <ChevronDown className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 font-semibold">{course.sks}</span>
                                </td>
                              </tr>
                              {/* Expanded Description Row */}
                              {expandedCourses.includes(course.code) && (
                                <tr className="bg-red-50 border-b border-gray-100">
                                  <td className="px-4 py-3"></td>
                                  <td colSpan={2} className="px-4 py-3">
                                    <div className="flex items-start gap-2">
                                      <FileText className="w-4 h-4 text-red-700 flex-shrink-0 mt-1" />
                                      <div>
                                        <h4 className="font-semibold text-red-700 text-sm mb-1">
                                          {course.name} ({course.sks} SKS)
                                        </h4>
                                        <p className="text-xs text-gray-700 leading-relaxed">{course.description}</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                          <tr className="bg-gray-50 font-bold">
                            <td className="px-4 py-3" colSpan={2}>Total</td>
                            <td className="px-4 py-3 text-center text-gray-900">{category.totalSks}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </main>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}