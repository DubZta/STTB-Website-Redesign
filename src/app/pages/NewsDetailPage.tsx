import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, User, Clock, Loader2 } from 'lucide-react';
import useSWR from 'swr';
import { BackendApiUrl } from '../functions/BackendApiUrl';
import { formatDate } from '../lib/utils';
import type { NewsDetail } from '../../admin/types/News';

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: news, isLoading } = useSWR<NewsDetail>(
    id ? BackendApiUrl.newsDetail(id) : null,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">News Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={news.thumbnailUrl || 'https://images.unsplash.com/photo-1585829365234-781fcd50c819?w=1600'}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors"
            >
              <ArrowLeft size={20} />
              BACK
            </button>
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-4 uppercase">
              {news.category}
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              <span>{formatDate(news.publishedAt, 'en')}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-600" />
              <span>STTB Admin</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-slate prose-headings:text-blue-900 prose-a:text-blue-600">
            {/* Split by newlines and render as paragraphs for basic markdown support */}
            {news.content.split('\n').map((para, i) => para.trim() && (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
