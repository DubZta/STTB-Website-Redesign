import { Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';
import { AppApiUrl } from '../../functions/AppApiUrl';
import { useAppFetch } from '../../functions/useAppFetch';
import { Link } from 'react-router';

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

export function News() {
  const { t } = useLanguage();
  const { fetchGET } = useAppFetch();
  
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    const { data } = await fetchGET<GetNewsListResponse>(`${AppApiUrl.getNewsList}?page=1&pageSize=5`);
    if (data?.items) {
      const published = data.items
        .filter(i => i.status !== 'Draft')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 5); // Take up to 5
      setNewsItems(published);
    }
    setLoading(false);
  };

  const getFullImageUrl = (url: string) => {
    if (!url) return 'https://images.unsplash.com/photo-1541336528065-8f1fdc9494ed?w=1200';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getNewsList.replace('/api/News', '')}${url}`;
  };

  const mainEvent = newsItems.length > 0 ? newsItems[0] : null;
  const otherNews = newsItems.length > 1 ? newsItems.slice(1, 5) : [];


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
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0b3f82]"></div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Event */}
            {mainEvent && (
              <GlowCard
                className="lg:col-span-2 bg-white border border-gray-200 overflow-hidden group"
                customSize
                glowColor="rgba(11, 63, 130, 0.3)"
              >
                <Link to={`/news/${mainEvent.id}`} className="block h-full relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={getFullImageUrl(mainEvent.thumbnailUrl)}
                      alt={mainEvent.title}
                      className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110 bg-gray-100"
                    />
                    <div className="absolute top-4 left-4 bg-[#0b3f82] text-white px-4 py-1 text-xs uppercase tracking-wide z-10 transition-transform group-hover:scale-110">
                      {new Date(mainEvent.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="absolute inset-0 bg-[#0b3f82]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute top-0 left-0 w-0 h-1 bg-[#E31D1A] group-hover:w-full transition-all duration-700" />
                    <h3 className="text-2xl text-slate-900 mb-4 leading-tight font-bold group-hover:text-[#0b3f82] transition-colors">
                      {mainEvent.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{mainEvent.title}</p>
                  </div>
                </Link>
              </GlowCard>
            )}
  
            {/* News List */}
            <div className="space-y-6 divide-y divide-gray-200 flex flex-col justify-center">
              {otherNews.map((item) => (
                <Link to={`/news/${item.id}`} key={item.id} className="block group bg-white pt-6 first:pt-0 border-l-4 border-transparent hover:border-[#E31D1A] hover:bg-slate-50 transition-all duration-300 relative overflow-hidden pl-5">
                  <div className="absolute inset-0 bg-[#0b3f82]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
  
                  <div className="relative z-10 pb-5">
                    <div className="flex items-center gap-2 text-[#0b3f82] text-sm font-semibold mb-2 group-hover:text-[#E31D1A] transition-colors">
                      <Calendar size={14} />
                      <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <h4 className="text-lg text-slate-900 mb-2 font-bold group-hover:translate-x-1 transition-transform line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
              
              <div className="pt-6">
                <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-[#E31D1A] hover:text-[#0b3f82] transition-colors group">
                  LIHAT SEMUA BERITA
                  <div className="w-6 h-[2px] bg-[#E31D1A] group-hover:w-8 group-hover:bg-[#0b3f82] transition-all" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}