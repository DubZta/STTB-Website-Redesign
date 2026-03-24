import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  GraduationCap,
  FileCheck,
  Users,
  ChevronDown,
  MapPin,
  Globe,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import AdmissionsFooter from '../../components/admissions/AdmissionsFooter';

export default function RequirementsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'sarjana' | 'magister'>('sarjana');

  const programs = [
    {
      title: language === 'id' ? 'Sarjana Teologi (S.Th.)' : 'Bachelor of Theology (S.Th.)',
      icon: GraduationCap,
      color: 'from-sttb-navy to-blue-800',
      type: 'sarjana',
      requirements: language === 'id' ? [
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
      title: language === 'id' ? 'Sarjana Pendidikan Kristen (S.Pd.)' : 'Bachelor of Christian Education (B.Pd.)',
      icon: Users,
      color: 'from-sttb-navy to-blue-800',
      type: 'sarjana',
      requirements: language === 'id' ? [
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
      title: language === 'id' ? 'Magister Teologi Pelayanan Pastoral Gereja Urban (M.Th.)' : 'Master of Theology in Urban Ministry (M.Th.)',
      icon: FileCheck,
      color: 'from-red-700 to-red-900',
      type: 'magister',
      requirements: language === 'id' ? [
        'Lulusan S1 Teologi (S.Th.) dari program studi terakreditasi',
        'IPK minimal 2.75 dari program S1',
        'Pengalaman pelayanan minimal 2 tahun',
        'Memiliki visi untuk pelayanan gereja di konteks urban',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Menyertakan paper akademik atau book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Bachelor of Theology (B.Th.) from accredited program',
        'Minimum GPA of 2.75 from bachelor program',
        'Minimum 2 years of ministry experience',
        'Have vision for church ministry in urban context',
        'Baptized and active in church ministry',
        'Submit academic paper or book review',
        'Have recommendation from pastor and supervisor',
      ],
    },
    {
      title: language === 'id' ? 'Magister Teologi Transformasi Budaya Masyarakat (M.Th.)' : 'Master of Theology in Cultural Transformation (M.Th.)',
      icon: FileCheck,
      color: 'from-red-700 to-red-900',
      type: 'magister',
      requirements: language === 'id' ? [
        'Lulusan S1 Teologi (S.Th.) dari program studi terakreditasi',
        'IPK minimal 2.75 dari program S1',
        'Pengalaman pelayanan minimal 2 tahun',
        'Berminat dalam integrasi teologi dan transformasi budaya',
        'Sudah dibaptis dan aktif dalam pelayanan gereja',
        'Menyertakan paper akademik atau book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Bachelor of Theology (B.Th.) from accredited program',
        'Minimum GPA of 2.75 from bachelor program',
        'Minimum 2 years of ministry experience',
        'Interested in theology and cultural transformation integration',
        'Baptized and active in church ministry',
        'Submit academic paper or book review',
        'Have recommendation from pastor and supervisor',
      ],
    },
    {
      title: language === 'id' ? 'Magister Pendidikan Kristen (M.Pd.)' : 'Master of Christian Education (M.Pd.)',
      icon: FileCheck,
      color: 'from-red-700 to-red-900',
      type: 'magister',
      requirements: language === 'id' ? [
        'Lulusan S1 Pendidikan atau S1 Teologi dari program studi terakreditasi',
        'IPK minimal 2.75 dari program S1',
        'Pengalaman pelayanan di bidang pendidikan minimal 2 tahun',
        'Memiliki visi pengembangan pendidikan Kristen',
        'Menyertakan paper akademik atau book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Bachelor\'s in Education or Theology from accredited program',
        'Minimum GPA of 2.75 from bachelor program',
        'Minimum 2 years of experience in education ministry',
        'Have vision for Christian education development',
        'Submit academic paper or book review',
        'Have recommendation from pastor and supervisor',
      ],
    },
    {
      title: language === 'id' ? 'Magister Ministri Marketplace (M.Min.)' : 'Master of Ministry in Marketplace (M.Min.)',
      icon: FileCheck,
      color: 'from-red-700 to-red-900',
      type: 'magister',
      requirements: language === 'id' ? [
        'Minimal lulusan S1 dari semua jurusan terakreditasi',
        'Sudah baptis dewas/sidi',
        'Pernah terlibat pelayanan minimal 1 tahun',
        'Pernah bekerja minimal 2 tahun',
        'Menyerahkan book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Minimum bachelor degree from any accredited major',
        'Baptized / Confirmed',
        'Involved in ministry for at least 1 year',
        'Work experience of at least 2 years',
        'Submit book review',
        'Have recommendation from pastor and supervisor',
      ],
    },
    {
      title: language === 'id' ? 'Magister Ministri Kepemimpinan Pastoral (M.Min.)' : 'Master of Ministry in Pastoral Leadership (M.Min.)',
      icon: FileCheck,
      color: 'from-red-700 to-red-900',
      type: 'magister',
      requirements: language === 'id' ? [
        'Minimal lulusan S1 dari semua jurusan terakreditasi',
        'Sudah baptis dewas/sidi',
        'Pernah terlibat pelayanan minimal 1 tahun',
        'Berminat dalam pengembangan kepemimpinan pastoral',
        'Menyerahkan book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Minimum bachelor degree from any accredited major',
        'Baptized / Confirmed',
        'Involved in ministry for at least 1 year',
        'Interested in pastoral leadership development',
        'Submit book review',
        'Have recommendation from pastor and supervisor',
      ],
    },
    {
      title: language === 'id' ? 'Magister Ministri Teologi Pelayanan Gerejawi (M.Min.)' : 'Master of Ministry in Church Service Theology (M.Min.)',
      icon: FileCheck,
      color: 'from-red-700 to-red-900',
      type: 'magister',
      requirements: language === 'id' ? [
        'Minimal lulusan S1 dari semua jurusan terakreditasi',
        'Sudah baptis dewas/sidi',
        'Pernah terlibat pelayanan minimal 1 tahun',
        'Aktif dalam pelayanan gerejawi',
        'Menyerahkan book review',
        'Mendapat rekomendasi dari gembala dan atasan',
      ] : [
        'Minimum bachelor degree from any accredited major',
        'Baptized / Confirmed',
        'Involved in ministry for at least 1 year',
        'Active in church service',
        'Submit book review',
        'Have recommendation from pastor and supervisor',
      ],
    },
  ];

  const filteredPrograms = programs.filter(p => p.type === activeTab);

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
            <h1 className="text-5xl font-extrabold mb-4 text-sttb-navy">
              {language === 'id' ? 'Persyaratan Pendaftaran' : 'Admission Requirements'}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'id'
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
              {language === 'id' ? 'Informasi Umum' : 'General Information'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">
                  {language === 'id' ? 'Dokumen Wajib' : 'Required Documents'}
                </h4>
                <p className="text-sm text-blue-100">
                  {language === 'id'
                    ? 'KTP, Ijazah, Foto, Surat Baptis, BPJS/Asuransi Kesehatan'
                    : 'ID Card, Diploma, Photo, Baptism Certificate, Health Insurance'}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  {language === 'id' ? 'Formulir' : 'Forms'}
                </h4>
                <p className="text-sm text-blue-100">
                  {language === 'id'
                    ? 'Formulir pendaftaran, kesaksian, kesehatan, rekomendasi'
                    : 'Registration, testimony, health, recommendation forms'}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  {language === 'id' ? 'Biaya' : 'Fee'}
                </h4>
                <p className="text-sm text-blue-100">
                  {language === 'id'
                    ? 'Biaya pendaftaran Rp 500.000 (tidak dapat dikembalikan)'
                    : 'Registration fee Rp 500,000 (non-refundable)'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Program Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('sarjana')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeTab === 'sarjana'
                  ? 'bg-sttb-navy text-white shadow-lg'
                  : 'bg-white text-sttb-navy border-2 border-sttb-navy hover:bg-gray-50'
              }`}
            >
              {language === 'id' ? 'Program Sarjana' : 'Undergraduate Programs'}
            </button>
            <button
              onClick={() => setActiveTab('magister')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeTab === 'magister'
                  ? 'bg-sttb-red text-white shadow-lg'
                  : 'bg-white text-sttb-red border-2 border-sttb-red hover:bg-gray-50'
              }`}
            >
              {language === 'id' ? 'Program Magister' : 'Graduate Programs'}
            </button>
          </div>

          {/* Programs Requirements */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid gap-8"
              >
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className={`bg-gradient-to-r ${program.color} p-6 text-white flex items-center gap-4`}>
                      <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                        <program.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{program.title}</h3>
                    </div>
                    <div className="p-8">
                      <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sttb-red" />
                        {language === 'id' ? 'Persyaratan Akademik & Spiritual:' : 'Academic & Spiritual Requirements:'}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {program.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-3">
                            <span className="text-sttb-red font-bold text-lg leading-none mt-1">✓</span>
                            <span className="text-gray-700 leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Additional Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-amber-600" />
              {language === 'id' ? 'Catatan Penting' : 'Important Notes'}
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { id: 'Bila belum memiliki KTP harap cantumkan kartu pelajar', en: 'If you do not have an ID card, please provide student card' },
                { id: 'Bila ijazah belum terbit, mohon sertakan surat keterangan dari sekolah', en: 'If diploma is not yet issued, please provide school certificate' },
                { id: 'Mahasiswa pindahan wajib menyerahkan surat pindah dan transkrip terakhir', en: 'Transfer students must submit transfer letter and latest transcript' },
                { id: 'Bila gereja memiliki baptis anak dan baptis sidi, kedua surat wajib dilampirkan', en: 'If church has infant baptism and confirmation, both certificates must be attached' },
                { id: 'Bila tidak memiliki BPJS/KIS, sertakan surat pernyataan kesanggupan biaya kesehatan', en: 'If you do not have BPJS/KIS, provide statement of health cost capability' },
                { id: 'Berkas dapat dikirimkan secara hardcopy (pos) atau softcopy (email/WhatsApp)', en: 'Documents can be sent as hardcopy (mail) or softcopy (email/WhatsApp)' }
              ].map((note, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold mt-1.5">•</span>
                  <span>{language === 'id' ? note.id : note.en}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <AdmissionsFooter />
    </div>
  );
}