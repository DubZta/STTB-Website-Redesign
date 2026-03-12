import { BookOpen, Search, Clock, Database } from 'lucide-react';

export default function LibraryPage() {
  const libraryStats = [
    {
      label: 'Total Koleksi Buku',
      value: '10,000+',
      icon: BookOpen,
    },
    {
      label: 'Jurnal & Periodical',
      value: '500+',
      icon: Database,
    },
    {
      label: 'Jam Operasional',
      value: '08:00 - 20:00',
      icon: Clock,
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Perpustakaan STTB
          </h1>
          <p className="text-xl text-gray-600">
            Pusat sumber daya pembelajaran teologi
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari buku, jurnal, atau artikel..."
              className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sttb-navy focus:border-transparent text-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {libraryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sttb-navy to-sttb-navy-light rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Layanan Perpustakaan
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Peminjaman Buku
              </h3>
              <p className="text-gray-600">
                Layanan peminjaman buku dengan sistem digital terintegrasi
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ruang Baca
              </h3>
              <p className="text-gray-600">
                Fasilitas ruang baca yang nyaman dan kondusif untuk belajar
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Digital Library
              </h3>
              <p className="text-gray-600">
                Akses ke koleksi digital, e-book, dan jurnal online
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Referensi & Konsultasi
              </h3>
              <p className="text-gray-600">
                Bantuan pencarian literatur dan konsultasi riset
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}