import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { ChevronRight, FileText, Send, CreditCard, ClipboardCheck, CheckCircle } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';
import { Mail, Phone, Check } from 'lucide-react';

export default function ProcedurePage() {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Memperoleh Formulir Pendaftaran',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">Memperoleh Formulir Pendaftaran</h4>
          
          <div className="mb-6">
            <p className="mb-4 leading-relaxed text-gray-700">
              Melakukan pendaftaran awal ke sistem admisi online dengan mengakses alamat{' '}
              <a 
                href="https://sis.sttb.ac.id/pmb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sttb-red hover:underline font-semibold"
              >
                sis.sttb.ac.id/pmb
              </a>
              .
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h5 className="font-bold text-gray-900 mb-3">Persyaratan Pengisian Form Online:</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>Setelah mengisi data, maka formulir dapat diunduh di halaman situs berikutnya</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>Foto yang dilampirkan harus berbentuk format JPEG dan ukuran tidak lebih dari 400 KB</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>Jangan menggunakan tanda koma atau tanda baca apapun dalam teks yang diketik</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 mb-6">
            <h5 className="font-bold text-gray-900 mb-3">Cara Alternatif Memperoleh Formulir:</h5>
            <p className="text-gray-700 mb-3">
              Form pendaftaran juga dapat diminta dengan menghubungi:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 bg-white p-3 rounded-md">
                <Mail className="w-5 h-5 text-sttb-red flex-shrink-0" />
                <div>
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-900 ml-2">admisi@sttb.ac.id</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-md">
                <Phone className="w-5 h-5 text-sttb-red flex-shrink-0" />
                <div>
                  <span className="text-gray-600">WhatsApp:</span>
                  <span className="font-semibold text-gray-900 ml-2">0815 7336 0009</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h5 className="font-semibold text-gray-900 mb-3">Informasi Tambahan:</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Pengiriman form tidak dipungut biaya</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Form dapat diperoleh secara hardcopy melalui pos atau secara softcopy melalui WhatsApp/email sesuai permintaan pendaftar</span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      number: 2,
      icon: Send,
      title: 'Mengisi Form dan Mempersiapkan Berkas',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">Mengisi Form dan Mempersiapkan Berkas Lainnya</h4>
          
          <div className="mb-6">
            <h5 className="font-bold text-gray-900 mb-3">A. Mengisi 1 Set Formulir Pendaftaran:</h5>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Pendaftaran</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Kesaksian A (pertobatan pribadi)</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Kesaksian B (panggilan pelayanan)</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Data Kesehatan 1 & 2</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Data Keluarga</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Konfirmasi Dukungan Pembiayaan Studi</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Persetujuan 1 & 2</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Rekomendasi 1 (dari gembala/pembina rohani)</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Rekomendasi 2 (dari teman/rekan kerja)</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <span className="text-blue-700 font-medium">• Form Rekomendasi 3 (dari guru, dosen/atasan)</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-900 mb-3">B. Melampirkan Dokumen-Dokumen Tambahan:</h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Fotocopy Akte Kelahiran</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Fotocopy Kartu Tanda Penduduk (KTP)</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pasfoto terbaru berwarna ukuran 4 x 6</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Fotocopy Surat Kelulusan/Ijazah dan fotocopy Raport terakhir/transkrip yang dilegalisir</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Fotocopy surat baptis dan surat sidi</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Fotocopy Kartu BPJS atau Kartu Indonesia Sehat atau Asuransi Kesehatan</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Paper Akademik/Book review bagi pendaftar program studi S2</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-lg p-5 mb-6">
            <h5 className="font-bold text-gray-900 mb-3">C. Mengirimkan Berkas-Berkas Pendaftaran:</h5>
            <p className="text-gray-700 mb-3">
              Kirimkan berkas pendaftaran (sudah lengkap) sebelum periode pendaftaran berakhir ke alamat STT Bandung dan ditujukan kepada:
            </p>
            <div className="bg-white p-4 rounded-md">
              <p className="font-bold text-gray-900">Bagian Admisi - Kantor STT Bandung</p>
              <p className="text-gray-700">Jl. Dr. Djunjunan 105</p>
              <p className="text-gray-700">Kelurahan Cicendo, Kecamatan Andir</p>
              <p className="text-gray-700">Bandung, Jawa Barat 40173</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Catatan:</strong> Bagian Admisi STT Bandung akan menghubungi calon mahasiswa melalui email atau WhatsApp untuk mengkomunikasikan status dan kelengkapan pendaftaran calon mahasiswa maksimal 3 hari kerja setelah berkas diterima.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h5 className="font-semibold text-gray-900 mb-3">Catatan Penting:</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Bila ingin mengajukan permohonan beasiswa mohon hubungi petugas kami untuk memperoleh form pengajuan beasiswa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Form dapat diisi secara digital, tidak perlu dicetak (diprint). Tanda tangan tetap wajib dicantumkan secara digital</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Bila belum memiliki KTP harap cantumkan kartu pelajar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Bila ijazah belum terbit karena tanggal ujian belum berlangsung ketika Anda mendaftar, mohon sertakan surat keterangan dari sekolah Anda bahwa Anda adalah pelajar kelas 3 yang akan menempuh ujian akhir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>Berkas dapat dikirimkan secara hardcopy melalui pos atau secara softcopy melalui email: admisi@sttb.ac.id atau WhatsApp: 0815 7336 0009</span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Membayar Biaya Pendaftaran & Tes',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">Membayar Biaya Pendaftaran & Tes Masuk</h4>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl p-6 mb-6">
            <h5 className="font-bold text-gray-900 mb-4 text-lg">Detail Pembayaran</h5>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-1">Jumlah Pembayaran</p>
                <p className="text-3xl font-bold text-sttb-red">Rp 500.000,-</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-2">Transfer ke Rekening:</p>
                <div className="space-y-1">
                  <p className="font-bold text-gray-900">Bank BCA</p>
                  <p className="text-gray-700">Atas Nama: <span className="font-semibold">Yayasan STT Bandung</span></p>
                  <p className="text-gray-700">No. Rekening: <span className="font-semibold text-lg">282 300 5555</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-900 mb-3">Cara Konfirmasi Pembayaran:</h5>
            <p className="text-gray-700 mb-3">Setelah melakukan transfer, kirimkan bukti transfer melalui:</p>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Link Konfirmasi Online</p>
                  <a 
                    href="https://sttb.ac.id/konfirmasi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sttb-red hover:underline font-medium"
                  >
                    sttb.ac.id/konfirmasi
                  </a>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <p className="text-gray-700 font-medium">0815 7336 0009</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
            <h5 className="font-bold text-red-900 mb-2">Perhatian Penting!</h5>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Biaya pendaftaran tidak dapat dikembalikan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Berkas yang tidak disertai biaya pendaftaran tidak akan diproses untuk tes masuk</span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      number: 4,
      icon: ClipboardCheck,
      title: 'Mengikuti Tes Seleksi Penerimaan',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">Mengikuti Tes Seleksi Penerimaan</h4>
          
          <p className="mb-4 leading-relaxed">
            Berkas pendaftaran yang telah dikumpulkan akan diseleksi oleh Direktur Admisi STT Bandung. Setelah seleksi dokumen, surat panggilan tes dan instruksi detil mengenai pelaksanaan tes masuk akan dikirimkan via email dan pendaftar akan menerima notifikasi melalui WhatsApp.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <h5 className="font-bold text-gray-900 mb-3">Mengikuti 5 Tes Penerimaan Online:</h5>
            
            <div className="space-y-4">
              <div>
                <h6 className="font-semibold text-gray-900 mb-2">1. Psikotes (3 tahapan tes)</h6>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Pengisian Form</li>
                  <li>• Tes Bersama</li>
                  <li>• Wawancara dengan Psikolog</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  Psikotes bertujuan mengukur tingkat kecerdasan, sikap dan cara kerja, emosi, relasi sosial calon mahasiswa.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">2. Pengetahuan Teologi</h6>
                <p className="text-sm text-gray-600">
                  Tes Pengetahuan Teologi menguji pengetahuan calon mahasiswa mengenai tokoh-tokoh Alkitab, ayat-ayat penting dalam Alkitab, serta pemahaman iman Kristen calon mahasiswa.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">3. Bahasa Indonesia</h6>
                <p className="text-sm text-gray-600">
                  Tes Bahasa Indonesia menguji kemampuan calon mahasiswa dalam menyusun tata bahasa yang baik, memahami bacaan dan menuliskan ide-ide dalam bahasa Indonesia.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">4. Bahasa Inggris</h6>
                <p className="text-sm text-gray-600">
                  Tes Bahasa Inggris menguji kemampuan calon mahasiswa untuk memahami tata bahasa, bacaan dan menuliskan ide-ide dalam bahasa Inggris.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">5. Wawancara (dengan dosen STTB)</h6>
                <p className="text-sm text-gray-600">
                  Wawancara memiliki penilaian terbesar dalam tes masuk untuk menguji keseriusan panggilan dan rencana pelayanan mahasiswa di masa depan.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm">
              <strong>Catatan:</strong> Bila dokumen memenuhi persyaratan dan pembayaran telah dilunasi maka pendaftar akan menerima surat tes masuk. Pendaftar yang berkasnya tidak lolos seleksi dokumen pendaftaran tidak akan dipanggil untuk ikut tes.
            </p>
          </div>
        </>
      ),
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Pengumuman & Konfirmasi',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-3">Pengumuman Penerimaan & Konfirmasi MABA</h4>
          
          <div className="space-y-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sttb-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sttb-red font-bold">1</span>
              </div>
              <p className="leading-relaxed">
                Dalam kurun waktu 2-3 minggu setelah tanggal tes terakhir, pendaftar akan menerima pemberitahuan hasil penerimaan.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sttb-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sttb-red font-bold">2</span>
              </div>
              <p className="leading-relaxed">
                Calon mahasiswa yang diterima wajib mengisi dan mengembalikan formulir konfirmasi untuk menjadi mahasiswa yang dikirimkan oleh petugas admisi STTB.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sttb-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sttb-red font-bold">3</span>
              </div>
              <p className="leading-relaxed">
                Mahasiswa baru menyelesaikan pembayaran uang kuliah dan administrasi pertama lalu mengikuti proses orientasi.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h6 className="font-semibold text-gray-900 mb-2">📢 Informasi Pengumuman:</h6>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sttb-red">•</span>
                <span>Surat keputusan penerimaan akan dikirimkan melalui email dan notifikasi diberikan melalui WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sttb-red">•</span>
                <span>Form konfirmasi (menyatakan bersedia menjadi mahasiswa) dikirimkan kembali kepada pihak STTB melalui email</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-900">
              🎓 Mahasiswa resmi diterima dan selanjutnya proses studi mahasiswa akan ditangani oleh bagian kemahasiswaan & akademik.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              {language === 'id' ? 'Prosedur Penerimaan Mahasiswa' : 'Student Admission Procedure'}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'id'
                ? 'Ikuti 5 langkah mudah untuk menjadi mahasiswa STTB'
                : 'Follow 5 easy steps to become an STTB student'}
            </p>
          </motion.div>

          {/* Process Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-4 mb-12 overflow-x-auto pb-4"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex flex-col items-center ${activeStep === index ? 'scale-110' : ''} transition-transform`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-sttb-red to-red-600 text-white'
                      : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}>
                    {step.number}
                  </div>
                  <p className="text-xs mt-2 text-center max-w-[80px] font-medium text-gray-600">
                    {language === 'id' ? `Tahap ${step.number}` : `Step ${step.number}`}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Accordion Steps */}
          <div className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-sttb-red to-red-600'
                        : 'bg-gradient-to-br from-sttb-navy to-blue-900'
                    }`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 font-medium">
                        {language === 'id' ? 'TAHAP' : 'STEP'} {step.number}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeStep === index ? 'auto' : 0,
                    opacity: activeStep === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="prose max-w-none text-sm text-gray-700">
                      {step.content}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}