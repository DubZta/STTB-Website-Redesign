import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, BookOpen, Heart, Users, Globe } from 'lucide-react';

export default function StudentDevelopmentPage() {
const [activeSection, setActiveSection] = useState<string>('community');

  useEffect(() => {
    const sections = ['community', 'chapel', 'pastoral', 'discipleship', 'spiritual', 'mission', 'practice'];
    const handleScroll = () => {
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // 120px header + 56px subnav = ~176px
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 184;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'community', label: 'Kehidupan Komunitas' },
    { id: 'chapel', label: 'Kapel & Forum Pembinaan' },
    { id: 'pastoral', label: 'Kelompok Pastoral' },
    { id: 'discipleship', label: 'Kelompok Pemuridan' },
    { id: 'spiritual', label: 'Formasi Spiritual' },
    { id: 'mission', label: 'Formasi Misional' },
    { id: 'practice', label: 'Praktik Pelayanan' },
  ];

  const formationAreas = [
    {
      icon: BookOpen,
      title: 'Formasi Pengajaran',
      desc: 'Bertumbuh dalam pengenalan akan Tuhan dan firman-Nya',
    },
    {
      icon: Heart,
      title: 'Formasi Spiritual',
      desc: 'Bertumbuh dalam hubungan pribadi dengan Tuhan',
    },
    {
      icon: Users,
      title: 'Formasi Karakter',
      desc: 'Bertumbuh dalam karakter serupa Kristus',
    },
    {
      icon: Globe,
      title: 'Formasi Pelayanan',
      desc: 'Bertumbuh dalam pelayanan di tubuh Kristus dan misi',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sttb-navy via-blue-900 to-sttb-navy py-20 md:py-28">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left — text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="border-l-4 border-sttb-red pl-5 mb-7">
                <span className="text-blue-200 text-xs font-bold uppercase tracking-[0.25em]">
                  {'Kehidupan Kampus'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                {'Pembinaan Mahasiswa'}
              </h1>
              <p className="text-blue-100/90 text-base leading-loose mb-8 max-w-lg">
                {'Pembentukan mahasiswa secara holistik melalui berbagai program dan kegiatan yang dirancang untuk mengembangkan pelayan Tuhan.'}
              </p>
              <ul className="space-y-3">
                {[
                  'Kehidupan Komunitas',
                  'Kapel & Forum Pembinaan',
                  'Kelompok Pastoral & Pemuridan',
                  'Formasi Spiritual & Misional',
                  'Praktik Pelayanan',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-sttb-red flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — image */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="relative border-4 border-sttb-red rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
                  alt="Student Development"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section Nav ── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative flex-shrink-0 px-3 py-1.5 rounded text-sm font-medium transition-all duration-200
                  ${activeSection === item.id
                    ? 'bg-sttb-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <ChevronDown className="w-3 h-3 absolute -bottom-2 left-1/2 -translate-x-1/2 text-sttb-navy" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* COMMUNITY LIFE */}
        <div id="community" className="scroll-mt-[200px]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
                {'Bagian 01'}
              </span>
              <h2 className="text-2xl font-extrabold text-sttb-navy mt-2 mb-5">
                {'KEHIDUPAN KOMUNITAS'}
              </h2>
              <div className="w-10 h-0.5 bg-sttb-red rounded-full mb-6" />
              <div className="space-y-4 text-base text-gray-600 leading-loose">
                <p>
                  {'Sepanjang masa studi, mahasiswa akan hidup bersama, belajar bersama, bertumbuh bersama dalam komunitas.'}
                </p>
                <p>
                  {'Semua mahasiswa penuh waktu dalam program S.Th., S.Pd.K., dan M.Th. matrikulasi yang belum menikah wajib tinggal di dalam asrama.'}
                </p>
                <p>
                  {'Sebagai bagian dari komunitas, setiap mahasiswa perlu belajar saling mengasihi, saling menolong, dan saling menjaga. "Panduan Kehidupan Mahasiswa STTB" dibuat untuk membantu mahasiswa belajar dan bertumbuh di kampus dan asrama.'}
                </p>
                <p>
                  {'Bidang kemahasiswaan dipimpin oleh Waket III dengan dibantu oleh staf, kepala asrama, pembimbing pastoral, pembina pemuridan, konselor, senat, ketua lorong, ketua kamar, pengurus angkatan, dan bagian dapur.'}
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070"
                alt="Community Life"
                className="w-full h-72 object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* CHAPEL & FORMATION FORUM */}
        <div id="chapel" className="scroll-mt-[200px] bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
              {'Bagian 02'}
            </span>
            <h2 className="text-2xl font-extrabold text-sttb-navy mt-2 mb-2">
              {'KAPEL & FORUM PEMBINAAN'}
            </h2>
            <div className="w-10 h-0.5 bg-sttb-red rounded-full mb-8" />
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-relaxed">
                  {'Kapel dilaksanakan beberapa kali dalam setiap minggu dengan format yang bervariasi, antara lain berupa:'}
                </p>
                <ul className="space-y-2">
                  {[
                    'Ibadah liturgis',
                    'Ibadah kontemporer',
                    'Ibadah kontemplatif',
                    'Persekutuan Doa Misi',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-sttb-red flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-700 leading-relaxed">
                  {'Konten dibawakan oleh dosen, alumni, para pemimpin lembaga pelayanan/misi, narasumber lain yang diundang, maupun khotbah mahasiswa.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-7 shadow-md border border-gray-100">
                <h4 className="font-bold text-sttb-red text-sm mb-4 uppercase tracking-wide">
                  {'Empat Bidang Transformasi'}
                </h4>
                <div className="space-y-4">
                  {formationAreas.map((area, i) => {
                    const AreaIcon = area.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 border-l-2 border-sttb-navy pl-3">
                        <AreaIcon className="w-4 h-4 text-sttb-navy flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-sttb-navy text-sm">{area.title}</p>
                          <p className="text-sm text-gray-600">{area.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PASTORAL GROUPS */}
        <div id="pastoral" className="scroll-mt-[200px]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070"
                alt="Pastoral Groups"
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
                {'Bagian 03'}
              </span>
              <h2 className="text-2xl font-extrabold text-sttb-navy mt-2 mb-2">
                {'KELOMPOK PASTORAL'}
              </h2>
              <div className="w-10 h-0.5 bg-sttb-red rounded-full mb-5" />
              <div className="space-y-4 text-base text-gray-600 leading-loose">
                <p>
                  {'Kelompok pastoral merupakan sarana untuk mendampingi mahasiswa secara pembelajaran-akademik, kerohanian-karakter, dan pelayanan-vokasional.'}
                </p>
                <p>
                  {'Setiap kelompok dipimpin oleh seorang pembimbing pastoral, yang menjadi orangtua rohani yang mendampingi sejumlah mahasiswa dalam satu angkatan sepanjang empat tahun studi di STTB dan satu tahun praktik pelayanan.'}
                </p>
                <p>
                  {'Pertemuan kelompok dilakukan dua minggu sekali. Pertemuan pribadi-ke-pribadi dilakukan berdasarkan keperluan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DISCIPLESHIP GROUPS */}
        <div id="discipleship" className="scroll-mt-[200px] bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
              {'Bagian 04'}
            </span>
            <h2 className="text-2xl font-extrabold text-sttb-navy mt-2 mb-2">
              {'KELOMPOK PEMURIDAN'}
            </h2>
            <div className="w-10 h-0.5 bg-sttb-red rounded-full mx-auto mb-8" />
            <div className="flex justify-center items-center gap-4 mb-8">
              {[
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400",
              ].map((src, i) => (
                <img key={i} src={src} alt={`Discipleship ${i + 1}`}
                  className={`rounded-full object-cover shadow-lg ring-4 ring-white ${i === 1 ? 'w-28 h-28' : 'w-20 h-20'}`}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-sttb-navy mb-4 uppercase tracking-wide">
              {'Menolong mahasiswa belajar dan bertumbuh bersama mengenai dasar-dasar pertumbuhan iman Kristen'}
            </p>
            <div className="grid md:grid-cols-2 gap-5 text-left mt-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <p className="text-base text-gray-600 leading-loose">
                  {'Setiap kelompok dipimpin oleh pembimbing pemuridan, yang menjadi "kakak rohani" yang menolong mahasiswa mengalami perubahan pola pikir dan gaya hidup sepanjang tiga semester pertama di STTB.'}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <p className="text-base text-gray-600 leading-loose">
                  {'Pertemuan kelompok dilakukan satu minggu sekali pada hari yang ditentukan. Para pembimbing pemuridan dimentor secara khusus oleh pembina pemuridan putra dan putri.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SPIRITUAL & MISSIONAL FORMATION */}
        <div id="spiritual" className="scroll-mt-[200px]">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
                {'Bagian 05'}
              </span>
              <h2 className="text-xl font-extrabold text-sttb-navy mb-1">
                {'FORMASI SPIRITUAL'}
              </h2>
              <div className="w-10 h-0.5 bg-sttb-red rounded-full" />
              <p className="text-base text-gray-600 leading-loose">
                {'Waktu teduh merupakan waktu untuk bersekutu dengan Tuhan secara pribadi melalui firman dan doa yang wajib dilakukan setiap pagi.'}
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-sm text-sttb-navy mb-2 uppercase tracking-wide">
                  {'Program Retreat:'}
                </p>
                <ul className="space-y-1.5">
                  {[
                    'Retreat awal studi',
                    'Mini retreat setiap semester',
                    'Retreat akhir studi',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-sttb-red rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div id="mission" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 scroll-mt-[200px]">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
                {'Bagian 06'}
              </span>
              <h2 className="text-xl font-extrabold text-sttb-navy mb-1">
                {'FORMASI MISIONAL'}
              </h2>
              <div className="w-10 h-0.5 bg-sttb-red rounded-full" />
              <p className="text-base text-gray-600 leading-loose">
                {'Formasi Misional dilaksanakan untuk menolong mahasiswa mendapatkan wawasan dan keterampilan untuk bermisi, pengalaman langsung di ladang misi, dan pembentukan gaya hidup misioner.'}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-sm text-sttb-navy mb-2 uppercase tracking-wide">
                  {'Program MEET:'}
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {'Mission Education & Exposure training (MEET) selama satu bulan penuh pada akhir tahun kedua perkuliahan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* MINISTRY PRACTICE */}
        <div id="practice" className="scroll-mt-[200px] mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
                {'Bagian 07'}
              </span>
              <h2 className="text-2xl font-extrabold text-sttb-navy mt-2 mb-2">
                {'PRAKTIK PELAYANAN'}
              </h2>
              <div className="w-10 h-0.5 bg-sttb-red rounded-full mb-5" />
              <p className="text-base text-gray-600 leading-loose">
                {'Praktik pelayanan bertujuan agar mahasiswa semakin diperlengkapi dalam wawasan dan keterampilan serta semakin diasah dalam hati dan keterbebanan untuk dapat melayani dengan efektif melalui pengalaman melayani secara langsung di gereja, sekolah, atau lembaga pelayanan.'}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-sm text-sttb-navy mb-2 uppercase tracking-wide">
                  {'Jenis Praktik Pelayanan:'}
                </p>
                <ul className="space-y-1.5">
                  {[
                    'Mission Education & Exposure Training (MEET)',
                    'Praktik Pelayanan Akhir Pekan',
                    'Praktik Pelayanan Jangka Pendek',
                    'Praktik Pelayanan Jangka Panjang (1 Tahun)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-sttb-red rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070"
                alt="Ministry Practice"
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}