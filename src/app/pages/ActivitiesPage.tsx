import { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Search, ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';
import { useLanguage } from '../contexts/LanguageContext';

export default function ActivitiesPage() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState('GRID');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOrganizer, setSelectedOrganizer] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026');

  const activities = [
    {
      id: 1,
      title: 'Kelas Sit In Magister Pendidikan Kristen',
      date: 'Friday, January 9, 2026',
      time: '09:00 - 12:00 WIB',
      location: 'Kampus STTB Bandung',
      category: 'Magister',
      status: 'ongoing',
      featured: true,
    },
    {
      id: 2,
      title: 'Kelas Sit In Magister Ministry Marketplace',
      date: 'Friday, January 9, 2026',
      time: '13:00 - 16:00 WIB',
      location: 'Kampus STTB Bandung',
      category: 'Magister',
      status: 'expired',
      featured: false,
    },
    {
      id: 3,
      title: 'Kelas Sit In Magister Pendidikan Kristen',
      date: 'Saturday, January 10, 2026',
      time: '08:00 - 11:00 WIB',
      location: 'Kampus STTB Bandung',
      category: 'Magister',
      status: 'ongoing',
      featured: true,
    },
    {
      id: 4,
      title: 'Kelas Sit In Magister Pendidikan Kristen',
      date: 'Sunday, January 11, 2026',
      time: '14:00 - 17:00 WIB',
      location: 'Kampus STTB Bandung',
      category: 'Magister',
      status: 'ongoing',
      featured: true,
    },
    {
      id: 5,
      title: 'Magister Ministri Marketplace Kohort Balikpapan',
      date: 'Monday, January 26, 2026',
      time: '09:00 - 15:00 WIB',
      location: 'Balikpapan',
      category: 'Magister',
      status: 'expired',
      featured: false,
    },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    'Category',
    '100 tahun GII HIT',
    'Admisi',
    'Dies Natalies',
    'Diskusi',
    'Event',
    'Ibadah Kapel',
    'Kalender Akademik',
    'Kelas Audit',
    'Kelas Umum',
    'Kemitraan',
    'Kursus',
    'Layanan Masyarakat',
    'Pelatihan',
    'Penelitian',
    'Persekutuan',
    'Pertemuan',
    'Retreat',
    'Seminar',
    'Tahunan'
  ];

  const organizers = [
    'Organizer',
    '100 Tahun GII HIT',
    'Divisi Admisi STTB',
    'Divisi Akademik STTB',
    'Divisi Kemahasiswaan STTB',
    'Divisi LEAD STTB',
    'Divisi LPPM STTB',
    'Institusi STTB',
    'Panitia STT Bandung'
  ];

  const getStatusBadge = (status, featured) => {
    if (status === 'expired') {
      return <span className="px-2 py-0.5 bg-gray-800 text-white text-xs font-semibold rounded">EXPIRED</span>;
    }
    return (
      <div className="flex gap-1">
        <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded">ONGOING</span>
        {featured && <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-semibold rounded">FEATURED</span>}
      </div>
    );
  };

  const generateMonthDays = (monthIndex) => {
    const year = 2026;
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() || 7; // Convert Sunday (0) to 7

    const days = [];
    // Empty cells for days before the first day of the month
    for (let i = 1; i < startingDay; i++) {
      days.push(null);
    }
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const renderYearlyView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {months.map((month, index) => (
        <div key={month} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{month}</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(day => (
              <div key={day} className="font-semibold text-gray-500 py-1">{day}</div>
            ))}
            {generateMonthDays(index).map((day, i) => (
              <div
                key={i}
                className={`py-1 text-sm rounded cursor-pointer transition-colors ${day === null
                  ? 'text-gray-300'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMonthlyView = () => {
    const currentMonthIndex = selectedMonth ? months.indexOf(selectedMonth) : 0;
    const monthName = selectedMonth || 'January';

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">{monthName} 2026</h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <div key={day} className="font-bold text-gray-700 py-2 text-sm">{day}</div>
          ))}
          {generateMonthDays(currentMonthIndex).map((day, i) => (
            <div
              key={i}
              className={`py-3 text-sm rounded-lg cursor-pointer transition-all ${day === null
                ? ''
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md'
                }`}
            >
              {day && (
                <div className="flex flex-col items-center">
                  <span className="font-semibold">{day}</span>
                  {[9, 10, 11, 26].includes(day) && (
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1"></div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWeeklyView = () => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDates = [6, 7, 8, 9, 10, 11, 12]; // Sample week

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Week of January 6-12, 2026</h3>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => (
            <div key={day} className="border border-gray-200 rounded-lg p-3 min-h-[200px]">
              <div className="text-center mb-2">
                <div className="text-xs text-gray-500 font-semibold">{day}</div>
                <div className="text-lg font-bold text-gray-900">{weekDates[index]}</div>
              </div>
              <div className="space-y-1">
                {index === 3 && (
                  <div className="bg-blue-50 border border-blue-200 rounded p-1 text-xs cursor-pointer hover:bg-blue-100">
                    <div className="font-semibold text-blue-900">09:00</div>
                    <div className="text-blue-700 truncate">Kelas Sit In...</div>
                  </div>
                )}
                {index === 4 && (
                  <>
                    <div className="bg-blue-50 border border-blue-200 rounded p-1 text-xs cursor-pointer hover:bg-blue-100">
                      <div className="font-semibold text-blue-900">08:00</div>
                      <div className="text-blue-700 truncate">Kelas Sit In...</div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded p-1 text-xs cursor-pointer hover:bg-red-100">
                      <div className="font-semibold text-red-900">14:00</div>
                      <div className="text-red-700 truncate">Kelas Sit In...</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDailyView = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Friday, January 9, 2026</h3>
        <div className="space-y-2">
          {hours.map(hour => {
            const hasEvent = hour === 9 || hour === 13;
            return (
              <div key={hour} className="flex border-b border-gray-100 py-2">
                <div className="w-20 text-sm text-gray-500 font-semibold">
                  {hour.toString().padStart(2, '0')}:00
                </div>
                <div className="flex-1">
                  {hasEvent && (
                    <div className={`p-3 rounded-lg cursor-pointer hover:shadow-md transition-shadow ${hour === 9 ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-red-50 border-l-4 border-red-600'
                      }`}>
                      <div className="font-semibold text-gray-900">
                        {hour === 9 ? 'Kelas Sit In Magister Pendidikan Kristen' : 'Kelas Sit In Magister Ministry Marketplace'}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {hour === 9 ? '09:00 - 12:00 WIB' : '13:00 - 16:00 WIB'} | Kampus STTB Bandung
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderListView = () => (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {getStatusBadge(activity.status, activity.featured)}
                <span className="text-sm text-gray-500">{activity.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{activity.location}</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              DETAILS
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {activities.map((activity) => (
        <GlowCard
          key={activity.id}
          className="bg-white p-6 group cursor-pointer"
          customSize
          glowColor="rgba(11, 63, 130, 0.3)"
        >
          <div className="flex items-start justify-between mb-3">
            {getStatusBadge(activity.status, activity.featured)}
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{activity.category}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{activity.title}</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="truncate">{activity.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{activity.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="truncate">{activity.location}</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            VIEW DETAILS
          </button>
        </GlowCard>
      ))}
    </div>
  );

  const renderEventsSection = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
        {viewMode === 'LIST' && <List className="w-5 h-5 text-blue-600" />}
        {viewMode === 'GRID' && <Grid className="w-5 h-5 text-blue-600" />}
      </div>

      {viewMode === 'LIST' ? (
        <div className="divide-y divide-gray-200">
          {renderListView()}
        </div>
      ) : viewMode === 'GRID' ? (
        <div className="p-4">
          {renderGridView()}
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start gap-3 mb-2">
                <Calendar className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">{activity.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{activity.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {getStatusBadge(activity.status, activity.featured)}
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{activity.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="p-4 border-t border-gray-200">
        <button className="w-full py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
          LOAD MORE
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat === 'Category' ? '' : cat}>{cat}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedOrganizer}
                onChange={(e) => setSelectedOrganizer(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                {organizers.map(org => (
                  <option key={org} value={org === 'Organizer' ? '' : org}>{org}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="flex-1 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Month</option>
                {months.map(month => <option key={month} value={month}>{month}</option>)}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-24 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex gap-2 flex-wrap">
              {['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY', 'LIST', 'GRID'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${viewMode === mode
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode !== 'LIST' && viewMode !== 'GRID' && (
          <div className="flex items-center justify-between mb-8">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-4xl font-bold text-gray-900">{selectedYear}</h1>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}

        <div className="space-y-8">
          {/* Calendar Section */}
          {viewMode === 'YEARLY' && (
            <div>
              {renderYearlyView()}
            </div>
          )}

          {viewMode === 'MONTHLY' && (
            <div>
              {renderMonthlyView()}
            </div>
          )}

          {viewMode === 'WEEKLY' && (
            <div>
              {renderWeeklyView()}
            </div>
          )}

          {viewMode === 'DAILY' && (
            <div>
              {renderDailyView()}
            </div>
          )}

          {/* Events Section - Full Width for all modes */}
          {(viewMode === 'LIST' || viewMode === 'GRID' || viewMode === 'YEARLY' || viewMode === 'MONTHLY') && (
            <div>
              {renderEventsSection()}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-red-600 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sumber Daya</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:underline">Perpustakaan</a></li>
                <li><a href="#" className="hover:underline">Perpustakaan Digital</a></li>
                <li><a href="#" className="hover:underline">Jurnal Transformatio</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Video</a></li>
                <li><a href="#" className="hover:underline">Buletin</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Link Bantuan</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:underline">Sistem Informasi Akademik</a></li>
                <li><a href="#" className="hover:underline">Sistem E-Learning</a></li>
                <li><a href="#" className="hover:underline">Sistem Perpustakaan</a></li>
                <li><a href="#" className="hover:underline">Sistem Kolaborasi Terpadu</a></li>
                <li><a href="#" className="hover:underline">Portal Alumni</a></li>
                <li><a href="#" className="hover:underline">Mail Server</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Program Studi</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:underline">Sarjana Teologi</a></li>
                <li><a href="#" className="hover:underline">Magister Pendidikan Kristen</a></li>
                <li><a href="#" className="hover:underline">Magister Teologi Pelayanan Pastoral</a></li>
                <li><a href="#" className="hover:underline">Magister Teologi Transformasi</a></li>
                <li><a href="#" className="hover:underline">Magister Ministri Pastoral</a></li>
                <li><a href="#" className="hover:underline">Magister Ministri Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">NEWSLETTER</h3>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Nama Lengkap *"
                  className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="E-mail *"
                  className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-white"
                />
                <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </form>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-white hover:text-blue-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-semibold mb-2">Jl Dr. Djunjunan No. 105</p>
              <p>Bandung 40173</p>
              <p>Indonesia</p>
            </div>
            <div>
              <p className="mb-1">Phone: (+62) 22 601-6454, 607-7920</p>
              <p className="mb-1">Whatsapp: (+62) 815 7336 0009, (+62) 851-8302-6009</p>
              <p>E-mail: official@sttb.ac.id</p>
            </div>
            <div className="text-right">
              <p className="mb-1">Copyright © 2026</p>
              <p className="font-semibold">Sekolah Tinggi Teologi Bandung</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}