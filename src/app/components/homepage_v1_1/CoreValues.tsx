import { Cross, BookOpen, HandHeart, TrendingUp } from 'lucide-react';
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';

export function CoreValues() {

const values = [
    {
      icon: Cross,
      title: 'Christ Centered',
      points: [
        'Rencana keselamatan Allah atas seiisi dunia yg berpusat di dalam karya penebusan Kristus.',
        'Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan.',
      ],
    },
    {
      icon: BookOpen,
      title: 'Teks - Konteks',
      points: [
        'Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja',
        'Responsif terhadap konteks: sosial dan generasional',
      ],
    },
    {
      icon: HandHeart,
      title: 'Penatalayanan',
      points: [
        'Integritas (kejujuran, transparansi, akuntabilitas - waktu, uang, relasi)',
        'Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)',
        'Kompetensi (kecakapan akademik, pelayanan, dan penelitian)',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Transformatif',
      points: [
        'Karya penebusan Kristus yg transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)',
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-sttb-navy font-bold tracking-[0.25em] mb-3">
            II
          </span>
          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl font-bold text-sttb-navy mb-4 tracking-wide">
              {'Nilai-Nilai Inti'}
            </h2>
          </MaskText>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-yellow-500" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="h-px w-16 bg-yellow-500" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <GlowCard
                key={index}
                customSize
                className="group relative bg-white border border-[#E5E7EB] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sttb-navy/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-5 bg-sttb-navy/10 text-blue-800">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-sttb-navy">
                  {value.title}
                </h3>

                <ul className="space-y-3">
                  {value.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-slate-600 leading-relaxed text-sm flex items-start gap-3"
                    >
                      <span className="inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-[#3B82F6]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}