import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Calendar, ArrowLeft, Download, Play, FileText, ExternalLink, User, Loader2, Image as ImageIcon } from 'lucide-react';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch } from '../functions/useAppFetch';
import { formatDate } from '../lib/utils';

interface GetMediaDetailResponse {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  url: string;
  thumbnailUrl: string;
  filename: string;
  mimeType: string;
  fileSize: number;
  createdAt: string;
}

export default function MediaDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fetchGET } = useAppFetch();
  
  const [data, setData] = useState<GetMediaDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadData(id);
    }
  }, [id]);

  const loadData = async (mediaId: string) => {
    setLoading(true);
    const url = AppApiUrl.getMediaDetail(mediaId);
    console.log(`[MediaDetail] Fetching: ${url}`);
    try {
      const { data: responseData, error, problem } = await fetchGET<GetMediaDetailResponse>(url);
      if (responseData) {
        console.log(`[MediaDetail] Success:`, responseData);
        setData(responseData);
      } else {
        console.error(`[MediaDetail] Failed to load data. Status:`, error?.message, 'Problem:', problem);
      }
    } catch (err) {
      console.error(`[MediaDetail] Exception:`, err);
    }
    setLoading(false);
  };

  const getFullUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getMediaList.replace('/api/Media', '')}${url}`;
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Media not found</h2>
          <p className="text-gray-500 mb-6 max-w-xs">Aset media yang Anda cari tidak tersedia atau telah dipindahkan.</p>
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Media
          </button>
        </div>
      </div>
    );
  }

  const isVideo = data.mimeType?.toLowerCase().startsWith('video/') || 
                  data.category?.toUpperCase() === 'VIDEO' ||
                  data.url?.toLowerCase().endsWith('.mp4');
  const isImage = data.mimeType?.toLowerCase().startsWith('image/') ||
                  data.category?.toUpperCase() === 'PHOTO';

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section with Media Background */}
      <div className="relative h-[400px] lg:h-[550px] bg-slate-900 overflow-hidden">
        {isVideo && data.url ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <video 
              src={getFullUrl(data.url)} 
              controls 
              className="w-full h-full object-contain"
              poster={getFullUrl(data.thumbnailUrl)}
            />
          </div>
        ) : (data.thumbnailUrl || (isImage && data.url)) ? (
          <div className="absolute inset-0">
            <img
              src={getFullUrl(data.thumbnailUrl || data.url)}
              alt={data.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-700">
            <div className="text-center">
              <FileText className="w-24 h-24 mx-auto mb-4 opacity-20" />
            </div>
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
              {data.category || (isVideo ? 'VIDEO' : 'MEDIA')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight max-w-5xl drop-shadow-2xl">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl">
          {/* Metadata & Actions Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 pb-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Calendar size={20} className="text-blue-900" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Terbit Pada</p>
                  <span className="font-bold text-slate-900">{formatDate(data.createdAt, 'id')}</span>
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

            <div className="flex items-center gap-4">
              {data.url && (
                <a 
                  href={getFullUrl(data.url)} 
                  target="_blank" rel="noreferrer"
                  className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-900/20 active:scale-95 text-sm tracking-wide"
                >
                  {isVideo ? <Play className="w-5 h-5" /> : isImage ? <ImageIcon className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                  OPEN FULL MEDIA
                </a>
              )}
              {data.url && (
                <a 
                  href={getFullUrl(data.url)} 
                  download={data.filename || data.title}
                  target="_blank" rel="noreferrer"
                  className="p-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl transition-colors"
                  title="Download Media"
                >
                  <Download className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Description Content */}
          <div className="max-w-none">
            {data.content ? (
              <article className="prose prose-lg prose-slate prose-headings:text-blue-900 prose-headings:font-black prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-blue-600 prose-img:rounded-2xl prose-strong:text-blue-900">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </article>
            ) : (
              <div className="py-12 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                <p className="text-slate-400 italic font-medium">No description available for this media asset.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
