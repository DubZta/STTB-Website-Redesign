import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ExternalLink, Mail, Phone, ArrowDown } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function SchedulePage() {
  const schedules = [
    {
      title: 'Gelombang 1',
      period: 'Januari - Februari 2026',
      registration: '1 Januari - 15 Februari 2026',
      test: '20 - 22 Februari 2026',
      announcement: '1 Maret 2026',
    },
    {
      title: 'Gelombang 2',
      period: 'Maret - April 2026',
      registration: '1 Maret - 15 April 2026',
      test: '20 - 22 April 2026',
      announcement: '1 Mei 2026',
    },
    {
      title: 'Gelombang 3',
      period: 'Mei - Juni 2026',
      registration: '1 Mei - 15 Juni 2026',
      test: '20 - 22 Juni 2026',
      announcement: '1 Juli 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* ── Hero Banner ─────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sttb-navy via-blue-900 to-sttb-navy py-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sttb-red/10 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            Admisi — Jadwal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Jadwal Admisi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-sttb-red">
              Mahasiswa Baru
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto mb-10"
          >
            Tahun Akademik 2026/2027. Perhatikan batas waktu pendaftaran, tanggal tes, dan pengumuman untuk memastikan proses admisi Anda berjalan lancar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
            className="flex justify-center"
          >
            <ArrowDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Schedule Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 relative z-10 -mt-32">
            {schedules.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-sttb-navy to-blue-900 p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sttb-red to-red-400" />
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors" />
                  
                  <h3 className="text-2xl font-black mb-2 text-white uppercase tracking-wider relative z-10">{schedule.title}</h3>
                  <div className="inline-block bg-black/20 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full relative z-10">
                    {schedule.period}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-6 relative">
                    {/* Decorative Line */}
                    <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-100 -z-10" />

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-100 group-hover:bg-sttb-red transition-colors">
                        <Calendar className="w-5 h-5 text-sttb-red group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Pendaftaran</p>
                        <p className="text-sm text-gray-600 font-medium">{schedule.registration}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:bg-sttb-navy transition-colors">
                        <Clock className="w-5 h-5 text-sttb-navy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Tes Masuk</p>
                        <p className="text-sm text-gray-600 font-medium">{schedule.test}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-100 group-hover:bg-green-600 transition-colors">
                        <MapPin className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Pengumuman</p>
                        <p className="text-sm text-gray-600 font-medium">{schedule.announcement}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Important Information Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 mb-20 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-sttb-red" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <span className="text-sttb-red text-xs font-bold uppercase tracking-widest mb-2 block">Perhatian</span>
                <h3 className="text-2xl font-bold text-gray-900">Informasi Penting</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">Persiapkan diri Anda dan catat hal-hal esensial ini sebelum memulai proses admisi.</p>
              </div>
              
              <div className="md:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700 font-medium">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <span>Pendaftaran dilakukan secara penuh melalui sistem admisi online STTB.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <span>Biaya pendaftaran <strong className="text-gray-900">Rp 500.000,-</strong> (tidak dapat ditarik kembali).</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <span>Tes masuk (psikotes & akademik) dilaksanakan secara online sepenuhnya.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                    <span>Hasil kelulusan akan diumumkan melalui Email resmi dan WhatsApp.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Poster Section (Premium Card Design) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-sttb-navy rounded-3xl shadow-2xl overflow-hidden mb-12 relative"
          >
            {/* Elegant Background Accents */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent" />
            
            <div className="grid lg:grid-cols-2 gap-0 relative z-10">
              {/* Left Content */}
              <div className="p-10 md:p-16 flex flex-col justify-center text-white">
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3 block">
                  Penerimaan Mahasiswa Baru
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  Mulai Panggilan Pelayanan Anda di TA 2026/2027
                </h3>
                
                <p className="text-blue-100 text-lg mb-10 leading-relaxed font-light">
                  Jangan lewatkan kesempatan untuk bergabung dengan komunitas pembelajar. Segera daftarkan diri Anda sebelum kuota gelombang penuh.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-sttb-red" />
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-0.5">Email Admisi</p>
                      <p className="font-semibold text-white">admisi@sttb.ac.id</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-sttb-red" />
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-0.5">WhatsApp Info</p>
                      <p className="font-semibold text-white">0815 7336 0009</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://sis.sttb.ac.id/pmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-sttb-red hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    Daftar Online Sekarang
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </a>
              </div>

              {/* Right Poster View */}
              <div className="lg:h-full bg-blue-900/50 relative overflow-hidden p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sttb-navy/80 hidden lg:block z-10" />
                <motion.div 
                  initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-20 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 max-h-[600px] w-full max-w-md mx-auto"
                >
                  <ImageWithFallback
                    src="https://sttb.ac.id/storage/2022/04/Poster-Admisi-STTB-TA-2026-2027-2.png"
                    alt="STTB Admission Poster 2026-2027"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}