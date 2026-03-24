// src/admin/pages/DashboardPage.tsx
// CMS dashboard — shows stats cards for News, Events, and Media.

import { useMemo } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { useAdminFetch } from '../functions/useAdminFetch';
import useSWR from 'swr';
import { AdminApiUrl } from '../functions/AdminApiUrl';
import type { GetNewsListResponse } from '../types/News';
import type { GetEventListResponse } from '../types/Events';
import type { GetMediaListResponse } from '../types/Media';
import {
  Newspaper,
  CalendarDays,
  Image as ImageIcon,
  ArrowUpRight,
  Loader2,
  Inbox,
  Settings,
  Clock,
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';

interface StatCard {
  label: string;
  count: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

export default function DashboardPage() {
  const { fetchGET } = useAdminFetch();

  const { data: newsData, isLoading: newsLoading } = useSWR<GetNewsListResponse>(
    `${AdminApiUrl.newsList}?page=1&pageSize=10`,
    (url: string) => fetchGET<GetNewsListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const { data: eventsData, isLoading: eventsLoading } = useSWR<GetEventListResponse>(
    `${AdminApiUrl.eventsList}?page=1&pageSize=10`,
    (url: string) => fetchGET<GetEventListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const { data: mediaData, isLoading: mediaLoading } = useSWR<GetMediaListResponse>(
    `${AdminApiUrl.mediaList}?page=1&pageSize=10`,
    (url: string) => fetchGET<GetMediaListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const stats: StatCard[] = useMemo(() => [
    {
      label: 'News Articles',
      count: newsData?.totalCount ?? 0,
      icon: <Newspaper className="w-5 h-5" />,
      iconBg: 'bg-slate-50',
      iconColor: 'text-sttb-navy',
    },
    {
      label: 'Event Schedules',
      count: eventsData?.totalCount ?? 0,
      icon: <CalendarDays className="w-5 h-5" />,
      iconBg: 'bg-slate-50',
      iconColor: 'text-sttb-red',
    },
    {
      label: 'Library Assets',
      count: mediaData?.totalCount ?? 0,
      icon: <ImageIcon className="w-5 h-5" />,
      iconBg: 'bg-slate-50',
      iconColor: 'text-slate-600',
    },
  ], [newsData, eventsData, mediaData]);  // DashboardActivity Item
  const activities = useMemo(() => {
    const list: { type: 'News' | 'Event' | 'Media'; title: string; date: string; id: string }[] = [];
    
    newsData?.items.forEach(item => {
      list.push({ type: 'News', title: item.title, date: item.publishedAt, id: item.id });
    });
    
    eventsData?.items.forEach(item => {
      list.push({ type: 'Event', title: item.title, date: item.eventDate, id: item.id });
    });
    
    mediaData?.items.forEach(item => {
      list.push({ type: 'Media', title: item.title, date: item.createdAt, id: item.id });
    });
    
    return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);
  }, [newsData, eventsData, mediaData]);

  const upcomingEvents = useMemo(() => {
    if (!eventsData?.items) return [];
    const now = new Date().getTime();
    return eventsData.items
      .filter(e => new Date(e.eventDate).getTime() >= now)
      .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())
      .slice(0, 4);
  }, [eventsData]);

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-sttb-navy tracking-tight">System Overview</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-slate-200">
             Management Terminal
          </div>
        </div>

        {/* Stats Grid - Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:border-sttb-navy/30 transition-all group">
              <div className={`w-12 h-12 ${stat.iconBg} ${stat.iconColor} rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-bold text-sttb-dark-slate tracking-tight">
                    {newsLoading || eventsLoading || mediaLoading ? '...' : stat.count.toLocaleString()}
                 </span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{stat.label}</span>
              </div>
            </div>
          ))}
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 opacity-60 grayscale">
              <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center border border-slate-100">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-bold text-slate-400 tracking-tight">0</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Pending Sync</span>
              </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Recent Entries */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Recent Content Activity</h3>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                Last 4 Syncs
              </span>
            </div>
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden min-h-[400px] flex flex-col">
              {activities.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-[30%] flex items-center justify-center text-slate-200 mb-6 border-2 border-dashed border-slate-100">
                     <Inbox className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">No activity logs found</p>
                  <p className="text-xs text-slate-400 mt-2 max-w-[200px] mx-auto">The database is currently synchronized but empty.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-50">
                  {/* Header Placeholder for Consistency */}
                  <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-sttb-navy">ACTIVITY LOG</span>
                  </div>
                  {activities.map((act, idx) => (
                    <div key={idx} className="h-20 px-6 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-slate-100 transition-transform group-hover:scale-105 ${
                        act.type === 'News' ? 'bg-white text-sttb-navy' :
                        act.type === 'Event' ? 'bg-white text-sttb-red' :
                        'bg-white text-slate-500'
                      }`}>
                        {act.type === 'News' && <Newspaper className="w-4 h-4" />}
                        {act.type === 'Event' && <CalendarDays className="w-4 h-4" />}
                        {act.type === 'Media' && <ImageIcon className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-bold text-sttb-dark-slate truncate group-hover:text-sttb-navy transition-colors tracking-tight">{act.title}</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5 uppercase tracking-wider">
                          {act.type} • {new Date(act.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                         <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm">
                            <ArrowUpRight className="w-4 h-4" />
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Upcoming Events */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Upcoming Events</h3>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-sttb-red animate-pulse"></div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Schedule</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[400px] flex flex-col overflow-hidden">
               <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-sttb-navy">UPCOMING TIMELINE</span>
               </div>
               {upcomingEvents.length === 0 ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mb-8 border border-slate-100 border-dashed">
                      <Settings className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No active schedules</p>
                    <p className="text-xs text-slate-400 mt-2 max-w-[200px]">System ready for new institutional events.</p>
                 </div>
               ) : (
                 <div className="divide-y divide-slate-50">
                    {upcomingEvents.map((ev, idx) => (
                      <div key={idx} className="h-24 px-6 hover:bg-slate-50 transition-colors cursor-pointer group flex items-center gap-5">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center border border-slate-100 group-hover:border-sttb-navy/30 transition-colors">
                            <span className="text-[9px] font-bold text-sttb-red uppercase leading-none">
                              {new Date(ev.eventDate).toLocaleString('default', { month: 'short' })}
                            </span>
                            <span className="text-lg font-bold text-sttb-navy leading-none mt-1">
                              {new Date(ev.eventDate).getDate()}
                            </span>
                         </div>
                         <div className="flex-1 min-w-0">
                            <p className="text-[14px] font-bold text-sttb-dark-slate truncate group-hover:text-sttb-navy transition-colors tracking-tight">{ev.title}</p>
                            <div className="flex flex-col gap-0.5 mt-1">
                              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none">
                                {ev.category} • {new Date(ev.eventDate).getFullYear()}
                              </span>
                              <div className="flex items-center gap-1.5 text-slate-500">
                                <Clock className="w-3 h-3 opacity-40 text-sttb-navy" />
                                <span className="text-[10px] font-bold uppercase tracking-tighter">
                                  {new Date(ev.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  {ev.eventEndDate && ` - ${new Date(ev.eventEndDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                                  <span className="ml-1 opacity-40">WIB</span>
                                </span>
                              </div>
                            </div>
                         </div>
                         <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-wider border border-blue-100 shadow-sm">
                               View Schedule
                            </span>
                         </div>
                      </div>
                    ))}
                 </div>
               )}
               
               <div className="mt-auto p-6 bg-slate-50/30 border-t border-slate-50 flex items-center gap-4">
                  <div className="px-4 py-1.5 bg-white text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
                     Internal DB Ready
                  </div>
                  <div className="px-4 py-1.5 bg-white text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
                     V2.0 Protocol
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Help / Feedback Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-slate-200">
           <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-sttb-navy/40 transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sttb-navy group-hover:bg-slate-100 transition-colors border border-slate-100">
                 <Settings className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Support Documentation</p>
                 <p className="text-base font-bold text-sttb-dark-slate">System Knowledge Base</p>
              </div>
           </div>
           <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-sttb-red/40 transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sttb-red group-hover:bg-red-50/50 transition-colors border border-slate-100">
                 <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Developer Feedback</p>
                 <p className="text-base font-bold text-sttb-dark-slate">Report Issue</p>
              </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
}
