import { Calendar, Loader2 } from 'lucide-react';
import { Link } from 'react-router';
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';
import useSWR from 'swr';
import { GetNewsListUrl } from '../../functions/BackendApiUrl';
import type { GetNewsListResponse } from '../../../admin/types/News';
import { formatDate } from '../../lib/utils';

export function News() {

const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, isLoading } = useSWR<GetNewsListResponse>(GetNewsListUrl(1, 4), fetcher);

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center">
        <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
      </div>
    );
  }

  const newsItems = data?.items || [];
  const mainEvent = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-sttb-navy font-bold tracking-[0.25em] mb-3">
            V
          </span>
          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-sttb-navy mb-4 font-bold">
              {'BERITA'}
            </h2>
          </MaskText>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="h-px w-16 bg-yellow-500" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="h-px w-16 bg-yellow-500" />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Event */}
          {mainEvent && (
            <Link to={`/news/${mainEvent.id}`} className="lg:col-span-2">
              <GlowCard
                className="h-full bg-white border border-gray-200 overflow-hidden group"
                customSize
                glowColor="rgba(11, 63, 130, 0.3)"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={mainEvent.thumbnailUrl || 'https://images.unsplash.com/photo-1585829365234-781fcd50c819?w=1080'}
                    alt={mainEvent.title}
                    className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-sttb-navy text-white px-4 py-1 text-xs uppercase tracking-wide z-10 transition-transform group-hover:scale-110">
                    {formatDate(mainEvent.publishedAt, 'id')}
                  </div>
                  <div className="absolute inset-0 bg-sttb-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-sttb-red group-hover:w-full transition-all duration-700" />
                  <h3 className="text-2xl text-slate-900 mb-4 leading-tight font-bold group-hover:text-sttb-navy transition-colors line-clamp-2">
                    {mainEvent.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">{mainEvent.category}</p>
                </div>
              </GlowCard>
            </Link>
          )}

          {/* News List */}
          <div className="space-y-6 divide-y divide-gray-200">
            {otherNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group block bg-white p-5 pt-6 first:pt-0 border-l-4 border-gray-200 hover:border-sttb-red hover:bg-slate-50 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-sttb-navy/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sttb-navy text-sm font-semibold mb-2 group-hover:text-sttb-red transition-colors">
                    <Calendar size={14} />
                    <span>{formatDate(item.publishedAt, 'id')}</span>
                  </div>
                  <h4 className="text-lg text-slate-900 mb-2 font-bold group-hover:translate-x-1 transition-transform line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {item.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}