import { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock, Search, ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';
import { useLanguage } from '../contexts/LanguageContext';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch } from '../functions/useAppFetch';
import { Link } from 'react-router';

interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  eventDate: string;
  status: string;
  thumbnailUrl: string;
}

interface GetEventListResponse {
  items: EventItem[];
  totalCount: number;
}

export default function ActivitiesPage() {
  const { language, t } = useLanguage();
  const { fetchGET } = useAppFetch();
  const [viewMode, setViewMode] = useState('GRID');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOrganizer, setSelectedOrganizer] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026');

  const [backendActivities, setBackendActivities] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    setLoading(true);
    const { data } = await fetchGET<GetEventListResponse>(`${AppApiUrl.getEventList}?page=1&pageSize=50`);
    if (data?.items) {
      setBackendActivities(data.items);
    }
    setLoading(false);
  };

  const activities = backendActivities.map((a, idx) => {
    const d = new Date(a.eventDate);
    return {
      id: a.id,
      title: a.title,
      date: d.toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' WIB',
      location: 'STTB Bandung',
      category: a.category || 'Event',
      status: d < new Date() ? 'expired' : 'ongoing',
      featured: idx === 0, // First item as featured since no featured flag from backend
      originalDate: d,
    };
  });

  const months = [
    language === 'en' ? 'January' : 'Januari',
    language === 'en' ? 'February' : 'Februari',
    language === 'en' ? 'March' : 'Maret',
    language === 'en' ? 'April' : 'April',
    language === 'en' ? 'May' : 'Mei',
    language === 'en' ? 'June' : 'Juni',
    language === 'en' ? 'July' : 'Juli',
    language === 'en' ? 'August' : 'Agustus',
    language === 'en' ? 'September' : 'September',
    language === 'en' ? 'October' : 'Oktober',
    language === 'en' ? 'November' : 'November',
    language === 'en' ? 'December' : 'Desember'
  ];

  const filteredActivities = activities.filter(a => {
    if (selectedCategory && a.category !== selectedCategory) return false;
    if (searchQuery && !a.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedMonth && a.originalDate.getMonth() !== months.indexOf(selectedMonth)) return false;
    if (selectedYear && a.originalDate.getFullYear().toString() !== selectedYear) return false;
    return true;
  });

  const categories = [
    t('activities.category'),
    ...Array.from(new Set(backendActivities.map(a => a.category).filter(Boolean)))
  ];

  const getStatusBadge = (status: string, featured: boolean) => {
    if (status === 'expired') {
      return <span className="px-2 py-0.5 bg-gray-800 text-white text-xs font-semibold rounded">{t('activities.expired')}</span>;
    }
    return (
      <div className="flex gap-1">
        <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded">{t('activities.ongoing')}</span>
        {featured && <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-semibold rounded">{t('activities.featured')}</span>}
      </div>
    );
  };

  const generateMonthDays = (monthIndex: number, year: number) => {
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() || 7; // Convert Sunday (0) to 7

    const days = [];
    for (let i = 1; i < startingDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const hasEventOnDay = (day: number | null, monthIndex: number, year: number) => {
    if (!day) return false;
    return activities.some(a => 
      a.originalDate.getDate() === day && 
      a.originalDate.getMonth() === monthIndex && 
      a.originalDate.getFullYear() === year
    );
  };

  const renderYearlyView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {months.map((month, index) => (
        <div key={month} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{month}</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
            {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(day => (
              <div key={day} className="font-semibold text-gray-500 py-1">{day}</div>
            ))}
            {generateMonthDays(index, parseInt(selectedYear)).map((day, i) => (
              <div
                key={i}
                className={`py-1 rounded relative ${day === null
                  ? 'text-gray-300'
                  : 'text-gray-700'
                  }`}
              >
                {day}
                {hasEventOnDay(day, index, parseInt(selectedYear)) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMonthlyView = () => {
    const currentMonthIndex = selectedMonth ? months.indexOf(selectedMonth) : new Date().getMonth();
    const monthName = selectedMonth || months[currentMonthIndex];
    const year = parseInt(selectedYear);

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">{monthName} {year}</h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <div key={day} className="font-bold text-gray-700 py-2 text-sm">{day}</div>
          ))}
          {generateMonthDays(currentMonthIndex, year).map((day, i) => (
            <div
              key={i}
              className={`py-3 text-sm rounded-lg min-h-[80px] border border-gray-50 flex flex-col items-center ${day === null ? '' : 'hover:bg-blue-50 transition-colors'}`}
            >
              {day && (
                <>
                  <span className="font-semibold mb-2">{day}</span>
                  <div className="w-full px-1 space-y-1">
                    {activities
                      .filter(a => a.originalDate.getDate() === day && a.originalDate.getMonth() === currentMonthIndex && a.originalDate.getFullYear() === year)
                      .map(a => (
                        <div key={a.id} className="text-[10px] bg-blue-100 text-blue-700 p-1 rounded truncate text-left" title={a.title}>
                          {a.time} {a.title}
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWeeklyView = () => {
    const today = new Date();
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - (today.getDay() || 7) + 1); // Start with Monday

    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(firstDayOfWeek);
      d.setDate(firstDayOfWeek.getDate() + i);
      return d;
    });

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Week of {weekDates[0].toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { month: 'long', day: 'numeric' })} - {weekDates[6].toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
          {weekDays.map((day, index) => {
            const date = weekDates[index];
            const dayEvents = activities.filter(a => 
              a.originalDate.getDate() === date.getDate() && 
              a.originalDate.getMonth() === date.getMonth() && 
              a.originalDate.getFullYear() === date.getFullYear()
            );

            return (
              <div key={day} className="border border-gray-200 rounded-lg p-3 min-h-[200px] flex flex-col">
                <div className="text-center mb-2">
                  <div className="text-xs text-gray-500 font-semibold uppercase">{day}</div>
                  <div className={`text-lg font-bold ${date.toDateString() === today.toDateString() ? 'text-blue-600' : 'text-gray-900'}`}>
                    {date.getDate()}
                  </div>
                </div>
                <div className="space-y-2 flex-1 overflow-y-auto max-h-[300px]">
                  {dayEvents.map(event => (
                    <Link to={`/activities/${event.id}`} key={event.id} className="block">
                      <div className="bg-blue-50 border border-blue-200 rounded p-2 text-xs cursor-pointer hover:bg-blue-100 transition-colors">
                        <div className="font-semibold text-blue-900">{event.time}</div>
                        <div className="text-blue-700 line-clamp-2">{event.title}</div>
                      </div>
                    </Link>
                  ))}
                  {dayEvents.length === 0 && (
                    <div className="text-[10px] text-gray-400 text-center mt-4 italic">No events</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderDailyView = () => {
    const today = new Date();
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const dayEvents = activities.filter(a => 
      a.originalDate.getDate() === today.getDate() && 
      a.originalDate.getMonth() === today.getMonth() && 
      a.originalDate.getFullYear() === today.getFullYear()
    );

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          {today.toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </h3>
        <div className="space-y-2 max-h-[600px] overflow-y-auto">
          {hours.map(hour => {
            const hourEvents = dayEvents.filter(a => {
              const h = a.originalDate.getHours();
              return h === hour;
            });
            
            return (
              <div key={hour} className="flex border-b border-gray-100 py-3">
                <div className="w-20 text-sm text-gray-500 font-semibold">
                  {hour.toString().padStart(2, '0')}:00
                </div>
                <div className="flex-1 space-y-2">
                  {hourEvents.map(event => (
                    <Link key={event.id} to={`/activities/${event.id}`} className="block">
                      <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-600 hover:shadow-md transition-all cursor-pointer">
                        <div className="font-semibold text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {event.time} | {event.location}
                        </div>
                      </div>
                    </Link>
                  ))}
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
      {filteredActivities.length > 0 ? (
        filteredActivities.map((activity) => (
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
              <Link to={`/activities/${activity.id}`}>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  DETAILS
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No activities found for the selected criteria.</p>
        </div>
      )}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredActivities.length > 0 ? (
        filteredActivities.map((activity) => (
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
            <Link to={`/activities/${activity.id}`}>
              <button className="mt-4 w-full py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                VIEW DETAILS
              </button>
            </Link>
          </GlowCard>
        ))
      ) : (
        <div className="col-span-full text-center py-10 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No activities found for the selected criteria.</p>
        </div>
      )}
    </div>
  );

  const renderEventsSection = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">{language === 'en' ? 'Events List' : 'Daftar Kegiatan'}</h2>
        <div className="flex gap-2">
          <button onClick={() => setViewMode('GRID')} className={`p-1 rounded ${viewMode === 'GRID' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}>
            <Grid className="w-5 h-5" />
          </button>
          <button onClick={() => setViewMode('LIST')} className={`p-1 rounded ${viewMode === 'LIST' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}>
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        {viewMode === 'GRID' ? renderGridView() : renderListView()}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
          {t('activities.load_more')}
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
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white font-medium"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat === t('activities.category') ? '' : cat}>{cat}</option>
                ))}
              </select>
              <div className="absolute right-3 top-2.5 pointer-events-none">
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('activities.search_placeholder')}
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
                <option value="">{t('activities.select_month')}</option>
                {months.map(month => <option key={month} value={month}>{month}</option>)}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-24 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex gap-2 flex-wrap bg-gray-100 p-1 rounded-xl">
              {['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY', 'LIST'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${viewMode === mode || (mode === 'LIST' && viewMode === 'GRID')
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {t(`activities.view.${mode.toLowerCase()}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY'].includes(viewMode) && (
          <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <button 
              onClick={() => setSelectedYear((parseInt(selectedYear) - 1).toString())}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">{selectedYear}</h1>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Calendar View</p>
            </div>
            <button 
              onClick={() => setSelectedYear((parseInt(selectedYear) + 1).toString())}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}

        <div className="space-y-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mb-4"></div>
              <p className="text-gray-500 font-medium">Loading activities...</p>
            </div>
          ) : (
            <>
              {viewMode === 'YEARLY' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {renderYearlyView()}
                </div>
              )}

              {viewMode === 'MONTHLY' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {renderMonthlyView()}
                </div>
              )}

              {viewMode === 'WEEKLY' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {renderWeeklyView()}
                </div>
              )}

              {viewMode === 'DAILY' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {renderDailyView()}
                </div>
              )}

              {(viewMode === 'LIST' || viewMode === 'GRID' || ['YEARLY', 'MONTHLY'].includes(viewMode)) && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {renderEventsSection()}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}