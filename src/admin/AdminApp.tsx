// src/admin/AdminApp.tsx
// Manual router for the Admin CMS.
// Reads window.location.pathname and renders the appropriate page.
// Guards all non-login routes with session token check.

import { SWRConfig } from 'swr';
import { isAdminAuthenticated } from './functions/useAdminFetch';
import AdminLoginPage from './pages/AdminLoginPage';
import DashboardPage from './pages/DashboardPage';
import NewsListPage from './pages/NewsListPage';
import EventsListPage from './pages/EventsListPage';
import MediaListPage from './pages/MediaListPage';
import UserListPage from './pages/UserListPage';
import { Button } from '@/app/components/ui/button';

import { ArrowLeft, Compass } from 'lucide-react';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50/50 p-6">
      <div className="max-w-md w-full bg-white rounded-[32px] p-12 text-center shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 mb-8 border border-emerald-100/50">
           <Compass className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">Lost in Space</h1>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed italic">
          The administrative fragment you are requesting does not exist in the current ecosystem.
        </p>
        <Button 
          onClick={() => { window.location.href = '/admin/dashboard'; }}
          className="w-full h-14 rounded-2xl bg-slate-900 border-none hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/20 text-white font-black transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Command Center
        </Button>
      </div>
    </div>
  );
}

function Router() {
  const path = window.location.pathname.replace(/\/$/, '') || '/admin';

  // Login page — always accessible
  if (path === '/admin' || path === '/admin/login') {
    // If already logged in, redirect to dashboard
    if (isAdminAuthenticated()) {
      window.location.href = '/admin/dashboard';
      return null;
    }
    return <AdminLoginPage />;
  }

  // Auth guard for all other routes
  if (!isAdminAuthenticated()) {
    window.location.href = '/admin/';
    return null;
  }

  // Protected routes
  switch (path) {
    case '/admin/dashboard':
      return <DashboardPage />;
    case '/admin/news':
      return <NewsListPage />;
    case '/admin/events':
      return <EventsListPage />;
    case '/admin/media':
      return <MediaListPage />;
    case '/admin/users':
      return <UserListPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function AdminApp() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        dedupingInterval: 5000,
      }}
    >
      <Router />
    </SWRConfig>
  );
}
