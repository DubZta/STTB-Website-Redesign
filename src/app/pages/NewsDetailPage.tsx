import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Calendar, ArrowLeft, User, Loader2, FileText } from 'lucide-react';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch } from '../functions/useAppFetch';
import { formatDate } from '../lib/utils';

interface GetNewsDetailResponse {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fetchGET } = useAppFetch();
  
  const [data, setData] = useState<GetNewsDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadData(id);
    }
  }, [id]);

  const loadData = async (newsId: string) => {
    setLoading(true);
    const { data: responseData } = await fetchGET<GetNewsDetailResponse>(AppApiUrl.getNewsDetail(newsId));
    if (responseData) {
      setData(responseData);
    }
    setLoading(false);
  };

  const getFullImageUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getNewsList.replace('/api/News', '')}${url}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-900 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <FileText className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">News not found</h2>
          <p className="text-gray-500 mb-6 max-w-xs">Berita yang Anda cari tidak tersedia atau telah dipindahkan.</p>
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] bg-slate-900 overflow-hidden">
        {data.thumbnailUrl && (
          <div className="absolute inset-0">
            <img
              src={getFullImageUrl(data.thumbnailUrl)}
              alt={data.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>
        )}

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
            <button
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center gap-2 text-white font-bold tracking-wider hover:text-blue-300 transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm w-fit"
            >
              <ArrowLeft size={20} />
              BACK
            </button>
            <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em] shadow-lg">
              {data.category || 'NEWS'}
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight max-w-5xl drop-shadow-2xl">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl">
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center gap-8 mb-10 pb-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calendar size={20} className="text-blue-900" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Terbit Pada</p>
                <span className="font-bold text-slate-900">{formatDate(data.publishedAt, 'id')}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg">
                <User size={20} className="text-red-900" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Kontributor</p>
                <span className="font-bold text-slate-900">STTB ADMIN</span>
              </div>
            </div>
          </div>

          {/* News Content */}
          <article className="prose prose-lg prose-slate prose-headings:text-blue-900 prose-headings:font-black prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-blue-600 prose-img:rounded-2xl prose-strong:text-blue-900 max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </article>
        </div>
      </div>
    </div>
  );
}
