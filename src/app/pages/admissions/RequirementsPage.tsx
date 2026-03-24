import { motion } from 'motion/react';
import { GraduationCap, FileCheck, Users, CheckCircle2, BookOpen, Award, Shield } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';

export default function RequirementsPage() {
const programs = [
    {
      title: 'Program Sarjana Teologi',
      degree: 'S.Th.',
      icon: GraduationCap,
      accentColor: 'from-sttb-navy to-blue-900',
      badgeColor: 'bg-sttb-navy',
      tagText: 'text-sttb-navy',
      highlightBar: 'bg-sttb-navy',
      requirements: [
        'Minimal lulusan SMA/SMK/sederajat',
        'Memiliki IPK minimal 2.50 (untuk pindahan)',
        'Berasal dari keluarga Kristen',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Memiliki panggilan untuk pelayanan penuh waktu',
        'Usia maksimal 30 tahun saat mendaftar',
        'Sehat jasmani dan rohani',
        'Mendapat rekomendasi dari gembala/pembina rohani',
      ],
    },
    {
      title: 'Program Sarjana Pendidikan Agama',
      degree: 'S.Pd.K.',
      icon: Users,
      accentColor: 'from-sttb-red to-red-800',
      badgeColor: 'bg-sttb-red',
      tagText: 'text-sttb-red',
      highlightBar: 'bg-sttb-red',
      requirements: [
        'Minimal lulusan SMA/SMK/sederajat',
        'Memiliki IPK minimal 2.50 (untuk pindahan)',
        'Berasal dari keluarga Kristen',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Berminat dalam bidang pendidikan Kristen',
        'Usia maksimal 35 tahun saat mendaftar',
        'Sehat jasmani dan rohani',
        'Mendapat rekomendasi dari gembala/pembina rohani',
      ],
    },
    {
      title: 'Program Magister Pendidikan Kristen',
      degree: 'M.Pd.K.',
      icon: FileCheck,
      accentColor: 'from-sttb-navy to-sttb-red',
      badgeColor: 'bg-sttb-navy',
      tagText: 'text-sttb-navy',
      highlightBar: 'bg-sttb-navy',
      requirements: [
        'Lulusan S1 dari program studi terakreditasi',
        'IPK minimal 2.75 dari program S1',
        'Pengalaman pelayanan minimal 2 tahun',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Memiliki visi pengembangan pendidikan Kristen',
        'Usia maksimal 45 tahun saat mendaftar',
        'Menyertakan paper akademik atau book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ],
    },
  ];

  const generalDocs = [
    { icon: BookOpen, label: 'KTP / Kartu Pelajar', sub: 'Identitas diri yang masih berlaku' },
    { icon: Award, label: 'Ijazah & Transkrip', sub: 'Dilegalisir oleh pejabat berwenang' },
    { icon: Shield, label: 'Surat Baptis & Sidi', sub: 'Bukti keanggotaan gereja resmi' },
  ];

  const notes = [
    'Bila belum memiliki KTP harap cantumkan kartu pelajar.',
    'Bila ijazah belum terbit, mohon sertakan surat keterangan dari sekolah.',
    'Mahasiswa pindahan wajib menyerahkan surat pindah dan transkrip terakhir.',
    'Bila gereja memiliki baptis anak dan baptis sidi, kedua surat wajib dilampirkan.',
    'Bila tidak memiliki BPJS/KIS, sertakan surat pernyataan kesanggupan biaya kesehatan.',
    'Berkas dapat dikirimkan secara hardcopy (pos) atau softcopy (email/WhatsApp).',
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero Banner ─────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sttb-navy via-blue-900 to-sttb-navy py-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sttb-red/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
          >
            {'Admisi — Persyaratan'}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            {'Persyaratan Pendaftaran'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto"
          >
            {'Tinjau persyaratan untuk setiap program studi sebelum mengajukan pendaftaran Anda.'}
          </motion.p>
        </div>
      </div>

      {/* ── General Docs Strip ──────────────────────────── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {generalDocs.map((doc, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:border-sttb-navy/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-sttb-navy/10 rounded-lg flex items-center justify-center">
                  <doc.icon className="w-5 h-5 text-sttb-navy" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{doc.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{doc.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-3 items-center"
          >
            <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              {'Biaya Pendaftaran: Rp 500.000 (tidak dapat dikembalikan)'}
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {'Pengiriman Online & Hardcopy Tersedia'}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Program Cards (alternating) ─────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {programs.map((program, index) => {
          const isEven = index % 2 === 0;
          const ProgramIcon = program.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.05 * index }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-14 items-center`}
            >
              {/* ── Visual Panel ── */}
              <div className="w-full lg:w-5/12 flex-shrink-0">
                <div className={`relative rounded-2xl bg-gradient-to-br ${program.accentColor} p-10 shadow-xl overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-3 bg-white/15 border border-white/20 rounded-xl px-4 py-2 mb-8">
                      <ProgramIcon className="w-5 h-5 text-white/80" />
                      <span className="text-white font-bold tracking-wider text-sm">{program.degree}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                      {program.title}
                    </h2>
                    <p className="text-white/60 text-sm">Sekolah Tinggi Teologi Bandung</p>

                    <div className="mt-10 grid grid-cols-2 gap-3">
                      <div className="bg-white/10 border border-white/15 rounded-xl p-4">
                        <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">Persyaratan</p>
                        <p className="text-white text-3xl font-black">{program.requirements.length}</p>
                        <p className="text-white/60 text-xs mt-1">kriteria dipenuhi</p>
                      </div>
                      <div className="bg-white/10 border border-white/15 rounded-xl p-4">
                        <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">Jenjang</p>
                        <p className="text-white text-2xl font-black">
                          {program.degree.startsWith('M.') ? 'S2' : 'S1'}
                        </p>
                        <p className="text-white/60 text-xs mt-1">program akademik</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Requirements List Panel ── */}
              <div className="w-full lg:w-7/12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full ${program.highlightBar}`} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${program.tagText}`}>
                    Program {index + 1} dari {programs.length}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className={`text-sm font-semibold ${program.tagText} mb-8`}>Persyaratan Masuk</p>

                <ul className="space-y-3">
                  {program.requirements.map((req, reqIndex) => (
                    <motion.li
                      key={reqIndex}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: reqIndex * 0.06 }}
                      className="flex items-start gap-4 group"
                    >
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full ${program.badgeColor} text-white text-xs font-bold flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        {reqIndex + 1}
                      </span>
                      <div className="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm group-hover:border-gray-300 group-hover:shadow-md transition-all duration-200">
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">{req}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href="https://sis.sttb.ac.id/pmb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${program.badgeColor} text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 hover:shadow-lg transition-all duration-200`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Daftar ke Program Ini
                  </a>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Important Notes ─────────────────────────────── */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 rounded-full bg-sttb-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-sttb-red">Catatan Penting</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Harap dibaca sebelum mendaftar
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-5 rounded-xl border border-amber-100 bg-amber-50 hover:border-amber-300 hover:shadow-md transition-all duration-200"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sttb-red/10 border border-sttb-red/30 text-sttb-red text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}