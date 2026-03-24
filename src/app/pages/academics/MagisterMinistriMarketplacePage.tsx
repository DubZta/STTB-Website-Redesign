import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Calendar, Clock, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, UserCheck, Heart, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function MagisterMinistriMarketplacePage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'M.Min.',
    name: language === 'id' ? 'Magister Ministri Marketplace' : 'Master of Ministry in Marketplace',
    nameEn: 'Master of Ministry in Marketplace',
    duration: language === 'id' ? '2 Tahun (4 Semester)' : '2 Years (4 Semesters)',
    credits: '60 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id'
      ? 'Program Magister Ministri (Marketplace) secara khusus membekali para profesional Kristen untuk melayani sebagai garam and terang di dunia kerja. Program ini mengintegrasikan teologi dengan praktik bisnis and profesionalisme, memberdayakan lulusan untuk membawa nilai-nilai kerajaan Allah ke dalam ranah ekonomi and industri.'
      : 'The Master of Ministry program (Marketplace) specifically equips Christian professionals to serve as salt and light in the working world. This program integrates theology with business practices and professionalism, empowering graduates to bring Kingdom of God values into economic and industrial spheres.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Menghasilkan hamba Tuhan di marketplace yang memiliki fondasi teologi Reformed yang kokoh',
      'Mengembangkan etika kepemimpinan Kristen dalam lingkungan profesional',
      'Memperlengkapi lulusan dengan kemampuan misiologi marketplace and transformasi budaya kerja',
      'Membentuk integritas spiritual yang tangguh bagi praktisi Kristen di dunia sekular',
    ] : [
      'Produce marketplace servants of God with a solid Reformed theological foundation',
      'Develop Christian leadership ethics in professional environments',
      'Equip graduates with marketplace missiological skills and work culture transformation',
      'Form resilient spiritual integrity for Christian practitioners in the secular world',
    ],
  };

  const careerProspects = {
    title: 'Prospek Karir',
    careers: [
      'Profesional/Bisnis di berbagai sektor',
      'Wirausahawan Kristen',
      'Konsultan Bisnis dan Manajemen',
      'Pemimpin Organisasi/Perusahaan',
      'Pembina/Pengajar di bidang etika kerja Kristen',
      'Pelayan Gereja di bidang marketplace ministry',
    ],
  };

  const requirements = {
    academic: [
      'Minimal lulusan S1 dari semua jurusan',
    ],
    spiritual: [
      'Sudah baptis dewasa/sidi',
      'Pernah terlibat pelayanan di gereja atau lembaga pelayanan minimal 1 tahun',
    ],
    professional: [
      'Pernah bekerja minimal 2 tahun',
    ],
    administrative: [
      'Memenuhi syarat dan prosedur admisi STTB',
      'Menyerahkan book review',
    ],
  };

  const profilLulusan = [
    {
      title: 'Informed',
      desc: 'Profesional Kristen yang memiliki fondasi biblika-teologis yang kokoh untuk memahami kehidupan di dunia kerja dan misi Allah melalui dunia kerja.'
    },
    {
      title: 'Transformed',
      desc: 'Profesional Kristen yang hidupnya mengalami transformasi dan tumbuh dalam spiritualitas yang utuh.'
    },
    {
      title: 'Transformative',
      desc: 'Profesional Kristen yang tumbuh dalam semangat dan kompetensi untuk menghadirkan shalom melalui hidup dan karyanya di dunia kerja.'
    }
  ];

  const curriculumCategories = {
    fondasiBiblika: {
      title: 'Fondasi Biblika',
      totalSks: 9,
      courses: [
        { code: 'FB1', name: 'Fondasi Perjanjian Lama', sks: 3, description: 'Studi kitab-kitab Perjanjian Lama dengan penekanan khusus atas latar belakang sejarah dan budaya, penulis, pembaca pertama, dan tema-tema utama kitab-kitab Perjanjian Lama, sebagai landasan bagi pengembangan sudut pandang Alkitabiah (biblical worldview) dalam menyikapi berbagai tantangan dalam kehidupan Kristen konteks dunia kerja.' },
        { code: 'FB2', name: 'Fondasi Perjanjian Baru', sks: 3, description: 'Studi kitab-kitab Perjanjian Baru dengan penekanan pada konteks sejarah, teologi, dan aplikasi untuk kehidupan profesional Kristen.' },
        { code: 'FB3', name: 'Hermeneutika', sks: 3, description: 'Prinsip-prinsip penafsiran Alkitab yang bertanggung jawab untuk aplikasi dalam konteks dunia kerja.' },
      ]
    },
    fondasiSistematika: {
      title: 'Fondasi Sistematika - Historika',
      totalSks: 12,
      courses: [
        { code: 'FSH1', name: 'Allah, Alkitab & Penciptaan', sks: 3, description: 'Mata kuliah ini merupakan pengantar kepada teologi sistematika yang mempelajari inisiasi dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab tentang penciptaan yang mencakup: Doktrin Allah, dan Alkitab; serta implikasi doktrin-doktrin tersebut dalam konteks dunia kerja masa kini.' },
        { code: 'FSH2', name: 'Kristus & Keselamatan', sks: 3, description: 'Doktrin tentang pribadi dan karya Yesus Kristus serta keselamatan dalam konteks pelayanan profesional.' },
        { code: 'FSH3', name: 'Roh Kudus & Gereja', sks: 3, description: 'Pemahaman tentang peran Roh Kudus dan gereja dalam kehidupan profesional Kristen.' },
        { code: 'FSH4', name: 'Gereja Dalam Konteks Sosio-Historis', sks: 3, description: 'Kajian tentang gereja dalam konteks sosial dan historis untuk aplikasi dalam dunia kerja.' },
      ]
    },
    mataKuliahInti: {
      title: 'Mata Kuliah Inti',
      totalSks: 12,
      courses: [
        { code: 'MKI1', name: 'Spiritualitas Dunia Kerja', sks: 3, description: 'Mata kuliah ini dimaksudkan agar peserta kuliah memiliki kerangka teologis mengenai spiritualitas Kristen yang dapat diterapkan dalam keseharian di dunia kerja sebagai bagian dari pekerjaan Allah di tengah dunia. Materi pembelajaran meliputi tiga arah spiritualitas Kristen yang mempengaruhi perjalanan transformasional seseorang untuk hidup menjadi seperti Kristus serta implementasinya dalam dunia kerja.' },
        { code: 'MKI2', name: 'Pemuridan Dunia Kerja', sks: 3, description: 'Prinsip dan praktik pemuridan dalam konteks dunia kerja dan profesi.' },
        { code: 'MKI3', name: 'Misi Integral Dunia Kerja', sks: 3, description: 'Pemahaman dan aplikasi misi integral Allah dalam konteks dunia kerja dan bisnis.' },
        { code: 'MKI4', name: 'Kepemimpinan Transformasional Dunia Kerja', sks: 3, description: 'Prinsip kepemimpinan Kristen yang transformatif dalam konteks organisasi dan bisnis.' },
      ]
    },
    mataKuliahKonsentrasi: {
      title: 'Mata Kuliah Konsentrasi',
      totalSks: 6,
      courses: [
        { code: 'MKK1', name: 'Teologi Kerja', sks: 3, description: 'Mata kuliah Teologi Kerja dalam konteks profesional dimaksudkan agar peserta kuliah memiliki kerangka teologis yang solid untuk dapat menghayati pekerjaan sehari-hari sebagai profesional atau pengusaha Kristen sebagai bagian dari pekerjaan Allah di tengah dunia. Materi pembelajaran meliputi teologi kerja dan misi umat Allah melalui dunia kerja.' },
        { code: 'MKK2', name: 'Etika Kerja', sks: 3, description: 'Prinsip-prinsip etika Kristen dalam konteks dunia kerja dan profesionalisme.' },
      ]
    },
    mataKuliahElektif: {
      title: 'Mata Kuliah Elektif',
      totalSks: 6,
      courses: [
        { code: 'MKE1', name: 'Pilih 2 Mata Kuliah (tiap mata kuliah berbobot 3 SKS)', sks: 6, description: 'Mahasiswa memilih 2 mata kuliah dari pilihan yang tersedia.' },
        { code: 'MKE1a', name: 'Kesehatan Mental Dalam Dunia Kerja', sks: 3, description: 'Pemahaman dan penanganan kesehatan mental dalam konteks dunia kerja.' },
        { code: 'MKE1b', name: 'Konseling Dasar Untuk Dunia Kerja', sks: 3, description: 'Dasar-dasar konseling untuk aplikasi dalam dunia kerja dan organisasi.' },
        { code: 'MKE1c', name: 'Isu-Isu Kontemporer Dalam Dunia Kerja', sks: 3, description: 'Pembahasan isu-isu kontemporer yang relevan dengan dunia kerja dan profesi.' },
        { code: 'MKE1d', name: 'Perspektif Misi Dunia', sks: 3, description: 'Pemahaman tentang misi Allah dalam konteks global dan dunia kerja.' },
        { code: 'MKE1e', name: 'Mata Kuliah Di Prodi S2 Lain', sks: 3, description: 'Mata kuliah pilihan dari program studi magister lain yang relevan.' },
      ]
    },
    mataKuliahPenelitian: {
      title: 'Mata Kuliah Penelitian',
      totalSks: 9,
      courses: [
        { code: 'MKP1', name: 'Mentoring Profesi', sks: 3, description: 'Program ini dikembangkan dengan pendekatan mentoring dunia kerja, setiap mahasiswa akan dimentering secara langsung oleh profesional, pebisnis Kristen yang terpilih. Tujuannya untuk membentuk sebuah cara pandang Kristen yang aplikatif dalam pekerjaannya yang sedang dijalani, mengintegrasikan pembelajaran akademis dengan dunia nyata, memiliki wawasan berharga tentang beberapa isu seperti pilihan karier, jaringan bisnis, kepemimpinan dan pengembangan profesionalitas, dll. Mentor akan mendampingi setiap mentee selama 1-2 semester, bertemu setiap bulan melalui online atau onsite.' },
        { code: 'MKP2', name: 'Proyek Tugas Akhir', sks: 6, description: 'Penyelesaian proyek tugas akhir sebagai syarat kelulusan.' },
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
                    <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profil Lulusan Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Profil Lulusan: <span className="text-red-700">Transformative Christian Professionals</span></h2>
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
                    Kuliah dalam bentuk block teaching secara daring dan luring
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Setiap Jumat 18.00 - 21.00 dan Sabtu 09.00 - 16.00 WIB</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Dalam satu semester rata-rata terdapat 3 mata kuliah online dan 1 mata kuliah onsite di kampus STTB
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