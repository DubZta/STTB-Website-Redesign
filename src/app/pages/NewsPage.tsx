import { Calendar, ArrowRight, Search, ChevronDown, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { AuroraBackground } from '../components/homepage_v1_1/ui/aurora-background';
import { useLanguage } from '../contexts/LanguageContext';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch, FetchResult } from '../functions/useAppFetch';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  status: string;
  thumbnailUrl: string;
}

interface GetNewsListResponse {
  items: NewsItem[];
  totalCount: number;
}

export default function NewsPage() {
  const { t } = useLanguage();
  const { fetchGET } = useAppFetch();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [taglineOpen, setTaglineOpen] = useState(false);

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    // Add pagination query if supported by backend, assuming generic GetList
    const { data } = await fetchGET<GetNewsListResponse>(`${AppApiUrl.getNewsList}?page=1&pageSize=50`);
    if (data?.items) {
      // Filter out Drafts and sort by PublishedAt
      const published = data.items
        .filter(i => i.status !== 'Draft')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      setNewsList(published);
    }
    setLoading(false);
  };

  const getFullImageUrl = (url: string) => {
    if (!url) return 'https://images.unsplash.com/photo-1541336528065-8f1fdc9494ed?w=1200';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getNewsList.replace('/api/News', '')}${url}`;
  };

  const uniqueCategories = Array.from(new Set(newsList.map(item => item.category))).filter(Boolean);
  const categories = uniqueCategories.map(cat => `${cat} (${newsList.filter(n => n.category === cat).length})`);

  // Extract dummy taglines and archives (can be built dynamically later if needed, but categories at least are dynamic)
  const archives = [
    'February 2026', 'January 2026', 'December 2025'
  ];

  const taglines = [
    'STTB', 'Kunjungan', 'Urban Mission'
  ];

  const featuredNews = Object.keys(newsList).length > 0 ? newsList[0] : null;
  const otherNews = newsList.length > 1 ? newsList.slice(1) : [];

  const latestNewsDisplay = newsList.slice(0, 7).map(n => n.title);

  const filteredNews =
    activeCategory === 'All'
      ? otherNews
      : otherNews.filter((news) => news.category === activeCategory.split(' (')[0]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <AuroraBackground className="py-20 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
            {t('newspage.title')} & <span className="text-red-500">{t('newspage.documentation')}</span>
          </h1>

          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('newspage.subtitle')}
          </p>

        </div>
      </AuroraBackground>

      {/* FEATURED */}
      {featuredNews && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <article className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={getFullImageUrl(featuredNews.thumbnailUrl)}
                alt={featuredNews.title}
                loading="lazy"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center p-10">
                <div>
                  <span className="px-4 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                    {featuredNews.category || 'Featured'}
                  </span>
                  <h2 className="text-4xl font-bold text-white mt-4 mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-xl">
                    {featuredNews.title}
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
      )}

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
              {latestNewsDisplay.map((item, i) => (
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
              <li
                className={`cursor-pointer ${activeCategory === 'All' ? 'font-bold text-red-600' : 'hover:text-red-500'}`}
                onClick={() => setActiveCategory('All')}
              >
                All News
              </li>
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className={`cursor-pointer ${activeCategory === cat.split(' (')[0] ? 'font-bold text-red-600' : 'hover:text-red-500'}`}
                  onClick={() => setActiveCategory(cat.split(' (')[0])}
                >
                  {cat}
                </li>
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
                >
                  <img
                    src={getFullImageUrl(item.thumbnailUrl)}
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
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.title}
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
          )}
        </main>

      </div>

    </div>
  );
}