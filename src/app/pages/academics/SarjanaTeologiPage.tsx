import AcademicSubNav from "../../components/navigation/AcademicSubNav";
import { Clock, GraduationCap, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import AdmissionsFooter from "../../components/admissions/AdmissionsFooter";

export default function SarjanaTeologiPage() {
  const curriculumRef = useRef<any>(null);

  const programInfo = {
    code: "S.Th.",
    name: "Sarjana Teologi",
    nameEn: "Bachelor of Theology",
    duration: "4 Tahun (8 Semester)",
    credits: "148 SKS",
    accreditation: "Terakreditasi B (BAN-PT)",
  };

  const profilLulusan = [
    { title: "Informed", desc: "Pastor-scholar yang berpengetahuan luas dan aplikatif terhadap tantangan perkembangan pelayanan gerejawi dalam konteks urban." },
    { title: "Transformed", desc: "Pembelajar yang memiliki fondasi spiritualitas yang kokoh dan karakter yang matang." },
    { title: "Transformative", desc: "Pastor-scholar yang berdampak bagi jemaat dan lingkungan tempatnya melayani." },
  ];

  const description = {
    overview: "Program Sarjana Teologi dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan yang memiliki pemahaman teologi Reformed yang mendalam, karakter Kristiani yang matang, dan keterampilan pelayanan yang efektif. Program ini mengintegrasikan pembelajaran akademis dengan pembentukan spiritual dan praktik pelayanan.",
    objectives: [
      "Menghasilkan lulusan yang memiliki pemahaman teologi Reformed yang kokoh dan komprehensif",
      "Membentuk karakter Kristiani yang matang dengan integritas dan dedikasi dalam pelayanan",
      "Mengembangkan keterampilan pelayanan praktis yang relevan dengan konteks gereja dan masyarakat",
      "Mempersiapkan pemimpin gereja yang transformatif dan berorientasi pada misi",
    ],
    careerPaths: [
      "Pendeta/Gembala Sidang",
      "Penginjil/Misionaris",
      "Pemimpin Pelayanan Pemuda",
      "Konselor Pastoral",
      "Dosen/Pengajar Teologi",
      "Penulis/Peneliti Teologi",
    ],
  };

  const studySystem = {
    keterangan: [
      "Perkuliahan dilakukan secara blok teaching selama 3 minggu yang diikuti dengan minggu pengerjaan tugas.",
      "Satu semester terdiri dari 15x pertemuan (kuliah & evaluasi)",
      "Perkuliahan akan berlangsung selama 7 semester dan dilanjut dengan praktik pelayanan selama 6 bulan.",
      "Mahasiswa yang belum menikah wajib tinggal di asrama",
    ],
  };

  const curriculum = {
    "Mata Kuliah Umum": [
      { code: "MKU01", name: "Pancasila dan Kewarganegaraan", sks: 2 },
      { code: "MKU02", name: "Bahasa Indonesia", sks: 2 },
      { code: "MKU03", name: "Bahasa Inggris Teologi", sks: 3 },
      { code: "MKU04", name: "Metode Berpikir", sks: 2 },
      { code: "MKU05", name: "Psikologi Perkembangan Masa Hidup", sks: 2 },
      { code: "MKU06", name: "Metode Penelitian dan Penulisan", sks: 3 },
    ],
    "Mata Kuliah Biblika": [
      { code: "BIB01", name: "Pengantar Alkitab dan Teologi Biblika", sks: 3 },
      { code: "BIB02", name: "Studi Perjanjian Lama 1: Kitab Taurat", sks: 3 },
      { code: "BIB03", name: "Studi Perjanjian Lama 2: Kitab Sejarah", sks: 3 },
      { code: "BIB04", name: "Studi Perjanjian Lama 3: Kitab Sastra", sks: 3 },
      { code: "BIB05", name: "Studi Perjanjian Lama 4: Kitab Nabi-Nabi", sks: 3 },
      { code: "BIB06", name: "Studi Perjanjian Baru 1: Kitab Injil", sks: 3 },
      { code: "BIB07", name: "Studi Perjanjian Baru 2: Kisah Para Rasul dan Surat Paulus", sks: 3 },
      { code: "BIB08", name: "Studi Perjanjian Baru 3: Surat-Surat Umum dan Wahyu", sks: 3 },
      { code: "BIB09", name: "Bahasa Ibrani", sks: 3 },
      { code: "BIB10", name: "Bahasa Yunani", sks: 2 },
      { code: "BIB11", name: "Bahasa Yunani Lanjutan", sks: 2 },
      { code: "BIB12", name: "Hermeneutika Biblika", sks: 3 },
    ],
    "Mata Kuliah Teologi": [
      { code: "TEO01", name: "Prolegomena dan Doktrin Alkitab", sks: 3 },
      { code: "TEO02", name: "Doktrin Allah, Penciptaan dan Manusia", sks: 3 },
      { code: "TEO03", name: "Doktrin Kristus, Dosa dan Keselamatan", sks: 3 },
      { code: "TEO04", name: "Doktrin Roh Kudus dan Akhir Zaman", sks: 3 },
      { code: "TEO05", name: "Doktrin Gereja", sks: 3 },
      { code: "TEO06", name: "Etika Kristen", sks: 3 },
      { code: "TEO07", name: "Apologetika", sks: 2 },
      { code: "TEO08", name: "Teologi Reformed dan Injili", sks: 3 },
    ],
    "Mata Kuliah Sejarah & Budaya": [
      { code: "SEJ01", name: "Sejarah Gereja Dunia", sks: 2 },
      { code: "SEJ02", name: "Sejarah Gereja Indonesia", sks: 2 },
      { code: "SEJ03", name: "Sejarah Teologi", sks: 3 },
      { code: "SEJ04", name: "Fenomenologi Agama", sks: 2 },
      { code: "SEJ05", name: "Iman dan Kebudayaan", sks: 2 },
    ],
    "Mata Kuliah Praktika": [
      { code: "PRA01", name: "Asuhan Kristen", sks: 2 },
      { code: "PRA02", name: "Formasi Spiritualitas", sks: 2 },
      { code: "PRA03", name: "Homiletika 1", sks: 3 },
      { code: "PRA04", name: "Homiletika 2", sks: 3 },
      { code: "PRA05", name: "Pelayanan Ibadah dan Liturgi", sks: 3 },
      { code: "PRA06", name: "Konseling Pastoral 1 - Dasar", sks: 2 },
      { code: "PRA07", name: "Konseling Pastoral 2 - Pastoral Issues", sks: 2 },
      { code: "PRA08", name: "Misiologi", sks: 3 },
      { code: "PRA09", name: "Pelayanan Penggembalaan", sks: 2 },
      { code: "PRA10", name: "Kepemimpinan Kristen dan Manajemen Gereja", sks: 2 },
      { code: "PRA11", name: "Perintisan dan Pengembangan Gereja", sks: 2 },
      { code: "PRA12", name: "Pelayanan Anak Transformatif", sks: 3 },
      { code: "PRA13", name: "Pelayanan Kaum Muda Transformatif", sks: 3 },
      { code: "PRA14", name: "Pelayanan Orang Dewasa Transformatif", sks: 3 },
      { code: "PRA15", name: "Pemuridan Transformatif", sks: 3 },
      { code: "PRA16", name: "Perancangan Kurikulum dan Program Pembinaan", sks: 2 },
      { code: "PRA17", name: "Media Pembelajaran dan Teknologi Pendidikan", sks: 2 },
    ],
    "Konsentrasi": [
      { code: "KON01", name: "Pemuridan & Misi: Gereja dan Pengembangan Masyarakat", sks: 3 },
      { code: "KON02", name: "Pemuridan & Misi: Mobilisasi Misi", sks: 3 },
      { code: "KON03", name: "Pemuridan & Misi: Perancangan Kurikulum Pemuridan di Gereja", sks: 3 },
      { code: "KON04", name: "Pelayanan Anak Holistik: Spiritualitas Anak", sks: 3 },
      { code: "KON05", name: "Pelayanan Anak Holistik: Perancangan Pelayanan Anak Urban", sks: 3 },
      { code: "KON06", name: "Pelayanan Anak Holistik: Pendidikan Anak Integral", sks: 3 },
    ],
    "Mata Kuliah Praktik Lapangan": [
      { code: "PL01", name: "Praktik Pelayanan Media 1 & 2", sks: 0 },
      { code: "PL02", name: "Praktik Pelayanan Akhir Pekan 1, 2, 3, 4, 5", sks: 0 },
      { code: "PL03", name: "Praktik Pelayanan Misi", sks: 1 },
      { code: "PL04", name: "Praktik Pelayanan 2,5 bulan", sks: 2 },
      { code: "PL05", name: "Praktik Pelayanan 6 bulan", sks: 6 },
    ],
    "Mata Kuliah Tugas Akhir": [
      { code: "TA01", name: "Artikel Jurnal", sks: 3 },
      { code: "TA02", name: "Proyek: Merancang Program Pembinaan", sks: 3 },
    ],
  };

  const requirements = {
    requirement: [
      "Minimal lulusan SMA/ sederajat",
      "Pernah terlibat pelayanan gerejawi dan/ lembaga Kristen minimal 2 tahun.",
      "Memiliki panggilan jelas sebagai rohaniwan penuh waktu.",
      "Memiliki kemampuan dasar Bahasa Inggris yang baik, membaca dan memahami teks berbahasa Inggris.",
      "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AcademicSubNav />

      {/* HERO — Blue/Navy */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sttb-navy via-blue-900 to-sttb-navy pt-20 pb-36">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-8 left-8 w-7 h-7 border-t-2 border-l-2 border-yellow-400/50" /><div className="absolute top-8 right-8 w-7 h-7 border-t-2 border-r-2 border-yellow-400/50" /><div className="absolute bottom-8 left-8 w-7 h-7 border-b-2 border-l-2 border-yellow-400/50" /><div className="absolute bottom-8 right-8 w-7 h-7 border-b-2 border-r-2 border-yellow-400/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-yellow-400/60" /><span className="text-yellow-300/90 text-xs font-bold tracking-[0.3em] uppercase">Program Sarjana (S1) · {programInfo.code}</span><span className="h-px w-8 bg-yellow-400/60" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3">{programInfo.name}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm text-blue-200/60 italic tracking-widest mb-12">{programInfo.nameEn}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/admissions" className="bg-sttb-red text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></Link>
            <button onClick={() => curriculumRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all">Lihat Kurikulum</button>
          </motion.div>
        </div>
      </div>

      {/* FLOATING STATS */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[{ icon: Clock, label: "Masa Studi", value: programInfo.duration, color: "text-sttb-navy", bg: "bg-blue-50" }, { icon: GraduationCap, label: "Total SKS", value: programInfo.credits, color: "text-sttb-red", bg: "bg-red-50" }, { icon: ShieldCheck, label: "Akreditasi", value: programInfo.accreditation, color: "text-green-600", bg: "bg-green-50" }].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + idx * 0.1 }} className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className={`p-3 ${item.bg} rounded-xl flex-shrink-0`}><item.icon className={`w-6 h-6 ${item.color}`} /></div>
              <div><p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p><p className="font-bold text-sttb-navy text-sm mt-0.5">{item.value}</p></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-grow">
        {/* PROFIL LULUSAN — Borderless, blue accents */}
        <section className="pt-28 pb-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sttb-navy text-xs font-bold tracking-[0.3em] uppercase">Profil Lulusan</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy">Transformative Pastor-Scholar</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-14">
              {profilLulusan.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                  <div className="text-7xl font-black text-gray-100 group-hover:text-sttb-navy/20 transition-colors duration-500 mb-3 leading-none select-none">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-sttb-navy mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <div className="h-0.5 w-8 bg-sttb-navy mb-3 group-hover:w-14 transition-all duration-500" />
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW + OBJECTIVES — Dark section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-yellow-500/40" /><div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-yellow-500/40" /><div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-yellow-500/40" /><div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-yellow-500/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,_rgba(29,78,216,0.08)_0%,_transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">Gambaran Program</span>
                <div className="h-px w-10 bg-yellow-500 mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-white mb-6">Tentang Program Ini</h2>
                <p className="text-slate-400 leading-relaxed">{description.overview}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">Tujuan Program</span>
                <div className="h-px w-10 bg-yellow-500 mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-white mb-6">Target Pencapaian</h2>
                <ul className="space-y-4">{description.objectives.map((obj, i) => (<li key={i} className="flex items-start gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" /><span className="text-slate-300 text-sm leading-relaxed">{obj}</span></li>))}</ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CAREER + STUDY SYSTEM */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-navy text-xs font-bold tracking-[0.3em] uppercase">Prospek Karir</span>
                <div className="h-px w-10 bg-sttb-navy mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-sttb-navy mb-8">Ladang Pengabdian</h2>
                <ul className="space-y-4">{description.careerPaths.map((c, i) => (<li key={i} className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-sttb-navy flex-shrink-0" /><span className="text-slate-700">{c}</span></li>))}</ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-navy text-xs font-bold tracking-[0.3em] uppercase">Sistem Perkuliahan</span>
                <div className="h-px w-10 bg-sttb-navy mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-sttb-navy mb-8">Tata Cara Belajar</h2>
                <ol className="space-y-5">{studySystem.keterangan.map((s, i) => (<li key={i} className="flex gap-5"><span className="text-sttb-navy font-black text-xl leading-tight flex-shrink-0 tabular-nums">{i + 1}</span><span className="text-slate-600 leading-relaxed text-sm pt-0.5">{s}</span></li>))}</ol>
              </motion.div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS — Dark */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">Penerimaan</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl font-extrabold text-white">Persyaratan Masuk Sarjana</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {requirements.requirement.map((req, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 group">
                  <span className="text-blue-400 font-black text-2xl leading-none flex-shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{req}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM — Containers kept, blue accents */}
        <section ref={curriculumRef} className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sttb-navy text-xs font-bold tracking-[0.3em] uppercase">Struktur Akademik</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy">Kurikulum {programInfo.name}</h2>
            </motion.div>
            <div className="columns-1 md:columns-2 gap-8 space-y-6">
              {Object.entries(curriculum).map(([cat, courses]) => (
                <motion.div key={cat} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="break-inside-avoid bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-blue-100 transition-colors">
                  <div className="bg-blue-50/70 border-b border-gray-100 px-5 py-3.5 flex items-center gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-sttb-navy" /><h3 className="text-xs font-bold text-sttb-navy uppercase tracking-widest">{cat}</h3></div>
                  <div className="px-5 py-4"><ul className="space-y-2">{(courses as any[]).map((c: any, ci: number) => (<li key={ci} className="flex items-start justify-between gap-3 text-sm group py-1.5 border-b border-gray-50 last:border-0"><div className="flex items-start gap-2.5 flex-1"><span className="font-bold text-sttb-navy text-[11px] mt-0.5 min-w-[48px] flex-shrink-0">{c.code}</span><span className="text-slate-600 leading-snug group-hover:text-sttb-navy transition-colors">{c.name}</span></div><span className="text-slate-400 font-bold text-[11px] flex-shrink-0 mt-0.5">{c.sks} SKS</span></li>))}</ul></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <AdmissionsFooter />
    </div>
  );
}
