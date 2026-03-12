import { Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function News() {
  const { t } = useLanguage();
  const mainEvent = {
    title: 'Wisuda Tahun Akademik 2025/2026',
    date: '15 Juni 2026',
    image:
      'https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc3MzExNTIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt:
      'STTB dengan sukacita mengumumkan wisuda ke-53 untuk lulusan program Sarjana Teologi, Magister Divinitas, dan Magister Teologi.',
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
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-[#0b3f82] font-bold tracking-[0.25em] mb-3 font-serif">
            V
          </span>
          <h2 className="text-4xl lg:text-5xl text-[#0b3f82] mb-4 font-[Plus_Jakarta_Sans] font-bold">
            {t('newspage.title')}
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Event */}
          <div className="lg:col-span-2 bg-white border border-gray-200 overflow-hidden">
            <div className="relative">
              <img
                src={mainEvent.image}
                alt={mainEvent.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0b3f82] text-white px-4 py-1 text-xs uppercase tracking-wide font-[Plus_Jakarta_Sans]">
                {mainEvent.date}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl text-slate-900 mb-4 leading-tight font-[Plus_Jakarta_Sans] font-bold">
                {mainEvent.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-[Inter]">{mainEvent.excerpt}</p>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-6 divide-y divide-gray-200">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 pt-6 first:pt-0 border-l-4 border-gray-200 hover:border-[#c9161e] hover:bg-slate-50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 text-[#0b3f82] text-sm font-semibold mb-2">
                  <Calendar size={14} />
                  <span className="font-[Plus_Jakarta_Sans]">{item.date}</span>
                </div>
                <h4 className="text-lg text-slate-900 mb-2 font-[Plus_Jakarta_Sans] font-bold">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 font-[Inter]">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
