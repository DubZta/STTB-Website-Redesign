import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Clock, Award, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, UserCheck, Heart, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function MagisterMinistriTeologiPelayananGerejawiPage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'M.Min.',
    name: language === 'id' ? 'Magister Ministri Teologi Pelayanan Gerejawi' : 'Master of Ministry in Ecclesial Ministry Theology',
    nameEn: 'Master of Ministry in Ecclesial Ministry Theology',
    duration: language === 'id' ? '2 Tahun (4 Semester)' : '2 Years (4 Semesters)',
    credits: '60 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id'
      ? 'Program Magister Ministri (Teologi Pelayanan Gerejawi) dirancang untuk memperdalam pemahaman teologis praktis bagi para pelayan gereja. Fokus utama program ini adalah integrasi antara doktrin teologi yang sehat dengan implementasi pelayanan yang efektif di dalam berbagai departemen pelayanan gerejawi.'
      : 'The Master of Ministry program (Ecclesial Ministry Theology) is designed to deepen practical theological understanding for church ministers. The program\'s primary focus is the integration of sound theological doctrine with effective ministry implementation within various church ministry departments.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Membekali pelayan gereja dengan perspektif teologi Reformed yang kontekstual',
      'Mengembangkan variasi metode pelayanan yang inovatif sesuai kebutuhan jemaat',
      'Meningkatkan kapasitas kepemimpinan dalam pelayanan kategorial gereja',
      'Membentuk spiritualitas pelayan yang berakar pada firman Tuhan and integritas pelayanan',
    ] : [
      'Equip church ministers with a contextual Reformed theological perspective',
      'Develop various innovative ministry methods according to congregational needs',
      'Increase leadership capacity in categorical church ministries',
      'Form servant spirituality rooted in God\'s word and ministry integrity',
    ],
  };

  const careerProspects = {
    title: 'Prospek Karir',
    careers: [
      'Pendeta/Gembala Sidang',
      'Staf Pengajar Sekolah Teologi',
      'Pembina/Pemimpin Pelayanan Gereja',
      'Konselor Pastoral',
      'Penulis/Peneliti Teologi',
      'Pelayan Gereja dalam berbagai konteks pelayanan',
    ],
  };

  const requirements = {
    academic: [
      'Minimal lulusan S1 Umum/Teologi',
    ],
    spiritual: [
      'Sudah baptis dewasa/sidi',
      'Pernah terlibat pelayanan di gereja atau lembaga pelayanan minimal 1 tahun',
    ],
    professional: [
      'Pernah bekerja minimal 2 tahun',
    ],
    administrative: [
      'Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB',
      'Menyerahkan book review',
    ],
  };

  const profilLulusan = [
    {
      title: 'Informed',
      desc: 'Pelayan gerejawi yang memiliki fondasi teologis yang solid untuk pelayanan gereja dalam konteks masyarakat Indonesia.'
    },
    {
      title: 'Transformed',
      desc: 'Pelayan gerejawi yang hidupnya mengalami transformasi dan berpusatkan kepada Kristus dalam setiap aspek kehidupannya.'
    },
    {
      title: 'Transformative',
      desc: 'Pelayan gerejawi yang mampu merancang dan melakukan pelayanan yang integral dan transformatif dalam konteks gereja masa kini.'
    }
  ];

  const curriculumCategories = {
    fondasiBiblika: {
      title: 'Fondasi Biblika',
      totalSks: 9,
      courses: [
        { code: 'FB1', name: 'Fondasi Perjanjian Lama - Kitab Taurat', sks: 3, description: 'Studi komprehensif terhadap kitab Kejadian sampai Ulangan. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.' },
        { code: 'FB2', name: 'Fondasi Perjanjian Baru - Kitab Injil', sks: 3, description: 'Penafsiran mendalam terhadap kitab-kitab Injil dengan fokus pada kehidupan dan pelayanan Yesus Kristus.' },
        { code: 'FB3', name: 'Hermeneutika', sks: 3, description: 'Prinsip-prinsip penafsiran Alkitab yang bertanggung jawab untuk aplikasi dalam pelayanan gerejawi.' },
      ]
    },
    fondasiSistematika: {
      title: 'Fondasi Sistematika - Historika',
      totalSks: 12,
      courses: [
        { code: 'FSH1', name: 'Allah, Alkitab dan Penciptaan', sks: 3, description: 'Suatu studi sistematis yang mempelajari pengantar teologi yang membahas mengenai pengertian teologi, metode teologi, dogmatika, pernyataan Allah, dan sistem-sistem teologi, serta implikasinya dalam kehidupan dan pelayanan mahasiswa.' },
        { code: 'FSH2', name: 'Kristus dan Keselamatan', sks: 3, description: 'Doktrin tentang pribadi dan karya Yesus Kristus serta keselamatan dalam konteks pelayanan gerejawi.' },
        { code: 'FSH3', name: 'Roh Kudus dan Gereja', sks: 3, description: 'Pemahaman tentang peran Roh Kudus dan gereja dalam pelayanan Kristen.' },
        { code: 'FSH4', name: 'Gereja dalam Konteks Sosio - Historis', sks: 3, description: 'Kajian tentang gereja dalam konteks sosial dan historis untuk aplikasi dalam pelayanan.' },
      ]
    },
    mataKuliahInti: {
      title: 'Mata Kuliah Inti',
      totalSks: 12,
      courses: [
        { code: 'MKI1', name: 'Transformasi Spiritualitas', sks: 3, description: 'Mata kuliah ini dirancang untuk mengeksplorasi dan memahami perubahan dan pengembangan spiritual dalam konteks individu maupun komunitas. Mata kuliah ini fokus pada teori, praktik, dan pengalaman yang mendorong transformasi spiritual, serta dampaknya terhadap kehidupan pribadi dan sosial. Tujuan utama dari mata kuliah ini adalah untuk membantu mahasiswa memahami proses-proses yang terlibat dalam transformasi spiritual dan bagaimana proses tersebut dapat diterapkan dalam kehidupan sehari-hari serta dalam konteks profesional.' },
        { code: 'MKI2', name: 'Pemuridan', sks: 3, description: 'Prinsip dan praktik pemuridan dalam konteks gereja dan pelayanan.' },
        { code: 'MKI3', name: 'Misi Integral', sks: 3, description: 'Pemahaman dan aplikasi misi integral Allah dalam konteks pelayanan gereja.' },
        { code: 'MKI4', name: 'Kepemimpinan Transformasional', sks: 3, description: 'Prinsip kepemimpinan Kristen yang transformatif dalam konteks gereja dan organisasi Kristen.' },
      ]
    },
    mataKuliahKonsentrasi: {
      title: 'Mata Kuliah Konsentrasi',
      totalSks: 22,
      courses: [
        { code: 'MKK1', name: 'Studi Perjanjian Lama: Kitab Sejarah', sks: 3, description: 'Studi komprehensif terhadap kitab Hakim-Hakim sampai Ester. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.' },
        { code: 'MKK2', name: 'Studi Perjanjian Lama: Kitab Puisi/Nabi', sks: 3, description: 'Penafsiran kitab-kitab puisi dan nabi dalam Perjanjian Lama.' },
        { code: 'MKK3', name: 'Studi Perjanjian Baru: Kisah Rasul dan Surat Paulus', sks: 3, description: 'Penafsiran Kisah Para Rasul dan surat-surat Paulus dengan fokus pada perkembangan gereja mula-mula.' },
        { code: 'MKK4', name: 'Studi Perjanjian Baru: Kitab Umum dan Wahyu', sks: 3, description: 'Penafsiran surat-surat umum dan kitab Wahyu.' },
        { code: 'MKK5', name: 'Homiletika', sks: 3, description: 'Prinsip dan praktik penyampaian khotbah yang alkitabiah dan relevan.' },
        { code: 'MKK6', name: 'Teologi & Praktik Ibadah', sks: 3, description: 'Perancangan dan pelaksanaan ibadah yang transformatif.' },
        { code: 'MKK7', name: 'Bahasa Ibrani', sks: 2, description: 'Pengenalan dasar bahasa Ibrani untuk studi Perjanjian Lama.' },
        { code: 'MKK8', name: 'Bahasa Yunani', sks: 2, description: 'Pengenalan dasar bahasa Yunani Koine untuk studi Perjanjian Baru.' },
      ]
    },
    tugasAkhir: {
      title: 'Tugas Akhir',
      totalSks: 10,
      courses: [
        { code: 'TA1', name: 'Mentoring Akademik', sks: 1, description: 'Mata kuliah ini dirancang untuk mendampingi mahasiswa dalam proses pertumbuhan akademis secara terarah dan berkelanjutan. Setiap mahasiswa akan dibimbing oleh seorang dosen melalui pertemuan berkala untuk mendiskusikan perkembangan studi, pengelolaan waktu, strategi belajar, serta integrasi antara panggilan akademis dan spiritualitas.' },
        { code: 'TA2', name: 'Penulisan Akademik', sks: 3, description: 'Teknik penulisan akademis yang sesuai standar ilmiah untuk publikasi.' },
        { code: 'TA3', name: 'Tugas Akhir: Praktik Pelayanan', sks: 6, description: 'Praktik pelayanan penuh sebagai syarat kelulusan.' },
      ]
    },
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
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profil Lulusan Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Profil Lulusan: <span className="text-red-700">Transformative Church Minister</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profilLulusan.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sttb-red font-bold text-lg border-l-4 border-red-700 pl-3">{item.title}</div>
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
                <Clock className="w-6 h-6 text-red-700" />
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
                    Kuliah dalam bentuk block teaching secara daring dan luring (tatap muka 1 mata kuliah akan dilakukan selama seminggu)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Dalam 1 semester rata-rata terdapat 5 mata kuliah online dan 1 mata kuliah onsite di kampus STTB
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Setiap Senin-Jumat:</strong> Pukul 17.00 - 21.00 (Kelas Online/Onsite)
                  </span>
                </li>
                <li className="text-xs text-gray-500 italic pl-6">
                  *Kelas dapat bergabung bersama M.Min. Marketplace
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
                    <h3 className="text-lg font-bold text-sttb-red mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-700 rounded-sm"></div>
                      {category.title} <span className="text-gray-500 font-normal">({category.totalSks} SKS)</span>
                    </h3>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-sttb-red text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold w-16">No</th>
                            <th className="px-4 py-3 text-left font-semibold">Mata Kuliah</th>
                            <th className="px-4 py-3 text-center font-semibold w-20">SKS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.courses.map((course, index) => (
                            <>
                              <tr key={course.code} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-4 py-3">
                                  <span className="bg-red-700 text-white px-2 py-1 rounded text-xs font-bold">{index + 1}</span>
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
                                        <h4 className="font-semibold text-red-900 text-sm mb-1">
                                          {course.name} ({course.sks} SKS)
                                        </h4>
                                        <p className="text-xs text-gray-700 leading-relaxed">{course.description}</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </>
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