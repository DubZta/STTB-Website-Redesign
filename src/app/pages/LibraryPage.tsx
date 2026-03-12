import { BookOpen, Search, Clock, Database, Calendar, Users, ArrowRight, ExternalLink, Download, Play } from 'lucide-react';
import { useState } from 'react';

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const libraryStats = [
    {
      label: 'Judul',
      value: '47,254',
      subtext: 'Total Judul Buku',
      icon: BookOpen,
      color: 'from-blue-600 to-blue-700',
    },
    {
      label: 'Eksemplar',
      value: '51,932',
      subtext: 'Buku fisik dan digital',
      icon: Clock,
      color: 'from-red-600 to-red-700',
    },
    {
      label: 'Sirkulasi',
      value: '39,913',
      subtext: 'Peminjaman per tahun',
      icon: Database,
      color: 'from-purple-600 to-purple-700',
    },
  ];

  const digitalResources = [
    {
      title: 'Koleksi E-Book via EBSCO',
      description: 'Akses ribuan e-book teologi dan studi Kristen',
      icon: Database,
      link: '#',
    },
    {
      title: 'Jurnal Teologi ATLA',
      description: 'Database jurnal teologi internasional',
      icon: BookOpen,
      link: '#',
    },
    {
      title: 'Open Academic Book',
      description: 'Buku akademis open access',
      icon: ExternalLink,
      link: '#',
    },
  ];

  const featuredBooks = [
    {
      id: 1,
      title: 'The Transcendent Character of the Good',
      subtitle: 'Philosophical and Theological Perspectives',
      author: 'Edited by Patricia Schaefer',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      category: 'Philosophy',
    },
    {
      id: 2,
      title: 'Kingdom Calling',
      subtitle: 'Vocational Stewardship for the Common Good',
      author: 'Amy L. Sherman',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      category: 'Theology',
    },
    {
      id: 3,
      title: 'A Christian Education in the Virtues',
      subtitle: 'Character Formation and Human Flourishing',
      author: 'James Arthur',
      cover: 'https://images.unsplash.com/photo-1456324504484-a52f2a9d5c67?w=400',
      category: 'Education',
    },
    {
      id: 4,
      title: 'The Psychology of Money',
      subtitle: 'Timeless lessons on wealth, greed, and happiness',
      author: 'Morgan Housel',
      cover: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400',
      category: 'Finance',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Bedah Buku: The Psychology of Money',
      date: 'Sabtu, 15 April 2023',
      time: '09.00-12.00 WIB',
      location: 'Ruang Perpustakaan',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
      category: 'Event',
    },
    {
      id: 2,
      title: 'Pelatihan Literasi Digital',
      date: 'Senin, 10 April 2023',
      time: '13.00-16.00 WIB',
      location: 'Lab Komputer',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
      category: 'Training',
    },
    {
      id: 3,
      title: 'Kunjungan Sekolah Teologi Partner',
      date: 'Kamis, 6 April 2023',
      time: '10.00-12.00 WIB',
      location: 'Perpustakaan STTB',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
      category: 'Visit',
    },
  ];

  const serviceHours = {
    weekdays: 'Senin - Jumat: 08.00 - 17.00 WIB',
    saturday: 'Sabtu: 08.00 - 12.00 WIB',
    sunday: 'Minggu: Tutup',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200"
            alt="Library background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
                Perpustakaan Transformatio
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed text-justify">
                <span className="font-bold text-red-400">Menjadi pusat transformasi pemikiran dan kehidupan.</span>
                <br />
                "Semua yang benar, semua yang mulia, semua yang benar, semua yang suci,
                semua yang manis, semua yang sedap didengar, semua yang disebut kebajikan
                dan patut dipuji, pikirkanlah semuanya itu." - Filipi 4:8
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Cari Koleksi
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  E-Library via EBSCO
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {libraryStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-red-400" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                );
              })}
              <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">Jam Layanan</span>
                  <Clock className="w-5 h-5 text-red-400" />
                </div>
                <div className="space-y-1 text-sm text-white">
                  <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                  <p>Sabtu: 08.00 - 12.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-8 max-w-4xl mx-auto px-4 z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-2">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Cari buku, jurnal, artikel, atau sumber daya..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 text-lg border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              Cari
            </button>
          </div>
        </div>
      </div>

      {/* Digital Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perpustakaan Digital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akses koleksi digital dan database akademis dari mana saja
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {digitalResources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <a
                key={idx}
                href={resource.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-blue-600 font-semibold gap-2">
                  <span>Akses Sekarang</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Featured Books */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Highlight Buku
              </h2>
              <p className="text-lg text-gray-600">Koleksi terbaru dan rekomendasi</p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-700 transition-all">
              Lihat Semua
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-900 text-white text-xs font-bold rounded-full">
                      {book.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">{book.subtitle}</p>
                  <p className="text-sm text-gray-500 mb-4">by {book.author}</p>
                  <button className="w-full py-2 bg-gray-100 hover:bg-blue-900 hover:text-white text-gray-700 font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="md:hidden mt-8 w-full py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-blue-600 transition-all">
            Lihat Semua Buku
          </button>
        </div>
      </div>

      {/* News & Activities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berita & Kegiatan
          </h2>
          <p className="text-lg text-gray-600">Update terkini dari Perpustakaan Transformatio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentActivities.map((activity) => (
            <article
              key={activity.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {activity.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{activity.time}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
                  Selengkapnya
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Layanan Perpustakaan
            </h2>
            <p className="text-blue-200 text-lg">Fasilitas dan layanan untuk mendukung studi Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <BookOpen className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Peminjaman Buku</h3>
              <p className="text-blue-100 text-sm">Sistem peminjaman digital dengan notifikasi otomatis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <Users className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Ruang Baca</h3>
              <p className="text-blue-100 text-sm">Ruang baca nyaman dengan kapasitas 100+ orang</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <Database className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Digital Library</h3>
              <p className="text-blue-100 text-sm">Akses 24/7 ke koleksi digital dan e-jurnal</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <Search className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Referensi</h3>
              <p className="text-blue-100 text-sm">Konsultasi riset dan bantuan pencarian literatur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kunjungi Perpustakaan Kami
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span>
                    <strong>Jam Operasional:</strong><br />
                    Senin - Jumat: 08.00 - 17.00 WIB<br />
                    Sabtu: 08.00 - 12.00 WIB<br />
                    Minggu: Tutup
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-5 h-5 text-white">📍</span>
                  <span>Sekolah Tinggi Teologi Bandung<br />Jl. Dr. Djunjunan No. 105, Bandung</span>
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">WhatsApp Layanan</h4>
              <p className="text-2xl font-bold text-blue-900 mb-2">0851-7100-7720</p>
              <p className="text-sm text-gray-600 mb-4">Untuk informasi dan konsultasi</p>
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}