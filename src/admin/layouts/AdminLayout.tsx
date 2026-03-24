// src/admin/layouts/AdminLayout.tsx
// Main CMS layout: sidebar navigation + top header + content area.

import { ReactNode } from 'react';
import { clearAdminToken } from '../functions/useAdminFetch';
import {
  LayoutDashboard,
  Newspaper,
  CalendarDays,
  Image as ImageIcon,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Bell,
  Settings,
  Search,
  Shield,
  ChevronDown,
  Users
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  path: string;
  icon: ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-[18px] h-[18px]" /> },
  { label: 'News Management', path: '/admin/news', icon: <Newspaper className="w-[18px] h-[18px]" /> },
  { label: 'Events Schedule', path: '/admin/events', icon: <CalendarDays className="w-[18px] h-[18px]" /> },
  { label: 'Media Library', path: '/admin/media', icon: <ImageIcon className="w-[18px] h-[18px]" /> },
  { label: 'User Management', path: '/admin/users', icon: <Users className="w-[18px] h-[18px]" /> },
];

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPath = window.location.pathname;

  const handleLogout = () => {
    clearAdminToken();
    window.location.href = '/admin/';
  };

  const navigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Blue/Deep Slate primary */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#0f172a] border-r border-slate-800 z-50 flex flex-col transform transition-all duration-300 lg:translate-x-0 lg:static lg:z-auto ${sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
          }`}
      >
        {/* Brand Logo - Updated to STTB with Red/Blue accent */}
        <div className="px-6 py-8 border-b border-white/5 bg-[#1e293b]/20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/admin/dashboard')}>
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg tracking-tight leading-none">STTB</span>
              <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Navigation - Red primary active indicator */}
        <nav className="flex-1 py-8 space-y-1 overflow-y-auto custom-scrollbar px-4">
          <div className="px-4 mb-4">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Management</p>
          </div>
          {navItems.map((item) => {
            const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full group flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 text-left border border-transparent ${isActive
                    ? 'bg-red-600/10 text-red-500 border-red-500/20 shadow-sm shadow-red-500/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <div className={`transition-colors ${isActive ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  {item.icon}
                </div>
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                )}
              </button>
            );
          })}

          <div className="pt-8 px-4 pb-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">System</p>
          </div>
          <button
            onClick={() => navigate('/admin/settings')}
            className="w-full group flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all text-left"
          >
            <Settings className="w-[18px] h-[18px] text-slate-500" />
            <span>Settings</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full group flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all text-left mt-8 border border-transparent hover:border-red-500/10"
          >
            <LogOut className="w-[18px] h-[18px] text-slate-500 group-hover:text-red-500" />
            <span>Sign out Session</span>
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-8 border-t border-white/5 bg-[#1e293b]/10 mt-auto">
          <div className="flex flex-col">
            <span className="text-slate-500 text-[10px] font-black tracking-widest uppercase italic">Secure Enterprise</span>
            <span className="text-slate-600 text-[9px] mt-1 font-mono">Build v2026.03.13-STTB</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header - White with subtle Blue border */}
        <header className="h-[72px] bg-white border-b border-slate-200 px-8 flex items-center gap-8 sticky top-0 z-40">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-slate-600 hover:text-blue-600 transition-all p-2 rounded-lg border border-slate-200"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-4 flex-1">
            <div className="relative group w-full max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Global search..."
                className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-6">
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden shadow-inner flex items-center justify-center text-white text-xs font-black">
                AD
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-900 leading-none">Administrator</span>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">Super Authority</span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Page content scroll area */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}} />
    </div>
  );
}
