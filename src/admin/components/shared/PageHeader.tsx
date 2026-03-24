// src/admin/components/shared/PageHeader.tsx
// Standard page header for admin pages: title + action button slot.

import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-10 pb-8 border-b border-slate-100/50">
      <div className="space-y-1.5">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
          {title}
        </h1>
        {description && (
          <div className="flex items-center gap-3">
             <div className="h-0.5 w-4 bg-emerald-500 rounded-full" />
             <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
               {description}
             </p>
          </div>
        )}
      </div>
      {action && (
        <div className="shrink-0 w-full lg:w-auto flex justify-end">
          {action}
        </div>
      )}
    </div>
  );
}
