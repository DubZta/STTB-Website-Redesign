import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';

export default function FAQPage() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = t('lang') === 'id' ? [
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
      category: 'Dokumen',
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
      category: 'Tes Masuk',
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
      category: 'Program Studi',
      questions: [
        {
          q: 'Program studi apa saja yang tersedia?',
          a: 'STTB menawarkan 3 program: (1) Sarjana Teologi (S.Th.) - 4 tahun, (2) Sarjana Pendidikan Magister (S.Pd.M.) - 4 tahun, dan (3) Magister Pendidikan Kristen (M.Pd.K.) - 2 tahun.',
        },
        {
          q: 'Apa perbedaan S.Th. dan S.Pd.M.?',
          a: 'S.Th. fokus pada teologi sistematik, biblika, dan pelayanan pastoral untuk mempersiapkan hamba Tuhan. S.Pd.M. fokus pada pendidikan Kristen dan pengajaran untuk mempersiapkan pendidik Kristen.',
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
  ] : [
    {
      category: 'Registration',
      questions: [
        {
          q: 'When is new student registration open?',
          a: 'New student registration opens in 3 waves annually: Wave 1 (January-February), Wave 2 (March-April), and Wave 3 (May-June). Classes begin in August.',
        },
        {
          q: 'How do I register?',
          a: 'Registration is done online through STTB admission system at https://sis.sttb.ac.id/pmb. You can also request forms via email admisi@sttb.ac.id or WhatsApp 0815 7336 0009.',
        },
        {
          q: 'What is the registration fee?',
          a: 'Registration fee is Rp 500,000 transferred to BCA account a.n. Yayasan STT Bandung (282 300 5555). This fee is non-refundable and must be paid before entrance test.',
        },
        {
          q: 'Can I register before graduating high school?',
          a: 'Yes, you can. However, you must provide a certificate from school stating you are a final year student taking graduation exams. Original diploma must be submitted after issuance.',
        },
      ],
    },
    {
      category: 'Documents',
      questions: [
        {
          q: 'What documents are required?',
          a: 'Required documents include: photocopy of ID card, legalized diploma, 4x6 photo, baptism and confirmation certificates, photocopy of BPJS/health insurance, registration forms, testimonies A & B, health data, family data, and 3 recommendation letters.',
        },
        {
          q: 'Can documents be sent digitally?',
          a: 'Yes, documents can be sent as softcopy via email (admisi@sttb.ac.id) or WhatsApp (0815 7336 0009). Documents can be photographed or scanned clearly. Original documents will be requested during re-registration.',
        },
        {
          q: 'What if I don\'t have BPJS?',
          a: 'If you don\'t have BPJS or health insurance, you must provide a statement from parent/self declaring capability to bear health costs during studies.',
        },
        {
          q: 'How long is document verification?',
          a: 'Admissions will contact you via email or WhatsApp within 3 business days after documents are received to communicate status and completeness of application.',
        },
      ],
    },
    {
      category: 'Entrance Test',
      questions: [
        {
          q: 'What entrance tests must be taken?',
          a: 'There are 5 tests: (1) Psychological test (3 stages), (2) Theological Knowledge Test, (3) Indonesian Language Test, (4) English Language Test, and (5) Interview with STTB lecturers.',
        },
        {
          q: 'Are tests conducted online or offline?',
          a: 'Tests are conducted online through platform that will be informed via test invitation letter. Interviews can be done online or in-person depending on situation and location.',
        },
        {
          q: 'How long is the entrance test?',
          a: 'Entrance test is usually conducted over 2-3 days. Detailed schedule and timing for each test will be sent via test invitation letter after document verification.',
        },
        {
          q: 'How to prepare for entrance test?',
          a: 'For theology test, study biblical figures and important verses. For language, practice reading and writing in Indonesian and English. For interview, prepare your testimony and ministry vision.',
        },
      ],
    },
    {
      category: 'Study Programs',
      questions: [
        {
          q: 'What study programs are available?',
          a: 'STTB offers 3 programs: (1) Bachelor of Theology (S.Th.) - 4 years, (2) Bachelor of Christian Education (S.Pd.M.) - 4 years, and (3) Master of Christian Education (M.Pd.K.) - 2 years.',
        },
        {
          q: 'What is the difference between S.Th. and S.Pd.M.?',
          a: 'S.Th. focuses on systematic theology, biblical studies, and pastoral ministry to prepare servants of God. S.Pd.M. focuses on Christian education and teaching to prepare Christian educators.',
        },
        {
          q: 'Are there scholarship programs?',
          a: 'Yes, STTB provides various scholarship programs. For complete information and scholarship application forms, contact admissions staff via email admisi@sttb.ac.id or WhatsApp 0815 7336 0009.',
        },
        {
          q: 'What is the tuition fee per semester?',
          a: 'Tuition fee information can be viewed on Finance page or by contacting finance department. Fees can be paid per semester or with installment scheme according to applicable policy.',
        },
      ],
    },
    {
      category: 'Others',
      questions: [
        {
          q: 'Does STTB provide dormitory?',
          a: 'Yes, STTB provides dormitory for students with adequate facilities. Complete dormitory information can be viewed on Campus Life page or contact student affairs department.',
        },
        {
          q: 'What if I am a transfer student?',
          a: 'Transfer students from other theological schools can register by attaching transfer/exit letter from previous institution and latest academic transcript. Credit transfer process will be evaluated by academic department.',
        },
        {
          q: 'When is entrance test result announcement?',
          a: 'Entrance test result announcement will be delivered within 2-3 weeks after last test date. Decision letter will be sent via email and notification via WhatsApp.',
        },
        {
          q: 'Who can I contact for further questions?',
          a: 'You can contact STTB Admissions via email admisi@sttb.ac.id, WhatsApp 0815 7336 0009, or phone (022) 6072978. We are happy to assist you.',
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
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sttb-red to-red-600 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              {t('lang') === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-600">
              {t('lang') === 'id'
                ? 'Temukan jawaban untuk pertanyaan umum seputar admisi'
                : 'Find answers to common questions about admissions'}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('lang') === 'id' ? 'Cari pertanyaan...' : 'Search questions...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-sttb-red focus:outline-none transition-colors"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFaqs.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-sttb-red to-red-600 rounded-full" />
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    return (
                      <motion.div
                        key={qIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: qIndex * 0.05 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <button
                          onClick={() => setActiveIndex(activeIndex === globalIndex ? null : globalIndex)}
                          className="w-full p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors text-left"
                        >
                          <h3 className="font-bold text-gray-900 text-lg flex-1">{item.q}</h3>
                          <motion.div
                            animate={{ rotate: activeIndex === globalIndex ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                          </motion.div>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: activeIndex === globalIndex ? 'auto' : 0,
                            opacity: activeIndex === globalIndex ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                            {item.a}
                          </div>
                        </motion.div>
                      </motion.div>
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
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                {t('lang') === 'id' 
                  ? 'Tidak ada hasil yang ditemukan. Coba kata kunci lain.'
                  : 'No results found. Try different keywords.'}
              </p>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-br from-sttb-navy to-blue-900 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              {t('lang') === 'id' ? 'Masih Ada Pertanyaan?' : 'Still Have Questions?'}
            </h3>
            <p className="text-blue-100 mb-6">
              {t('lang') === 'id'
                ? 'Tim admisi kami siap membantu Anda. Jangan ragu untuk menghubungi kami!'
                : 'Our admissions team is ready to help you. Don\'t hesitate to contact us!'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:admisi@sttb.ac.id"
                className="px-6 py-3 bg-white text-sttb-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📧 admisi@sttb.ac.id
              </a>
              <a
                href="https://wa.me/6281573360009"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                📱 0815 7336 0009
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}