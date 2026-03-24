import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export default function StudentDevelopmentPage() {
  const { language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['community', 'chapel', 'pastoral', 'discipleship', 'spiritual', 'mission', 'practice'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'community', label: language === 'en' ? 'Community Life' : 'Kehidupan Komunitas' },
    { id: 'chapel', label: language === 'en' ? 'Chapel & Formation' : 'Kapel & Forum Pembinaan' },
    { id: 'pastoral', label: language === 'en' ? 'Pastoral Groups' : 'Kelompok Pastoral' },
    { id: 'discipleship', label: language === 'en' ? 'Discipleship Groups' : 'Kelompok Pemuridan' },
    { id: 'spiritual', label: language === 'en' ? 'Spiritual Formation' : 'Formasi Spiritual' },
    { id: 'mission', label: language === 'en' ? 'Missional Formation' : 'Formasi Misional' },
    { id: 'practice', label: language === 'en' ? 'Ministry Practice' : 'Praktik Pelayanan' },
  ];

  const formationAreas = [
    {
      title: language === 'en' ? 'TEACHING FORMATION' : 'FORMASI PENGAJARAN',
      desc: language === 'en' ? 'Growing in knowledge of God and His word' : 'Bertumbuh dalam pengenalan akan Tuhan dan firman-Nya',
    },
    {
      title: language === 'en' ? 'SPIRITUAL FORMATION' : 'FORMASI SPIRITUAL',
      desc: language === 'en' ? 'Growing in personal relationship with God' : 'Bertumbuh dalam hubungan pribadi dengan Tuhan',
    },
    {
      title: language === 'en' ? 'CHARACTER FORMATION' : 'FORMASI KARAKTER',
      desc: language === 'en' ? 'Growing in Christlike character' : 'Bertumbuh dalam karakter serupa Kristus',
    },
    {
      title: language === 'en' ? 'MINISTRY FORMATION' : 'FORMASI PELAYANAN',
      desc:
        language === 'en'
          ? 'Growing in ministry within the body of Christ and mission'
          : 'Bertumbuh dalam pelayanan di tubuh Kristus dan misi',
    },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: 'url(https://sttb.ac.id/storage/2022/02/Untitled-12-e1644567912379.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
        }}
      />

      <div className="bg-white border-b border-gray-200 shadow-sm relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group px-3 py-1.5 rounded text-[10px] font-bold transition-all relative font-[Inter] ${activeSection === item.id ? 'bg-sttb-navy text-white' : 'bg-gray-100 text-sttb-navy hover:bg-gray-200 border border-gray-200'
                  }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <ChevronDown className="w-3 h-3 absolute -bottom-2 left-1/2 -translate-x-1/2 text-sttb-navy" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="relative z-10 bg-white/95 backdrop-blur-sm py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative border-4 border-sttb-red rounded-sm overflow-hidden shadow-lg">
                <img
                  src="/pray.jpg"
                  alt="Student Development"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-[Plus_Jakarta_Sans] font-extrabold text-sttb-red mb-2 uppercase tracking-tight">
                  {language === 'en' ? 'STUDENT' : 'PEMBINAAN'}
                </h1>
                <h1 className="text-4xl md:text-5xl font-[Plus_Jakarta_Sans] font-extrabold text-sttb-red uppercase tracking-tight">
                  {language === 'en' ? 'DEVELOPMENT' : 'MAHASISWA'}
                </h1>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed font-[Inter] font-medium italic border-l-4 border-sttb-navy pl-4">
                  {language === 'en'
                    ? 'Holistic student formation through various programs and activities designed to develop servant leaders for ministry.'
                    : 'Pembentukan mahasiswa secara holistik melalui berbagai program dan kegiatan yang dirancang untuk mengembangkan pelayan Tuhan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id="community" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-2xl font-extrabold text-sttb-navy mb-3 font-[Plus_Jakarta_Sans]">
                {language === 'en' ? 'COMMUNITY LIFE' : 'KEHIDUPAN KOMUNITAS'}
              </h2>
              <div className="space-y-3 font-[Inter] font-medium">
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Throughout their studies, students will live together, learn together, grow together in community.'
                    : 'Sepanjang masa studi, mahasiswa akan hidup bersama, belajar bersama, bertumbuh bersama dalam komunitas.'}
                </p>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'All full-time students in the S.Th., S.Pd.K., and M.Th. matriculation programs who are unmarried must live in the dormitory.'
                    : 'Semua mahasiswa penuh waktu dalam program S.Th., S.Pd.K., dan M.Th. matrikulasi yang belum menikah wajib tinggal di dalam asrama.'}
                </p>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'As part of the community, each student needs to learn to love one another, help one another, and care for one another in managing and forming a conducive campus and dormitory life. The "STTB Student Life Guide" is created to help students learn and grow on campus and in the dormitory.'
                    : 'Sebagai bagian dari komunitas, setiap mahasiswa perlu belajar saling mengasihi, saling menolong, dan saling menjaga dalam mengelola dan membentuk kehidupan kampus dan asrama yang kondusif. "Panduan Kehidupan Mahasiswa STTB" dibuat untuk membantu mahasiswa belajar dan bertumbuh di kampus dan asrama.'}
                </p>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://sttb.ac.id/storage/2022/08/senat-10.png"
                alt="Community Life"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>

        {/* CHAPEL & FORMATION FORUM */}
        <div id="chapel" className="mb-20 scroll-mt-32 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-extrabold text-sttb-navy mb-6 font-[Plus_Jakarta_Sans]">
              {language === 'en' ? 'CHAPEL & FORMATION FORUM' : 'KAPEL & FORUM PEMBINAAN'}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 font-[Inter] font-medium">
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Chapel is held several times each week with various formats, including:'
                    : 'Kapel dilaksanakan beberapa kali dalam setiap minggu dengan format yang bervariasi, antara lain berupa:'}
                </p>
                <ul className="space-y-1.5">
                  {[
                    language === 'en' ? 'Liturgical worship' : 'Ibadah liturgis',
                    language === 'en' ? 'Contemporary worship' : 'Ibadah kontemporer',
                    language === 'en' ? 'Contemplative worship' : 'Ibadah kontemplatif',
                    language === 'en' ? 'Mission Prayer Fellowship' : 'Persekutuan Doa Misi',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[11px] text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-700 leading-relaxed mt-3">
                  {language === 'en'
                    ? 'Content is delivered by lecturers, alumni, ministry leaders, invited speakers, and student sermons.'
                    : 'Konten dibawakan oleh dosen, alumni, para pemimpin lembaga pelayanan/misi, narasumber lain yang diundang, maupun khotbah mahasiswa.'}
                </p>
              </div>

              {/* Right Column - Formation Areas */}
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-extrabold text-sttb-red text-[11px] mb-3 font-[Plus_Jakarta_Sans]">
                  {language === 'en' ? 'FOUR AREAS OF TRANSFORMATION' : 'EMPAT BIDANG TRANSFORMASI'}
                </h4>
                <div className="space-y-3 font-[Inter]">
                  {formationAreas.map((area, index) => (
                    <div key={index} className="border-l-2 border-sttb-navy pl-3">
                      <h5 className="font-extrabold text-sttb-navy text-[10px] mb-0.5">{area.title}</h5>
                      <p className="text-[10px] text-gray-600 font-medium">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PASTORAL GROUPS */}
        <div id="pastoral" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://sttb.ac.id/storage/2022/08/senat-12.png"
                alt="Pastoral Groups"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-2xl font-extrabold text-sttb-navy mb-3 font-[Plus_Jakarta_Sans]">
                {language === 'en' ? 'PASTORAL GROUPS' : 'KELOMPOK PASTORAL'}
              </h2>
              <div className="space-y-3 font-[Inter] font-medium">
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Pastoral groups are a means to accompany students in learning-academic, spirituality-character, and ministry-vocational aspects.'
                    : 'Kelompok pastoral merupakan sarana untuk mendampingi mahasiswa secara pembelajaran-akademik, kerohanian-karakter, dan pelayanan-vokasional.'}
                </p>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Group meetings are held every two weeks. Personal meetings are held as needed.'
                    : 'Pertemuan kelompok dilakukan dua minggu sekali. Pertemuan pribadi-ke-pribadi dilakukan berdasarkan keperluan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DISCIPLESHIP GROUPS */}
        <div id="discipleship" className="mb-20 scroll-mt-32 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl font-extrabold text-sttb-navy mb-4 font-[Plus_Jakarta_Sans]">
              {language === 'en' ? 'DISCIPLESHIP GROUPS' : 'KELOMPOK PEMURIDAN'}
            </h2>

            <div className="flex justify-center items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                alt="Discipleship 1"
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                alt="Discipleship 2"
                className="w-28 h-28 rounded-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Discipleship 3"
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
            </div>

            <p className="text-[11px] font-[Inter] font-medium text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {language === 'en'
                ? 'Helping students learn and grow together in Christian faith foundations'
                : 'Menolong mahasiswa belajar dan bertumbuh bersama mengenai dasar-dasar pertumbuhan iman Kristen'}
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-left font-[Inter] font-medium">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Each group will be led by a discipleship mentor, who becomes a "spiritual sibling" helping students experience a change in mindset and lifestyle throughout the first three semesters at STTB.'
                    : 'Setiap kelompok akan dipimpin oleh pembimbing pemuridan, yang menjadi "kakak rohani" yang menolong mahasiswa mengalami perubahan pola pikir dan gaya hidup sepanjang tiga semester pertama di STTB.'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Group meetings are held once a week on designated days. Personal meetings are held as needed. Discipleship mentors are specially mentored by male and female discipleship coaches.'
                    : 'Pertemuan kelompok dilakukan satu minggu sekali pada hari yang ditentukan. Pertemuan pribadi-ke-pribadi dilakukan berdasarkan keperluan. Para pembimbing pemuridan dimentor secara khusus oleh pembina pemuridan putra dan putri.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SPIRITUAL & MISSIONAL FORMATION */}
        <div id="spiritual" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-xl font-extrabold text-sttb-navy mb-3 font-[Plus_Jakarta_Sans]">
                {language === 'en' ? 'SPIRITUAL FORMATION' : 'FORMASI SPIRITUAL'}
              </h2>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Quiet time is a time to fellowship with God personally through the word and prayer set aside regularly. Quiet time must be done in the morning.'
                  : 'Waktu teduh merupakan waktu untuk bersekutu dengan Tuhan secara pribadi melalui firman dan doa yang dikhususkan secara teratur. Waktu teduh wajib dilakukan pagi hari.'}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-[10px] text-sttb-navy mb-2">
                  {language === 'en' ? 'RETREAT PROGRAMS:' : 'PROGRAM RETREAT:'}
                </p>
                <ul className="space-y-1.5">
                  {[
                    language === 'en' ? 'Initial study retreat' : 'Retreat awal studi',
                    language === 'en' ? 'Semester mini retreats' : 'Mini retreat setiap semester',
                    language === 'en' ? 'Final study retreat' : 'Retreat akhir studi',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[10px] text-gray-700">
                      <div className="w-1 h-1 bg-sttb-red rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Missional Formation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 id="mission" className="text-xl font-extrabold text-sttb-navy mb-3 font-[Plus_Jakarta_Sans]">
                {language === 'en' ? 'MISSIONAL FORMATION' : 'FORMASI MISIONAL'}
              </h2>
              <p className="text-[11px] text-gray-700 leading-relaxed font-[Inter] font-medium">
                {language === 'en'
                  ? 'Missional Formation is conducted to help students gain insights and skills for mission, direct experience in the mission field, and formation of a missionary lifestyle.'
                  : 'Formasi Misional dilaksanakan untuk menolong mahasiswa mendapatkan wawasan dan keterampilan untuk bermisi, pengalaman langsung di ladang misi, dan pembentukan gaya hidup misioner.'}
              </p>
              <div className="bg-gray-50 rounded-lg p-4 font-[Inter] font-medium">
                <p className="font-extrabold text-[10px] text-sttb-navy mb-2">
                  {language === 'en' ? 'MEET PROGRAM:' : 'PROGRAM MEET:'}
                </p>
                <p className="text-[10px] text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Mission Education & Exposure training (MEET) for a full month at the end of the second year of study.'
                    : 'Mission Education & Exposure training (MEET) selama satu bulan penuh pada akhir tahun kedua perkuliahan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* MINISTRY PRACTICE */}
        <div id="practice" className="mb-12 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-2xl font-extrabold text-sttb-navy mb-3 font-[Plus_Jakarta_Sans]">
                {language === 'en' ? 'MINISTRY PRACTICE' : 'PRAKTIK PELAYANAN'}
              </h2>
              <p className="text-[11px] text-gray-700 leading-relaxed font-[Inter] font-medium">
                {language === 'en'
                  ? 'Ministry practice aims to help students become better equipped in insights and skills and sharpened in heart and burden to be able to serve effectively through direct experience serving in churches, schools, or ministry organizations.'
                  : 'Praktik pelayanan bertujuan agar mahasiswa semakin diperlengkapi dalam wawasan dan keterampilan serta semakin diasah dalam hati dan keterbebanan untuk dapat melayani dengan efektif melalui pengalaman melayani secara langsung di gereja, sekolah, atau lembaga pelayanan.'}
              </p>
              <div className="bg-gray-50 rounded-lg p-4 font-[Inter] font-medium">
                <p className="font-extrabold text-[10px] text-sttb-navy mb-2">
                  {language === 'en' ? 'TYPES OF MINISTRY PRACTICE:' : 'JENIS PRAKTIK PELAYANAN:'}
                </p>
                <ul className="space-y-1.5">
                  {[
                    'Mission Education & Exposure Training (MEET)',
                    language === 'en' ? 'Weekend Ministry Practice' : 'Praktik Pelayanan Akhir Pekan',
                    language === 'en' ? 'Short-term Ministry Practice' : 'Praktik Pelayanan Jangka Pendek',
                    language === 'en' ? 'Long-term Ministry Practice (1 Year)' : 'Praktik Pelayanan Jangka Panjang (1 Tahun)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[10px] text-gray-700">
                      <div className="w-1 h-1 bg-sttb-red rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://sttb.ac.id/storage/2022/08/senat-4.png"
                alt="Ministry Practice"
                className="w-full h-72 object-cover rounded-lg shadow-md object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}