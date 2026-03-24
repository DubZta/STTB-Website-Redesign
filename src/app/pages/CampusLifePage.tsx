import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Building2, Users, Award, ArrowRight } from 'lucide-react';

export default function CampusLifePage() {
const campusLifePages = [
  {
    title: "Fasilitas",
    description:
      "Jelajahi fasilitas modern yang dirancang untuk pendidikan teologi holistik",
    icon: Building2,
    href: "/campus-life/facilities",
    color: "from-sttb-navy to-blue-800",
    tag: "Infrastruktur",
  },
  {
    title: "Pembinaan Mahasiswa",
    description:
      "Temukan program pembinaan dan pendampingan mahasiswa yang komprehensif",
    icon: Users,
    href: "/campus-life/student-development",
    color: "from-sttb-navy to-blue-800",
    tag: "Pembinaan",
  },
  {
    title: "Senat",
    description:
      "Pelajari tentang kepemimpinan mahasiswa dan keterlibatan komunitas kampus",
    icon: Award,
    href: "/campus-life/senate",
    color: "from-sttb-navy to-blue-800",
    tag: "Kepemimpinan",
  },
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sttb-navy via-blue-900 to-sttb-navy py-20">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            {'Kehidupan Kampus'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto"
          >
            {'Pengalaman kampus yang holistik dan bermakna untuk membentuk pelayan Tuhan.'}
          </motion.p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {campusLifePages.map((page, index) => {
              const Icon = page.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <Link
                    to={page.href}
                    className="group block h-full bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
                  >
                    {/* Top gradient panel */}
                    <div className={`bg-gradient-to-br ${page.color} p-8 text-white`}>
                      <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-1 text-white">{page.title}</h3>
                      <span className="inline-block bg-white/20 text-white/90 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded mt-1">
                        {page.tag}
                      </span>
                    </div>
                    {/* Bottom content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{page.description}</p>
                      <div className="flex items-center text-sttb-red font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                        <span>{'Pelajari Lebih Lanjut'}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}