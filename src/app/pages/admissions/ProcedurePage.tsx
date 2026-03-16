import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { ChevronRight, FileText, Send, CreditCard, ClipboardCheck, CheckCircle } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';
import { Mail, Phone, Check } from 'lucide-react';

export default function ProcedurePage() {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: language === 'id' ? 'Memperoleh Formulir Pendaftaran' : 'Obtain Registration Form',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">
            {language === 'id' ? 'Memperoleh Formulir Pendaftaran' : 'Obtaining the Registration Form'}
          </h4>

          <div className="mb-6">
            <p className="mb-4 leading-relaxed text-gray-700">
              {language === 'id' 
                ? 'Melakukan pendaftaran awal ke sistem admisi online dengan mengakses alamat' 
                : 'Perform initial registration to the online admission system by accessing'}
              {' '}
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
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'Persyaratan Pengisian Form Online:' : 'Requirements for Online Form Completion:'}
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>
                  {language === 'id' 
                    ? 'Setelah mengisi data, maka formulir dapat diunduh di halaman situs berikutnya' 
                    : 'After filling in the data, the form can be downloaded on the next page'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>
                  {language === 'id' 
                    ? 'Foto yang dilampirkan harus berbentuk format JPEG dan ukuran tidak lebih dari 400 KB' 
                    : 'Attached photos must be in JPEG format and not exceed 400 KB'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>
                  {language === 'id' 
                    ? 'Jangan menggunakan tanda koma atau tanda baca apapun dalam teks yang diketik' 
                    : 'Do not use commas or any punctuation marks in the typed text'}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 mb-6">
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'Cara Alternatif Memperoleh Formulir:' : 'Alternative Ways to Obtain the Form:'}
            </h5>
            <p className="text-gray-700 mb-3">
              {language === 'id' ? 'Form pendaftaran juga dapat diminta dengan menghubungi:' : 'The registration form can also be requested by contacting:'}
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
            <h5 className="font-semibold text-gray-900 mb-3">
              {language === 'id' ? 'Informasi Tambahan:' : 'Additional Information:'}
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>
                  {language === 'id' ? 'Pengiriman form tidak dipungut biaya' : 'Form submission is free of charge'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">→</span>
                <span>
                  {language === 'id' 
                    ? 'Form dapat diperoleh secara hardcopy melalui pos atau secara softcopy melalui WhatsApp/email sesuai permintaan pendaftar' 
                    : 'Forms can be obtained in hardcopy via post or in softcopy via WhatsApp/email as requested'}
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      number: 2,
      icon: Send,
      title: language === 'id' ? 'Mengisi Form dan Mempersiapkan Berkas' : 'Fill Form and Prepare Documents',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">
            {language === 'id' ? 'Mengisi Form dan Mempersiapkan Berkas Lainnya' : 'Filling the Form and Preparing Other Documents'}
          </h4>

          <div className="mb-6">
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'A. Mengisi 1 Set Formulir Pendaftaran:' : 'A. Filling out 1 Set of Registration Forms:'}
            </h5>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { id: 'Form Pendaftaran', en: 'Registration Form' },
                { id: 'Form Kesaksian A (pertobatan pribadi)', en: 'Testimony Form A (personal conversion)' },
                { id: 'Form Kesaksian B (panggilan pelayanan)', en: 'Testimony Form B (service calling)' },
                { id: 'Form Data Kesehatan 1 & 2', en: 'Health Data Form 1 & 2' },
                { id: 'Form Data Keluarga', en: 'Family Data Form' },
                { id: 'Form Konfirmasi Dukungan Pembiayaan Studi', en: 'Study Funding Support Confirmation Form' },
                { id: 'Form Persetujuan 1 & 2', en: 'Agreement Form 1 & 2' },
                { id: 'Form Rekomendasi 1 (dari gembala/pembina rohani)', en: 'Recommendation Form 1 (from pastor/spiritual mentor)' },
                { id: 'Form Rekomendasi 2 (dari teman/rekan kerja)', en: 'Recommendation Form 2 (from friend/colleague)' },
                { id: 'Form Rekomendasi 3 (dari guru, dosen/atasan)', en: 'Recommendation Form 3 (from teacher, lecturer/supervisor)' },
              ].map((form, i) => (
                <div key={i} className="bg-blue-50 p-3 rounded-lg text-sm">
                  <span className="text-blue-700 font-medium">• {language === 'id' ? form.id : form.en}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'B. Melampirkan Dokumen-Dokumen Tambahan:' : 'B. Attaching Additional Documents:'}
            </h5>
            <div className="space-y-2">
              {[
                { id: 'Fotocopy Akte Kelahiran', en: 'Photocopy of Birth Certificate' },
                { id: 'Fotocopy Kartu Tanda Penduduk (KTP)', en: 'Photocopy of Identity Card (KTP)' },
                { id: 'Pasfoto terbaru berwarna ukuran 4 x 6', en: 'Latest color passport photo size 4 x 6' },
                { id: 'Fotocopy Surat Kelulusan/Ijazah dan fotocopy Raport terakhir/transkrip yang dilegalisir', en: 'Photocopy of Graduation Certificate/Diploma and legalized latest report card/transcript' },
                { id: 'Fotocopy surat baptis dan surat sidi', en: 'Photocopy of baptism and confirmation (sidi) certificates' },
                { id: 'Fotocopy Kartu BPJS atau Kartu Indonesia Sehat atau Asuransi Kesehatan', en: 'Photocopy of BPJS/Health Insurance Card' },
                { id: 'Paper Akademik/Book review bagi pendaftar program studi S2', en: 'Academic Paper/Book review for Master (S2) program applicants' },
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{language === 'id' ? doc.id : doc.en}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-lg p-5 mb-6">
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'C. Mengirimkan Berkas-Berkas Pendaftaran:' : 'C. Submitting Registration Documents:'}
            </h5>
            <p className="text-gray-700 mb-3">
              {language === 'id' 
                ? 'Kirimkan berkas pendaftaran (sudah lengkap) sebelum periode pendaftaran berakhir ke alamat STT Bandung dan ditujukan kepada:' 
                : 'Send the complete registration documents before the deadline to the STT Bandung address, addressed to:'}
            </p>
            <div className="bg-white p-4 rounded-md">
              <p className="font-bold text-gray-900">
                {language === 'id' ? 'Bagian Admisi - Kantor STT Bandung' : 'Admission Department - STT Bandung Office'}
              </p>
              <p className="text-gray-700">Jl. Dr. Djunjunan 105</p>
              <p className="text-gray-700">
                {language === 'id' ? 'Kelurahan Cicendo, Kecamatan Andir' : 'Cicendo Ward, Andir District'}
              </p>
              <p className="text-gray-700">Bandung, Jawa Barat 40173</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>{language === 'id' ? 'Catatan:' : 'Note:'}</strong>{' '}
              {language === 'id'
                ? 'Bagian Admisi STT Bandung akan menghubungi calon mahasiswa melalui email atau WhatsApp untuk mengkomunikasikan status dan kelengkapan pendaftaran calon mahasiswa maksimal 3 hari kerja setelah berkas diterima.'
                : 'The STT Bandung Admission Department will contact applicants via email or WhatsApp to communicate the status and completeness of registration within a maximum of 3 working days after the documents are received.'}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h5 className="font-semibold text-gray-900 mb-3">
              {language === 'id' ? 'Catatan Penting:' : 'Important Notes:'}
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                { id: 'Bila ingin mengajukan permohonan beasiswa mohon hubungi petugas kami untuk memperoleh form pengajuan beasiswa', en: 'If you wish to apply for a scholarship, please contact our officer to obtain the scholarship application form' },
                { id: 'Form dapat diisi secara digital, tidak perlu dicetak (diprint). Tanda tangan tetap wajib dicantumkan secara digital', en: 'Forms can be filled out digitally, no need to print. Digital signatures are still mandatory' },
                { id: 'Bila belum memiliki KTP harap cantumkan kartu pelajar', en: 'If you do not have an identity card (KTP) yet, please provide your student ID card' },
                { id: 'Bila ijazah belum terbit karena tanggal ujian belum berlangsung ketika Anda mendaftar, mohon sertakan surat keterangan dari sekolah Anda bahwa Anda adalah pelajar kelas 3 yang akan menempuh ujian akhir', en: 'If the diploma hasn’t been issued yet because the exam date hasn’t passed, please include a certificate from your school stating that you are a 12th-grade student about to take the final exam' },
                { id: 'Berkas dapat dikirimkan secara hardcopy melalui pos atau secara softcopy melalui email: admisi@sttb.ac.id atau WhatsApp: 0815 7336 0009', en: 'Documents can be sent in hardcopy via post or in softcopy via email: admisi@sttb.ac.id or WhatsApp: 0815 7336 0009' }
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400">→</span>
                  <span>{language === 'id' ? note.id : note.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
    },
    {
      number: 3,
      icon: CreditCard,
      title: language === 'id' ? 'Membayar Biaya Pendaftaran & Tes' : 'Pay Registration & Test Fee',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">
            {language === 'id' ? 'Membayar Biaya Pendaftaran & Tes Masuk' : 'Paying Registration & Entrance Test Fee'}
          </h4>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl p-6 mb-6">
            <h5 className="font-bold text-gray-900 mb-4 text-lg">
              {language === 'id' ? 'Detail Pembayaran' : 'Payment Details'}
            </h5>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-1">{language === 'id' ? 'Jumlah Pembayaran' : 'Payment Amount'}</p>
                <p className="text-3xl font-bold text-sttb-red">Rp 500.000,-</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-2">{language === 'id' ? 'Transfer ke Rekening:' : 'Transfer to Account:'}</p>
                <div className="space-y-1">
                  <p className="font-bold text-gray-900">Bank BCA</p>
                  <p className="text-gray-700">{language === 'id' ? 'Atas Nama:' : 'Beneficiary:'} <span className="font-semibold">Yayasan STT Bandung</span></p>
                  <p className="text-gray-700">{language === 'id' ? 'No. Rekening:' : 'Account No:'} <span className="font-semibold text-lg">282 300 5555</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'Cara Konfirmasi Pembayaran:' : 'How to Confirm Payment:'}
            </h5>
            <p className="text-gray-700 mb-3">
              {language === 'id' ? 'Setelah melakukan transfer, kirimkan bukti transfer melalui:' : 'After the transfer, send the payment proof through:'}
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {language === 'id' ? 'Link Konfirmasi Online' : 'Online Confirmation Link'}
                  </p>
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
            <h5 className="font-bold text-red-900 mb-2">
              {language === 'id' ? 'Perhatian Penting!' : 'Important Attention!'}
            </h5>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  {language === 'id' ? 'Biaya pendaftaran tidak dapat dikembalikan' : 'Registration fees are non-refundable'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  {language === 'id' 
                    ? 'Berkas yang tidak disertai biaya pendaftaran tidak akan diproses untuk tes masuk' 
                    : 'Documents without registration fees will not be processed for the entrance test'}
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      number: 4,
      icon: ClipboardCheck,
      title: language === 'id' ? 'Mengikuti Tes Seleksi Penerimaan' : 'Take Admission Selection Test',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-4 text-lg">
            {language === 'id' ? 'Mengikuti Tes Seleksi Penerimaan' : 'Taking the Admission Selection Test'}
          </h4>

          <p className="mb-4 leading-relaxed text-gray-700">
            {language === 'id'
              ? 'Berkas pendaftaran yang telah dikumpulkan akan diseleksi oleh Direktur Admisi STT Bandung. Setelah seleksi dokumen, surat panggilan tes dan instruksi detil mengenai pelaksanaan tes masuk akan dikirimkan via email dan pendaftar akan menerima notifikasi melalui WhatsApp.'
              : 'Collected registration documents will be selected by the Director of Admission of STT Bandung. After document selection, a test call letter and detailed instructions regarding the entrance test will be sent via email, and applicants will receive a notification via WhatsApp.'}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <h5 className="font-bold text-gray-900 mb-3">
              {language === 'id' ? 'Mengikuti 5 Tes Penerimaan Online:' : 'Take 5 Online Entrance Tests:'}
            </h5>

            <div className="space-y-4">
              <div>
                <h6 className="font-semibold text-gray-900 mb-2">
                  1. {language === 'id' ? 'Psikotes (3 tahapan tes)' : 'Psychological Test (3 test stages)'}
                </h6>
                <ul className="space-y-1 text-sm ml-4 text-gray-700">
                  <li>• {language === 'id' ? 'Pengisian Form' : 'Form Completion'}</li>
                  <li>• {language === 'id' ? 'Tes Bersama' : 'Group Test'}</li>
                  <li>• {language === 'id' ? 'Wawancara dengan Psikolog' : 'Interview with Psychologist'}</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  {language === 'id'
                    ? 'Psikotes bertujuan mengukur tingkat kecerdasan, sikap dan cara kerja, emosi, relasi sosial calon mahasiswa.'
                    : 'The psychological test aims to measure the level of intelligence, attitude and way of working, emotions, and social relations of prospective students.'}
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">
                  2. {language === 'id' ? 'Pengetahuan Teologi' : 'Theological Knowledge'}
                </h6>
                <p className="text-sm text-gray-600">
                  {language === 'id'
                    ? 'Tes Pengetahuan Teologi menguji pengetahuan calon mahasiswa mengenai tokoh-tokoh Alkitab, ayat-ayat penting dalam Alkitab, serta pemahaman iman Kristen calon mahasiswa.'
                    : 'The Theological Knowledge test examines prospective students\' knowledge of Biblical figures, important Biblical verses, and their understanding of the Christian faith.'}
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">
                  3. {language === 'id' ? 'Bahasa Indonesia' : 'Indonesian Language'}
                </h6>
                <p className="text-sm text-gray-600">
                  {language === 'id'
                    ? 'Tes Bahasa Indonesia menguji kemampuan calon mahasiswa dalam menyusun tata bahasa yang baik, memahami bacaan dan menuliskan ide-ide dalam bahasa Indonesia.'
                    : 'The Indonesian Language test examines the ability of prospective students to construct good grammar, understand readings, and write down ideas in Indonesian.'}
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">
                  4. {language === 'id' ? 'Bahasa Inggris' : 'English Language'}
                </h6>
                <p className="text-sm text-gray-600">
                  {language === 'id'
                    ? 'Tes Bahasa Inggris menguji kemampuan calon mahasiswa untuk memahami tata bahasa, bacaan dan menuliskan ide-ide dalam bahasa Inggris.'
                    : 'The English Language test examines the ability of prospective students to understand grammar, readings, and write down ideas in English.'}
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">
                  5. {language === 'id' ? 'Wawancara (dengan dosen STTB)' : 'Interview (with STTB Lecturer)'}
                </h6>
                <p className="text-sm text-gray-600">
                  {language === 'id'
                    ? 'Wawancara memiliki penilaian terbesar dalam tes masuk untuk menguji keseriusan panggilan dan rencana pelayanan mahasiswa di masa depan.'
                    : 'The interview has the largest evaluation in the entrance test to examine the seriousness of the calling and the student\'s future ministry plans.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>{language === 'id' ? 'Catatan:' : 'Note:'}</strong>{' '}
              {language === 'id'
                ? 'Bila dokumen memenuhi persyaratan dan pembayaran telah dilunasi maka pendaftar akan menerima surat tes masuk. Pendaftar yang berkasnya tidak lolos seleksi dokumen pendaftaran tidak akan dipanggil untuk ikut tes.'
                : 'If the documents meet the requirements and payment has been settled, applicants will receive an entrance test letter. Applicants whose documents do not pass the selection will not be called for the test.'}
            </p>
          </div>
        </>
      ),
    },
    {
      number: 5,
      icon: CheckCircle,
      title: language === 'id' ? 'Pengumuman & Konfirmasi' : 'Announcement & Confirmation',
      content: (
        <>
          <h4 className="font-bold text-gray-900 mb-3">
            {language === 'id' ? 'Pengumuman Penerimaan & Konfirmasi MABA' : 'Admission Announcement & New Student Confirmation'}
          </h4>

          <div className="space-y-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sttb-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sttb-red font-bold">1</span>
              </div>
              <p className="leading-relaxed text-gray-700">
                {language === 'id'
                  ? 'Dalam kurun waktu 2-3 minggu setelah tanggal tes terakhir, pendaftar akan menerima pemberitahuan hasil penerimaan.'
                  : 'Within 2-3 weeks after the last test date, applicants will receive notification of the admission results.'}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sttb-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sttb-red font-bold">2</span>
              </div>
              <p className="leading-relaxed text-gray-700">
                {language === 'id'
                  ? 'Calon mahasiswa yang diterima wajib mengisi dan mengembalikan formulir konfirmasi untuk menjadi mahasiswa yang dikirimkan oleh petugas admisi STTB.'
                  : 'Accepted students are required to fill out and return the confirmation form to become a student, which is sent by STTB admission officers.'}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sttb-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sttb-red font-bold">3</span>
              </div>
              <p className="leading-relaxed text-gray-700">
                {language === 'id'
                  ? 'Mahasiswa baru menyelesaikan pembayaran uang kuliah dan administrasi pertama lalu mengikuti proses orientasi.'
                  : 'New students complete the first tuition and administration payment and then participate in the orientation process.'}
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h6 className="font-semibold text-gray-900 mb-2">
              {language === 'id' ? '📢 Informasi Pengumuman:' : '📢 Announcement Information:'}
            </h6>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-sttb-red">•</span>
                <span>
                  {language === 'id' 
                    ? 'Surat keputusan penerimaan akan dikirimkan melalui email dan notifikasi diberikan melalui WhatsApp' 
                    : 'The admission decision letter will be sent via email, and a notification will be provided via WhatsApp'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sttb-red">•</span>
                <span>
                  {language === 'id' 
                    ? 'Form konfirmasi (menyatakan bersedia menjadi mahasiswa) dikirimkan kembali kepada pihak STTB melalui email' 
                    : 'The confirmation form (stating willingness to become a student) is sent back to STTB via email'}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-900">
              {language === 'id' 
                ? '🎓 Mahasiswa resmi diterima dan selanjutnya proses studi mahasiswa akan ditangani oleh bagian kemahasiswaan & akademik.' 
                : '🎓 Students are officially accepted, and the study process will subsequently be handled by the student affairs & academic department.'}
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
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-sttb-navy">
              {language === 'id' ? 'Prosedur Penerimaan Mahasiswa' : 'Student Admission Procedure'}
            </h1>
            <p className="text-xl text-gray-600 text-sttb-navy font-semibold">
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
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ${activeStep === index
                    ? 'bg-gradient-to-br from-sttb-red to-red-600 text-white'
                    : 'bg-white text-gray-400 border-2 border-gray-300'
                    }`}>
                    {step.number}
                  </div>
                  <p className="text-xs mt-2 text-center max-w-[80px] font-medium text-gray-600 text-sttb-navy font-semibold">
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
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${activeStep === index
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