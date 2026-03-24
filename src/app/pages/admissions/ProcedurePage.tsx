import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, FileText, Send, CreditCard, ClipboardCheck, CheckCircle, Mail, Phone, Check } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';

export default function ProcedurePage() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Memperoleh Formulir Pendaftaran',
      color: 'sttb-navy',
      shortTitle: 'Formulir',
      content: (
        <div className="space-y-6">
          <p className="leading-relaxed text-gray-700 font-medium">
            Melakukan pendaftaran awal ke sistem admisi online dengan mengakses alamat{' '}
            <a
              href="https://sis.sttb.ac.id/pmb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sttb-red hover:text-red-700 font-bold transition-colors border-b border-sttb-red/30 hover:border-sttb-red"
            >
              sis.sttb.ac.id/pmb
            </a>
            .
          </p>

          <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
            <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
              Persyaratan Pengisian Form Online:
            </h5>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span>Setelah mengisi data, maka formulir dapat diunduh di halaman situs berikutnya</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span>Foto yang dilampirkan harus berbentuk format JPEG dan ukuran tidak lebih dari 400 KB</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span>Jangan menggunakan tanda koma atau tanda baca apapun dalam teks yang diketik</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-gray-400 rounded-full" />
              Cara Alternatif Memperoleh Formulir:
            </h5>
            <p className="text-gray-600 mb-4 text-sm font-medium">
              Form pendaftaran juga dapat diminta dengan menghubungi:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100/50 shadow-sm hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-sttb-red" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium mb-0.5">Email</span>
                  <span className="font-bold text-gray-900">admisi@sttb.ac.id</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100/50 shadow-sm hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sttb-red" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium mb-0.5">WhatsApp</span>
                  <span className="font-bold text-gray-900">0815 7336 0009</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-2">
            <h5 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Informasi Tambahan:</h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Pengiriman form tidak dipungut biaya</span>
              </li>
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Form dapat diperoleh secara hardcopy melalui pos atau secara softcopy melalui WhatsApp/email sesuai permintaan pendaftar</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      icon: Send,
      title: 'Mengisi Form dan Mempersiapkan Berkas',
      color: 'sttb-red',
      shortTitle: 'Berkas',
      content: (
        <div className="space-y-8">
          <div>
            <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-sttb-navy rounded-full" />
              A. Mengisi 1 Set Formulir Pendaftaran:
            </h5>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Form Pendaftaran',
                'Form Kesaksian A (pertobatan pribadi)',
                'Form Kesaksian B (panggilan pelayanan)',
                'Form Data Kesehatan 1 & 2',
                'Form Data Keluarga',
                'Form Konfirmasi Dukungan Pembiayaan Studi',
                'Form Persetujuan 1 & 2',
                'Form Rekomendasi 1 (dari gembala/pembina rohani)',
                'Form Rekomendasi 2 (dari teman/rekan kerja)',
                'Form Rekomendasi 3 (dari guru, dosen/atasan)'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:bg-blue-50/50 transition-colors">
                  <div className="w-1.5 h-1.5 bg-sttb-navy/50 rounded-full" />
                  <span className="font-medium text-sttb-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-sttb-red rounded-full" />
              B. Melampirkan Dokumen-Dokumen Tambahan:
            </h5>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
              <div className="space-y-4">
                {[
                  'Fotocopy Akte Kelahiran',
                  'Fotocopy Kartu Tanda Penduduk (KTP)',
                  'Pasfoto terbaru berwarna ukuran 4 x 6',
                  'Fotocopy Surat Kelulusan/Ijazah dan fotocopy Raport terakhir/transkrip yang dilegalisir',
                  'Fotocopy surat baptis dan surat sidi',
                  'Fotocopy Kartu BPJS atau Kartu Indonesia Sehat atau Asuransi Kesehatan',
                  'Paper Akademik/Book review bagi pendaftar program studi S2'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <div className="mt-0.5 bg-green-50 p-1 rounded-full text-green-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-amber-50/30 border border-amber-100 rounded-2xl p-6">
            <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-amber-500 rounded-full" />
              C. Mengirimkan Berkas-Berkas Pendaftaran:
            </h5>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Kirimkan berkas pendaftaran (sudah lengkap) sebelum periode pendaftaran berakhir ke alamat STT Bandung dan ditujukan kepada:
            </p>
            <div className="bg-white p-5 rounded-xl border border-amber-50 shadow-sm inline-block w-full max-w-sm">
              <p className="font-bold text-gray-900 mb-2">Bagian Admisi - Kantor STT Bandung</p>
              <div className="text-gray-600 text-sm leading-relaxed space-y-0.5">
                <p>Jl. Dr. Djunjunan 105</p>
                <p>Kelurahan Cicendo, Kecamatan Andir</p>
                <p>Bandung, Jawa Barat 40173</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4">
             <div className="w-1.5 h-full bg-blue-500 rounded-full" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-blue-900">Catatan Penting:</strong> Bagian Admisi STT Bandung akan menghubungi calon mahasiswa melalui email atau WhatsApp untuk mengkomunikasikan status dan kelengkapan pendaftaran calon mahasiswa maksimal 3 hari kerja setelah berkas diterima.
            </p>
          </div>

          <div className="pt-4">
            <h5 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Perhatian Lainnya:</h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Bila ingin mengajukan permohonan beasiswa mohon hubungi petugas kami untuk memperoleh form pengajuan beasiswa</span>
              </li>
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Form dapat diisi secara digital, tidak perlu dicetak (diprint). Tanda tangan tetap wajib dicantumkan secara digital</span>
              </li>
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Bila belum memiliki KTP harap cantumkan kartu pelajar</span>
              </li>
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Bila ijazah belum terbit karena tanggal ujian belum berlangsung ketika Anda mendaftar, mohon sertakan surat keterangan dari sekolah Anda bahwa Anda adalah pelajar kelas akhir yang akan menempuh ujian kelulusan</span>
              </li>
              <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-50">
                <span className="text-sttb-red mt-0.5 font-bold">→</span>
                <span>Berkas dapat dikirimkan secara hardcopy melalui pos atau secara softcopy melalui email: <span className="font-semibold px-1 text-sttb-navy">admisi@sttb.ac.id</span> atau WhatsApp: <span className="font-semibold px-1 text-sttb-navy">0815 7336 0009</span></span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Membayar Biaya Pendaftaran & Tes',
      color: 'sttb-navy',
      shortTitle: 'Pembayaran',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 border border-green-200 rounded-2xl p-6 lg:p-8">
            <h5 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
              <div className="w-1.5 h-4 bg-green-500 rounded-full" />
              Detail Pembayaran Rekening
            </h5>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex flex-col justify-center">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Jumlah Pembayaran</p>
                <p className="text-4xl lg:text-5xl font-extrabold text-sttb-red">Rp 500K</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-3">Tujuan Transfer</p>
                <div className="space-y-1">
                  <p className="font-bold text-gray-900 text-lg">Bank BCA</p>
                  <p className="text-gray-600 text-sm">Atas Nama: <span className="font-semibold text-gray-900">Yayasan STT Bandung</span></p>
                  <p className="font-mono text-2xl text-sttb-navy font-bold tracking-wider mt-2">282 300 5555</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
                Cara Konfirmasi Pembayaran:
              </h5>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Setelah melakukan transfer, instruksikan bukti transfer melalui salah satu jalur komunikasi berikut:
              </p>
              <div className="space-y-3">
                <a
                  href="https://sttb.ac.id/konfirmasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-50 hover:bg-sttb-navy hover:text-white group p-4 rounded-xl transition-all"
                >
                  <div className="w-10 h-10 bg-white group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-sttb-navy group-hover:text-white font-bold shadow-sm">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Link Konfirmasi Online</p>
                    <p className="text-xs opacity-70">sttb.ac.id/konfirmasi</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-gray-900 font-bold shadow-sm border border-gray-100">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">WhatsApp Info</p>
                    <p className="text-xs text-gray-500 font-medium">0815 7336 0009</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 h-full flex flex-col justify-center">
              <h5 className="font-bold text-red-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                Perhatian Penting
              </h5>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-lg border border-red-50 shadow-sm">
                  <span className="text-sttb-red mt-0.5 font-bold">•</span>
                  <span className="font-medium">Biaya pendaftaran tidak dapat dikembalikan</span>
                </li>
                <li className="flex items-start gap-3 bg-white px-4 py-3 rounded-lg border border-red-50 shadow-sm">
                  <span className="text-sttb-red mt-0.5 font-bold">•</span>
                  <span className="font-medium">Berkas yang tidak disertai biaya pendaftaran tidak akan diproses untuk tahap tes masuk selanjutnya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 4,
      icon: ClipboardCheck,
      title: 'Mengikuti Tes Seleksi Penerimaan',
      color: 'sttb-red',
      shortTitle: 'Tes Masuk',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed font-medium bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            Berkas pendaftaran yang telah dikumpulkan akan diseleksi oleh Direktur Admisi STT Bandung. Setelah seleksi dokumen, surat panggilan tes dan instruksi detil mengenai pelaksanaan tes masuk akan dikirimkan via email dan pendaftar akan menerima notifikasi melalui WhatsApp.
          </p>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mt-6">
            <div className="bg-gray-50 px-6 py-5 border-b border-gray-100 flex items-center gap-3">
              <div className="w-1.5 h-4 bg-sttb-navy rounded-full" />
              <h5 className="font-bold text-gray-900">Mengikuti 5 Rangkaian Tes Komprehensif:</h5>
            </div>
            
            <div className="divide-y divide-gray-100">
              <div className="px-6 py-5 hover:bg-gray-50/50 transition-colors flex gap-5">
                 <div className="w-8 h-8 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center font-bold flex-shrink-0">1</div>
                 <div>
                   <h6 className="font-bold text-gray-900 mb-2">Psikotes Lengkap</h6>
                   <ul className="space-y-1.5 text-sm text-gray-600 mb-3 bg-white border border-gray-100 p-3 rounded-lg inline-block w-full">
                     <li><span className="text-sttb-red mr-2">•</span>Pengisian Form</li>
                     <li><span className="text-sttb-red mr-2">•</span>Tes Bersama</li>
                     <li><span className="text-sttb-red mr-2">•</span>Wawancara dengan Psikolog</li>
                   </ul>
                   <p className="text-sm text-gray-500 leading-relaxed">
                     <strong className="text-gray-700">Tujuan:</strong> Mengukur tingkat kecerdasan, sikap dan cara kerja, emosi, relasi sosial calon mahasiswa.
                   </p>
                 </div>
              </div>

              <div className="px-6 py-5 hover:bg-gray-50/50 transition-colors flex gap-5">
                 <div className="w-8 h-8 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center font-bold flex-shrink-0">2</div>
                 <div>
                   <h6 className="font-bold text-gray-900 mb-2">Pengetahuan Teologi</h6>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Menguji pengetahuan calon mahasiswa mengenai tokoh-tokoh Alkitab, ayat-ayat penting dalam Alkitab, serta pemahaman iman Kristen.
                   </p>
                 </div>
              </div>

              <div className="px-6 py-5 hover:bg-gray-50/50 transition-colors flex gap-5">
                 <div className="w-8 h-8 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center font-bold flex-shrink-0">3</div>
                 <div>
                   <h6 className="font-bold text-gray-900 mb-2">Bahasa Indonesia</h6>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Menguji kemampuan dalam menyusun tata bahasa yang baik, memahami bacaan, dan menuliskan ide secara terstruktur.
                   </p>
                 </div>
              </div>

              <div className="px-6 py-5 hover:bg-gray-50/50 transition-colors flex gap-5">
                 <div className="w-8 h-8 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center font-bold flex-shrink-0">4</div>
                 <div>
                   <h6 className="font-bold text-gray-900 mb-2">Bahasa Inggris</h6>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Menguji kapabilitas dalam tata bahasa asing, pemahaman bacaan, dan penulisan literasi dasar bahasa Inggris.
                   </p>
                 </div>
              </div>

              <div className="px-6 py-5 hover:bg-gray-50/50 transition-colors flex gap-5">
                 <div className="w-8 h-8 rounded-full bg-blue-50 text-sttb-navy flex items-center justify-center font-bold flex-shrink-0">5</div>
                 <div>
                   <h6 className="font-bold text-gray-900 mb-2">Wawancara Akademik & Panggilan</h6>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Sesi tatap muka dengan Dosen STTB. Memiliki penilaian terbesar dalam tes masuk untuk menguji keseriusan panggilan dan rencana pelayanan mahasiswa di masa depan.
                   </p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4">
             <div className="w-1.5 h-full bg-amber-500 rounded-full" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-amber-900 font-bold">Catatan Panggilan Tes:</strong> Bila dokumen memenuhi persyaratan dan pembayaran telah dilunasi, pendaftar akan menerima surat tes masuk. Pendaftar yang berkasnya tidak lolos seleksi dokumen pendaftaran tidak akan dipanggil untuk ikut tes.
            </p>
          </div>
        </div>
      ),
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Pengumuman & Konfirmasi',
      color: 'sttb-navy',
      shortTitle: 'Pengumuman',
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50/80 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <span className="text-xl font-bold text-sttb-navy">1</span>
              </div>
              <h6 className="font-bold text-gray-900 text-sm mb-3">Tunggu Hasil Tes</h6>
              <p className="text-xs text-gray-500 leading-relaxed">Dalam kurun waktu 2-3 minggu setelah tanggal tes terakhir berakhir, pendaftar akan menerima hasil penerimaan LOA.</p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50/80 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                 <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h6 className="font-bold text-gray-900 text-sm mb-3">Form Konfirmasi</h6>
              <p className="text-xs text-gray-500 leading-relaxed">Calon MABA yang diterima wajib mengisi dan mengembalikan form kesediaan menjadi mahasiswa melalui konfirmasi Admisi.</p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50/80 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-100">
                 <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h6 className="font-bold text-gray-900 text-sm mb-3">Daftar Ulang</h6>
              <p className="text-xs text-gray-500 leading-relaxed">Meyelesaikan administrasi dan biaya kuliah awal agar dapat menerima undangan orientasi mahasiswa secara resmi.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8">
            <h6 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-sttb-red rounded-full" />
              Informasi Kelulusan Resmi
            </h6>
            <ul className="space-y-3 test-sm">
              <li className="flex items-start gap-4 text-sm bg-gray-50 p-4 rounded-xl">
                <span className="text-sttb-red font-bold flex-shrink-0">•</span>
                <span className="text-gray-700 font-medium">Surat keputusan penerimaan (Letter of Acceptance) akan dikirimkan secara eklusif melalui email pribadi serta notifikasinya akan diinfokan ke nomor WhatsApp.</span>
              </li>
              <li className="flex items-start gap-4 text-sm bg-gray-50 p-4 rounded-xl">
                <span className="text-sttb-red font-bold flex-shrink-0">•</span>
                <span className="text-gray-700 font-medium">Form Konfirmasi yang menyatakan persetujuan mutlak menjadi mahasiswa dicetak (signed) lalu dikirimkan kembali kepada STTB via Email Admisi.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-blue-50/50 border-l-4 border-sttb-navy rounded-r-2xl p-6">
            <p className="text-sm font-semibold text-sttb-navy italic leading-relaxed text-center">
              "Mahasiswa yang resmi diterima selanjutnya akan diserahterimakan dari badan pendaftaran, dan seluruh proses studi maupun akademiknya akan dibina langsung oleh <span className="font-bold underline">Bagian Kemahasiswaan & Akademik</span> STT Bandung."
            </p>
          </div>
        </div>
      ),
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
            Admisi — Prosedur
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Prosedur Pendaftaran
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto"
          >
            Sistem admisi yang terstruktur dan mudah diikuti. Simak 5 tahapan esensial untuk menjadi bagian dari komunitas pembelajar Sekolah Tinggi Teologi Bandung.
          </motion.p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Process Horizontal Steps Index */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-2 md:gap-4 mb-16 overflow-x-auto pb-6 pt-4 px-4 scrollbar-hide"
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div key={index} className="flex items-center flex-shrink-0">
                  <button
                    onClick={() => setActiveStep(isActive ? null : index)}
                    className="flex flex-col items-center group focus:outline-none relative"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-lg transition-all duration-300 relative z-10 ${
                      isActive
                        ? 'bg-gradient-to-br from-sttb-red to-red-600 text-white scale-110 shadow-red-200'
                        : 'bg-white text-gray-400 border-2 border-gray-200 hover:border-sttb-red hover:text-sttb-red hover:shadow-md'
                    }`}>
                      {step.number}
                    </div>
                    {isActive && (
                       <div className="absolute top-0 w-16 h-16 bg-sttb-red/20 blur-xl rounded-full scale-150 -z-10" />
                    )}
                    <p className={`text-xs mt-3 text-center max-w-[80px] font-bold tracking-wide transition-colors ${
                      isActive ? 'text-sttb-red' : 'text-gray-500 group-hover:text-gray-900'
                    }`}>
                      {step.shortTitle}
                    </p>
                  </button>
                  {index < steps.length - 1 && (
                    <div className="w-8 md:w-16 h-px bg-gray-300 mx-1 md:mx-3 -mt-6" />
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Accordion List */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-[2rem] overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] ring-1 ring-gray-900/5 my-8 scale-[1.02] transform border-0' 
                      : 'shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setActiveStep(isActive ? null : index)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group relative overflow-hidden"
                  >
                    {isActive && (
                      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 transition-colors duration-500 ${step.color === 'sttb-red' ? 'bg-sttb-red' : 'bg-sttb-navy'}`} />
                    )}
                    
                    <div className="flex items-center gap-5 md:gap-6 relative z-10 w-full pr-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                        isActive || step.color === 'sttb-red'
                          ? 'bg-gradient-to-br from-sttb-red to-red-600 text-white'
                          : 'bg-gradient-to-br from-sttb-navy to-blue-900 text-white'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-1.5 ${isActive ? 'text-sttb-red' : 'text-gray-400 group-hover:text-gray-500'}`}>
                          Tahap {step.number}
                        </p>
                        <h3 className={`text-lg md:text-2xl font-bold transition-colors leading-tight ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          {titleCase(step.title)}
                        </h3>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`relative z-10 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${isActive ? 'bg-sttb-red/10 text-sttb-red' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden bg-gray-50/30"
                  >
                    <div className="p-6 md:p-10 border-t border-gray-100">
                      {step.content}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}

// Helper specific for the title since their original strings are capitalized mixed
function titleCase(str: string) {
  return str.split(' ').map(function(word) {
    if (word.length <= 2 && word.toLowerCase() !== 'di') return word; // skip small strings
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}