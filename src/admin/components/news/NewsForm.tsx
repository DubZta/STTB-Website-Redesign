// src/admin/components/news/NewsForm.tsx
// Create/Edit form for News items.
// Uses React Hook Form + Zod for validation (fe-standard section 6.1).

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../app/components/ui/button';
import { Input } from '../../../app/components/ui/input';
import { Label } from '../../../app/components/ui/label';
import { Calendar as CalendarIcon, Loader2, Newspaper, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../../../app/lib/utils';
import { Calendar } from '../../../app/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../../app/components/ui/popover';
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
      publishedAt: new Date().toISOString(),
      content: '',
      status: 'draft',
      thumbnailUrl: '',
    },
  });

  const publishedAt = watch('publishedAt');

  // Populate form when editing
  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        slug: initialData.slug,
        category: initialData.category,
        publishedAt: initialData.publishedAt,
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
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col h-full w-full gap-6 px-8 py-8"
    >
      <div className="flex-none grid grid-cols-6 gap-x-6 gap-y-4">
        <div className="col-span-2 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Article Title
          </Label>
          <Input
            {...register("title")}
            placeholder="Enter article title..."
            className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Category
          </Label>
          <select
            {...register("category")}
            className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-xs font-medium focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm cursor-pointer"
          >
            <option value="">Select Category</option>
            {NEWS_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Release Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full h-11 rounded-xl justify-start text-left font-normal border-slate-200 bg-white hover:bg-slate-50 text-xs",
                  !publishedAt && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-3.5 w-3.5 text-slate-400" />
                {publishedAt ? (
                  format(new Date(publishedAt), "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <ChevronDown className="ml-auto h-3.5 w-3.5 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={publishedAt ? new Date(publishedAt) : undefined}
                onSelect={(date: Date | undefined) => setValue('publishedAt', date?.toISOString() || '')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.publishedAt && <p className="text-[9px] text-red-500 font-bold">{errors.publishedAt.message}</p>}
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            URL Slug
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">/</span>
            <Input 
              {...register("slug")} 
              className="h-11 rounded-xl border-slate-200 bg-slate-50/50 pl-6 text-xs font-mono text-slate-600 border-dashed" 
            />
          </div>
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Status
          </Label>
          <select
            {...register("status")}
            className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-xs font-medium focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm cursor-pointer"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="col-span-6 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Cover Image URL
          </Label>
          <Input
            {...register("thumbnailUrl")}
            placeholder="https://example.com/cover.jpg"
            className="h-11 rounded-xl border-slate-200 bg-white text-xs focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-[350px] space-y-2">
        <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Article Content (Markdown)
        </Label>
        <textarea
          {...register("content")}
          className="flex-grow w-full rounded-xl border border-slate-200 p-6 text-sm leading-relaxed resize-none bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
          placeholder="Write your article content here..."
        />
      </div>

      <div className="flex-none flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-400">
          <Newspaper className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest italic">Drafting Engine v2.0</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            className="h-12 px-6 rounded-xl font-bold text-slate-500 hover:bg-slate-50"
          >
            Discard
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-10 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Syncing...
              </span>
            ) : isEdit ? "Update Article" : "Publish Article"}
          </Button>
        </div>
      </div>
    </form>
  );
}
