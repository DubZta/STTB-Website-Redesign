// src/admin/components/media/MediaUploadForm.tsx
// Upload form for new Media items (multipart/form-data).
// Fields: optional file, Title, Slug, Category, ThumbnailUrl, AltText, Content.

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../app/components/ui/button';
import { Input } from '../../../app/components/ui/input';
import { Label } from '../../../app/components/ui/label';
import { 
  Upload as UploadIcon, 
  X, 
  File as FileIcon, 
  Loader2,
  HardDrive,
  Type,
  Link,
  AlignLeft,
  Image as ImageIcon,
  Layers,
  FileText
} from 'lucide-react';
import type { UploadMediaPayload } from '../../types/Media';

const uploadSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(200)
    .regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers, and hyphens only'),
  category: z.enum(['book', 'video', 'photo', 'article']),
  thumbnailUrl: z.string().url('Must be a valid URL').or(z.literal('')),
  url: z.string().url('URL is required').min(1, 'URL is required'),
  altText: z.string().max(200).optional(),
  content: z.string().optional(),
});

type UploadFormData = z.infer<typeof uploadSchema>;

const MEDIA_CATEGORIES = ['book', 'video', 'photo', 'article'];

interface MediaUploadFormProps {
  onSubmit: (payload: UploadMediaPayload) => Promise<boolean>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function MediaUploadForm({ onSubmit, onCancel, isSubmitting }: MediaUploadFormProps) {


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UploadFormData>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: 'book',
      thumbnailUrl: '',
      url: '',
      altText: '',
      content: '',
    },
  });

  const titleValue = watch('title');
  useEffect(() => {
    if (titleValue) {
      const slug = titleValue
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setValue('slug', slug, { shouldValidate: false });
    }
  }, [titleValue, setValue]);

  const handleFormSubmit = async (data: UploadFormData) => {
    const payload: UploadMediaPayload = {
      title: data.title,
      slug: data.slug,
      category: data.category,
      thumbnailUrl: data.thumbnailUrl,
      url: data.url,
      altText: data.altText,
      content: data.content ?? '',
    };
    const success = await onSubmit(payload);
    if (success) {
      reset();
    }
  };



  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col h-full w-full gap-8 px-8 py-8"
    >
      <div className="flex-none flex items-start gap-8 bg-slate-50/50 p-8 rounded-2xl border border-slate-200/60">
        <div className="flex-grow flex flex-col gap-4">
           <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                 <Link className="w-7 h-7" />
              </div>
              <div>
                 <h2 className="text-xl font-black text-slate-900 tracking-tight">Cloud Resource Registry</h2>
                 <p className="text-slate-500 text-xs font-medium">Provision assets via global CDN or cloud storage endpoints.</p>
              </div>
           </div>
        </div>

        <div className="w-80 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
              <HardDrive className="w-3 h-3" />
              S3 Storage Info
            </h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-500 italic">Access Policy</p>
                <p className="text-[11px] font-bold text-slate-900">Public Read / Authenticated Write</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-500 italic">Persistence</p>
                <p className="text-[11px] font-bold text-slate-900">Durable Immutable Archive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-none grid grid-cols-6 gap-x-6 gap-y-4">
        <div className="col-span-2 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Resource Display Title
          </Label>
          <Input
            {...register("title")}
            placeholder="e.g., Campus Event Gallery 2026..."
            className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Asset Type
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

        <div className="col-span-2 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Accessibility (Alt Text)
          </Label>
          <Input
            {...register("altText")}
            placeholder="Describe the asset..."
            className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>

        <div className="col-span-3 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Cloud Storage URL
          </Label>
          <Input
            {...register("url")}
            placeholder="https://cloud.storage/asset.mp4"
            className="h-11 rounded-xl border-slate-200 bg-white text-xs focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
          {errors.url && <p className="text-[10px] text-red-500 font-bold">{errors.url.message}</p>}
        </div>

        <div className="col-span-3 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            External Thumbnail Override
          </Label>
          <Input
            {...register("thumbnailUrl")}
            placeholder="https://cdn.example.com/thumb.jpg"
            className="h-11 rounded-xl border-slate-200 bg-white text-xs focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-[250px] space-y-2">
        <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Technical Caption & Description
        </Label>
        <textarea
          {...register("content")}
          className="flex-grow w-full rounded-xl border border-slate-200 p-6 text-sm leading-relaxed resize-none bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
          placeholder="Metadata, attribution info, or asset details..."
        />
      </div>

      <div className="flex-none flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-400">
          <Layers className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest italic tracking-wider">Cloud Engine Integrated</span>
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
            className="h-12 px-10 rounded-xl font-bold bg-slate-900 border-none hover:bg-black text-white shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Transferring...
              </span>
            ) : "Upload & Regist"}
          </Button>
        </div>
      </div>
    </form>
  );
}
