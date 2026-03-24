import { Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function VisionMissionSection() {

const missions = [
    'Menyelenggarakan pendidikan teologi berkualitas tinggi yang berbasis Alkitab',
    'Mengembangkan pemikiran teologis yang relevan dengan konteks Indonesia',
    'Membentuk karakter Kristiani yang matang dan profesional',
    'Melayani gereja dan masyarakat melalui penelitian dan pengabdian',
  ];

  return (
    <section className="py-20 bg-sttb-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {'VISI & MISI'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sttb-red to-white mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-sttb-red to-red-700 rounded-xl flex items-center justify-center shadow-xl">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {'Visi Kami'}
              </h3>
            </div>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              {'Menjadi lembaga pendidikan teologi yang unggul dalam membentuk pemimpin Kristen yang transformatif untuk gereja dan masyarakat.'}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-sttb-red to-red-700 rounded-xl flex items-center justify-center shadow-xl">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {'Misi Kami'}
              </h3>
            </div>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sttb-red rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-gray-200 text-xs md:text-sm leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '100%', label: 'Accredited Programs' },
            { number: '95%', label: 'Graduate Employment' },
            { number: '40+', label: 'Expert Faculty' },
            { number: '15+', label: 'Research Projects' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-sttb-red mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}