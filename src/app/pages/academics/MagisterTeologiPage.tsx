import AcademicSubNav from "../../components/navigation/AcademicSubNav";
import { Clock, GraduationCap, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import AdmissionsFooter from "../../components/admissions/AdmissionsFooter";

export default function MagisterTeologiPage() {
  const curriculumRef = useRef<any>(null);

  const programInfo = {
    code: "M.Th.",
    name: "Magister Teologi",
    subName: "Konsentrasi Pastoral Gereja Urban",
    nameEn: "Master of Theology (Urban Church Pastoral)",
    duration: "2 Tahun (4 Semester)",
    credits: "56 SKS",
    accreditation: "Terakreditasi B (BAN-PT)",
  };

  const profilLulusan = [
    { title: "Informed", desc: "Pastor-scholar yang berpengetahuan luas dan aplikatif terhadap tantangan perkembangan pelayanan gerejawi dalam konteks urban." },
    { title: "Transformed", desc: "Pembelajar yang memiliki fondasi spiritualitas yang kokoh dan karakter yang matang." },
    { title: "Transformative", desc: "Pemimpin visioner yang proaktif merespons masalah lintas budaya dalam konteks kota modern." },
  ];

  const description = {
    overview: "Program Magister Teologi konsentrasi Pastoral Gereja Urban dirancang secara khusus untuk menjawab tantangan pelayanan di masyarakat perkotaan yang serba cepat dan kompleks. Mahasiswa akan dilatih untuk memadukan kedalaman teologis Reformed dengan strategi pastoral kontemporer demi memajukan misi kerajaan Allah di tengah kaum urban.",
    objectives: [
      "Menghasilkan Gembala Sidang yang memahami lanskap sosiologis gereja perkotaan",
      "Membentuk karakter pastoral yang tangguh di tengah tekanan kaum modern",
      "Mengembangkan keterampilan konseling krisis spesifik untuk masyarakat urban",
      "Mempersiapkan pendidik teologi yang peduli akan keadilan sosial dan etika kota",
    ],
    careerPaths: [
      "Gembala Jemaat / Senior Pastor",
      "Pemimpin Departemen Konseling Urban",
      "Perintis Gereja Kota (Church Planter)",
      "Dosen Pembimbing Praktika",
      "Pekerja Misi Lintas Budaya di Kota Besar",
    ],
  };

  const studySystem = {
    keterangan: [
      "Sistem pembelajaran dilakukan dalam format perkuliahan modular / semi-blok.",
      "Satu semester terdiri dari interaksi tatap muka, tugas mandiri, dan riset pra-tesis.",
      "Mahasiswa diwajibkan melakukan observasi dan pelayanan lapangan di gereja mitra tipe urban.",
      "Syarat kelulusan mencakup publikasi jurnal ilmiah dan presentasi tesis pascasarjana.",
    ],
  };

  const curriculum = {
    "Mata Kuliah Inti": [
      { code: "TEO501", name: "Teologi Biblika Konteks Urban", sks: 3 },
      { code: "TEO502", name: "Etika Kristen di Era Post-Modern", sks: 3 },
      { code: "PRA501", name: "Kepemimpinan Pastoral Strategis", sks: 3 },
      { code: "PRA502", name: "Konseling Krisis Perkotaan", sks: 3 },
    ],
    "Mata Kuliah Konsentrasi (Urban)": [
      { code: "URB601", name: "Sosiologi dan Demografi Gereja Kota", sks: 3 },
      { code: "URB602", name: "Misiologi Kontekstual Metropol", sks: 3 },
      { code: "URB603", name: "Resolusi Konflik dalam Pelayanan", sks: 3 },
      { code: "URB604", name: "Liturgika Kontemporer", sks: 2 },
    ],
    "Mata Kuliah Riset & Praktek": [
      { code: "RST601", name: "Metodologi Penelitian Teologi Lanjut", sks: 3 },
      { code: "PRK601", name: "Praktik Pelayanan Pastoral Urban", sks: 4 },
      { code: "SEM601", name: "Seminar Isu-Isu Kritis Pastoral", sks: 2 },
    ],
    "Tugas Akhir": [
      { code: "THS700", name: "Penulisan Tesis Magister", sks: 6 },
      { code: "PUB700", name: "Publikasi Jurnal Terindeks", sks: 2 },
    ],
  };

  const requirements = {
    requirement: [
      "Memiliki Ijazah S1 Teologi (S.Th) atau S1 Umum dengan tambahan matrikulasi.",
      "IPK minimal 2.75 dari institusi terakreditasi.",
      "Rekomendasi dari Gembala Sidang atau Pimpinan Sinode (aktif pelayanan min. 3 tahun).",
      "Lulus ujian seleksi masuk (Tes TPA Teologi, Bahasa Inggris, Wawancara).",
      "Surat pernyataan dukungan finansial (sponsor studi).",
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AcademicSubNav />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sttb-red via-red-900 to-sttb-red pt-20 pb-36">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sttb-navy/20 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-8 left-8 w-7 h-7 border-t-2 border-l-2 border-yellow-400/50" />
        <div className="absolute top-8 right-8 w-7 h-7 border-t-2 border-r-2 border-yellow-400/50" />
        <div className="absolute bottom-8 left-8 w-7 h-7 border-b-2 border-l-2 border-yellow-400/50" />
        <div className="absolute bottom-8 right-8 w-7 h-7 border-b-2 border-r-2 border-yellow-400/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-yellow-400/60" />
            <span className="text-yellow-300/90 text-xs font-bold tracking-[0.3em] uppercase">Program Pascasarjana (S2) · {programInfo.code}</span>
            <span className="h-px w-8 bg-yellow-400/60" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3">{programInfo.name}</motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl font-semibold text-red-100 uppercase tracking-widest mb-2">{programInfo.subName}</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm text-red-200/60 italic tracking-widest mb-12">{programInfo.nameEn}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/admissions" className="bg-white text-sttb-red px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></Link>
            <button onClick={() => curriculumRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all">Lihat Kurikulum</button>
          </motion.div>
        </div>
      </div>

      {/* FLOATING STATS */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Clock, label: "Masa Studi", value: programInfo.duration, color: "text-blue-600", bg: "bg-blue-50" },
            { icon: GraduationCap, label: "Total SKS", value: programInfo.credits, color: "text-sttb-red", bg: "bg-red-50" },
            { icon: ShieldCheck, label: "Akreditasi", value: programInfo.accreditation, color: "text-green-600", bg: "bg-green-50" },
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + idx * 0.1 }} className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className={`p-3 ${item.bg} rounded-xl flex-shrink-0`}><item.icon className={`w-6 h-6 ${item.color}`} /></div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                <p className="font-bold text-sttb-navy text-sm mt-0.5">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-grow">
        {/* PROFIL LULUSAN — Borderless */}
        <section className="pt-28 pb-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Profil Lulusan</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy">Transformative Pastor-Scholars</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-14">
              {profilLulusan.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                  <div className="text-7xl font-black text-gray-100 group-hover:text-sttb-red/20 transition-colors duration-500 mb-3 leading-none select-none">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-sttb-navy mb-2 group-hover:text-sttb-red transition-colors">{item.title}</h3>
                  <div className="h-0.5 w-8 bg-sttb-red mb-3 group-hover:w-14 transition-all duration-500" />
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW + OBJECTIVES — Dark section like homepage */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-yellow-500/40" />
          <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-yellow-500/40" />
          <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-yellow-500/40" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-yellow-500/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_rgba(220,38,38,0.07)_0%,_transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Gambaran Program</span>
                <div className="h-px w-10 bg-yellow-500 mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-white mb-6">Tentang Konsentrasi Ini</h2>
                <p className="text-slate-400 leading-relaxed">{description.overview}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Tujuan Program</span>
                <div className="h-px w-10 bg-yellow-500 mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-white mb-6">Target Pencapaian</h2>
                <ul className="space-y-4">
                  {description.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-sttb-red flex-shrink-0 mt-2" />
                      <span className="text-slate-300 text-sm leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CAREER + STUDY SYSTEM — White, borderless */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Prospek Pelayanan</span>
                <div className="h-px w-10 bg-sttb-navy mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-sttb-navy mb-8">Ladang Pengabdian</h2>
                <ul className="space-y-4">
                  {description.careerPaths.map((c, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <ChevronRight className="w-4 h-4 text-sttb-red flex-shrink-0" />
                      <span className="text-slate-700">{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Sistem Perkuliahan</span>
                <div className="h-px w-10 bg-sttb-navy mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-sttb-navy mb-8">Tata Cara Belajar</h2>
                <ol className="space-y-5">
                  {studySystem.keterangan.map((s, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="text-sttb-red font-black text-xl leading-tight flex-shrink-0 tabular-nums">{i + 1}</span>
                      <span className="text-slate-600 leading-relaxed text-sm pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS — Dark, borderless */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Penerimaan</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl font-extrabold text-white">Persyaratan Masuk Magister</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {requirements.requirement.map((req, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 group">
                  <span className="text-sttb-red font-black text-2xl leading-none flex-shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{req}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM — Keep containers */}
        <section ref={curriculumRef} className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Struktur Akademik</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy">Kurikulum Program</h2>
            </motion.div>
            <div className="columns-1 md:columns-2 gap-8 space-y-6">
              {Object.entries(curriculum).map(([cat, courses]) => (
                <motion.div key={cat} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="break-inside-avoid bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-red-100 transition-colors">
                  <div className="bg-red-50/70 border-b border-gray-100 px-5 py-3.5 flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sttb-red" />
                    <h3 className="text-xs font-bold text-sttb-navy uppercase tracking-widest">{cat}</h3>
                  </div>
                  <div className="px-5 py-4">
                    <ul className="space-y-2">
                      {(courses as any[]).map((c: any, ci: number) => (
                        <li key={ci} className="flex items-start justify-between gap-3 text-sm group py-1.5 border-b border-gray-50 last:border-0">
                          <div className="flex items-start gap-2.5 flex-1">
                            <span className="font-bold text-sttb-red text-[11px] mt-0.5 min-w-[48px] flex-shrink-0">{c.code}</span>
                            <span className="text-slate-600 leading-snug group-hover:text-sttb-navy transition-colors">{c.name}</span>
                          </div>
                          <span className="text-slate-400 font-bold text-[11px] flex-shrink-0 mt-0.5">{c.sks} SKS</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
