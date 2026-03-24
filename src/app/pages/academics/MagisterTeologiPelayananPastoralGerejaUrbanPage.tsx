import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Calendar, Clock, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, Heart, FileCheck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function MagisterTeologiPelayananPastoralGerejaUrbanPage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'M.Th.',
    name: language === 'id' ? 'Magister Teologi Pelayanan Pastoral Gereja Urban' : 'Master of Theology in Urban Church Pastoral Ministry',
    nameEn: 'Master of Theology in Urban Church Pastoral Ministry',
    duration: language === 'id' ? '2 Tahun (4 Semester)' : '2 Years (4 Semesters)',
    credits: '60 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id'
      ? 'Program Magister Teologi (Pelayanan Pastoral Gereja Urban) dirancang untuk membekali para pemimpin gereja dengan bekal teologi yang kokoh dan strategi pastoral yang relevan untuk melayani jemaat di tengah dinamika masyarakat perkotaan. Mengedepankan model Pastor-Scholar, program ini mengasah kemampuan teoretis sekaligus praktis dalam konteks urban.'
      : 'The Master of Theology program (Urban Church Pastoral Ministry) is designed to equip church leaders with solid theological foundations and relevant pastoral strategies to serve congregations amidst the dynamics of urban society. Emphasizing the Pastor-Scholar model, this program hones both theoretical and practical skills in urban contexts.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Menghasilkan lulusan yang memiliki pemahaman teologi Reformed yang komprehensif dalam konteks perkotaan',
      'Mengembangkan keterampilan kepemimpinan pastoral yang adaptif terhadap perubahan sosial di kota',
      'Membentuk karakter hamba Tuhan yang berintegritas dan peka terhadap isu-isu masyarakat urban',
      'Memperlengkapi pemimpin untuk merancang program pelayanan gerejawi yang berdampak transformatif',
    ] : [
      'Produce graduates with a comprehensive understanding of Reformed theology in an urban context',
      'Develop pastoral leadership skills adaptive to social changes in the city',
      'Form the character of a servant of God with integrity and sensitivity to urban society issues',
      'Equip leaders to design church ministry programs with transformative impact',
    ],
  };

  const careerProspects = {
    title: language === 'id' ? 'Prospek Karir' : 'Career Prospects',
    careers: [
      'Dosen/Pengajar Teologi',
      'Peneliti Teologi',
      'Pendeta/Gembala Senior',
      'Penulis/Penerbit Teologi',
      'Konsultan Teologi',
      'Pemimpin Lembaga Teologi',
    ],
  };

  const profilLulusan = [
    {
      title: 'Informed',
      desc: 'Pastor-scholar yang berpengetahuan luas, mampu mengkonstruksi teologi yang sehat berdasarkan teks Alkitab and mengembangkan relevansinya dalam konteks perkotaan di Indonesia and sekitarnya.'
    },
    {
      title: 'Transformed',
      desc: 'Pastor-scholar yang hidupnya mengalami transformasi and berpusatkan kepada Kristus dalam setiap aspek kehidupannya.'
    },
    {
      title: 'Transformative',
      desc: 'Pastor-Scholar yang mampu melakukan merancang and melakukan pelayanan yang integral dalam konteks gereja perkotaan.'
    }
  ];

  const curriculumCategories = {
    mataKuliahInti: {
      title: 'Mata Kuliah Inti',
      totalSks: 15,
      courses: [
        { code: 'MKI1', name: 'Pandangan Reformed tentang Peran Gereja Dalam Transformasi Masyarakat', sks: 3, description: 'Kuliah ini bertujuan untuk membekali mahasiswa dengan pemahaman mendalam tentang bagaimana prinsip-prinsip Teologi Reformed dapat diaplikasikan dalam transformasi sosial, ekonomi, and budaya masyarakat. Dengan menggabungkan teori, studi sejarah, and aplikasi praktis, mahasiswa diharapkan mampu mengembangkan strategi pelayanan gereja yang efektif and relevan untuk konteks masyarakat modern.' },
        { code: 'MKI2', name: 'Gereja Perkotaan', sks: 3, description: 'Studi tentang tantangan and peluang pelayanan gereja dalam konteks perkotaan Indonesia.' },
        { code: 'MKI3', name: 'Sosiologi dan Misi Perkotaan', sks: 3, description: 'Analisis sosiologis terhadap dinamika masyarakat urban and implikasinya bagi misi gereja.' },
        { code: 'MKI4', name: 'Sejarah Gereja dalam Perspektif Transformasi Sosial Budaya', sks: 3, description: 'Kajian historis tentang peran gereja dalam transformasi sosial budaya sepanjang sejarah.' },
        { code: 'MKI5', name: 'Kehidupan Spiritual Seorang Gembala', sks: 3, description: 'Pembentukan spiritualitas and karakter pastoral untuk pelayanan yang berkelanjutan.' },
      ]
    },
    mataKuliahKonsentrasi: {
      title: 'Mata Kuliah Konsentrasi: Pelayanan Pastoral Gereja Urban',
      totalSks: 18,
      courses: [
        { code: 'MKK1', name: 'Homiletika Lanjutan', sks: 3, description: 'Kuliah ini memberikan mahasiswa dengan pemahaman teoritis and keterampilan praktis agar mahasiswa dapat berkhotbah dengan struktur yang jelas, disajikan dengan baik and relevan dari genre Alkitab yang berbeda. Dengan membahas berbagai masalah homiletik, kuliah ini berusaha untuk menekankan pentingnya pelayanan khotbah yang alkitabiah. Melalui kelas ini mahasiswa akan memiliki kesempatan untuk praktek khotbah and dievaluasi oleh dosen and rekan mahasiswa lainnya.' },
        { code: 'MKK2', name: 'Pengembangan Gereja', sks: 3, description: 'Strategi pengembangan and pertumbuhan gereja dalam konteks urban.' },
        { code: 'MKK3', name: 'Kepemimpinan dan Manajemen Perubahan', sks: 3, description: 'Prinsip kepemimpinan Kristen dalam mengelola perubahan organisasi gereja.' },
        { code: 'MKK4', name: 'Isu-Isu Kontemporer Etika Kristen', sks: 3, description: 'Pembahasan isu-isu etika kontemporer dari perspektif teologi Kristen.' },
        { code: 'MKK5', name: 'Pelayanan Antar Generasi', sks: 3, description: 'Strategi pelayanan yang efektif untuk berbagai generasi dalam gereja.' },
        { code: 'MKK6', name: 'Konseling Pastoral', sks: 3, description: 'Dasar-dasar and teknik konseling dalam pelayanan pastoral.' },
      ]
    },
    mataKuliahElektif: {
      title: 'Mata Kuliah Elektif',
      totalSks: 6,
      courses: [
        { code: 'MKE1', name: 'Elektif 1 - Kategorial', sks: 3, description: 'Mahasiswa dapat memilih salah satu mata kuliah pelayanan kategorial yang ditawarkan di program studi lain.' },
        { code: 'MKE2', name: 'Elektif 2 - Kategorial', sks: 3, description: 'Mahasiswa dapat memilih mata kuliah elektif kedua dari kategori yang tersedia.' },
      ]
    },
    penelitianTugasAkhir: {
      title: 'Penelitian & Tugas Akhir',
      totalSks: 15,
      courses: [
        { code: 'PTA1', name: 'Penulisan Akademik', sks: 3, description: 'Mata kuliah ini bertujuan untuk membekali mahasiswa dengan keterampilan penulisan akademik yang efektif and mempersiapkan mereka untuk menghasilkan karya tulis yang berkualitas tinggi dalam konteks akademik and profesional.' },
        { code: 'PTA2', name: 'Riset Praktis dalam Pelayanan Pastoral (Kualitatif)', sks: 3, description: 'Metodologi penelitian kualitatif untuk studi pelayanan pastoral.' },
        { code: 'PTA3', name: 'Praktek Pelayanan Weekend', sks: 3, description: 'Praktik pelayanan intensif selama akhir pekan.' },
        { code: 'PTA4', name: 'Praktek Pelayanan 6 Bulan / Tugas Akhir Penelitian', sks: 6, description: 'Praktik pelayanan penuh selama 6 bulan atau penelitian tugas akhir.' },
      ]
    },
    mentoring: {
      title: 'Mentoring (per semester)',
      totalSks: 2,
      courses: [
        { code: 'MEN1', name: 'Mentoring Akademik', sks: 1, description: 'Mata kuliah ini diadakan setiap awal semester untuk memberikan mahasiswa gambaran mengenai kegiatan perkuliahan di semester tersebut.' },
        { code: 'MEN2', name: 'Mentoring Spiritual I-Learn', sks: 1, description: 'Pembinaan spiritual and pembentukan karakter pastoral secara berkelanjutan.' },
      ]
    },
  };

  const requirements = {
    academic: [
      'Minimal lulusan S.Th./M.Div./M.Min. dari sekolah teologi yang terakreditasi BAN PT and atau ATA',
      'Lulus program S1 non teologi (dengan syarat mengikuti program M.Min. Teologi and Pelayanan Gerejawi terlebih dahulu). Lulusan program Sarjana Pendidikan dari STTB tidak perlu mengambil program matrikulasi',
      'Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca and memahami teks berbahasa Inggris',
    ],
    spiritual: [
      'Sudah baptis dewasa/sidi',
      'Memiliki panggilan yang jelas sebagai rohaniwan penuh waktu',
    ],
    professional: [
      'Pernah terlibat pelayanan gereja/lembaga Kristen minimal selama 2 tahun',
    ],
    administrative: [
      'Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB',
      'Menyerahkan paper akademik minimal 15 halaman',
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Profil Lulusan: <span className="text-red-700">Transformative Pastor-Scholar</span></h2>
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
              <div className="space-y-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        <strong>2 tahun</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        Lulusan S1 umum wajib mengikuti kuliah matrikulasi kelas teologi selama 2 tahun pertama (86 sks). Mata kuliah matrikulasi dilakukan secara reguler pada hari Senin-Jumat and di akhir pekan mahasiswa wajib melakukan praktik pelayanan.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        Setelah menyelesaikan kelas matrikulasi barulah mahasiswa bisa melanjutkan ke mata kuliah fondasi and inti (45 sks) yang dilakukan secara intensif and pada 6 bulan terakhir mahasiswa akan menjalani praktik pelayanan (6 sks).
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        <strong>Kuliah dimulai pada bulan Agustus (Semester Ganjil)</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        Kuliah dalam bentuk block teaching secara daring and luring (tatap muka 1 mata kuliah akan dilakukan selama seminggu)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        Dalam 1 semester rata-rata terdapat 3 mata kuliah online and 1 mata kuliah onsite di kampus STTB
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        <strong>Setiap Senin-Jumat:</strong> Pukul 08.00 – 12.00 WIB (Kelas Online/Onsite) | Pukul 13.00 – 17.00 WIB (Studi Terpimpin/Tugas Mandiri)
                      </span>
                    </li>
                    <li className="text-xs text-gray-500 italic pl-6">
                      *Jadwal dapat berubah dengan pemberitahuan sebelumnya
                    </li>
                  </ul>
                </div>
              </div>
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