import { Book, Heart, Lightbulb, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function CoreValuesSection() {

const values = [
    {
      icon: Book,
      title: 'Biblical Excellence',
      description: 'Komitmen terhadap kebenaran Alkitab dan keunggulan akademis',
      color: 'from-blue-500 to-sttb-navy',
    },
    {
      icon: Heart,
      title: 'Christ-Centered',
      description: 'Kristus sebagai pusat dari semua pembelajaran dan pelayanan',
      color: 'from-sttb-red to-red-700',
    },
    {
      icon: Lightbulb,
      title: 'Transformational',
      description: 'Mengubah kehidupan melalui pendidikan teologi yang relevan',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'Standar profesional dalam pendidikan dan pelayanan',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy mb-4">
            {'CORE VALUES'}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {'Nilai-nilai yang Membentuk Karakter Kami'}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sttb-navy to-sttb-red mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-sttb-red transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.color} opacity-5 rounded-bl-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}