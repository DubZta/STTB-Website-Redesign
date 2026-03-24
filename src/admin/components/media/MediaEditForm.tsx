// src/admin/components/media/MediaEditForm.tsx
// Edit existing media metadata (PUT, JSON body — no file re-upload needed).

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../app/components/ui/button';
import { Input } from '../../../app/components/ui/input';
import { Label } from '../../../app/components/ui/label';
import { 
  FileCheck, 
  Tag, 
  HardDrive, 
  Link, 
  AlignLeft, 
  Loader2,
  AlertCircle
} from 'lucide-react';
import type { MediaDetail, UpdateMediaPayload } from '../../types/Media';

const editSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(200)
    .regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers, and hyphens only'),
  category: z.enum(['book', 'video', 'photo', 'article']),
  thumbnailUrl: z.string().url('Must be a valid URL').or(z.literal('')),
  url: z.string().url('Must be a valid URL').or(z.literal('')),
  content: z.string().optional(),
});

type EditFormData = z.infer<typeof editSchema>;

const MEDIA_CATEGORIES = ['book', 'video', 'photo', 'article'];

interface MediaEditFormProps {
  initialData: MediaDetail;
  onSubmit: (payload: UpdateMediaPayload) => Promise<boolean>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function MediaEditForm({ initialData, onSubmit, onCancel, isSubmitting }: MediaEditFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditFormData>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: 'book',
      thumbnailUrl: '',
      url: '',
      content: '',
    },
  });

  useEffect(() => {
    reset({
      title: initialData.title,
      slug: initialData.slug,
      category: initialData.category as 'book' | 'video' | 'photo' | 'article',
      thumbnailUrl: initialData.thumbnailUrl,
      url: initialData.url,
      content: initialData.content,
    });
  }, [initialData, reset]);

  const handleFormSubmit = async (data: EditFormData) => {
    const payload: UpdateMediaPayload = {
      id: initialData.id,
      title: data.title,
      slug: data.slug,
      category: data.category,
      thumbnailUrl: data.thumbnailUrl,
      url: data.url,
      content: data.content ?? '',
    };
    await onSubmit(payload);
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col h-full w-full gap-8 px-8 py-8"
    >
      <div className="flex-none flex items-start gap-8">
        <div className="flex-grow flex flex-col gap-6">
          {initialData.url && (
            <div className="flex items-center gap-6 p-6 bg-slate-50 border border-slate-200/60 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0 overflow-hidden">
                {initialData.url.match(/\.(jpeg|jpg|gif|png)$/) ? (
                   <img src={initialData.url} className="w-full h-full object-cover" alt="" />
                ) : (
                   <FileCheck className="w-8 h-8" />
                )}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Active Cloud Resource</p>
                <div className="flex items-center gap-3">
                  <p className="text-base font-bold text-slate-900 truncate">Source Managed via URL</p>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-medium italic underline decoration-blue-100">{initialData.url}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-6 gap-x-6 gap-y-4">
            <div className="col-span-2 space-y-1.5">
              <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Resource Display Title
              </Label>
              <Input
                {...register("title")}
                className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
              />
            </div>
            
            <div className="col-span-1 space-y-1.5">
              <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Asset Category
              </Label>
              <select
                {...register("category")}
                className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-xs font-medium focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm cursor-pointer"
              >
                {MEDIA_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 space-y-1.5">
              <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Global Slug Identifier
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">/</span>
                <Input
                  {...register("slug")}
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/50 pl-6 text-xs font-mono text-slate-600 border-dashed"
                />
              </div>
            </div>

            <div className="col-span-3 space-y-1.5">
              <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Cloud Storage URL
              </Label>
              <Input
                {...register("url")}
                placeholder="https://cloud.storage/asset.mp4"
                className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
              />
              {errors.url && <p className="text-[10px] text-red-500 font-bold">{errors.url.message}</p>}
            </div>

            <div className="col-span-3 space-y-1.5">
              <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Thumbnail Override
              </Label>
              <Input
                {...register("thumbnailUrl")}
                placeholder="https://cdn.example.com/thumb.jpg"
                className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="w-80 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-5 flex items-center gap-2">
               <AlertCircle className="w-3 h-3 text-amber-500" />
               System Metadata
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-50 pb-2">
                 <span className="text-[11px] font-medium text-slate-500">Created At</span>
                 <span className="text-xs font-bold text-slate-900">{new Date(initialData.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-end">
                 <span className="text-[11px] font-medium text-slate-500">Asset Version</span>
                 <span className="text-xs font-bold text-emerald-600">v2.4.0 (Sync)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-[250px] space-y-2">
        <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Internal Notes & Descriptions
        </Label>
        <textarea
          {...register("content")}
          className="flex-grow w-full rounded-xl border border-slate-200 p-6 text-sm leading-relaxed resize-none bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
          placeholder="Enter detailed description..."
        />
      </div>

      <div className="flex-none flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-400">
          <Tag className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest italic tracking-wider">Indexed Metadata Frame</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            className="h-12 px-6 rounded-xl font-bold text-slate-500 hover:bg-slate-50"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-10 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Syncing...
              </span>
            ) : "Update Registry"}
          </Button>
        </div>
      </div>
    </form>
  );
}
