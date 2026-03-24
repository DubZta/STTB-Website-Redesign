import AcademicSubNav from "../../components/navigation/AcademicSubNav";
import { Clock, GraduationCap, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import AdmissionsFooter from "../../components/admissions/AdmissionsFooter";

export default function MagisterMinistriGerejawiPage() {
  const curriculumRef = useRef<any>(null);

  const programInfo = {
    code: "M.Min.",
    name: "Magister Ministri",
    subName: "Konsentrasi Teologi Pelayanan Gerejawi",
    nameEn: "Master of Ministry (Church Ministry Theology)",
    duration: "2 Tahun (4 Semester)",
    credits: "48 SKS",
    accreditation: "Terakreditasi B (BAN-PT)",
  };

  const profilLulusan = [
    { title: "Theological Practitioner", desc: "Praktisi teologi mumpuni yang mampu menerjemahkan doktrin berat menjadi bahan ajar rohani aplikatif." },
    { title: "Liturgy Innovator", desc: "Lulusan dibekali pengetahuan sejarah gereja untuk menyusun liturgi ibadah dan kesenian musikal gerejawi yang kokoh." },
    { title: "Parish Empowerer", desc: "Aktivis pelayan Tuhan yang sanggup mengeksekusi misi revitalisasi kerohanian anggota jemaat." },
  ];

  const description = {
    overview: "Program Magister Ministri Konsentrasi Teologi Pelayanan Gerejawi berfokus para pelayan penuh waktu, majelis, aktivis, hingga pemimpin komisi gerejawi yang ingin mendalami fondasi teologi Reformed secara komprehensif tanpa harus melangkah ke program akademik (M.Th.). Ini adalah rute yang tepat untuk merevitalisasi semangat ibadah, memperkuat musik & liturgi gereja, dan mempertajam kualitas sekolah minggu dan bina pemuda.",
    objectives: [
      "Memberikan fondasi Teologi Sistematis Alkitabiah kepada segenap aktivis non-Pendeta",
      "Menggali formasi spiritualitas yang sehat dan pembedaan doktrin (discernment) agar terhindar dari ajaran sesat kontemporer",
      "Memperlengkapi keahlian menyusun pengajaran (Bible Study) untuk kaum awam",
      "Mengeksplorasi wawasan liturgika yang kaya makna namun relevan dengan tantangan masa depan",
    ],
    careerPaths: [
      "Pembina Youth & Teen Ministry",
      "Ketua Komisi & Majelis Jemaat",
      "Pendamping Musik & Liturgi Ibadah (Music Director)",
      "Ketua Pendidikan Agama Gereja Lokal",
      "Fasilitator Pemuridan (Discipleship Coordinator)",
    ],
  };

  const studySystem = {
    keterangan: [
      "Perpaduan kelas reguler akhir pekan (Weekend intensive) dengan penugasan mandiri.",
      "Seluruh riset tugas didasarkan pada pengembangan program dan kepanitiaan gereja asal atau lembaga Kristen terafiliasi.",
      "Setiap mahasiswa akan memiliki seorang mentor rohani akademis selama menempuh rentang studi S2.",
      "Penyelesaian studi diukur dari komprehensitas presentasi proyek terapan kemahasiswaan (Project-Based Graduation).",
    ],
  };

  const curriculum = {
    "Pondasi Teologi Klasik untuk Awam Lanjut": [
      { code: "THEO501", name: "Dogmatika / Teologi Sistematika Ringkas", sks: 3 },
      { code: "THEO502", name: "Sejarah Doktrin Kristiani Lanjut", sks: 3 },
      { code: "THEO503", name: "Pengantar Teks Asli dan Studi Biblika", sks: 3 },
      { code: "THEO504", name: "Apologetika Injili Kontemporer", sks: 3 },
    ],
    "Pelayanan Musik, Ibadah, & Pengajaran": [
      { code: "CHM601", name: "Teologi Ibadah dan Desain Liturgi", sks: 3 },
      { code: "CHM602", name: "Kepemimpinan Pujian & Musik Gerejawi", sks: 3 },
      { code: "CHM603", name: "Pedagogi Bina Iman Anak & Remaja", sks: 3 },
      { code: "CHM604", name: "Metodologi Pemahaman Alkitab (B.A.S)", sks: 3 },
    ],
    "Spiritualitas dan Misi Integral": [
      { code: "SPR601", name: "Pendidikan Pertumbuhan Rohani Komunitas", sks: 3 },
      { code: "SPR602", name: "Gereja dan Aksi Transformasi Sosial Misi", sks: 3 },
      { code: "SPR603", name: "Dinamika Kerja Kelompok Paroki / Majelis", sks: 3 },
    ],
    "Sintesis Terapan Pastoral": [
      { code: "PRK701", name: "Observasi Celah Pelayanan Lokal", sks: 3 },
      { code: "PRJ710", name: "Pengembangan Kurikulum/Program Jemaat (Proyek)", sks: 6 },
      { code: "SEM710", name: "Kolokium Implementasi Kurikulum", sks: 2 },
    ],
  };

  const requirements = {
    requirement: [
      "Memiliki Ijazah S1 Semua Jurusan (Sekuler) / Sarjana Sains Terapan (IPK Bebas Minimum 2.75).",
      "Pernah melayani dalam lingkungan kepanitiaan, musik, pemuda, majelis, anak minimum 2 tahun.",
      "Surat referensi dari gembala jemaat sebagai bukti partisipasi aktif pelayanan gereja setempat.",
      "Melampirkan sebuah tulisan esai singkat (3-4 halaman) mengapa gereja bapak/ibu membutuhkan inovasi pelayanan.",
      "Lulus tes minat dan bakat kejuruan rohani (Interview).",
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AcademicSubNav />
      <div className="relative overflow-hidden bg-gradient-to-br from-sttb-red via-red-900 to-sttb-red pt-20 pb-36">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sttb-navy/20 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-8 left-8 w-7 h-7 border-t-2 border-l-2 border-yellow-400/50" /><div className="absolute top-8 right-8 w-7 h-7 border-t-2 border-r-2 border-yellow-400/50" /><div className="absolute bottom-8 left-8 w-7 h-7 border-b-2 border-l-2 border-yellow-400/50" /><div className="absolute bottom-8 right-8 w-7 h-7 border-b-2 border-r-2 border-yellow-400/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-yellow-400/60" /><span className="text-yellow-300/90 text-xs font-bold tracking-[0.3em] uppercase">Program Pascasarjana (S2) · {programInfo.code}</span><span className="h-px w-8 bg-yellow-400/60" />
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[{ icon: Clock, label: "Masa Studi", value: programInfo.duration, color: "text-blue-600", bg: "bg-blue-50" }, { icon: GraduationCap, label: "Total SKS", value: programInfo.credits, color: "text-sttb-red", bg: "bg-red-50" }, { icon: ShieldCheck, label: "Akreditasi", value: programInfo.accreditation, color: "text-green-600", bg: "bg-green-50" }].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + idx * 0.1 }} className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className={`p-3 ${item.bg} rounded-xl flex-shrink-0`}><item.icon className={`w-6 h-6 ${item.color}`} /></div>
              <div><p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p><p className="font-bold text-sttb-navy text-sm mt-0.5">{item.value}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex-grow">
        <section className="pt-28 pb-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Profil Lulusan</span>
              <div className="flex items-center justify-center gap-3 mt-3 mb-5"><div className="h-px w-10 bg-yellow-500" /><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /><div className="h-px w-10 bg-yellow-500" /></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy">Dedicated Implementers</h2>
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
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-yellow-500/40" /><div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-yellow-500/40" /><div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-yellow-500/40" /><div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-yellow-500/40" />
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
                <ul className="space-y-4">{description.objectives.map((obj, i) => (<li key={i} className="flex items-start gap-4"><div className="w-1.5 h-1.5 rounded-full bg-sttb-red flex-shrink-0 mt-2" /><span className="text-slate-300 text-sm leading-relaxed">{obj}</span></li>))}</ul>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Prospek Pelayanan</span>
                <div className="h-px w-10 bg-sttb-navy mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-sttb-navy mb-8">Ladang Pengabdian</h2>
                <ul className="space-y-4">{description.careerPaths.map((c, i) => (<li key={i} className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-sttb-red flex-shrink-0" /><span className="text-slate-700">{c}</span></li>))}</ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sttb-red text-xs font-bold tracking-[0.3em] uppercase">Sistem Perkuliahan</span>
                <div className="h-px w-10 bg-sttb-navy mt-3 mb-6" />
                <h2 className="text-2xl font-extrabold text-sttb-navy mb-8">Tata Cara Belajar</h2>
                <ol className="space-y-5">{studySystem.keterangan.map((s, i) => (<li key={i} className="flex gap-5"><span className="text-sttb-red font-black text-xl leading-tight flex-shrink-0 tabular-nums">{i + 1}</span><span className="text-slate-600 leading-relaxed text-sm pt-0.5">{s}</span></li>))}</ol>
              </motion.div>
            </div>
          </div>
        </section>
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
                  <div className="bg-red-50/70 border-b border-gray-100 px-5 py-3.5 flex items-center gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-sttb-red" /><h3 className="text-xs font-bold text-sttb-navy uppercase tracking-widest">{cat}</h3></div>
                  <div className="px-5 py-4"><ul className="space-y-2">{(courses as any[]).map((c: any, ci: number) => (<li key={ci} className="flex items-start justify-between gap-3 text-sm group py-1.5 border-b border-gray-50 last:border-0"><div className="flex items-start gap-2.5 flex-1"><span className="font-bold text-sttb-red text-[11px] mt-0.5 min-w-[48px] flex-shrink-0">{c.code}</span><span className="text-slate-600 leading-snug group-hover:text-sttb-navy transition-colors">{c.name}</span></div><span className="text-slate-400 font-bold text-[11px] flex-shrink-0 mt-0.5">{c.sks} SKS</span></li>))}</ul></div>
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
