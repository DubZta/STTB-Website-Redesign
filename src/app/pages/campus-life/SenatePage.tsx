import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  ChevronRight,
  Award,
  Target,
  Users as UsersIcon,
  Calendar,
  Dumbbell,
  MessageSquare,
  GraduationCap,
  Mic,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

export default function SenatePage() {
const visionMission = [
    {
      icon: Award,
      title: 'Visi',
      body:
        'Menjadi organisasi mahasiswa yang melayani dengan integritas, mengembangkan kepemimpinan, dan membangun komunitas yang transformatif bagi kemuliaan Tuhan.',
    },
    {
      icon: Target,
      title: 'Misi',
      body:
        'Memfasilitasi pertumbuhan akademik, rohani, dan sosial mahasiswa melalui program-program yang holistik dan relevan dengan kebutuhan kampus.',
    },
    {
      icon: UsersIcon,
      title: 'Peran',
      body:
        'Menjembatani komunikasi antara mahasiswa dan pihak kampus, serta mengkoordinasikan kegiatan kemahasiswaan untuk menciptakan lingkungan kampus yang kondusif.',
    },
  ];

  const trainingGroups = [
    {
      title: 'Training Umum Manager',
      items: ['Training untuk Mahasiswa Baru', 'Training untuk Kamar dan Lorong'],
    },
    {
      title: 'Training Group',
      items: ['Training Akademis', 'Training Kemahasiswaan', 'Training Kerohanian'],
    },
  ];

  const campusActivities = [
    { icon: GraduationCap, label: 'Orientasi Mahasiswa Baru' },
    { icon: Calendar, label: 'Pergi Pulau' },
    { icon: Mic, label: 'Workshop dan Seminar STTB' },
    { icon: Dumbbell, label: 'Kegiatan Olah Raga' },
  ];

  const formationActivities = [
    { icon: BookOpen, label: 'Evaluasi Kampus' },
    { icon: MessageSquare, label: 'Forum Bicara' },
    { icon: Calendar, label: 'Family Day / Peringatan STTB' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Elegant dark-to-navy gradient overlay, not overwhelmingly coloured */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-sttb-navy/85 to-gray-900/90" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* STTB Logo from navbar */}
            <div className="flex justify-center mb-6">
              <img
                src="/SSTB TEXT LOGO.png"
                alt="STTB — Sekolah Tinggi Teologi Bandung"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>

            {/* Thin decorative line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-white/30" />
              <span className="text-white/60 text-xs font-semibold tracking-[0.3em] uppercase">Senat Mahasiswa</span>
              <div className="w-16 h-px bg-white/30" />
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              SENAT
            </h1>
            <p className="text-lg md:text-xl text-white/70 italic font-medium mb-10 max-w-xl mx-auto">
              "Students Today, Leaders Tomorrow!"
            </p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { label: 'Organisasi Resmi', value: 'Mahasiswa' },
                { label: 'Program Pelatihan', value: '2 Kategori' },
                { label: 'Kegiatan Aktif', value: '7+ Acara' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 backdrop-blur-sm">
                  <p className="text-white font-bold text-base">{stat.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* ── Vision / Mission / Role ──────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sttb-red">
            {'Tentang Senat'}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            {'Landasan Kami'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {visionMission.map((card, i) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sttb-navy/8 rounded-xl flex items-center justify-center mb-5">
                  <CardIcon className="w-6 h-6 text-sttb-navy" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Training Programs ────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sttb-red">
              {'Program'}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              {'Program Pelatihan Senat'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
              >
                {/* Header strip */}
                <div className="bg-sttb-navy px-6 py-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{group.title}</h3>
                </div>
                {/* Items */}
                <div className="px-6 py-5 space-y-3">
                  {group.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sttb-red flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities ──────────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sttb-red">
            {'Kegiatan'}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            {'Kegiatan Kampus & Pembinaan'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Campus Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-7 rounded-full bg-sttb-navy" />
              <h3 className="text-base font-bold text-gray-900">
                {'Kegiatan Kampus'}
              </h3>
            </div>
            <ul className="space-y-3">
              {campusActivities.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sttb-navy/8 flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="w-5 h-5 text-sttb-navy" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Formation & Freedom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-7 rounded-full bg-sttb-red" />
              <h3 className="text-base font-bold text-gray-900">
                {'Pembinaan & Kehidupan Kampus'}
              </h3>
            </div>
            <ul className="space-y-3">
              {formationActivities.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sttb-red/8 flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="w-5 h-5 text-sttb-red" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center"
        >
          {/* Subtle decorative corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-sttb-navy/3 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sttb-red/3 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative">
            <img
              src="/SSTB TEXT LOGO.png"
              alt="STTB"
              className="h-10 w-auto object-contain mx-auto mb-5 opacity-70"
            />
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">
              {'Pelajari Lebih Lanjut Kehidupan Mahasiswa'}
            </h3>
            <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              {'Temukan lebih banyak informasi tentang program pembinaan mahasiswa dan bagaimana Senat STTB melayani komunitas kampus.'}
            </p>
            <Link
              to="/campus-life/student-development"
              className="inline-flex items-center gap-2 px-7 py-3 bg-sttb-navy hover:bg-blue-900 text-white rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200"
            >
              {'Pembinaan Mahasiswa'}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
