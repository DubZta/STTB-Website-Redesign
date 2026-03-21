// src/admin/components/media/MediaUploadForm.tsx
// Upload form for new Media items (multipart/form-data).
// Fields: optional file, Title, Slug, Category, ThumbnailUrl, AltText, Content.

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { 
  Upload as UploadIcon, 
  X, 
  File as FileIcon, 
  Loader2,
  HardDrive,
  Type,
  Link,
  AlignLeft,
  Image as ImageIcon
} from 'lucide-react';
import type { UploadMediaPayload } from '../../types/Media';

const uploadSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(200)
    .regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers, and hyphens only'),
  category: z.string().min(1, 'Category is required').max(100),
  thumbnailUrl: z.string().url('Must be a valid URL').or(z.literal('')),
  altText: z.string().max(200).optional(),
  content: z.string().optional(),
});

type UploadFormData = z.infer<typeof uploadSchema>;

const MEDIA_CATEGORIES = ['Photo', 'Video', 'Document', 'Gallery', 'General'];

interface MediaUploadFormProps {
  onSubmit: (payload: UploadMediaPayload) => Promise<boolean>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function MediaUploadForm({ onSubmit, onCancel, isSubmitting }: MediaUploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      category: '',
      thumbnailUrl: '',
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFormSubmit = async (data: UploadFormData) => {
    const payload: UploadMediaPayload = {
      file: selectedFile ?? undefined,
      title: data.title,
      slug: data.slug,
      category: data.category,
      thumbnailUrl: data.thumbnailUrl,
      altText: data.altText,
      content: data.content ?? '',
    };
    const success = await onSubmit(payload);
    if (success) {
      reset();
      clearFile();
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      {/* Dynamic Upload Trigger */}
      <div className="space-y-4">
        <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Source Object</Label>
        <div
          className={`group border-2 border-dashed rounded-3xl p-10 text-center transition-all cursor-pointer relative overflow-hidden ${
            selectedFile 
              ? 'border-blue-500 bg-blue-50/50' 
              : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50'
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-blue-400', 'bg-blue-50/50'); }}
          onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50/50'); }}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file) setSelectedFile(file);
          }}
        >
          {selectedFile ? (
            <div className="flex flex-col items-center animate-in zoom-in-95 duration-200">
              <div className="relative mb-4">
                 <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/40">
                    <FileIcon className="w-10 h-10" />
                 </div>
                 <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); clearFile(); }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                 </button>
              </div>
              <p className="text-sm font-black text-slate-900 tracking-tight">{selectedFile.name}</p>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">
                 {formatFileSize(selectedFile.size)} ready for ingest
              </p>
            </div>
          ) : (
            <div className="py-6 transition-transform group-hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                 <UploadIcon className="w-8 h-8" />
              </div>
              <p className="text-sm font-black text-slate-900 tracking-tight">Drop resources here or click to browse</p>
              <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Supports high-res Images, HD Video, and PDF</p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,video/*,.pdf,.doc,.docx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Meta */}
        <div className="space-y-6">
          <div className="space-y-3">
             <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-blue-600" />
                <Label htmlFor="m-title" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Resource Name</Label>
             </div>
            <Input 
              id="m-title" 
              {...register('title')} 
              placeholder="e.g. Campus Drone Shot 2026" 
              className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-slate-50/50 font-bold"
            />
            {errors.title && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          <div className="space-y-3">
             <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-blue-600" />
                <Label htmlFor="m-slug" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Object Key (Slug)</Label>
             </div>
            <Input 
              id="m-slug" 
              {...register('slug')} 
              placeholder="file-reference-slug" 
              className="h-12 rounded-xl border-slate-200 focus:border-blue-500 bg-slate-100/50 font-mono text-xs font-black text-blue-700"
            />
            {errors.slug && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.slug.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label htmlFor="m-category" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Type</Label>
              <select
                id="m-category"
                {...register('category')}
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none cursor-pointer"
              >
                <option value="">Choose Type</option>
                {MEDIA_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <p className="text-[10px] font-bold text-red-500 mt-1">{errors.category.message}</p>}
            </div>
            <div className="space-y-3">
              <Label htmlFor="m-altText" className="text-[11px] font-black uppercase tracking-widest text-slate-400">A11y Label</Label>
              <Input 
                id="m-altText" 
                {...register('altText')} 
                placeholder="Screen reader text" 
                className="h-12 rounded-xl border-slate-200 focus:border-blue-500 bg-slate-50/50 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Right: Cloud & Details */}
        <div className="space-y-6">
          <div className="space-y-3">
             <div className="flex items-center gap-2">
                <Link className="w-4 h-4 text-blue-600" />
                <Label htmlFor="m-thumbnailUrl" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Thumbnail Proxy URL</Label>
             </div>
            <Input 
              id="m-thumbnailUrl" 
              {...register('thumbnailUrl')} 
              placeholder="https://cdn.example.com/optimized.webp" 
              className="h-12 rounded-xl border-slate-200 focus:border-blue-500 bg-slate-50/50 font-medium"
            />
          </div>

          <div className="space-y-3 flex-grow">
             <div className="flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-blue-600" />
                <Label htmlFor="m-content" className="text-[11px] font-black uppercase tracking-widest text-slate-400">Technical Notes / Caption</Label>
             </div>
            <textarea
              id="m-content"
              {...register('content')}
              rows={5}
              placeholder="Internal notes or descriptive captions for frontend display..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none h-[116px]"
            />
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-100">
         <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
            <HardDrive className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">S3 Compliant Storage</span>
         </div>
        <div className="flex items-center gap-3">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel} 
            disabled={isSubmitting}
            className="rounded-xl h-12 px-8 font-bold text-slate-400 hover:bg-slate-50"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="rounded-xl h-12 px-10 font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </span>
            ) : 'Synchronize Resource'}
          </Button>
        </div>
      </div>
    </form>
  );
}
