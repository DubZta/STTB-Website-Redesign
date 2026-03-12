import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GraduationCap, FileCheck, Users } from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';

export default function RequirementsPage() {
  const { t } = useLanguage();

  const programs = [
    {
      title: t('lang') === 'id' ? 'Program Sarjana Teologi (S.Th.)' : 'Bachelor of Theology (S.Th.)',
      icon: GraduationCap,
      color: 'from-blue-600 to-blue-400',
      requirements: t('lang') === 'id' ? [
        'Minimal lulusan SMA/SMK/sederajat',
        'Memiliki IPK minimal 2.50 (untuk pindahan)',
        'Berasal dari keluarga Kristen',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Memiliki panggilan untuk pelayanan penuh waktu',
        'Usia maksimal 30 tahun saat mendaftar',
        'Sehat jasmani dan rohani',
        'Mendapat rekomendasi dari gembala/pembina rohani',
      ] : [
        'Minimum high school graduate or equivalent',
        'Minimum GPA of 2.50 (for transfer students)',
        'From Christian family background',
        'Baptized and active in church ministry',
        'Have calling for full-time ministry',
        'Maximum age 30 years old at registration',
        'Physically and spiritually healthy',
        'Have recommendation from pastor/spiritual mentor',
      ],
    },
    {
      title: t('lang') === 'id' ? 'Program Sarjana Pendidikan Magister (S.Pd.M.)' : 'Bachelor of Christian Education (S.Pd.M.)',
      icon: Users,
      color: 'from-green-600 to-green-400',
      requirements: t('lang') === 'id' ? [
        'Minimal lulusan SMA/SMK/sederajat',
        'Memiliki IPK minimal 2.50 (untuk pindahan)',
        'Berasal dari keluarga Kristen',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Berminat dalam bidang pendidikan Kristen',
        'Usia maksimal 35 tahun saat mendaftar',
        'Sehat jasmani dan rohani',
        'Mendapat rekomendasi dari gembala/pembina rohani',
      ] : [
        'Minimum high school graduate or equivalent',
        'Minimum GPA of 2.50 (for transfer students)',
        'From Christian family background',
        'Baptized and active in church ministry',
        'Interested in Christian education field',
        'Maximum age 35 years old at registration',
        'Physically and spiritually healthy',
        'Have recommendation from pastor/spiritual mentor',
      ],
    },
    {
      title: t('lang') === 'id' ? 'Program Magister Pendidikan Kristen (M.Pd.K.)' : 'Master of Christian Education (M.Pd.K.)',
      icon: FileCheck,
      color: 'from-purple-600 to-purple-400',
      requirements: t('lang') === 'id' ? [
        'Lulusan S1 dari program studi terakreditasi',
        'IPK minimal 2.75 dari program S1',
        'Pengalaman pelayanan minimal 2 tahun',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Memiliki visi pengembangan pendidikan Kristen',
        'Usia maksimal 45 tahun saat mendaftar',
        'Menyertakan paper akademik atau book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Bachelor degree from accredited program',
        'Minimum GPA of 2.75 from bachelor program',
        'Minimum 2 years of ministry experience',
        'Baptized and active in church ministry',
        'Have vision for Christian education development',
        'Maximum age 45 years old at registration',
        'Submit academic paper or book review',
        'Have recommendation from pastor and supervisor',
      ],
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
              {t('lang') === 'id' ? 'Persyaratan Pendaftaran' : 'Admission Requirements'}
            </h1>
            <p className="text-xl text-gray-600">
              {t('lang') === 'id'
                ? 'Persyaratan untuk setiap program studi'
                : 'Requirements for each study program'}
            </p>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-sttb-navy to-blue-900 text-white rounded-xl p-8 mb-12 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              {t('lang') === 'id' ? 'Informasi Umum' : 'General Information'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">
                  {t('lang') === 'id' ? 'Dokumen Wajib' : 'Required Documents'}
                </h4>
                <p className="text-sm text-blue-100">
                  {t('lang') === 'id'
                    ? 'KTP, Ijazah, Foto, Surat Baptis, BPJS/Asuransi Kesehatan'
                    : 'ID Card, Diploma, Photo, Baptism Certificate, Health Insurance'}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  {t('lang') === 'id' ? 'Formulir' : 'Forms'}
                </h4>
                <p className="text-sm text-blue-100">
                  {t('lang') === 'id'
                    ? 'Formulir pendaftaran, kesaksian, kesehatan, rekomendasi'
                    : 'Registration, testimony, health, recommendation forms'}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  {t('lang') === 'id' ? 'Biaya' : 'Fee'}
                </h4>
                <p className="text-sm text-blue-100">
                  {t('lang') === 'id'
                    ? 'Biaya pendaftaran Rp 500.000 (tidak dapat dikembalikan)'
                    : 'Registration fee Rp 500,000 (non-refundable)'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Programs Requirements */}
          <div className="space-y-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white flex items-center gap-4`}>
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                    <program.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    {t('lang') === 'id' ? 'Persyaratan:' : 'Requirements:'}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {program.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-3">
                        <span className="text-sttb-red font-bold mt-1">✓</span>
                        <span className="text-gray-700 leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('lang') === 'id' ? 'Catatan Penting' : 'Important Notes'}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  {t('lang') === 'id'
                    ? 'Bila belum memiliki KTP harap cantumkan kartu pelajar'
                    : 'If you do not have an ID card, please provide student card'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  {t('lang') === 'id'
                    ? 'Bila ijazah belum terbit, mohon sertakan surat keterangan dari sekolah'
                    : 'If diploma is not yet issued, please provide school certificate'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  {t('lang') === 'id'
                    ? 'Mahasiswa pindahan wajib menyerahkan surat pindah dan transkrip terakhir'
                    : 'Transfer students must submit transfer letter and latest transcript'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  {t('lang') === 'id'
                    ? 'Bila gereja memiliki baptis anak dan baptis sidi, kedua surat wajib dilampirkan'
                    : 'If church has infant baptism and confirmation, both certificates must be attached'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  {t('lang') === 'id'
                    ? 'Bila tidak memiliki BPJS/KIS, sertakan surat pernyataan kesanggupan biaya kesehatan'
                    : 'If you do not have BPJS/KIS, provide statement of health cost capability'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  {t('lang') === 'id'
                    ? 'Berkas dapat dikirimkan secara hardcopy (pos) atau softcopy (email/WhatsApp)'
                    : 'Documents can be sent as hardcopy (mail) or softcopy (email/WhatsApp)'}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <AdmissionsFooter />
    </div>
  );
}