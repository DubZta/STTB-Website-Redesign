import { useState, useMemo } from 'react';
import { Calendar, Users, MapPin, Clock, Search, ChevronLeft, ChevronRight, Filter, Grid, List, Loader2 } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';
import { Link } from 'react-router';
import useSWR from 'swr';
import { GetEventsListUrl } from '../functions/BackendApiUrl';
import type { GetEventListResponse } from '../../admin/types/Events';
import { formatDate } from '../lib/utils';

export default function ActivitiesPage() {

const [viewMode, setViewMode] = useState('GRID');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOrganizer, setSelectedOrganizer] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026');

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, isLoading } = useSWR<GetEventListResponse>(GetEventsListUrl(1, 100, searchQuery), fetcher);

  const activities = useMemo(() => {
    return data?.items || [];
  }, [data]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    'Category',
    'Worship',
    'Academic',
    'Community',
    'Conference',
    'Workshop',
    'Graduation',
    'Other'
  ];

  const getStatusBadge = (eventDate: string) => {
    const isPast = new Date(eventDate) < new Date();
    if (isPast) {
      return <span className="px-2 py-0.5 bg-gray-800 text-white text-xs font-semibold rounded uppercase">PAST</span>;
    }
    return (
      <div className="flex gap-1">
        <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded uppercase">UPCOMING</span>
      </div>
    );
  };

  const generateMonthDays = (monthIndex: number) => {
    const year = parseInt(selectedYear);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {months.map((month, index) => (
        <div key={month} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{month}</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(day => (
              <div key={day} className="font-semibold text-gray-500 py-1">{day}</div>
            ))}
            {generateMonthDays(index).map((day, i) => {
              const hasEvent = activities.some(a => {
                const d = new Date(a.eventDate);
                return d.getMonth() === index && d.getDate() === day && d.getFullYear() === parseInt(selectedYear);
              });
              return (
                <div
                  key={i}
                  className={`py-1 text-sm rounded cursor-pointer transition-colors relative ${day === null
                    ? 'text-gray-300'
                    : hasEvent 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMonthlyView = () => {
    const currentMonthIndex = selectedMonth ? months.indexOf(selectedMonth) : new Date().getMonth();
    const monthName = selectedMonth || months[currentMonthIndex];

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">{monthName} {selectedYear}</h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <div key={day} className="font-bold text-gray-700 py-2 text-sm">{day}</div>
          ))}
          {generateMonthDays(currentMonthIndex).map((day, i) => {
            const dayActivities = activities.filter(a => {
              const d = new Date(a.eventDate);
              return d.getMonth() === currentMonthIndex && d.getDate() === day && d.getFullYear() === parseInt(selectedYear);
            });
            return (
              <div
                key={i}
                className={`py-3 text-sm rounded-lg cursor-pointer transition-all min-h-[80px] border ${day === null
                  ? 'border-transparent'
                  : 'border-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md'
                  }`}
              >
                {day && (
                  <div className="flex flex-col items-center h-full">
                    <span className="font-semibold mb-1">{day}</span>
                    {dayActivities.length > 0 && (
                      <div className="space-y-1 w-full px-1">
                        {dayActivities.slice(0, 2).map(a => (
                          <div key={a.id} className="text-[8px] bg-blue-100 text-blue-700 rounded p-0.5 truncate">
                            {a.title}
                          </div>
                        ))}
                        {dayActivities.length > 2 && (
                          <div className="text-[8px] text-gray-400">+{dayActivities.length - 2} more</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
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
        <Link 
          key={activity.id} 
          to={`/activities/${activity.id}`}
          className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {getStatusBadge(activity.eventDate)}
                <span className="text-sm text-gray-500">{activity.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{formatDate(activity.eventDate, 'id')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>08:00 - selesai</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Kampus STTB Bandung</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center">
              DETAILS
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {activities.map((activity) => (
        <Link key={activity.id} to={`/activities/${activity.id}`}>
          <GlowCard
            className="bg-white p-6 group cursor-pointer h-full"
            customSize
            glowColor="rgba(11, 63, 130, 0.3)"
          >
            <div className="flex items-start justify-between mb-3">
              {getStatusBadge(activity.eventDate)}
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{activity.category}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">{activity.title}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="truncate">{formatDate(activity.eventDate, 'id')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>08:00 - selesai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="truncate">Kampus STTB Bandung</span>
              </div>
            </div>
            <div className="mt-4 w-full py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg text-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              VIEW DETAILS
            </div>
          </GlowCard>
        </Link>
      ))}
    </div>
  );

  const renderEventsSection = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Program & Kegiatan STTB</h2>
        <div className="flex gap-2">
          <button onClick={() => setViewMode('LIST')} className={`p-2 rounded ${viewMode === 'LIST' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}>
            <List size={20} />
          </button>
          <button onClick={() => setViewMode('GRID')} className={`p-2 rounded ${viewMode === 'GRID' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}>
            <Grid size={20} />
          </button>
        </div>
      </div>

      <div className="p-4">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
          </div>
        ) : (
          viewMode === 'GRID' ? renderGridView() : renderListView()
        )}
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
                  <option key={cat} value={cat === 'Category' ? '' : cat}>{cat}</option>
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

            <div className="flex gap-2 lg:col-span-2">
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
                className="w-32 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white text-center"
              >
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex gap-2 flex-wrap">
              {['YEARLY', 'MONTHLY', 'LIST', 'GRID'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${viewMode === mode
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
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
        <div className="space-y-8">
          {viewMode === 'YEARLY' && renderYearlyView()}
          {viewMode === 'MONTHLY' && renderMonthlyView()}
          {(viewMode === 'LIST' || viewMode === 'GRID') && renderEventsSection()}
        </div>
      </div>
    </div>
  );
}