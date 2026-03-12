import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';

export default function NewsEventsSection() {
  const { t } = useLanguage();

  const newsItems = [
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
  ];

  const events = [
    {
      id: 1,
      title: 'Seminar Nasional Teologi dan Transformasi Sosial',
      date: '20 Februari 2026',
      time: '09:00 - 16:00 WIB',
      location: 'Auditorium STTB',
      type: 'Seminar',
    },
    {
      id: 2,
      title: 'Open House & Campus Tour 2026',
      date: '5 Maret 2026',
      time: '10:00 - 14:00 WIB',
      location: 'Kampus STTB',
      type: 'Open House',
    },
    {
      id: 3,
      title: 'Worship Night - Celebrating God\'s Faithfulness',
      date: '15 Maret 2026',
      time: '18:00 - 21:00 WIB',
      location: 'Chapel STTB',
      type: 'Worship',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* News Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                {t('news.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {t('news.subtitle')}
              </p>
            </div>
            <Link
              to="/news"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-sttb-navy text-white rounded-lg hover:bg-sttb-navy-light transition-colors font-medium text-sm"
            >
              {t('news.view_all')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
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
                  <div className="flex items-center gap-2 text-xs text-sttb-dark-slate/60 mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{item.date}</time>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-sttb-navy mb-3 group-hover:text-sttb-red transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-sttb-dark-slate/70 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-sttb-red font-medium hover:gap-3 transition-all text-xs"
                  >
                    {t('news.read_more')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Link
            to="/news"
            className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-sttb-navy text-white rounded-lg hover:bg-sttb-navy-light transition-colors font-medium mt-8 w-full sm:w-auto mx-auto"
          >
            {t('news.view_all')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Events Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                {t('events.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {t('events.subtitle')}
              </p>
            </div>
            <Link
              to="/events"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-sttb-red text-white rounded-lg hover:bg-sttb-red/90 transition-colors font-medium text-sm"
            >
              {t('events.view_all')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-sttb-red/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-sttb-red rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                    <span className="text-xs font-medium">
                      {event.date.split(' ')[1].toUpperCase()}
                    </span>
                    <span className="text-2xl font-bold leading-none">
                      {event.date.split(' ')[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-sttb-navy/10 text-sttb-navy text-xs font-semibold rounded-full mb-2">
                      {event.type}
                    </span>
                    <h3 className="font-bold text-sm md:text-base text-gray-900 mb-2 group-hover:text-sttb-red transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-1 text-xs text-sttb-dark-slate/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Newspaper className="w-3.5 h-3.5" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/events"
            className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-sttb-red text-white rounded-lg hover:bg-sttb-red/90 transition-colors font-medium mt-8 w-full sm:w-auto mx-auto"
          >
            {t('events.view_all')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}