// src/admin/components/shared/StatusBadge.tsx
// Visual badge for content status (draft / published).

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status.toLowerCase();

  const styles: Record<string, string> = {
    published:
      'bg-blue-50 text-blue-700 border-blue-100',
    draft:
      'bg-red-50 text-red-700 border-red-100',
    archived:
      'bg-slate-100 text-slate-600 border-slate-200',
  };

  const labels: Record<string, string> = {
    published: 'Live Publication',
    draft: 'Internal Draft',
    archived: 'Archived Trace',
  };

  const cls = styles[normalized] ?? 'bg-slate-50 text-slate-500 border-slate-100';
  const label = labels[normalized] ?? status.toUpperCase();

  return (
    <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border ${cls} shadow-sm transition-all hover:scale-105 cursor-default`}>
      <span
        className={`w-1.5 h-1.5 rounded-full mr-2 shadow-sm ${
          normalized === 'published' 
            ? 'bg-blue-500 animate-pulse' 
            : normalized === 'draft' 
              ? 'bg-red-500' 
              : 'bg-slate-400'
        }`}
      />
      {label}
    </span>
  );
}
