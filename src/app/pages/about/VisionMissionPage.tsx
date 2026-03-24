import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AboutSubNav from '../../components/navigation/AboutSubNav';
import { Target, BookOpen, Users, Building2, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function VisionMissionPage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const visionTabs = [
    {
      title: t('about.vision.tab1'),
      icon: Users,
      content:
        'Pastor-scholar adalah pemimpin gereja yang tidak hanya memiliki hati seorang gembala tetapi juga pikiran seorang sarjana. Mereka mampu mengintegrasikan kedalaman teologi dengan praktik pelayanan yang relevan.',
    },
    {
      title: t('about.vision.tab2'),
      icon: BookOpen,
      content:
        'Injil yang utuh mencakup pemahaman menyeluruh tentang karya keselamatan Allah - tidak hanya aspek rohani, tetapi juga transformasi dalam setiap aspek kehidupan manusia dan masyarakat.',
    },
    {
      title: t('about.vision.tab3'),
      icon: Users,
      content:
        'Pendidikan teologi bukan hanya untuk para pendeta, tetapi untuk seluruh umat Allah. Setiap orang percaya dipanggil untuk melayani dan membawa dampak transformatif di tempat mereka masing-masing.',
    },
    {
      title: t('about.vision.tab4'),
      icon: Building2,
      content:
        'Konteks urban memiliki tantangan dan peluang yang unik. STTB fokus mempersiapkan pemimpin yang mampu membawa Injil secara relevan dalam dinamika masyarakat perkotaan modern.',
    },
  ];

  const coreValues = [
    {
      title: t('about.corevalues.christcentered'),
      icon: Target,
      color: 'from-sttb-navy to-blue-600',
      points: [
        'Rencana keselamatan Allah atas seisi dunia yg berpusat di dalam karya penebusan Kristus.',
        'Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan.',
      ],
    },
    {
      title: t('about.corevalues.textcontext'),
      icon: BookOpen,
      color: 'from-sttb-red to-red-600',
      points: [
        'Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja',
        'Responsif terhadap konteks: sosial dan generasional',
      ],
    },
    {
      title: t('about.corevalues.stewardship'),
      icon: Users,
      color: 'from-green-600 to-green-400',
      points: [
        'Integritas (kejujuran, transparansi, akuntabilitas - waktu, uang, relasi)',
        'Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)',
        'Kompetensi (kecakapan akademik, pelayanan, dan penelitian)',
      ],
    },
    {
      title: t('about.corevalues.transformative'),
      icon: Building2,
      color: 'from-purple-600 to-purple-400',
      points: [
        'Karya penebusan Kristus yg transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutSubNav />

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative py-16 mb-8 overflow-hidden flex flex-col items-center justify-center bg-gray-50"
          >
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              className="w-1 bg-sttb-red mb-6"
            />

            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-black text-sttb-navy uppercase tracking-tighter leading-none relative z-10">
                Visi & Misi
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter leading-none absolute top-1 left-1 -z-0 opacity-20 whitespace-nowrap"
                style={{ WebkitTextStroke: '2px #1e3a8a' }}>
                Visi & Misi
              </h1>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-px bg-gray-300" />
              <span className="text-sttb-red font-bold text-xs tracking-[0.2em] uppercase">STTB Vision & Mission</span>
              <div className="w-12 h-px bg-gray-300" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-sttb-navy to-blue-800 rounded-xl p-8 shadow-lg mb-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  {t('vision.our_vision')}
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
                  {language === 'id' ? (
                    <>
                      Menjadi institusi pendidikan teologi yang mempersiapkan{' '}
                      <span className="italic font-semibold text-white">
                        pastor-scholar
                      </span>{' '}
                      yang transformatif dan memberdayakan seluruh umat Allah untuk
                      menghadirkan Injil seutuhnya di tengah konteks masyarakat urban.
                    </>
                  ) : (
                    t('about.vision.statement')
                  )}
                </p>
              </div>
            </div>

            {/* Vision Tabs */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
                {visionTabs.map((tab, index) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex flex-col items-center gap-2 p-4 transition-all ${activeTab === index
                        ? 'bg-sttb-navy text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-semibold text-center">
                        {tab.title}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {visionTabs[activeTab].content}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-sttb-navy mb-3">
                {t('vision.our_mission')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: num * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-sttb-navy hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sttb-red to-red-400 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-white">{num}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">
                      {t(`about.mission.${num}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- CORE VALUES SECTION --- */}
          {/* --- CORE VALUES SECTION (Clean & Minimalist) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16"
          >
            <div className="grid lg:grid-cols-12 gap-16 items-start">

              {/* KIRI: Judul & Gambar */}
              <div className="lg:col-span-4 space-y-6">
                <h2 className="text-3xl font-extrabold text-sttb-navy">
                  {t('about.corevalues.title')}
                </h2>
                <div className="w-16 h-1 bg-sttb-red" />

                {/* Container Gambar (Tanpa Border) */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-64 lg:h-96">
                  <img
                    src="/pie.png"
                    alt="Core Values"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* KANAN: 4 Card Tanpa Border/Shadow */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {coreValues.map((value, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-bold text-[#0F172A] border-b-2 border-sttb-red pb-2 inline-block">
                      {value.title}
                    </h3>
                    <ul className="space-y-3">
                      {value.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-sttb-red flex-shrink-0 mt-1.5" />
                          <span className="text-sm text-gray-600 leading-relaxed font-medium">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}