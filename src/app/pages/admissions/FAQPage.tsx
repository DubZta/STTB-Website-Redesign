import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Pendaftaran',
      questions: [
        {
          q: 'Kapan pendaftaran mahasiswa baru dibuka?',
          a: 'Pendaftaran mahasiswa baru dibuka dalam 3 gelombang setiap tahun: Gelombang 1 (Januari-Februari), Gelombang 2 (Maret-April), dan Gelombang 3 (Mei-Juni). Perkuliahan dimulai pada bulan Agustus.',
        },
        {
          q: 'Bagaimana cara mendaftar?',
          a: 'Pendaftaran dilakukan secara online melalui sistem admisi STTB di https://sis.sttb.ac.id/pmb. Anda juga dapat meminta formulir melalui email admisi@sttb.ac.id atau WhatsApp 0815 7336 0009.',
        },
        {
          q: 'Berapa biaya pendaftaran?',
          a: 'Biaya pendaftaran sebesar Rp 500.000,- yang ditransfer ke rekening BCA a.n. Yayasan STT Bandung (282 300 5555). Biaya ini tidak dapat dikembalikan dan wajib dibayarkan sebelum mengikuti tes masuk.',
        },
        {
          q: 'Apakah bisa mendaftar jika belum lulus SMA?',
          a: 'Ya, bisa. Namun Anda harus menyertakan surat keterangan dari sekolah bahwa Anda adalah pelajar kelas akhir yang akan mengikuti ujian kelulusan. Ijazah asli harus diserahkan setelah diterbitkan.',
        },
      ],
    },
    {
      category: 'Dokumen & Berkas',
      questions: [
        {
          q: 'Dokumen apa saja yang diperlukan?',
          a: 'Dokumen yang diperlukan meliputi: fotocopy KTP, ijazah yang dilegalisir, pas foto 4x6, surat baptis dan sidi, fotocopy BPJS/asuransi kesehatan, formulir pendaftaran, kesaksian A & B, data kesehatan, data keluarga, dan 3 surat rekomendasi.',
        },
        {
          q: 'Apakah dokumen bisa dikirim secara digital?',
          a: 'Ya, dokumen dapat dikirim secara softcopy melalui email (admisi@sttb.ac.id) atau WhatsApp (0815 7336 0009). Dokumen dapat difoto atau discan dengan jelas. Dokumen asli akan diminta saat registrasi ulang.',
        },
        {
          q: 'Bagaimana jika belum memiliki BPJS?',
          a: 'Jika belum memiliki BPJS atau asuransi kesehatan, Anda harus menyertakan surat pernyataan dari orang tua/pribadi bahwa Anda sanggup menanggung biaya kesehatan atau pengobatan selama studi.',
        },
        {
          q: 'Berapa lama proses verifikasi dokumen?',
          a: 'Bagian Admisi akan menghubungi Anda melalui email atau WhatsApp maksimal 3 hari kerja setelah berkas diterima untuk mengkomunikasikan status dan kelengkapan dokumen pendaftaran.',
        },
      ],
    },
    {
      category: 'Rangkaian Tes Masuk',
      questions: [
        {
          q: 'Tes masuk apa saja yang harus diikuti?',
          a: 'Ada 5 tes yang harus diikuti: (1) Psikotes (3 tahap), (2) Tes Pengetahuan Teologi, (3) Tes Bahasa Indonesia, (4) Tes Bahasa Inggris, dan (5) Wawancara dengan dosen STTB.',
        },
        {
          q: 'Apakah tes dilakukan secara online atau offline?',
          a: 'Tes dilakukan secara online melalui platform yang akan diinformasikan melalui surat panggilan tes. Wawancara dapat dilakukan secara daring (online) atau tatap muka sesuai situasi dan lokasi peserta.',
        },
        {
          q: 'Berapa lama waktu tes masuk?',
          a: 'Tes masuk biasanya dilaksanakan selama 2-3 hari. Jadwal detail dan waktu setiap tes akan dikirimkan melalui surat panggilan tes setelah dokumen Anda lolos verifikasi.',
        },
        {
          q: 'Bagaimana persiapan menghadapi tes masuk?',
          a: 'Untuk tes teologi, pelajari tokoh-tokoh Alkitab dan ayat-ayat penting. Untuk bahasa, latihan membaca dan menulis dalam bahasa Indonesia dan Inggris. Untuk wawancara, persiapkan kesaksian dan visi pelayanan Anda.',
        },
      ],
    },
    {
      category: 'Program Studi Akademik',
      questions: [
        {
          q: 'Program studi apa saja yang tersedia?',
          a: 'STTB menawarkan 3 program: (1) Sarjana Teologi (S.Th.) - 4 tahun, (2) Sarjana Pendidikan Kristen (S.Pd.K.) - 4 tahun, dan (3) Magister Pendidikan Kristen (M.Pd.K.) - 2 tahun.',
        },
        {
          q: 'Apa perbedaan S.Th. dan S.Pd.K.?',
          a: 'S.Th. fokus pada teologi sistematik, biblika, dan pelayanan pastoral untuk mempersiapkan hamba Tuhan. S.Pd.K. fokus pada pendidikan Kristen dan pengajaran untuk mempersiapkan pendidik Kristen.',
        },
        {
          q: 'Apakah ada program beasiswa?',
          a: 'Ya, STTB menyediakan berbagai program beasiswa. Untuk informasi lengkap dan formulir pengajuan beasiswa, hubungi petugas admisi melalui email admisi@sttb.ac.id atau WhatsApp 0815 7336 0009.',
        },
        {
          q: 'Berapa biaya kuliah per semester?',
          a: 'Informasi biaya kuliah dapat dilihat di halaman Finance atau dengan menghubungi bagian keuangan. Biaya dapat dibayar per semester atau dengan skema cicilan sesuai kebijakan yang berlaku.',
        },
      ],
    },
    {
      category: 'Lain-lain',
      questions: [
        {
          q: 'Apakah STTB menyediakan asrama?',
          a: 'Ya, STTB menyediakan asrama untuk mahasiswa dengan fasilitas yang memadai. Informasi lengkap tentang asrama dapat dilihat di halaman Campus Life atau hubungi bagian kemahasiswaan.',
        },
        {
          q: 'Bagaimana jika saya mahasiswa pindahan?',
          a: 'Mahasiswa pindahan dari STT lain dapat mendaftar dengan melampirkan surat pindah/keluar dari institusi sebelumnya dan transkrip akademik terakhir. Proses transfer kredit akan dievaluasi oleh bagian akademik.',
        },
        {
          q: 'Kapan pengumuman hasil tes masuk?',
          a: 'Pengumuman hasil tes masuk akan disampaikan dalam waktu 2-3 minggu setelah tanggal tes terakhir. Surat keputusan akan dikirim via email dan notifikasi via WhatsApp.',
        },
        {
          q: 'Siapa yang bisa saya hubungi untuk pertanyaan lebih lanjut?',
          a: 'Anda dapat menghubungi Bagian Admisi STTB melalui email admisi@sttb.ac.id, WhatsApp 0815 7336 0009, atau telepon (022) 6072978. Kami siap membantu Anda dengan senang hati.',
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

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
            Admisi — Bantuan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Pertanyaan Umum & FAQ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto mb-10"
          >
            Temukan jawaban komprehensif atas pertanyaan seputar syarat, tes, fasilitas, hingga dokumen yang diwajibkan dalam proses admisi STTB.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mx-auto relative group"
          >
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-sttb-navy group-focus-within:text-sttb-red transition-colors" />
             </div>
             <input
               type="text"
               placeholder="Cari topik (misal: beasiswa, dokumen, tes...)"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-12 pr-4 py-4 rounded-full bg-white border-2 border-white/20 focus:border-white focus:outline-none focus:ring-4 focus:ring-white/20 shadow-2xl transition-all text-gray-900 placeholder:text-gray-400 font-medium"
             />
          </motion.div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* FAQ Categories */}
          <div className="space-y-12">
            {filteredFaqs.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center font-black text-gray-400">
                    <span className="text-xl">0{catIndex + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                      {category.category}
                    </h2>
                    <p className="text-sm text-sttb-red font-medium">Topik Terkait</p>
                  </div>
                </div>

                <div className="space-y-4 shadow-sm rounded-3xl bg-white border border-gray-100 p-2">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    const isActive = activeIndex === globalIndex;
                    return (
                      <div
                        key={qIndex}
                        className={`overflow-hidden rounded-2xl transition-colors duration-300 ${isActive ? 'bg-gray-50' : 'bg-white hover:bg-gray-50/50'}`}
                      >
                        <button
                          onClick={() => setActiveIndex(isActive ? null : globalIndex)}
                          className="w-full p-5 lg:p-6 flex items-start justify-between gap-6 text-left"
                        >
                          <h3 className={`font-medium transition-colors duration-300 text-base lg:text-lg ${isActive ? 'text-sttb-red' : 'text-gray-900'}`}>
                            {item.q}
                          </h3>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-sttb-red/10 text-sttb-red' : 'bg-transparent text-gray-400'}`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-gray-500 leading-relaxed font-light max-w-4xl">
                            {item.a}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pencarian Tidak Ditemukan</h3>
              <p className="text-gray-500">
                Kami tidak menemukan pertanyaan yang relevan dengan "{searchTerm}". Coba gunakan kata kunci umum lainnya.
              </p>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-sttb-navy to-blue-900 rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-sttb-red rounded-full blur-3xl opacity-20" />
            
            <div className="relative z-10 space-y-3 mb-8">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Masih Membutuhkan Bantuan?
              </h3>
              <p className="text-blue-100 font-medium max-w-lg mx-auto">
                Tim admisi STTB Siap memandu Anda langkah demi langkah dalam proses pendaftaran mahasiswa baru.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:admisi@sttb.ac.id"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-sttb-navy rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
              >
                <span>📧</span>
                admisi@sttb.ac.id
              </a>
              <a
                href="https://wa.me/6281573360009"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-sttb-red hover:bg-red-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
              >
                <span>📱</span>
                0815 7336 0009
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}