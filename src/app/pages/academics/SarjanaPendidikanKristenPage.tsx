import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Calendar, Clock, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, Heart, FileCheck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function SarjanaPendidikanKristenPage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'S.Pd.',
    name: language === 'id' ? 'Sarjana Pendidikan Kristen' : 'Bachelor of Christian Education',
    nameEn: 'Bachelor of Christian Education',
    duration: language === 'id' ? '4 Tahun (8 Semester)' : '4 Years (8 Semesters)',
    credits: '144 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id'
      ? 'Program Sarjana Pendidikan Kristen (Prodi S-1 Pendidikan Agama Kristen) dipersiapkan untuk melahirkan para pendidik Kristen yang berdedikasi, berwawasan luas, dan memiliki keterampilan mengajar yang inovatif. Program ini mengintegrasikan teologi Kristen dengan prinsip-prinsip pedagogi modern untuk membentuk pengajar yang mampu mentransformasi kehidupan melalui pendidikan.'
      : 'The Bachelor of Christian Education program (Christian Religious Education Study Program) is prepared to produce dedicated Christian educators with broad insights and innovative teaching skills. This program integrates Christian theology with modern pedagogical principles to form teachers capable of transforming lives through education.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Menghasilkan pendidik Kristen yang memiliki landasan teologis yang kuat dan karakter yang matang',
      'Mengembangkan kompetensi mengajar yang efektif, kreatif, and kontekstual',
      'Memperlengkapi lulusan dengan kemampuan merancang and mengelola institusi pendidikan Kristen',
      'Membentuk integritas diri sebagai model pendidik Kristiani di sekolah, gereja, and masyarakat',
    ] : [
      'Produce Christian educators with a strong theological foundation and mature character',
      'Develop effective, creative, and contextual teaching competencies',
      'Equip graduates with the ability to design and manage Christian educational institutions',
      'Form personal integrity as a model Christian educator in schools, churches, and society',
    ],
  };

  const careerProspects = {
    title: language === 'id' ? 'Prospek Karir' : 'Career Prospects',
    careers: language === 'id' ? [
      'Guru Pendidikan Agama Kristen di Sekolah Formal',
      'Koordinator/Kepala Sekolah Kristen',
      'Pengajar Pelayanan Anak & Remaja di Gereja',
      'Penyelenggara Pendidikan Informal/Komunitas',
      'Dosen/Pengajar di Perguruan Tinggi Teologi',
      'Content Creator & Edu-preneur Kristen',
    ] : [
      'Christian Religious Education Teacher in Formal Schools',
      'Christian School Coordinator/Principal',
      'Children & Youth Ministry Teacher in Churches',
      'Informal Education/Community Organizer',
      'Lecturer in Theological Colleges',
      'Christian Content Creator & Edu-preneur',
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
    dasarUmum: {
      title: 'Dasar Umum',
      totalSks: 14,
      courses: [
        { code: 'DU1', name: 'Pancasila Dan Kewarganegaraan', sks: 2, description: 'Mata kuliah ini membahas dasar-dasar Pancasila and implementasinya dalam kehidupan berbangsa and bernegara, dengan fokus pada nilai-nilai Kristen dalam konteks Indonesia.' },
        { code: 'DU2', name: 'Bahasa Indonesia', sks: 2, description: 'Pengembangan keterampilan berbahasa Indonesia secara lisan and tulisan untuk keperluan akademis and profesional.' },
        { code: 'DU3', name: 'Bahasa Inggris Teologi', sks: 3, description: 'Pengenalan terminologi teologi dalam bahasa Inggris untuk mendukung studi literatur internasional.' },
        { code: 'DU4', name: 'Metode Berpikir', sks: 2, description: 'Pengembangan keterampilan berpikir kritis, logis, and sistematis untuk studi teologi.' },
        { code: 'DU5', name: 'Psikologi Perkembangan Masa Hidup', sks: 2, description: 'Studi tentang tahapan perkembangan manusia dari perspektif psikologi.' },
        { code: 'DU6', name: 'Metode Penulisan & Penelitian', sks: 3, description: 'Teknik penelitian akademis and penulisan ilmiah sesuai standar universitas.' },
      ]
    },
    studiBiblika: {
      title: 'Studi Biblika',
      totalSks: 34,
      courses: [
        { code: 'SB1', name: 'Pengantar Alkitab dan Teologi Biblika', sks: 3, description: 'Survei keseluruhan Alkitab dengan fokus pada tema-tema teologis utama and kesatuan pesan Alkitab.' },
        { code: 'SB2', name: 'Studi PL 1: Kitab Taurat', sks: 3, description: 'Penafsiran kitab-kitab Taurat (Kejadian, Keluaran, Imamat, Bilangan, Ulangan).' },
        { code: 'SB3', name: 'Studi PL 2: Kita Sejarah', sks: 3, description: 'Penafsiran kitab-kitab sejarah dalam Perjanjian Lama dari Yosua hingga Ester.' },
        { code: 'SB4', name: 'Studi PL 3: Kitab Sastra', sks: 3, description: 'Studi kitab-kitab puisi and hikmat dalam Perjanjian Lama (Ayub, Mazmur, Amsal, Pengkhotbah, Kidung Agung).' },
        { code: 'SB5', name: 'Studi PL 4: Kitab Nabi-nabi', sks: 3, description: 'Penafsiran kitab-kitab nabi besar and nabi kecil dalam Perjanjian Lama.' },
        { code: 'SB6', name: 'Studi PB 1: Kitab Injil', sks: 3, description: 'Penafsiran Matius, Markus, Lukas, and Yohanes dengan pendekatan kritik sastra and teologis.' },
        { code: 'SB7', name: 'Studi PB 2: Kis Para Rasul & Paulus', sks: 3, description: 'Penafsiran Kisah Para Rasul and surat-surat Paulus dengan fokus pada perkembangan gereja mula-mula.' },
        { code: 'SB8', name: 'Studi PB3: Surat Umum & Wahyu', sks: 3, description: 'Penafsiran surat-surat umum and kitab Wahyu.' },
        { code: 'SB9', name: 'Hermeneutika Biblika', sks: 3, description: 'Prinsip-prinsip penafsiran Alkitab yang bertanggung jawab.' },
        { code: 'SB10', name: 'Bahasa Ibrani', sks: 3, description: 'Pengenalan dasar bahasa Ibrani untuk studi Perjanjian Lama.' },
        { code: 'SB11', name: 'Bahasa Yunani', sks: 2, description: 'Pengenalan dasar bahasa Yunani Koine untuk studi Perjanjian Baru.' },
        { code: 'SB12', name: 'Bahasa Yunani Lanjutan', sks: 2, description: 'Lanjutan tata bahasa Yunani untuk pembacaan teks Perjanjian Baru.' },
      ]
    },
    falsafahPendidikan: {
      title: 'Falsafah Pendidikan',
      totalSks: 34,
      courses: [
        { code: 'FP1', name: 'Teologi dan Pendidikan', sks: 2, description: 'Relasi antara doktrin-doktrin teologis dengan prinsip-prinsip pendidikan Kristen.' },
        { code: 'FP2', name: 'Sejarah Pendidikan Kristen', sks: 2, description: 'Perkembangan teori and praktik pendidikan Kristen dari masa Alkitab hingga era modern.' },
        { code: 'FP3', name: 'Integrasi Iman Dengan Ilmu Pengetahuan', sks: 2, description: 'Metodologi dalam mengintegrasikan kebenaran Alkitabiah dengan disiplin ilmu pengetahuan.' },
        { code: 'FP4', name: 'Profesi Pendidik Keagamaan Kristen', sks: 2, description: 'Tanggung jawab moral, etis, and profesional seorang guru agama Kristen.' },
        { code: 'FP5', name: 'Teologi Dan Psikologi Perkembangan', sks: 3, description: 'Kajian perkembangan manusia dari sudut pandang teologi and psikologi.' },
        { code: 'FP6', name: 'Metode Pengajaran Kristen Yang Transformatif', sks: 3, description: 'Strategi pengajaran yang berorientasi pada perubahan hidup peserta didik.' },
        { code: 'FP7', name: 'Manajemen Pendidikan Kristen', sks: 3, description: 'Prinsip tata kelola institusi pendidikan Kristen yang efektif.' },
        { code: 'FP8', name: 'Desain Kurikulum Pendidikan Kristen', sks: 3, description: 'Teknik pengembangan kurikulum yang relevan and Alkitabiah.' },
        { code: 'FP9', name: 'Evaluasi Pembelajaran', sks: 3, description: 'Metode pengukuran and penilaian hasil belajar peserta didik.' },
        { code: 'FP10', name: 'Pendidikan Anak Transformatif', sks: 3, description: 'Strategi pendidikan Kristen untuk anak usia dini and dasar.' },
        { code: 'FP11', name: 'Pendidikan Remaja & Pemuda Transformatif', sks: 3, description: 'Strategi pendidikan Kristen untuk usia remaja and pemuda.' },
        { code: 'FP12', name: 'Pendidikan Orang Dewasa & Lanjut Usia Transformatif', sks: 3, description: 'Strategi pendidikan Kristen untuk warga jemaat dewasa and lansia.' },
        { code: 'FP13', name: 'Dasar-Dasar Konseling Pendidikan', sks: 2, description: 'Teori and teknik konseling dasar untuk pendidik.' },
      ]
    },
    studiTeologi: {
      title: 'Studi Teologi',
      totalSks: 23,
      courses: [
        { code: 'ST1', name: 'Prolegomena & Doktrin Alkitab', sks: 3, description: 'Studi tentang inspirasi, otoritas, kanonisitas, and preservasi Alkitab.' },
        { code: 'ST2', name: 'Doktrin Allah, Penciptaan & Manusia', sks: 3, description: 'Studi tentang keberadaan, sifat, and karya Allah Tritunggal, penciptaan, and doktrin tentang manusia.' },
        { code: 'ST3', name: 'Doktrin Kristus, Dosa & Keselamatan', sks: 3, description: 'Doktrin tentang pribadi and karya Yesus Kristus, doktrin dosa, and soteriologi.' },
        { code: 'ST4', name: 'Doktrin Roh Kudus & Akhir Zaman', sks: 3, description: 'Doktrin tentang pribadi and karya Roh Kudus serta eskatologi.' },
        { code: 'ST5', name: 'Doktrin Gereja', sks: 3, description: 'Doktrin tentang gereja, sakramen, and eklesiologi Reformed.' },
        { code: 'ST6', name: 'Apologetika', sks: 2, description: 'Pembelaan iman Kristen terhadap tantangan filosofis and teologis.' },
        { code: 'ST7', name: 'Etika Kristen', sks: 2, description: 'Prinsip-prinsip etika Kristen and aplikasinya dalam isu-isu kontemporer.' },
        { code: 'ST8', name: 'Teologi Reformed & Injili', sks: 3, description: 'Prinsip-prinsip teologi Reformed and tradisi Injili.' },
      ]
    },
    sejarahBudaya: {
      title: 'Sejarah & Budaya',
      totalSks: 11,
      courses: [
        { code: 'SB1', name: 'Sejarah Gereja Dunia', sks: 2, description: 'Perkembangan gereja universal dari masa rasuli hingga kini.' },
        { code: 'SB2', name: 'Sejarah Gereja Indonesia', sks: 2, description: 'Perkembangan gereja and kekristenan di Nusantara.' },
        { code: 'SB3', name: 'Sejarah Teologi', sks: 3, description: 'Perkembangan doktrin and pemikiran teologi sepanjang sejarah gereja.' },
        { code: 'SB4', name: 'Fenomanologi Agama', sks: 2, description: 'Studi tentang fenomena keagamaan dalam perspektif sosiologis and antropologis.' },
        { code: 'SB5', name: 'Iman & Kebudayaan', sks: 2, description: 'Relasi antara iman Kristen, ilmu pengetahuan, and budaya.' },
      ]
    },
    praktikPelayanan: {
      title: 'Praktik Pelayanan',
      totalSks: 12,
      courses: [
        { code: 'PP1', name: 'Praktik Pelayanan 2.5 Bulan', sks: 3, description: 'Praktik lapangan di sekolah atau gereja selama masa libur semester.' },
        { code: 'PP2', name: 'Praktik Mengajar (PPL)', sks: 3, description: 'Praktik pengalaman lapangan intensif mengajar di sekolah formal.' },
        { code: 'PP3', name: 'Praktik Pelayanan 6 Bulan', sks: 6, description: 'Praktik pelayanan penuh sebagai puncak integrasi teori and praktik sebelum kelulusan.' },
      ]
    },
    tugasAkhir: {
      title: language === 'id' ? 'Tugas Akhir' : 'Final Assignment',
      totalSks: 6,
      courses: [
        { 
          code: 'TA1', 
          name: language === 'id' ? 'Artikel Jurnal' : 'Journal Article', 
          sks: 3, 
          description: language === 'id' 
            ? 'Penulisan artikel akademis untuk publikasi jurnal kependidikan/teologi.' 
            : 'Academic article writing for educational/theological journal publication.' 
        },
        { 
          code: 'TA2', 
          name: language === 'id' ? 'Proyek: Desain Kurikulum Inovatif' : 'Project: Innovative Curriculum Design', 
          sks: 3, 
          description: language === 'id' 
            ? 'Rancangan and implementasi kurikulum/program pendidikan sebagai proyek akhir.' 
            : 'Design and implementation of educational curriculum/program as final project.' 
        },
      ]
    },
  };

  const requirements = {
    academic: [
      'Minimal lulusan SMA/ sederajat',
    ],
    spiritual: [
      'Sudah baptis dewasa/sidi',
      'Pernah terlibat pelayanan gerejawi/lembaga Kristen',
      'Memiliki panggilan yang jelas sebagai pendidik Kristen penuh waktu',
      'Aktif dalam pelayanan gereja lokal minimal 1 tahun',
      'Mendapat rekomendasi dari gembala/pemimpin gereja',
    ],
    professional: [
      'Terbuka bagi lulusan SMA atau sederajat yang memiliki panggilan pendidik',
    ],
    administrative: [
      'Memenuhi prosedur admisi STTB',
      'Mengisi formulir pendaftaran online',
      'Menyerahkan transkrip nilai and ijazah',
      'Menyerahkan book review',
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
            <div className="bg-gradient-to-br from-sttb-navy to-blue-800 rounded-xl p-8 text-white shadow-lg mb-8">
              <h1 className="text-5xl font-extrabold mb-2 text-white">{programInfo.code}</h1>
              <p className="text-3xl font-semibold text-blue-100">{programInfo.name}</p>
              <p className="text-xl text-blue-200 italic mt-2">{programInfo.nameEn}</p>
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
                  className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300`}>
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
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sttb-navy to-blue-800 rounded-b-2xl transition-all duration-500 group-hover:w-full" />
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
                <Info className="w-6 h-6 text-sttb-navy" />
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
                <Target className="w-6 h-6 text-sttb-navy" />
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
                <Briefcase className="w-6 h-6 text-sttb-navy" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {careerProspects.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {careerProspects.careers.map((career, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3"
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Profil Lulusan: <span className="text-sttb-navy">Informed, Transformed, Transformative Educator</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profilLulusan.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sttb-navy font-bold text-lg border-l-4 border-sttb-navy pl-3">{item.title}</div>
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
                  <GraduationCap className="w-6 h-6 text-sttb-navy" />
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
                  <Heart className="w-6 h-6 text-sttb-navy" />
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
                  <UserCheck className="w-6 h-6 text-sttb-navy" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Kependidikan
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
                  <FileCheck className="w-6 h-6 text-sttb-navy" />
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-sttb-navy" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Sistem Perkuliahan
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>4 tahun full time; 3,5 tahun kuliah + 6 bulan praktik pelayanan</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Kuliah dilakukan secara block teaching selama 3 minggu yang diikuti dengan minggu pengerjaan tugas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Satu semester terdiri dari 16 pertemuan (kuliah & evaluasi).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Perkuliahan akan berlangsung selama 7 semester and dilanjutkan dengan praktik pelayanan (PPL) and magang selama 6 bulan.
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
              <p className="text-sm text-gray-600">Total: <span className="font-bold text-sttb-navy">{totalSks} SKS</span></p>
            </div>

            {/* Sidebar + Main Content Layout */}
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Category Summary */}
              <aside className="lg:col-span-1">
                <div className="bg-sttb-navy text-white rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 text-white">KATEGORI MATA KULIAH</h3>
                  <ul className="space-y-3 text-sm">
                    {Object.entries(curriculumCategories).map(([key, category]) => (
                      <li key={key}>
                        <a
                          href={`#${key}`}
                          className="block hover:text-blue-200 transition-colors"
                        >
                          <span className="font-semibold">{category.title}</span>
                          <span className="text-blue-200 ml-2">({category.totalSks} SKS)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-blue-700">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="text-xl font-bold text-blue-200">{totalSks} SKS</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content - Course Tables */}
              <main className="lg:col-span-3 space-y-8">
                {Object.entries(curriculumCategories).map(([key, category]) => (
                  <div key={key} id={key} className="scroll-mt-24">
                    <h3 className="text-lg font-bold text-sttb-navy mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-sttb-navy rounded-sm"></div>
                      {category.title} <span className="text-gray-500 font-normal">({category.totalSks} SKS)</span>
                    </h3>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-sttb-navy text-white">
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
                                  <span className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-bold">{index + 1}</span>
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
                                        ? 'bg-sttb-navy text-white rotate-180'
                                        : 'text-sttb-navy hover:bg-blue-50'
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
                                <tr className="bg-blue-50 border-b border-gray-100">
                                  <td className="px-4 py-3"></td>
                                  <td colSpan={2} className="px-4 py-3">
                                    <div className="flex items-start gap-2">
                                      <FileText className="w-4 h-4 text-sttb-navy flex-shrink-0 mt-1" />
                                      <div>
                                        <h4 className="font-semibold text-sttb-navy text-sm mb-1">
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