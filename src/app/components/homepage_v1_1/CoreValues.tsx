import { Cross, BookOpen, HandHeart, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function CoreValues() {
  const { t } = useLanguage();
  const values = [
    {
      icon: Cross,
      title: t('about.corevalues.christcentered'),
      points: [
        'Rencana keselamatan Allah atas seiisi dunia yg berpusat di dalam karya penebusan Kristus.',
        'Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan.',
      ],
    },
    {
      icon: BookOpen,
      title: t('about.corevalues.textcontext'),
      points: [
        'Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja',
        'Responsif terhadap konteks: sosial dan generasional',
      ],
    },
    {
      icon: HandHeart,
      title: t('about.corevalues.stewardship'),
      points: [
        'Integritas (kejujuran, transparansi, akuntabilitas - waktu, uang, relasi)',
        'Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)',
        'Kompetensi (kecakapan akademik, pelayanan, dan penelitian)',
      ],
    },
    {
      icon: TrendingUp,
      title: t('about.corevalues.transformative'),
      points: [
        'Karya penebusan Kristus yg transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)',
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-[#1E3A8A] font-bold tracking-[0.25em] mb-3 font-[Cormorant_Garamond]">
            II
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 font-[Plus_Jakarta_Sans] tracking-wide">
            {t('about.corevalues.title')}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-[#E5E7EB] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0B3F82]/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-5 bg-[#0B3F82]/10 text-[#1E40AF]">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-4 font-[Plus_Jakarta_Sans] text-[#1E3A8A]">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
