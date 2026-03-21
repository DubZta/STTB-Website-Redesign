// src/admin/components/media/MediaEditForm.tsx
// Edit existing media metadata (PUT, JSON body — no file re-upload needed).

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
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
  category: z.string().min(1, 'Category is required').max(100),
  thumbnailUrl: z.string().url('Must be a valid URL').or(z.literal('')),
  content: z.string().optional(),
});

type EditFormData = z.infer<typeof editSchema>;

const MEDIA_CATEGORIES = ['Photo', 'Video', 'Document', 'Gallery', 'General'];

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
      category: '',
      thumbnailUrl: '',
      content: '',
    },
  });

  useEffect(() => {
    reset({
      title: initialData.title,
      slug: initialData.slug,
      category: initialData.category,
      thumbnailUrl: initialData.thumbnailUrl,
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
      content: data.content ?? '',
    };
    await onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      {/* Object Summary Card */}
      {initialData.url && (
        <div className="flex items-center gap-6 p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
             <FileCheck className="w-8 h-8" />
          </div>
          <div className="flex-grow min-w-0">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Linked Resource</p>
             <p className="text-sm font-black text-slate-900 truncate tracking-tight">{initialData.filename || 'Source Fragment'}</p>
             <div className="flex items-center gap-3 mt-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md uppercase">{initialData.mimeType.split('/')[1]}</span>
                <span className="text-[10px] font-bold text-slate-400">{(initialData.fileSize / 1024).toFixed(1)} KB</span>
             </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="me-title" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Display Identity</Label>
            <Input 
              id="me-title" 
              {...register('title')} 
              className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-slate-50/50 font-bold"
            />
            {errors.title && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          <div className="space-y-3">
             <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-blue-600" />
                <Label htmlFor="me-slug" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Resource Key (Slug)</Label>
             </div>
            <Input 
              id="me-slug" 
              {...register('slug')} 
              className="h-12 rounded-xl border-slate-200 focus:border-blue-500 bg-slate-100/50 font-mono text-xs font-black text-blue-700"
            />
            {errors.slug && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.slug.message}</p>}
          </div>

          <div className="space-y-3">
              <div className="flex items-center gap-2">
                 <Tag className="w-4 h-4 text-blue-600" />
                 <Label htmlFor="me-category" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Type Classification</Label>
              </div>
              <select
                id="me-category"
                {...register('category')}
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none cursor-pointer"
              >
                <option value="">Select Type</option>
                {MEDIA_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.category.message}</p>}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
             <div className="flex items-center gap-2">
                <Link className="w-4 h-4 text-blue-600" />
                <Label htmlFor="me-thumbnailUrl" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Proxy Preview URL</Label>
             </div>
            <Input 
              id="me-thumbnailUrl" 
              {...register('thumbnailUrl')} 
              placeholder="https://cdn.example.com/asset.webp" 
              className="h-12 rounded-xl border-slate-200 focus:border-blue-500 bg-slate-50/50 font-medium"
            />
          </div>

          <div className="space-y-3 flex-grow">
             <div className="flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-blue-600" />
                <Label htmlFor="me-content" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Operational Log / Description</Label>
             </div>
            <textarea
              id="me-content"
              {...register('content')}
              rows={5}
              placeholder="Describe the context of this resource..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none h-[116px]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-slate-100">
         <div className="flex items-start gap-2.5 max-w-sm">
            <AlertCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <p className="text-[10px] font-bold text-slate-400 leading-relaxed italic uppercase">
              Modification of the Resource Key (Slug) may result in broken links across historical datasets. Proceed with operational awareness.
            </p>
         </div>
        <div className="flex items-center gap-3">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel} 
            disabled={isSubmitting}
            className="rounded-xl h-12 px-8 font-bold text-slate-400 hover:bg-slate-50"
          >
            Abort
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="rounded-xl h-12 px-10 font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Committing...
              </span>
            ) : 'Update Registry'}
          </Button>
        </div>
      </div>
    </form>
  );
}
