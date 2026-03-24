import { Play, FileText, Search, Filter, Calendar, ChevronRight, Download, ExternalLink, Grid, List, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch } from '../functions/useAppFetch';
import { Link } from 'react-router';

interface MediaItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  url: string;
  thumbnailUrl: string;
  createdAt: string;
  // Inferring mimeType visually from UI where required (if not provided in summary, treat as video if category === VIDEO)
}

interface GetMediaListResponse {
  items: MediaItem[];
  totalCount: number;
}

export default function MediaPage() {
  const { fetchGET } = useAppFetch();
  const [formatFilter, setFormatFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const [backendMedia, setBackendMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    setLoading(true);
    const { data } = await fetchGET<GetMediaListResponse>(`${AppApiUrl.getMediaList}?page=1&pageSize=50`);
    if (data?.items) {
      setBackendMedia(data.items);
    }
    setLoading(false);
  };

  const getFullImageUrl = (url: string) => {
    if (!url) return 'https://images.unsplash.com/photo-1541336528065-8f1fdc9494ed?w=1200';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getMediaList.replace('/api/Media', '')}${url}`;
  };

  const getFullFileUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getMediaList.replace('/api/Media', '')}${url}`;
  };

  const mediaItems = backendMedia.map(m => {
    const isVideo = m.category?.toUpperCase() === 'VIDEO' || m.url?.includes('.mp4');
    return {
      id: m.id,
      title: m.title,
      category: m.category || (isVideo ? 'VIDEO' : 'ARTICLE'),
      type: isVideo ? 'video' : 'article',
      date: new Date(m.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
      thumbnail: getFullImageUrl(m.thumbnailUrl),
      url: getFullFileUrl(m.url),
      tags: [] as string[], // Tags aren't coming from the API
    };
  });

  const sidebarLinks = [
    { title: 'PERPUSTAKAAN', href: '#', active: true },
    { title: 'Katalog Fisik', href: '#', sub: true },
    { title: 'EBSCO Host', href: '#', sub: true },
    { title: 'Jurnal ATLA', href: '#', sub: true },
    { title: 'JURNAL STULOS', href: '#', active: true },
    { title: 'OJS', href: '#', active: true },
    { title: 'BULETIN STTB', href: '#', active: true },
    { title: 'MONOGRAF', href: '#', active: true },
  ];

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');

  const categories = [
    'Semua Kategori',
    'Video',
    'Book',
    'Article',
    'Photo'
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchesFormat = formatFilter === 'all' || item.type === formatFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua Kategori' || 
                           item.category?.toLowerCase() === selectedCategory.toLowerCase();
    return matchesFormat && matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const paginatedMedia = filteredMedia.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, formatFilter]);

  // Statistics calculation
  const videoCount = backendMedia.filter(m => m.category?.toUpperCase() === 'VIDEO').length;
  const articleCount = backendMedia.filter(m => m.category?.toUpperCase() === 'ARTICLE').length;
  const bulletinCount = backendMedia.filter(m => {
    const cat = m.category?.toUpperCase();
    return cat === 'BOOK' || cat === 'PHOTO' || cat === 'BULETIN';
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                <span className="text-blue-900">MEDIA</span>
              </h1>
              <p className="text-gray-600">Pustaka digital dan dokumentasi STTB</p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFormatFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${formatFilter === 'all'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFormatFilter('video')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center gap-2 ${formatFilter === 'video'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <Play className="w-4 h-4" />
                Video
              </button>
              <button
                onClick={() => setFormatFilter('article')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center gap-2 ${formatFilter === 'article'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <FileText className="w-4 h-4" />
                Artikel
              </button>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-900' : 'text-gray-600'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-900' : 'text-gray-600'
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-8 space-y-6">
              {/* Topic Category */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">TOPIK KATEGORI</h3>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Library Resources */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <nav className="divide-y divide-gray-100">
                  {sidebarLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-all ${link.active
                        ? 'bg-red-600 text-white'
                        : link.sub
                          ? 'text-gray-600 hover:bg-gray-50 pl-6'
                          : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <span>{link.title}</span>
                      {link.active && <ChevronRight className="w-4 h-4" />}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg p-6 text-white">
                <h3 className="font-bold mb-4">Statistik Media</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Total Video</span>
                    <span className="font-bold">{videoCount > 0 ? `${videoCount}+` : '0'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Artikel</span>
                    <span className="font-bold">{articleCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Buletin</span>
                    <span className="font-bold">{bulletinCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Menampilkan <span className="font-semibold text-gray-900">{filteredMedia.length}</span> media
              </p>
              <select className="text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Sort by Date</option>
                <option>Sort by Title</option>
                <option>Most Popular</option>
              </select>
            </div>

            {/* Media Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {loading ? (
                <div className="col-span-full flex justify-center py-12">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
                </div>
              ) : paginatedMedia.length === 0 ? (
                <div className="col-span-full py-20 text-center bg-white rounded-xl border border-dashed border-gray-300">
                  <p className="text-gray-500 font-medium">No media found for the selected criteria.</p>
                </div>
              ) : (
                paginatedMedia.map((item) => (
                  <article
                    key={item.id}
                    className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 ${viewMode === 'list' ? 'flex' : ''
                      }`}
                  >
                    {/* Thumbnail */}
                    <Link to={`/media/${item.id}`} className={`block relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-100"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1541336528065-8f1fdc9494ed?w=600';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.type === 'video'
                          ? 'bg-red-600 text-white'
                          : 'bg-blue-900 text-white'
                          }`}>
                          {item.category}
                        </span>
                      </div>
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-blue-900 ml-1" />
                          </div>
                        </div>
                      )}
                    </Link>
  
                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <time>{item.date}</time>
                      </div>
                      <Link to={`/media/${item.id}`} className="hover:text-blue-700 transition-colors">
                        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-auto">
                        <Link to={`/media/${item.id}`} className="flex-1">
                          <button className="w-full px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                            {item.type === 'video' ? <Play className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                            {item.type === 'video' ? 'Watch' : 'Read'}
                          </button>
                        </Link>
                        {item.url && (
                          <a 
                            href={item.url} 
                            target="_blank" rel="noreferrer" 
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-3">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
                    .map((page, index, array) => (
                      <div key={page} className="flex gap-2">
                        {index > 0 && array[index - 1] !== page - 1 && <span className="text-gray-400 self-end px-1">...</span>}
                        <button
                          onClick={() => setCurrentPage(page)}
                          className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-bold transition-all ${currentPage === page ? 'bg-blue-900 text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                        >
                          {page}
                        </button>
                      </div>
                    ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-red-600 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">NEWSLETTER</h2>
              <p className="text-red-100">Dapatkan update media dan publikasi terbaru dari STTB</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Nama Lengkap *"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-4">Sumber Daya</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Perpustakaan</a></li>
                <li><a href="#" className="hover:text-white">Perpustakaan Digital</a></li>
                <li><a href="#" className="hover:text-white">Jurnal Transformatio</a></li>
                <li><a href="#" className="hover:text-white">Podcast</a></li>
                <li><a href="#" className="hover:text-white">Video</a></li>
                <li><a href="#" className="hover:text-white">Buletin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Link Bantuan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Sistem Informasi Akademik</a></li>
                <li><a href="#" className="hover:text-white">Sistem E-Learning</a></li>
                <li><a href="#" className="hover:text-white">Sistem Perpustakaan</a></li>
                <li><a href="#" className="hover:text-white">Sistem Kolaborasi Terpadu</a></li>
                <li><a href="#" className="hover:text-white">Portal Alumni</a></li>
                <li><a href="#" className="hover:text-white">Mail Server</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Program Studi</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Sarjana Teologi</a></li>
                <li><a href="#" className="hover:text-white">Magister Pendidikan Kristen</a></li>
                <li><a href="#" className="hover:text-white">Magister Teologi Pelayanan Pastoral</a></li>
                <li><a href="#" className="hover:text-white">Magister Teologi Transformasi</a></li>
                <li><a href="#" className="hover:text-white">Magister Ministri Pastoral</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">No. Rekening</h4>
              <p className="text-gray-300 mb-2">BCA cab. Surya Sumantir</p>
              <p className="text-gray-300 mb-2">Bandung</p>
              <p className="text-gray-300 mb-2">a/c 282.300.5555</p>
              <p className="text-gray-300">a/n Yayasan STT Bandung</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <p className="font-semibold">Jl Dr. Djunjunan No. 105</p>
              <p>Bandung 40173</p>
              <p>Indonesia</p>
            </div>
            <div className="text-center">
              <p>Phone: (+62) 22 601-6454, 607-7920</p>
              <p>Whatsapp: (+62) 815 7336 0009, (+62) 851-8302-6009</p>
              <p>E-mail: official@sttb.ac.id</p>
            </div>
            <div className="text-right">
              <p>Copyright © 2026</p>
              <p>Sekolah Tinggi Teologi Bandung</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}