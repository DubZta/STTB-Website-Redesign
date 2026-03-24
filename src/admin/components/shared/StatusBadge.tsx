// src/admin/components/shared/StatusBadge.tsx
// Visual badge for content status (draft / published).

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status.toLowerCase();

  const styles: Record<string, string> = {
    published:
      'bg-sttb-navy text-white border-sttb-navy-dark shadow-sm',
    draft:
      'bg-white text-sttb-dark-slate border-slate-200 shadow-sm',
    archived:
      'bg-slate-50 text-slate-400 border-slate-100 italic',
  };

  const labels: Record<string, string> = {
    published: 'PUBLISHED',
    draft: 'DRAFT',
    archived: 'ARCHIVED',
  };

  const cls = styles[normalized] ?? 'bg-white text-slate-500 border-slate-200';
  const label = labels[normalized] ?? status.toUpperCase();

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[9px] font-black tracking-widest border ${cls} transition-all cursor-default`}>
      <span
        className={`w-1 h-3 rounded-full mr-2 ${
          normalized === 'published' 
            ? 'bg-white/70' 
            : normalized === 'draft' 
              ? 'bg-sttb-red' 
              : 'bg-slate-300'
        }`}
      />
      {label}
    </span>
  );
}
