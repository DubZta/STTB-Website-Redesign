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
    `${AdminApiUrl.newsList}?page=1&pageSize=1`,
    (url: string) => fetchGET<GetNewsListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const { data: eventsData, isLoading: eventsLoading } = useSWR<GetEventListResponse>(
    `${AdminApiUrl.eventsList}?page=1&pageSize=1`,
    (url: string) => fetchGET<GetEventListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const { data: mediaData, isLoading: mediaLoading } = useSWR<GetMediaListResponse>(
    `${AdminApiUrl.mediaList}?page=1&pageSize=1`,
    (url: string) => fetchGET<GetMediaListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const stats: StatCard[] = useMemo(() => [
    {
      label: 'Total news entries',
      count: newsData?.totalCount ?? 0,
      icon: <Newspaper className="w-5 h-5" />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'Total globals',
      count: eventsData?.totalCount ?? 0,
      icon: <CalendarDays className="w-5 h-5" />,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      label: 'Total library assets',
      count: mediaData?.totalCount ?? 0,
      icon: <ImageIcon className="w-5 h-5" />,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
  ], [newsData, eventsData, mediaData]);

  const hasData = (newsData?.totalCount ?? 0) > 0 || (eventsData?.totalCount ?? 0) > 0 || (mediaData?.totalCount ?? 0) > 0;

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">System Overview</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
             Live Data Stream
          </div>
        </div>

        {/* Stats Grid - Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:border-blue-200 transition-all group">
              <div className={`w-12 h-12 ${stat.iconBg} ${stat.iconColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-black text-slate-900 tracking-tight">
                    {newsLoading || eventsLoading || mediaLoading ? '...' : stat.count.toLocaleString()}
                 </span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{stat.label}</span>
              </div>
            </div>
          ))}
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 opacity-80">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-black text-slate-400 tracking-tight">0</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Pending Sync</span>
              </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Recent Entries */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Recent Content Activity</h3>
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden min-h-[400px] flex flex-col">
              {!hasData ? (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-[30%] flex items-center justify-center text-slate-200 mb-6 border-2 border-dashed border-slate-100">
                     <Inbox className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">No activity logs found</p>
                  <p className="text-xs text-slate-400 mt-2 max-w-[200px] mx-auto">The database is currently synchronized but empty. All new entries will appear here.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  <div className="p-8 text-center text-xs text-slate-400 font-medium italic">
                    (Administrative list restricted to primary index)
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: News / Activity */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Security & Performance</h3>
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
               <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-200 mb-8 border border-blue-100">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <Settings className="w-10 h-10" />
                  </motion.div>
               </div>
               <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Diagnostic Engine Active</p>
               <p className="text-xs text-slate-500 mt-4 max-w-[240px] leading-relaxed">System performance is optimal. Waiting for user interaction logs to populate activity maps.</p>
               
               <div className="mt-8 flex items-center gap-4">
                  <div className="px-4 py-1.5 bg-red-50 text-red-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-red-100">
                     Internal DB Ready
                  </div>
                  <div className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-blue-100">
                     V2.0 Protocol
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Help / Feedback Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-slate-200">
           <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-blue-400 transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                 <Settings className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Support Documentation</p>
                 <p className="text-base font-bold text-slate-900">System Knowledge Base</p>
              </div>
           </div>
           <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-red-400 transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-red-600 group-hover:bg-red-50 transition-colors">
                 <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Developer Feedback</p>
                 <p className="text-base font-bold text-slate-900">Report Issue</p>
              </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
}
