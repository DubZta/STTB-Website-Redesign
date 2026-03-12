import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Clock, Award, CheckCircle, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function SarjanaTeologiPage() {
  const { t } = useLanguage();

  const programInfo = {
    code: 'S.Th.',
    name: 'Sarjana Teologi',
    nameEn: 'Bachelor of Theology',
    duration: '4 Tahun (8 Semester)',
    credits: '144 SKS',
    accreditation: 'Terakreditasi B (BAN-PT)',
  };

  const profilLulusan = [
    {
      title: 'Informed',
      desc: 'Pastor-scholar yang berpengetahuan luas dan aplikatif terhadap tantangan perkembangan pelayanan gerejawi dalam konteks urban.'
    },
    {
      title: 'Transformed',
      desc: 'Pembelajar yang memiliki fondasi spiritualitas yang kokoh dan karakter yang matang.'
    },
    {
      title: 'Transformative',
      desc: 'Pastor-scholar yang berdampak bagi jemaat dan lingkungan tempatnya melayani.'
    }
  ];

  const description = {
    overview: 'Program Sarjana Teologi dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan yang memiliki pemahaman teologi Reformed yang mendalam, karakter Kristiani yang matang, dan keterampilan pelayanan yang efektif. Program ini mengintegrasikan pembelajaran akademis dengan pembentukan spiritual dan praktik pelayanan.',
    objectives: [
      'Menghasilkan lulusan yang memiliki pemahaman teologi Reformed yang kokoh dan komprehensif',
      'Membentuk karakter Kristiani yang matang dengan integritas dan dedikasi dalam pelayanan',
      'Mengembangkan keterampilan pelayanan praktis yang relevan dengan konteks gereja dan masyarakat',
      'Mempersiapkan pemimpin gereja yang transformatif dan berorientasi pada misi',
    ],
    careerPaths: [
      'Pendeta/Gembala Sidang',
      'Penginjil/Misionaris',
      'Pemimpin Pelayanan Pemuda',
      'Konselor Pastoral',
      'Dosen/Pengajar Teologi',
      'Penulis/Peneliti Teologi',
    ],
  };

  const curriculum = {
    semester1: [
      { code: 'BI101', name: 'Pengantar Perjanjian Lama', sks: 3 },
      { code: 'BI102', name: 'Pengantar Perjanjian Baru', sks: 3 },
      { code: 'ST101', name: 'Survei Teologi Sistematika', sks: 3 },
      { code: 'CH101', name: 'Sejarah Gereja I', sks: 3 },
      { code: 'LA101', name: 'Bahasa Inggris Teologi I', sks: 2 },
      { code: 'PM101', name: 'Pengantar Pelayanan Praktis', sks: 2 },
    ],
    semester2: [
      { code: 'BI201', name: 'Eksegesis Perjanjian Lama I', sks: 3 },
      { code: 'BI202', name: 'Eksegesis Perjanjian Baru I', sks: 3 },
      { code: 'ST201', name: 'Teologi Sistematika I: Allah & Penciptaan', sks: 3 },
      { code: 'CH201', name: 'Sejarah Gereja II', sks: 3 },
      { code: 'LA201', name: 'Bahasa Inggris Teologi II', sks: 2 },
      { code: 'PM201', name: 'Homiletika I', sks: 2 },
    ],
    semester3: [
      { code: 'BI301', name: 'Tafsir Kitab Kejadian-Ulangan', sks: 3 },
      { code: 'BI302', name: 'Tafsir Injil Sinoptik', sks: 3 },
      { code: 'ST301', name: 'Teologi Sistematika II: Kristologi', sks: 3 },
      { code: 'PM301', name: 'Pemuridan & Pembinaan Warga Jemaat', sks: 3 },
      { code: 'LA301', name: 'Bahasa Yunani I', sks: 3 },
      { code: 'GE101', name: 'Filsafat', sks: 2 },
    ],
    semester4: [
      { code: 'BI401', name: 'Tafsir Kitab Sejarah & Puisi', sks: 3 },
      { code: 'BI402', name: 'Tafsir Injil Yohanes', sks: 3 },
      { code: 'ST401', name: 'Teologi Sistematika III: Soteriologi', sks: 3 },
      { code: 'PM401', name: 'Konseling Pastoral', sks: 3 },
      { code: 'LA401', name: 'Bahasa Yunani II', sks: 3 },
      { code: 'CE101', name: 'Pendidikan Kristen', sks: 2 },
    ],
    semester5: [
      { code: 'BI501', name: 'Tafsir Kitab Para Nabi', sks: 3 },
      { code: 'BI502', name: 'Tafsir Kisah Para Rasul', sks: 3 },
      { code: 'ST501', name: 'Teologi Sistematika IV: Pneumatologi & Eklesiologi', sks: 3 },
      { code: 'PM501', name: 'Kepemimpinan Kristen', sks: 3 },
      { code: 'LA501', name: 'Bahasa Ibrani I', sks: 3 },
      { code: 'MI101', name: 'Pengantar Misiologi', sks: 2 },
    ],
    semester6: [
      { code: 'BI601', name: 'Tafsir Surat-surat Paulus I', sks: 3 },
      { code: 'BI602', name: 'Teologi Biblika PL', sks: 3 },
      { code: 'ST601', name: 'Teologi Sistematika V: Eskatologi', sks: 3 },
      { code: 'PM601', name: 'Administrasi Gereja', sks: 2 },
      { code: 'LA601', name: 'Bahasa Ibrani II', sks: 3 },
      { code: 'AP101', name: 'Apologetika', sks: 3 },
    ],
    semester7: [
      { code: 'BI701', name: 'Tafsir Surat-surat Paulus II', sks: 3 },
      { code: 'BI702', name: 'Teologi Biblika PB', sks: 3 },
      { code: 'ET101', name: 'Etika Kristen', sks: 3 },
      { code: 'PM701', name: 'Homiletika II', sks: 2 },
      { code: 'PM702', name: 'Pelayanan Kontekstual', sks: 3 },
      { code: 'EL101', name: 'Pilihan I', sks: 3 },
    ],
    semester8: [
      { code: 'BI801', name: 'Tafsir Surat-surat Umum & Wahyu', sks: 3 },
      { code: 'TH101', name: 'Teologi Kontemporer', sks: 3 },
      { code: 'PM801', name: 'Magang Pelayanan', sks: 6 },
      { code: 'PM802', name: 'Skripsi', sks: 6 },
    ],
  };

  const requirements = {
    academic: [
      'Lulusan SMA/SMK/sederajat dengan nilai rata-rata minimal 7.0',
      'Surat rekomendasi dari pendeta/pemimpin gereja',
      'Surat pernyataan panggilan pelayanan',
    ],
    spiritual: [
      'Memiliki komitmen mengikut Kristus dan melayani Tuhan',
      'Aktif dalam pelayanan gereja lokal minimal 1 tahun',
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
          
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="bg-gradient-to-br from-sttb-navy to-blue-800 rounded-xl p-8 text-white shadow-lg mb-8">
              <h1 className="text-5xl font-extrabold mb-2">{programInfo.code}</h1>
              <p className="text-3xl font-semibold text-blue-100">{programInfo.name}</p>
              <p className="text-xl text-blue-200 italic mt-2">{programInfo.nameEn}</p>
            </div>

            {/* Info Section (Tanpa Kontainer Kaku) */}
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
                    {/* Ikon dengan efek memudar saat hover */}
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
                  
                  {/* Garis dekoratif halus di bawah yang muncul saat hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sttb-navy to-sttb-red rounded-b-2xl transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profil Lulusan Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Profil Lulusan: <span className="text-sttb-red">Transformative Pastor-Scholar</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profilLulusan.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sttb-navy font-bold text-lg border-l-4 border-sttb-red pl-3">{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-3">{item.desc}</p>
                </div>
              ))}
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
                <BookOpen className="w-6 h-6 text-sttb-navy" />
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
                <Users className="w-6 h-6 text-sttb-red" />
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
                  <div className="bg-gradient-to-r from-sttb-navy to-blue-700 px-4 py-3">
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
                <h3 className="text-base font-bold text-sttb-navy mb-3">
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
                <h3 className="text-base font-bold text-sttb-navy mb-3">
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
                <h3 className="text-base font-bold text-sttb-navy mb-3">
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
