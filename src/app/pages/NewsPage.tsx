import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export default function NewsPage() {
  const { t } = useLanguage();

  const allNews = [
    {
      id: 1,
      title: 'STTB Meluncurkan Program Magister Teologi Transformasi Budaya Baru',
      excerpt: 'Program inovatif yang mengintegrasikan teologi dengan studi budaya kontemporer untuk pemimpin gereja masa depan.',
      image: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NzMxMTA5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 Januari 2026',
      category: 'Academic',
    },
    {
      id: 2,
      title: 'Penelitian STTB tentang Gereja Urban Dipublikasikan di Jurnal Internasional',
      excerpt: 'Karya penelitian tentang dinamika gereja urban di Indonesia mendapat pengakuan internasional.',
      image: 'https://images.unsplash.com/photo-1613412007998-214b3bd9f760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NzMwNTYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '10 Januari 2026',
      category: 'Research',
    },
    {
      id: 3,
      title: 'STTB Menjalin Kemitraan dengan Universitas Teologi Terkemuka di Asia',
      excerpt: 'Kerjasama strategis untuk pertukaran mahasiswa dan penelitian bersama dimulai tahun ini.',
      image: 'https://images.unsplash.com/photo-1589872880544-76e896b0592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzMxMDkxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '5 Januari 2026',
      category: 'Partnership',
    },
    {
      id: 4,
      title: 'Perpustakaan Digital STTB Kini Tersedia untuk Publik',
      excerpt: 'Akses gratis ke ribuan jurnal teologi dan sumber daya akademis berkualitas tinggi.',
      image: 'https://images.unsplash.com/photo-1613412007998-214b3bd9f760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NzMwNTYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '28 Desember 2025',
      category: 'Technology',
    },
    {
      id: 5,
      title: 'Alumni STTB Raih Penghargaan Pelayanan Nasional',
      excerpt: 'Pengakuan atas dedikasi dan kontribusi luar biasa dalam pelayanan gereja dan masyarakat.',
      image: 'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzczMTE4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '20 Desember 2025',
      category: 'Alumni',
    },
    {
      id: 6,
      title: 'Seminar Internasional tentang Teologi Kontekstual Asia',
      excerpt: 'STTB menjadi tuan rumah pertemuan teolog terkemuka dari berbagai negara Asia.',
      image: 'https://images.unsplash.com/photo-1680444873773-7c106c23ac52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMDg5OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 Desember 2025',
      category: 'Event',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-sttb-navy mb-4">
            {t('news.title')}
          </h1>
          <p className="text-xl text-sttb-dark-slate/70">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-sttb-red text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-sttb-dark-slate/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{item.date}</time>
                </div>
                <h3 className="text-xl font-bold text-sttb-navy mb-3 group-hover:text-sttb-red transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sttb-dark-slate/70 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-sttb-red font-medium hover:gap-3 transition-all"
                >
                  {t('news.read_more')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}