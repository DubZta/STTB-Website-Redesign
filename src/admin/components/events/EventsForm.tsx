// src/admin/components/events/EventsForm.tsx
// Create/Edit form for Event items.
// Uses React Hook Form + Zod validation (fe-standard section 6.1).

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import type { EventDetail, CreateEventPayload, UpdateEventPayload } from '../../types/Events';

// ─── Zod Schema ────────────────────────────────────────────────────────────────

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Max 200 characters'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(200)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  category: z.string().min(1, 'Category is required').max(100),
  eventDate: z.string().min(1, 'Event date is required'),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'published'], { required_error: 'Status is required' }),
  thumbnailUrl: z.string().url('Must be a valid URL').or(z.literal('')),
});

type EventFormData = z.infer<typeof eventSchema>;

// ─── Component ─────────────────────────────────────────────────────────────────

interface EventsFormProps {
  initialData?: EventDetail;
  onSubmit: (payload: CreateEventPayload | UpdateEventPayload) => Promise<boolean>;
  onCancel: () => void;
  isSubmitting: boolean;
}

const EVENT_CATEGORIES = ['Worship', 'Academic', 'Community', 'Conference', 'Workshop', 'Graduation', 'Other'];

import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Tag as TagIcon, 
  Layers,
  Clock,
  Globe,
  Loader2,
  Image as ImageIcon
} from 'lucide-react';

export default function EventsForm({ initialData, onSubmit, onCancel, isSubmitting }: EventsFormProps) {
  const isEdit = !!initialData;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: '',
      eventDate: new Date().toISOString().split('T')[0],
      content: '',
      status: 'draft',
      thumbnailUrl: '',
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        slug: initialData.slug,
        category: initialData.category,
        eventDate: initialData.eventDate.split('T')[0],
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

  const handleFormSubmit = async (data: EventFormData) => {
    const payload: CreateEventPayload | UpdateEventPayload = {
      ...(isEdit ? { id: initialData!.id } : {}),
      title: data.title,
      slug: data.slug,
      category: data.category,
      eventDate: new Date(data.eventDate).toISOString(),
      content: data.content,
      status: data.status,
      thumbnailUrl: data.thumbnailUrl,
    } as CreateEventPayload | UpdateEventPayload;

    const success = await onSubmit(payload);
    if (success && !isEdit) reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Basic Configuration */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
               <Layers className="w-4 h-4 text-emerald-600" />
               <Label htmlFor="ev-title" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Event Designation</Label>
            </div>
            <Input 
              id="ev-title" 
              {...register('title')} 
              placeholder="e.g. International Theology Seminar 2026" 
              className="h-14 rounded-2xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-slate-50/50 font-bold text-slate-900"
            />
            {errors.title && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          <div className="space-y-3">
             <div className="flex items-center gap-2 mb-1">
               <Globe className="w-4 h-4 text-emerald-600" />
               <Label htmlFor="ev-slug" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Public Access Slug</Label>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 font-mono text-xs font-bold italic">sttb.ac.id/events/</span>
              <Input 
                id="ev-slug" 
                {...register('slug')} 
                placeholder="event-name" 
                className="h-14 pl-36 rounded-2xl border-slate-200 focus:border-emerald-500 bg-slate-100/50 font-mono text-xs text-emerald-700 font-black"
              />
            </div>
            {errors.slug && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.slug.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                 <TagIcon className="w-4 h-4 text-emerald-600" />
                 <Label htmlFor="ev-category" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Classification</Label>
              </div>
              <select
                id="ev-category"
                {...register('category')}
                className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Category</option>
                {EVENT_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.category.message}</p>}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <Label htmlFor="ev-status" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Visibility Status</Label>
              </div>
              <select
                id="ev-status"
                {...register('status')}
                className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
              >
                <option value="draft">Internal Draft</option>
                <option value="published">Live Publication</option>
              </select>
              {errors.status && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.status.message}</p>}
            </div>
          </div>
        </div>

        {/* Timeline & Assets */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
               <Clock className="w-4 h-4 text-blue-600" />
               <Label htmlFor="ev-eventDate" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Scheduled Execution Date</Label>
            </div>
            <Input 
              id="ev-eventDate" 
              type="date" 
              {...register('eventDate')} 
              className="h-14 rounded-2xl border-slate-200 focus:border-emerald-500 bg-blue-50/20 font-black text-slate-900"
            />
            {errors.eventDate && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.eventDate.message}</p>}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
               <ImageIcon className="w-4 h-4 text-amber-500" />
               <Label htmlFor="ev-thumbnailUrl" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Event Banner / Identity URL</Label>
            </div>
            <Input 
              id="ev-thumbnailUrl" 
              {...register('thumbnailUrl')} 
              placeholder="https://cloud.storage.com/asset-192.png" 
              className="h-14 rounded-2xl border-slate-200 focus:border-emerald-500 bg-slate-50/50 font-medium"
            />
            {errors.thumbnailUrl && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.thumbnailUrl.message}</p>}
          </div>

          <div className="space-y-3">
            <Label htmlFor="ev-content" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Operational Brief / Detailed Description</Label>
            <textarea
              id="ev-content"
              {...register('content')}
              rows={6}
              placeholder="Describe the objective, speaker, and mission of this event..."
              className="w-full rounded-[24px] border border-slate-200 bg-slate-50/50 px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none min-h-[140px]"
            />
            {errors.content && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.content.message}</p>}
          </div>
        </div>
      </div>

      {/* Advanced Action Zone */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-slate-100 gap-6">
        <div className="flex items-start gap-3 opacity-60 max-w-sm">
           <div className="mt-1 w-2 h-2 rounded-full bg-slate-300"></div>
           <p className="text-[11px] font-bold text-slate-500 leading-relaxed italic">
             Ensure all stakeholders have approved the timeline before publishing. Changes to live events will trigger notifications.
           </p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel} 
            disabled={isSubmitting}
            className="rounded-2xl h-14 px-8 font-bold text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
          >
            Disregard Changes
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="rounded-2xl h-14 px-12 font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl shadow-emerald-500/30 transition-all active:scale-[0.98]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                 <Loader2 className="w-5 h-5 animate-spin" />
                 Syncing...
              </span>
            ) : isEdit ? 'Update Schedule' : 'Launch Event'}
          </Button>
        </div>
      </div>
    </form>
  );
}
