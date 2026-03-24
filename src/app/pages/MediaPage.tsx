import { Play, FileText, Search, X, Loader2, Image as ImageIcon, Calendar, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import useSWR from 'swr';
import { GetMediaListUrl } from '../functions/BackendApiUrl';
import { AuroraBackground } from '../components/homepage_v1_1/ui/aurora-background';
import type { GetMediaListResponse } from '../../admin/types/Media';

export default function MediaPage() {
  const [formatFilter, setFormatFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: mediaResponse, isLoading } = useSWR<GetMediaListResponse>(
    GetMediaListUrl(1, 100, searchQuery, formatFilter),
    fetcher
  );

  const filteredMedia = useMemo(() => mediaResponse?.items ?? [], [mediaResponse]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <AuroraBackground className="py-20 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
            MEDIA & <span className="text-red-500">DOKUMENTASI</span>
          </h1>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pustaka digital, video, jurnal, dan dokumentasi Sekolah Tinggi Teologi Bandung
          </p>
        </div>
      </AuroraBackground>

      {/* SEARCH AND FILTERS */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFormatFilter('all')}
                className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm ${formatFilter === 'all'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFormatFilter('book')}
                className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${formatFilter === 'book'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                <FileText className="w-4 h-4" />
                Buku
              </button>
              <button
                onClick={() => setFormatFilter('video')}
                className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${formatFilter === 'video'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                <Play className="w-4 h-4" />
                Video
              </button>
              <button
                onClick={() => setFormatFilter('photo')}
                className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${formatFilter === 'photo'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                <ImageIcon className="w-4 h-4" />
                Foto
              </button>
              <button
                onClick={() => setFormatFilter('article')}
                className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${formatFilter === 'article'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                <FileText className="w-4 h-4" />
                Artikel
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-sm transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
          </div>
        ) : filteredMedia.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-gray-400">
             <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
             <p className="text-xl font-bold">Media Tidak Ditemukan</p>
             <p className="text-sm">Tidak ada aset media yang cocok dengan filter pencarian.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                {/* Thumbnail */}
                <Link to={`/media/${item.id}`} className="block relative overflow-hidden h-56 bg-gray-100">
                  {item.thumbnailUrl || item.url ? (
                    <img
                      src={item.thumbnailUrl || item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                       <FileText className="w-16 h-16" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-black uppercase tracking-wider rounded-lg bg-red-600 text-white shadow-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      {item.category === 'video' ? <Play className="w-6 h-6 text-blue-900 ml-1" /> : <Search className="w-6 h-6 text-blue-900" />}
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <time>{new Date(item.createdAt).toLocaleDateString('id')}</time>
                  </div>
                  
                  <Link to={`/media/${item.id}`} className="block mb-3">
                    <h3 className="font-black text-xl text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-1">
                    {item.content || "Click to view full media description..."}
                  </p>
                  
                  <div className="mt-auto border-t border-gray-100 pt-5">
                    <Link
                      to={`/media/${item.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-wider hover:text-red-600 transition-colors"
                    >
                      Buka Detail Media
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}