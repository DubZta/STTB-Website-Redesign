import { useLanguage } from '../../contexts/LanguageContext';
import AboutSubNav from '../../components/navigation/AboutSubNav';
import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function FacultyPage() {
  const { t } = useLanguage();

  const chairman = {
    name: 'Sutrisna Harjanto',
    title: t('about.faculty.chairman'),
    role: 'Dosen Pendidikan, Biblika, Marketplace',
    image: 'https://sttb.ac.id/storage/2022/06/sutrisna-1.png',
    education: [
      'Ph.D. Trinity International University, Illinois USA',
      'M.Div. Trinity Theological College, Singapore',
      'S.Farm. Universitas Padjajaran, Bandung',
    ],
  };

  const viceChairmen = [
    {
      name: 'Tan Giok Lie',
      title: 'Wakil Ketua I Akademik',
      role: '(Dosen Pendidikan)',
      image: 'https://sttb.ac.id/storage/2022/06/tan-giok-lie.png',
      education: [
        'Ed.D. Biola University Talbot School Theology USA',
        'M.A. Institut Alkitab Tiranus Bandung',
        'S.S. Universitas Kristen Maranatha Bandung',
      ],
    },
    {
      name: 'Wemmy Prayogo',
      title: 'Wakil Ketua II Adm. & Keuangan',
      role: '(Dosen Pendidikan)',
      image: 'https://sttb.ac.id/storage/2022/01/wemmy-prayogo.png',
      education: [
        'M.Ed. Monash University Australia',
        'S.Pd. Universitas Kristen Satya Wacana Salatiga',
      ],
    },
    {
      name: 'Johan Setiawan',
      title: 'Wakil Ketua III Kemahasiswaan',
      role: '(Dosen Biblika & Praktika)',
      image: 'https://sttb.ac.id/storage/2022/06/johan-setiawan.png',
      education: [
        'M.Th. Sekolah Tinggi Teologi Bandung',
        'M.C.M Discipleship Training Centre (DTC) Singapore',
        'S.Psi. Universitas Gadjah Mada (UGM) Yogyakarta',
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
                {t('about.faculty.title')}
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter leading-none absolute top-1 left-1 -z-0 opacity-20 whitespace-nowrap"
                  style={{ WebkitTextStroke: '2px #1e3a8a' }}>
                {t('about.faculty.title')}
              </h1>
            </div>
    
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-px bg-gray-300" />
              <span className="text-sttb-red font-bold text-xs tracking-[0.2em] uppercase">STTB Faculty</span>
              <div className="w-12 h-px bg-gray-300" />
            </div>
    
            <p className="mt-6 text-gray-600 max-w-lg text-center font-medium italic text-sm">
              {t('about.faculty.subtitle')}
            </p>
          </motion.div>

          {/* Chairman */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <img
                src={chairman.image}
                alt={chairman.name}
                className="w-48 h-58 md:w-64 md:h-74 object-cover rounded-2xl shadow-md"
              />
              <div className="text-left">
                <h2 className="text-sttb-navy font-bold uppercase tracking-wider text-4xl mb-1">{t('about.faculty.chairman')}</h2>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{chairman.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{chairman.role}</p>
                <ul className="space-y-1">
                  {chairman.education.map((edu, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sttb-navy rounded-full" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Vice Chairmen */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {t('about.faculty.vicechairman')}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {viceChairmen.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-48 h-58 md:w-64 md:h-74 object-cover rounded-2xl shadow-md"
                    />
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
                      {person.name}
                    </h3>
                    <p className="text-sttb-navy font-semibold text-center text-sm mb-1">
                      {person.title}
                    </p>
                    <p className="text-gray-600 text-xs text-center mb-3">
                      {person.role}
                    </p>
                    <div className="w-full pt-3 border-t border-gray-200">
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {person.education.map((edu, idx) => (
                          <li key={idx} className="text-center">{edu}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
