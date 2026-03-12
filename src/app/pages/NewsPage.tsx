import { Calendar, ArrowRight, Search, ChevronDown, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export default function NewsPage() {

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [taglineOpen, setTaglineOpen] = useState(false);

  const latestNews = [
    'SENAT DOM Cup STTB',
    'Kunjungan dari Scholar Leaders',
    'Ibadah Pembukaan Semester',
    'Selamat Natal 2025 & Tahun Baru 2026',
    'Penutupan Semester dan Natal 2025',
    'STTB Menjadi Tuan Rumah Rapat Pengurus Perkumpulan',
    'Sekolah-Sekolah Teologi di Indonesia (PERSETIA)'
  ];

  const categories = [
    'Akademik (13)',
    'Alumni (5)',
    'Civitas (7)',
    'Institusi (31)',
    'Kegiatan (35)',
    'Kemahasiswaan (13)',
    'Uncategorized (21)'
  ];

  const archives = [
    'February 2026 (2)',
    'January 2026 (1)',
    'December 2025 (2)',
    'November 2025 (1)',
    'October 2025 (5)',
    'September 2025 (1)',
    'August 2025 (3)',
    'May 2025 (1)',
    'April 2025 (2)',
    'March 2025 (4)',
    'February 2025 (2)',
    'November 2024 (4)',
    'October 2024 (2)',
    'August 2024 (1)',
    'July 2024 (1)',
    'June 2024 (2)',
    'May 2024 (1)',
    'April 2024 (3)',
    'March 2024 (1)',
    'February 2024 (3)',
    'January 2024 (4)',
    'December 2023 (1)',
    'October 2023 (1)',
    'August 2023 (1)',
    'July 2023 (1)',
    'June 2023 (4)',
    'May 2023 (3)',
    'April 2023 (5)',
    'March 2023 (9)',
    'February 2023 (5)',
    'January 2023 (5)'
  ];

  const taglines = [
    '20ins (0)', 'O2ins (0)', 'O2ing (0)', 'O2ntu (0)', 'O2ntu (0)',
    'OTM04 (0)', 'Okerjasama (1)', 'Okunjungan (2)', 'O.L.E.A.D (1)',
    'OLEAD (2)', 'Olittlestep (2)', 'Omahasiswa STTB (3)',
    'Omongral (0)', 'Overseas Council (1)', 'Opaskah (1)',
    'Opelayanan anak (2)', 'Operkuliahan (1)', 'Ophilipi (0)',
    'Oprogram S.Th. (1)', 'Opromotion Trip (1)', 'OSTTB (10)',
    'OSTT SAPPI (1)', 'Oteologi Ekologi (0)', 'OUMC (1)', 'Ourban mission (1)'
  ];

  const featuredNews = {
    id: 0,
    title: 'SENAT DOM CUP STTB',
    excerpt: 'SENAT STTB mengadakan DOM CUP 2026',
    image: 'https://images.unsplash.com/photo-1541336528065-8f1fdc9494ed?w=1200',
    date: '11 Desember 2025',
    category: 'Featured',
  };

  const allNews = [
    {
      id: 1,
      title: 'KUNJUNGAN ECLAS INTERNATIONAL',
      excerpt: 'STT Bandung dipercaya mengadakan Grand Orti Templeton untuk menyiapkan project ECLAS (Equipping Christian Leadership in an Age of Science)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      date: 'Oct 24, 2025',
      category: 'Institut',
      readTime: '3 min read',
    },
    {
      id: 2,
      title: 'KUNJUNGAN YAYASAN SEKOLAH KRISTEN ELYON',
      excerpt: 'STT Bandung menerima kunjungan dari Yayasan Sekolah Kristen Elyon, Surabaya',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      date: 'Oct 23, 2025',
      category: 'Institut',
      readTime: '2 min read',
    }
  ];

  const filteredNews =
    activeCategory === 'All'
      ? allNews
      : allNews.filter((news) => news.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="bg-white py-20 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
            BERITA & <span className="text-red-500">DOKUMENTASI</span>
          </h1>

          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terkini dari Sekolah Tinggi Teologi Bandung
          </p>

        </div>
      </div>

      {/* FEATURED */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <article className="relative rounded-xl overflow-hidden shadow-lg">

            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              loading="lazy"
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center p-10">

              <div>

                <span className="px-4 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                  {featuredNews.category}
                </span>

                <h2 className="text-4xl font-bold text-white mt-4 mb-4">
                  {featuredNews.title}
                </h2>

                <p className="text-lg text-gray-200 mb-6 max-w-xl">
                  {featuredNews.excerpt}
                </p>

                <Link
                  to={`/news/${featuredNews.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  READ MORE
                  <ArrowRight className="w-5 h-5" />
                </Link>

              </div>

            </div>

          </article>

        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-16">

          {/* BERITA TERKINI */}
          <div>

            <h3 className="text-red-500 text-3xl font-bold uppercase text-center">
              BERITA TERKINI
            </h3>

            <div className="w-full h-[3px] bg-blue-900 mt-2 mb-6"></div>

            <ul className="space-y-4 text-right text-gray-700">
              {latestNews.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>

          {/* KATEGORI BERITA */}
          <div>

            <h3 className="text-red-500 text-3xl font-bold uppercase text-center">
              KATEGORI BERITA
            </h3>

            <div className="w-full h-[3px] bg-blue-900 mt-2 mb-6"></div>

            <ul className="space-y-4 text-right text-gray-700">
              {categories.map((cat, i) => (
                <li key={i}>{cat}</li>
              ))}
            </ul>

          </div>

          {/* ARSIP BERITA */}
          <div>

            <button
              onClick={() => setArchiveOpen(!archiveOpen)}
              className="w-full flex justify-center items-center gap-3"
            >
              <h3 className="text-red-500 text-3xl font-bold uppercase">
                ARSIP BERITA
              </h3>

              <ChevronDown
                className={`transition-transform ${archiveOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div className="w-full h-[3px] bg-blue-900 mt-2 mb-6"></div>

            {archiveOpen && (

              <ul className="space-y-3 text-right text-gray-700">

                {archives.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}

              </ul>

            )}

          </div>

          {/* TAGLINE */}
          <div>

            <button
              onClick={() => setTaglineOpen(!taglineOpen)}
              className="w-full flex justify-center items-center gap-3"
            >
              <h3 className="text-red-500 text-3xl font-bold uppercase">
                TAGLINE
              </h3>

              <ChevronDown
                className={`transition-transform ${taglineOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div className="w-full h-[3px] bg-blue-900 mt-2 mb-6"></div>

            {taglineOpen && (

              <div className="flex flex-wrap gap-2 justify-end text-sm text-gray-700">

                {taglines.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}

              </div>

            )}

          </div>

        </aside>

        {/* NEWS GRID */}
        <main className="lg:col-span-8">

          <div className="grid md:grid-cols-2 gap-8">

            {filteredNews.map((item) => (

              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">

                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>

                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {item.excerpt}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-red-600 font-bold text-sm"
                  >
                    read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}