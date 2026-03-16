import { useLanguage } from '../../contexts/LanguageContext';
import AboutSubNav from '../../components/navigation/AboutSubNav';
import { Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function FoundationPage() {
  const { t } = useLanguage();

  const advisors = [
    'Pdt. Agus Gunawan, Ph.D.',
    'Pnt. Subianto Tjandra',
    'Pdt. Budiyanto Santosa, D.Min.',
  ];

  const board = [
    { position: 'Ketua', name: 'Pnts. Benny Soenarjo' },
    { position: 'Wakil Ketua', name: 'Pnts. Ginawan Chondro' },
    { position: 'Sekretaris', name: 'Pnt. Arif Subagyo' },
    { position: 'Bendahara', name: 'Pnt. Widianto Tjandradipura' },
  ];

  const members = [
    'Pnts. Agus Tjandra',
    'Ev. Doroti Tunggal Widjaja, M.Th.',
    'Bp. Eddy Samuel Affendie',
    'Pnts. Edi Sukamto Josana',
    'Bp. Herjanto Gunawan',
    'Pnts. Joseph Koshan',
    'Pnt. Suwito Kwee',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutSubNav />

      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Building2 className="w-10 h-10 text-sttb-navy" />
              <h1 className="text-4xl font-extrabold text-sttb-navy">
                {t('about.foundation.title')}
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              {t('about.foundation.subtitle')}
            </p>
          </motion.div>

          {/* Dewan Pembina */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-gradient-to-br from-sttb-navy to-blue-800 rounded-xl p-7 shadow-lg">
              <h2 className="text-2xl font-extrabold text-white mb-5 text-center">
                {t('about.foundation.advisors')}
              </h2>
              <div className="grid gap-3">
                {advisors.map((advisor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all"
                  >
                    <p className="text-lg font-semibold text-white text-center">
                      {advisor}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dewan Pengurus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-7 shadow-md border border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5 text-center">
                {t('about.foundation.board')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {board.map((person, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-lg p-5 hover:border-sttb-navy hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-sttb-red to-red-400 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-lg">
                          {person.position.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sttb-navy uppercase tracking-wide">
                          {person.position}
                        </p>
                        <p className="text-base font-bold text-gray-900">
                          {person.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Anggota */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-7 shadow-md border border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5 text-center">
                {t('about.foundation.members')}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-900 font-semibold text-sm">{member}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}