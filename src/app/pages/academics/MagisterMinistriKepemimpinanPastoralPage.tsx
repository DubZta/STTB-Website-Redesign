import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Clock, Award, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, UserCheck, Heart, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function MagisterMinistriKepemimpinanPastoralPage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'M.Min.',
    name: language === 'id' ? 'Magister Ministri Kepemimpinan Pastoral' : 'Master of Ministry in Pastoral Leadership',
    nameEn: 'Master of Ministry in Pastoral Leadership',
    duration: language === 'id' ? '2 Tahun (4 Semester)' : '2 Years (4 Semesters)',
    credits: '60 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id'
      ? 'Program Magister Ministri (Kepemimpinan Pastoral) difokuskan untuk memperlengkapi gembala sidang and pemimpin gereja dengan keterampilan kepemimpinan yang alkitabiah and strategis. Program ini menggabungkan pendalaman teologi dengan praktik kepemimpinan organisasi gerejawi untuk menjawab tantangan pelayanan di era modern.'
      : 'The Master of Ministry program (Pastoral Leadership) is focused on equipping senior pastors and church leaders with biblical and strategic leadership skills. This program combines deep theological study with church organizational leadership practices to meet ministry challenges in the modern era.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Menghasilkan pemimpin gerejawi yang memiliki integritas and visi kepemimpinan yang alkitabiah',
      'Mengembangkan kompetensi dalam manajemen organisasi gereja and pengembangan jemaat',
      'Membekali lulusan dengan keterampilan pastoral yang aplikatif and transformatif',
      'Memperkuat fondasi teologi Reformed dalam praktik kepemimpinan sehari-hari',
    ] : [
      'Produce church leaders with integrity and biblical leadership vision',
      'Develop competencies in church organization management and congregational development',
      'Equip graduates with applicable and transformative pastoral skills',
      'Strengthen the Reformed theological foundation in daily leadership practices',
    ],
  };

  const careerProspects = {
    title: 'Prospek Karir',
    careers: [
      'Pendeta/Gembala Sidang',
      'Wakil Pendeta/Pembantu Gembala',
      'Staf Pengajar Sekolah Teologi',
      'Konselor Pastoral',
      'Pembina/Pemimpin Pelayanan Gereja',
      'Penulis/Peneliti Teologi Pastoral',
    ],
  };

  const requirements = {
    academic: [
      'Minimal lulusan S1 Teologi',
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
      desc: 'Memiliki fondasi biblika - teologis dan pendidikan yang solid dalam mengembangkan kepemimpinan dan pengembalaan yang holistik dan integratif.'
    },
    {
      title: 'Transformed',
      desc: 'Memiliki hidup yang berpusatkan kepada Kristus dan karakter yang dewasa.'
    },
    {
      title: 'Transformative',
      desc: 'Memiliki kecakapan memimpin dan mengembalakan jemaat gereja urban.'
    }
  ];

  const curriculumCategories = {
    fondasiBiblika: {
      title: 'Fondasi Biblika',
      totalSks: 9,
      courses: [
        { code: 'FB1', name: 'Hermeneutika (Advanced)', sks: 3, description: 'Studi tentang prinsip-prinsip penafsiran Alkitab dan penerapan praktis dalam hidup keseharian, sesuai dengan konteks literatur dan historikal - grammatical tiap bagian teks yang dipelajari dan implikasinya dalam pelayanan penggembalaan serta kepemimpinan Kristen.' },
        { code: 'FB2', name: 'Revisit Fondasi Biblika (Metanarasi)', sks: 3, description: 'Pemahaman mendalam tentang metanarasi Alkitab dan relevansinya bagi pelayanan pastoral.' },
        { code: 'FB3', name: 'Revisit Fondasi Sistematika (Teologi Reformed)', sks: 3, description: 'Peninjauan kembali prinsip-prinsip teologi Reformed untuk aplikasi dalam penggembalaan.' },
      ]
    },
    mataKuliahInti: {
      title: 'Mata Kuliah Inti',
      totalSks: 15,
      courses: [
        { code: 'MKI1', name: 'Spiritualitas Pemimpin Gereja', sks: 3, description: 'Menekankan perjalanan dan transformasi spiritualitas pemimpin gereja (spiritual journey and renewal) beserta implikasinya dalam konteks pelayanan gereja, sekolah dan keluarga. Studi ini mengarahkan lebih pada pembentukan kedewasaan spiritual yang utuh dan bagaimana mengalami pembaharuan spiritual secara berkelanjutan.' },
        { code: 'MKI2', name: 'Pemuridan Intensional Gereja', sks: 3, description: 'Strategi pemuridan yang intensional dan terencana dalam konteks gereja.' },
        { code: 'MKI3', name: 'Misi Integral Gereja', sks: 3, description: 'Pemahaman dan aplikasi misi integral Allah dalam konteks pelayanan gereja.' },
        { code: 'MKI4', name: 'Kepemimpinan Transformasional Gereja', sks: 3, description: 'Prinsip kepemimpinan Kristen yang transformatif dalam konteks gereja dan organisasi Kristen.' },
        { code: 'MKI5', name: 'Pembinaan Spiritualitas Tiap Fase Kehidupan', sks: 3, description: 'Pendekatan pembinaan spiritual yang sesuai dengan setiap tahap kehidupan jemaat.' },
      ]
    },
    mataKuliahKonsentrasi: {
      title: 'Mata Kuliah Konsentrasi',
      totalSks: 9,
      courses: [
        { code: 'MKK1', name: 'Teologi Pastoral', sks: 3, description: 'Mata kuliah ini mengkaji dasar-dasar teologis dari pelayanan pastoral dalam konteks gereja dan kehidupan jemaat. Mahasiswa akan diajak memahami hakikat panggilan pastoral, karakter gembala sebagai pelayan yang setia dan bertanggung jawab (stewardship), serta pentingnya integrasi antara refleksi teologis dan praktik pelayanan sehari-hari.' },
        { code: 'MKK2', name: 'Khotbah Ekspositori Advanced', sks: 3, description: 'Teknik lanjutan penyampaian khotbah ekspositori yang alkitabiah dan relevan.' },
        { code: 'MKK3', name: 'Ibadah Transformatif', sks: 3, description: 'Perancangan dan pelaksanaan ibadah yang transformatif bagi jemaat.' },
      ]
    },
    mataKuliahElektif: {
      title: 'Mata Kuliah Elektif',
      totalSks: 6,
      courses: [
        { code: 'MKE1a', name: 'Perintisan dan Pertumbuhan Gereja (Trinity Institute)', sks: 3, description: 'Mata kuliah ini membahas prinsip-prinsip teologis dan praktis dalam perintisan serta pertumbuhan gereja, baik dalam konteks lokal maupun lintas budaya. Mahasiswa akan mempelajari dasar biblika, strategi misi, dinamika komunitas, serta faktor-faktor yang mendukung pertumbuhan gereja yang sehat dan berkelanjutan.' },
        { code: 'MKE1b', name: 'Manajemen Perubahan dan Konflik', sks: 3, description: 'Prinsip manajemen perubahan dan resolusi konflik dalam konteks gereja dan organisasi Kristen.' },
      ]
    },
    mataKuliahPenelitian: {
      title: 'Mata Kuliah Penelitian',
      totalSks: 9,
      courses: [
        { code: 'MKP1', name: 'Mentoring Pastoral', sks: 3, description: 'Mata kuliah ini bertujuan membentuk kehidupan rohani dan karakter pelayanan mahasiswa melalui proses pendampingan (mentoring) yang terarah dan berkelanjutan. Mahasiswa akan dibimbing secara pribadi oleh satu dosen pembimbing dalam pertemuan bulanan (satu kali setiap bulan), dengan fokus pada pertumbuhan iman, pembentukan karakter, refleksi panggilan, dan integrasinya antara kehidupan pribadi dan pelayanan.' },
        { code: 'MKP2', name: 'Tugas Akhir', sks: 6, description: 'Penyelesaian tugas akhir sebagai syarat kelulusan.' },
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
                <Clock className="w-6 h-6 text-red-700" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Sistem Perkuliahan
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>*Jadwal kuliah tergantung dengan kesepakatan (sistem cohort)</strong>
                  </span>
                </li>
                <li className="text-xs text-gray-500 italic pl-6">
                  *Mata Kuliah Fondasi (15 SKS) akan di transfer dari ijazah S1, sehingga total akhir menjadi 60 SKS
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
              <p className="text-sm text-gray-600">Total: <span className="font-bold text-red-700">{totalSks} SKS</span> (45 SKS + 15 SKS transfer dari S1)</p>
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
                                  <span className="bg-red-700 text-white px-2 py-1 rounded text-xs font-bold">{index === 0 ? '1a' : index === 1 ? '1b' : index + 1}</span>
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