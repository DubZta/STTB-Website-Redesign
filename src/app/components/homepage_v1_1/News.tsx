import { Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';

export function News() {
  const { t } = useLanguage();
  const mainEvent = {
    title: 'Wisuda Tahun Akademik 2025/2026', // Keep for now as I need specific data
    date: '15 Juni 2026',
    image: '/wisuda.jpg',
    excerpt: 'STTB dengan sukacita mengumumkan wisuda ke-53 untuk lulusan program Sarjana Teologi, Magister Divinitas, dan Magister Teologi.',
  };

  const newsItems = [
    {
      title: 'Seminar Nasional: Teologi Kontemporer',
      date: '20 Maret 2026',
      excerpt:
        'Menghadirkan pembicara dari berbagai denominasi untuk membahas relevansi teologi di zaman digital.',
    },
    {
      title: 'Pembukaan Pendaftaran Tahun Akademik 2026/2027',
      date: '1 Maret 2026',
      excerpt:
        'Pendaftaran mahasiswa baru untuk semua program studi telah dibuka. Dapatkan beasiswa hingga 50%.',
    },
    {
      title: 'Konferensi Alumni STTB 2026',
      date: '10 April 2026',
      excerpt:
        'Pertemuan alumni untuk berbagi pengalaman pelayanan dan memperkuat jejaring.',
    },
    {
      title: 'Peluncuran Program Sertifikat Pelayanan Anak',
      date: '5 Februari 2026',
      excerpt:
        'Program pelatihan singkat untuk melengkapi pelayan anak dalam gereja lokal.',
    },
  ];

  return (
    <section id="news" className="py-20 lg:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-[#0b3f82] font-bold tracking-[0.25em] mb-3">
            V
          </span>
          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-[#0b3f82] mb-4 font-bold">
              {t('newspage.title')}
            </h2>
          </MaskText>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Event */}
          <GlowCard
            className="lg:col-span-2 bg-white border border-gray-200 overflow-hidden group"
            customSize
            glowColor="rgba(11, 63, 130, 0.3)"
          >
            <div className="relative overflow-hidden">
              <img
                src={mainEvent.image}
                alt={mainEvent.title}
                className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-[#0b3f82] text-white px-4 py-1 text-xs uppercase tracking-wide z-10 transition-transform group-hover:scale-110">
                {mainEvent.date}
              </div>
              <div className="absolute inset-0 bg-[#0b3f82]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#E31D1A] group-hover:w-full transition-all duration-700" />
              <h3 className="text-2xl text-slate-900 mb-4 leading-tight font-bold group-hover:text-[#0b3f82] transition-colors">
                {mainEvent.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{mainEvent.excerpt}</p>
            </div>
          </GlowCard>

          {/* News List */}
          <div className="space-y-6 divide-y divide-gray-200">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-5 pt-6 first:pt-0 border-l-4 border-gray-200 hover:border-[#E31D1A] hover:bg-slate-50 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#0b3f82]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#0b3f82] text-sm font-semibold mb-2 group-hover:text-[#E31D1A] transition-colors">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-lg text-slate-900 mb-2 font-bold group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}