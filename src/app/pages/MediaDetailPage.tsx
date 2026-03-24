import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, User, Loader2, Play, ExternalLink, Image as ImageIcon, FileText } from 'lucide-react';
import useSWR from 'swr';
import { BackendApiUrl } from '../functions/BackendApiUrl';
import { formatDate } from '../lib/utils';
import type { MediaDetail } from '../../admin/types/Media';

export default function MediaDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: media, isLoading } = useSWR<MediaDetail>(
    id ? BackendApiUrl.mediaDetail(id) : null,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
      </div>
    );
  }

  if (!media) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Media Not Found</h1>
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
      <div className="relative h-[400px] lg:h-[500px] bg-slate-900">
        {media.category === 'video' && media.url ? (
          <video 
            src={media.url} 
            controls 
            className="w-full h-full object-contain"
            poster={media.thumbnailUrl || undefined}
          />
        ) : media.thumbnailUrl || (media.category === 'photo' && media.url) ? (
          <img
            src={media.thumbnailUrl || media.url}
            alt={media.title}
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
           <div className="w-full h-full flex items-center justify-center text-slate-500">
             <FileText className="w-24 h-24" />
           </div>
        )}
        
        {media.category !== 'video' && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />}
        
        <div className="absolute inset-0 flex items-end pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 pointer-events-auto">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors"
            >
              <ArrowLeft size={20} />
              BACK
            </button>
            <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded mb-4 uppercase tracking-widest shadow-md">
              {media.category}
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight max-w-4xl drop-shadow-md">
              {media.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
             <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  <span>{formatDate(media.createdAt, 'id')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  <span>STTB Admin</span>
                </div>
             </div>
             
             {media.url && (
                <a 
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95"
                >
                   {media.category === 'video' ? <Play className="w-5 h-5" /> : 
                    media.category === 'photo' ? <ImageIcon className="w-5 h-5" /> : 
                    <ExternalLink className="w-5 h-5" />}
                   Open Full Media
                </a>
             )}
          </div>

          <div className="prose prose-lg max-w-none prose-slate prose-headings:text-blue-900 prose-a:text-blue-600">
            {media.content ? media.content.split('\n').map((para, i) => para.trim() && (
              <p key={i}>{para}</p>
            )) : (
              <p className="text-gray-400 italic">No additional description available for this media asset.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
