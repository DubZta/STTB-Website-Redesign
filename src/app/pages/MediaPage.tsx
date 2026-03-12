import { Play, FileText, Search, Filter, Calendar, ChevronRight, Download, ExternalLink, Grid, List, X } from 'lucide-react';
import { useState } from 'react';

export default function MediaPage() {
  const [formatFilter, setFormatFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const mediaItems = [
    {
      id: 1,
      title: 'City TransforMission #2: "Fokus Strategis Misi Urban"',
      category: 'LEAD',
      type: 'video',
      date: '20 April 2021',
      thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d200c?w=600',
      tags: ['Urban Ministry', 'Transformation'],
    },
    {
      id: 2,
      title: 'City TransforMission #01: "Urbanisasi & Misi"',
      category: 'UMC',
      type: 'video',
      date: '3 March 2021',
      thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d200c?w=600',
      tags: ['Urbanization', 'Mission'],
    },
    {
      id: 3,
      title: 'Persembahan Pujian STTB untuk Pelayanan Sekolah Minggu',
      category: 'STT BANDUNG',
      type: 'video',
      date: '3 December 2020',
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
      tags: ['Worship', 'Children Ministry'],
    },
    {
      id: 4,
      title: 'Persembahan Pujian STTB untuk Pelayanan Sekolah Minggu',
      category: 'VIDEO',
      type: 'video',
      date: '3 December 2020',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
      tags: ['Worship', 'Performance'],
    },
    {
      id: 5,
      title: 'Unboxing Lifeguide Bible Studies',
      category: 'DISCIPLESLIGHT',
      type: 'video',
      date: '10 October 2020',
      thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
      tags: ['Bible Study', 'Resources'],
    },
    {
      id: 6,
      title: 'Pelatihan Mahasiswa STTB: Pembuatan Pupuk Kompos Dari Sampah Organik',
      category: 'STT BANDUNG',
      type: 'video',
      date: '8 September 2020',
      thumbnail: 'https://images.unsplash.com/photo-1532996779560-2d57c4f2d1c7?w=600',
      tags: ['Training', 'Environment'],
    },
    {
      id: 7,
      title: 'Besar dan Ajaiblah Karya-Mu (Persembahan Pujian S.Th. 2019 STTB)',
      category: 'STT BANDUNG',
      type: 'video',
      date: '15 September 2020',
      thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58293a469d?w=600',
      tags: ['Worship', 'Graduation'],
    },
    {
      id: 8,
      title: 'Mengenal Siapa STTB dan Visi Nya (Profil STB 2022)',
      category: 'STT BANDUNG',
      type: 'video',
      date: '15 September 2020',
      thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600',
      tags: ['Profile', 'Introduction'],
    },
    {
      id: 9,
      title: 'Discipleslight (Discipleship Insight) STTB: Figital Discipleship',
      category: 'DISCIPLESLIGHT',
      type: 'video',
      date: '20 August 2020',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      tags: ['Discipleship', 'Digital'],
    },
    {
      id: 10,
      title: 'Integrasi Iman dan Ilmu: Menuju pendekatan yang lebih holistik',
      category: 'ARTIKEL',
      type: 'article',
      date: '22 March 2022',
      thumbnail: 'https://images.unsplash.com/photo-1456324504484-a52f2a9d5c67?w=600',
      tags: ['Faith', 'Science', 'Education'],
    },
    {
      id: 11,
      title: 'Buletin STIB Februari 2021',
      category: 'BULETIN',
      type: 'article',
      date: '12 March 2022',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
      tags: ['Bulletin', 'News'],
    },
    {
      id: 12,
      title: 'Bincang Rame: Menemukan Panggilan Hidupku',
      category: 'DISKUSI',
      type: 'video',
      date: '12 March 2022',
      thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600',
      tags: ['Discussion', 'Vocation'],
    },
  ];

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

  const filteredMedia = mediaItems.filter(item => {
    const matchesFormat = formatFilter === 'all' || item.type === formatFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFormat && matchesSearch;
  });

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
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500">
                <option>Tema Kategori Media</option>
                <option>Urban Ministry</option>
                <option>Discipleship</option>
                <option>Worship</option>
                <option>Academic</option>
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
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Tema Kategori Media</option>
                  <option>Leadership</option>
                  <option>Mission</option>
                  <option>Education</option>
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
                    <span className="font-bold">120+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Artikel</span>
                    <span className="font-bold">85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Buletin</span>
                    <span className="font-bold">45</span>
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
              {filteredMedia.map((item) => (
                <article
                  key={item.id}
                  className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 ${viewMode === 'list' ? 'flex' : ''
                    }`}
                >
                  {/* Thumbnail */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <time>{item.date}</time>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex-1 px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                        {item.type === 'video' ? <Play className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                        {item.type === 'video' ? 'Watch' : 'Read'}
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="text-gray-400">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                12
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
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