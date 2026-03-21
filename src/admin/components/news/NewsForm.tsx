// src/admin/components/news/NewsForm.tsx
// Create/Edit form for News items.
// Uses React Hook Form + Zod for validation (fe-standard section 6.1).

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Loader2 } from 'lucide-react';
import type { NewsDetail, CreateNewsPayload, UpdateNewsPayload } from '../../types/News';

// ─── Zod Schema ────────────────────────────────────────────────────────────────

const newsSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Max 200 characters'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(200)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  category: z.string().min(1, 'Category is required').max(100),
  publishedAt: z.string().min(1, 'Published date is required'),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'published'], { required_error: 'Status is required' }),
  thumbnailUrl: z.string().url('Must be a valid URL').or(z.literal('')),
});

type NewsFormData = z.infer<typeof newsSchema>;

// ─── Component ─────────────────────────────────────────────────────────────────

interface NewsFormProps {
  initialData?: NewsDetail;
  onSubmit: (payload: CreateNewsPayload | UpdateNewsPayload) => Promise<boolean>;
  onCancel: () => void;
  isSubmitting: boolean;
}

const NEWS_CATEGORIES = ['General', 'Academic', 'Event', 'Campus Life', 'Ministry', 'Alumni'];

export default function NewsForm({ initialData, onSubmit, onCancel, isSubmitting }: NewsFormProps) {
  const isEdit = !!initialData;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: '',
      publishedAt: new Date().toISOString().split('T')[0],
      content: '',
      status: 'draft',
      thumbnailUrl: '',
    },
  });

  // Populate form when editing
  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        slug: initialData.slug,
        category: initialData.category,
        publishedAt: initialData.publishedAt.split('T')[0],
        content: initialData.content,
        status: initialData.status as 'draft' | 'published',
        thumbnailUrl: initialData.thumbnailUrl,
      });
    }
  }, [initialData, reset]);

  // Auto-generate slug from title when creating
  const titleValue = watch('title');
  useEffect(() => {
    if (!isEdit && titleValue) {
      const slug = titleValue
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setValue('slug', slug, { shouldValidate: false });
    }
  }, [isEdit, titleValue, setValue]);

  const handleFormSubmit = async (data: NewsFormData) => {
    const payload: CreateNewsPayload | UpdateNewsPayload = {
      ...(isEdit ? { id: initialData!.id } : {}),
      title: data.title,
      slug: data.slug,
      category: data.category,
      publishedAt: new Date(data.publishedAt).toISOString(),
      content: data.content,
      status: data.status,
      thumbnailUrl: data.thumbnailUrl,
    } as CreateNewsPayload | UpdateNewsPayload;

    const success = await onSubmit(payload);
    if (success && !isEdit) reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Essential Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Article Title</Label>
            <Input 
              id="title" 
              {...register('title')} 
              placeholder="e.g. Annual Campus Festival 2026" 
              className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-slate-50/50 font-medium"
            />
            {errors.title && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug" className="text-[11px] font-black uppercase tracking-widest text-slate-400">URL Slug</Label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 font-mono text-xs">/</span>
              <Input 
                id="slug" 
                {...register('slug')} 
                placeholder="url-friendly-slug" 
                className="h-12 pl-8 rounded-xl border-slate-200 focus:border-emerald-500 bg-slate-50/50 font-mono text-xs text-slate-600"
              />
            </div>
            {errors.slug && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.slug.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Category</Label>
              <select
                id="category"
                {...register('category')}
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Category</option>
                {NEWS_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.category.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="status" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Status</Label>
              <select
                id="status"
                {...register('status')}
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
              >
                <option value="draft">Draft (Offline)</option>
                <option value="published">Published (Live)</option>
              </select>
              {errors.status && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.status.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="publishedAt" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Release Date</Label>
            <Input 
              id="publishedAt" 
              type="date" 
              {...register('publishedAt')} 
              className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 bg-slate-50/50 font-medium"
            />
            {errors.publishedAt && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.publishedAt.message}</p>}
          </div>
        </div>

        {/* Right Column: Visuals & Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="thumbnailUrl" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Cover Image URL</Label>
            <Input 
              id="thumbnailUrl" 
              {...register('thumbnailUrl')} 
              placeholder="https://cdn.example.com/cover.jpg" 
              className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 bg-slate-50/50 font-medium"
            />
            {errors.thumbnailUrl && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.thumbnailUrl.message}</p>}
          </div>

          <div className="space-y-2 flex-grow">
            <Label htmlFor="content" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Main Content (Markdown Supported)</Label>
            <textarea
              id="content"
              {...register('content')}
              rows={10}
              placeholder="Elaborate on the news details..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none h-[220px]"
            />
            {errors.content && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.content.message}</p>}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-8 mt-4 border-t border-slate-100">
        <p className="text-[10px] font-bold text-slate-400 uppercase italic">
          * Required fields must be completed before synchronization.
        </p>
        <div className="flex items-center gap-3">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel} 
            disabled={isSubmitting}
            className="rounded-xl h-11 px-6 font-bold text-slate-500 hover:bg-slate-100"
          >
            Discard
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="rounded-xl h-11 px-10 font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-500/20 transition-all active:scale-95"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                 <Loader2 className="w-4 h-4 animate-spin" />
                 Processing...
              </span>
            ) : isEdit ? 'Commit Changes' : 'Publish Article'}
          </Button>
        </div>
      </div>
    </form>
  );
}
