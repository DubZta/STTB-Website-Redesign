import { Calendar, ArrowRight, Search, ChevronDown, Clock, Loader2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useMemo } from 'react';
import { AuroraBackground } from '../components/homepage_v1_1/ui/aurora-background';
import useSWR from 'swr';
import { BackendApiUrl, GetNewsListUrl } from '../functions/BackendApiUrl';
import type { GetNewsListResponse } from '../../admin/types/News';

export default function NewsPage() {

const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [taglineOpen, setTaglineOpen] = useState(false);

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: newsResponse, isLoading } = useSWR<GetNewsListResponse>(
    GetNewsListUrl(1, 100),
    fetcher
  );

  const allNews = useMemo(() => newsResponse?.items ?? [], [newsResponse]);

  const latestNews = useMemo(() => {
    return allNews.slice(0, 7).map(n => n.title);
  }, [allNews]);

  const categories = useMemo(() => {
    const cats: Record<string, number> = {};
    allNews.forEach(n => {
      cats[n.category] = (cats[n.category] || 0) + 1;
    });
    return Object.entries(cats).map(([name, count]) => `${name} (${count})`);
  }, [allNews]);

  // Archives and Taglines are still mock as they require complex aggregation or separate endpoints
  const archives = [
    'February 2026 (2)',
    'January 2026 (1)',
    'December 2025 (2)',
  ];

  const taglines = [
    'OSTTB (10)', 'OLEAD (2)'
  ];

  const featuredNews = useMemo(() => {
    if (allNews.length === 0) return null;
    return allNews[0];
  }, [allNews]);

  const filteredNews = useMemo(() => {
    let filtered = allNews;
    if (activeCategory !== 'All') {
      filtered = filtered.filter((news) => news.category === activeCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter((news) => 
        news.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [allNews, activeCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <AuroraBackground className="py-20 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
            {'BERITA'} & <span className="text-red-500">{'DOKUMENTASI'}</span>
          </h1>

          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {'Ikuti perkembangan terkini dari Sekolah Tinggi Teologi Bandung'}
          </p>

        </div>
      </AuroraBackground>

      {/* FEATURED */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {featuredNews && (
            <article className="relative rounded-xl overflow-hidden shadow-lg">

              <img
                src={featuredNews.thumbnailUrl || 'https://images.unsplash.com/photo-1541336528065-8f1fdc9494ed?w=1200'}
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

                  <p className="text-lg text-gray-200 mb-6 max-w-xl line-clamp-2">
                    {featuredNews.title}
                  </p>

                  <Link
                    to={`/news/${featuredNews.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all"
                  >
                    BACA SELENGKAPNYA
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                </div>

              </div>

            </article>
          )}

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
                  src={item.thumbnailUrl || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">

                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>3 min read</span>
                    </div>

                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.title}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-red-600 font-bold text-sm"
                  >
                    baca selengkapnya
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