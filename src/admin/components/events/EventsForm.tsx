// src/admin/components/events/EventsForm.tsx
// Create/Edit form for Event items.
// Uses React Hook Form + Zod validation (fe-standard section 6.1).

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../app/components/ui/button';
import { Input } from '../../../app/components/ui/input';
import { Label } from '../../../app/components/ui/label';
import {
  Calendar as CalendarIcon,
  MapPin,
  Tag as TagIcon,
  Layers,
  Clock,
  Globe,
  Loader2,
  Image as ImageIcon,
  ChevronDown
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../../../app/lib/utils';
import { Calendar } from '../../../app/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../../app/components/ui/popover';
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
  eventEndDate: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'published']),
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
      title: "",
      slug: "",
      category: "",
      eventDate: new Date().toISOString(),
      eventEndDate: undefined,
      content: "",
      status: "draft",
      thumbnailUrl: "",
    },
  });

  const eventDate = watch('eventDate');

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        slug: initialData.slug,
        category: initialData.category,
        eventDate: initialData.eventDate,
        eventEndDate: initialData.eventEndDate,
        content: initialData.content,
        status: initialData.status as "draft" | "published",
        thumbnailUrl: initialData.thumbnailUrl,
      });
    }
  }, [initialData, reset]);

  // Auto-generate slug from title when creating
  const titleValue = watch("title");
  useEffect(() => {
    if (!isEdit && titleValue) {
      const slug = titleValue
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setValue("slug", slug, { shouldValidate: false });
    }
  }, [isEdit, titleValue, setValue]);

  const handleFormSubmit = async (data: EventFormData) => {
    const payload: CreateEventPayload | UpdateEventPayload = {
      ...(isEdit ? { id: initialData!.id } : {}),
      title: data.title,
      slug: data.slug,
      category: data.category,
      eventDate: new Date(data.eventDate).toISOString(),
      eventEndDate: data.eventEndDate ? new Date(data.eventEndDate).toISOString() : undefined,
      content: data.content,
      status: data.status,
      thumbnailUrl: data.thumbnailUrl,
    } as CreateEventPayload | UpdateEventPayload;

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
            Event Title
          </Label>
          <Input
            {...register("title")}
            placeholder="Enter a descriptive title..."
            className="h-11 rounded-xl border-slate-200 bg-white text-sm focus:ring-sttb-navy/10 focus:border-sttb-navy transition-all shadow-sm"
          />
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Category
          </Label>
          <select
            {...register("category")}
            className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-xs font-medium focus:ring-2 focus:ring-sttb-navy/10 focus:border-sttb-navy outline-none transition-all shadow-sm cursor-pointer"
          >
            {EVENT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 space-y-1.5 text-center">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Event Date
          </Label>
          <div className="relative flex justify-center">
            {/* 1. Tampilan Visual (Sesuai Gambar 1) */}
            <div
              className={cn(
                "w-full h-11 rounded-xl flex items-center px-4 border border-slate-200 bg-white text-xs transition-all shadow-sm",
                !eventDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-3.5 w-3.5 text-slate-400" />
              <span className="flex-grow text-left">
                {eventDate
                  ? format(new Date(eventDate), "MMMM do, yyyy")
                  : "Pick a date"}
              </span>
              <ChevronDown className="h-3.5 w-3.5 opacity-50 text-slate-400" />
            </div>

            {/* 2. Input Asli (Melayang di atas, tapi transparan total) */}
            <input
              type="date"
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
              value={
                eventDate ? new Date(eventDate).toISOString().split("T")[0] : ""
              }
              onChange={(e) => {
                const dateStr = e.target.value;
                if (dateStr) {
                  const newDate = new Date(dateStr);
                  if (eventDate) {
                    const current = new Date(eventDate);
                    newDate.setHours(current.getHours(), current.getMinutes());
                  }
                  setValue("eventDate", newDate.toISOString());
                }
              }}
            />
          </div>
          {errors.eventDate && (
            <p className="text-[9px] text-red-500 font-bold mt-1">
              {errors.eventDate.message}
            </p>
          )}
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Start Time
          </Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <Input
              type="time"
              value={eventDate ? format(new Date(eventDate), "HH:mm") : "00:00"}
              onChange={(e) => {
                const [hours, minutes] = e.target.value.split(":");
                const newDate = eventDate ? new Date(eventDate) : new Date();
                newDate.setHours(parseInt(hours));
                newDate.setMinutes(parseInt(minutes));
                setValue("eventDate", newDate.toISOString());
              }}
              className="h-11 rounded-xl border-slate-200 bg-white pl-9 text-xs focus:ring-sttb-navy/10 focus:border-sttb-navy transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            End Time
          </Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <Input
              type="time"
              value={
                watch("eventEndDate")
                  ? format(new Date(watch("eventEndDate")!), "HH:mm")
                  : ""
              }
              onChange={(e) => {
                if (!e.target.value) {
                  setValue("eventEndDate", undefined);
                  return;
                }
                const [hours, minutes] = e.target.value.split(":");
                const newDate = eventDate ? new Date(eventDate) : new Date();
                const endDate = new Date(newDate);
                endDate.setHours(parseInt(hours));
                endDate.setMinutes(parseInt(minutes));
                setValue("eventEndDate", endDate.toISOString());
              }}
              className="h-11 rounded-xl border-slate-200 bg-white pl-9 text-xs focus:ring-sttb-navy/10 focus:border-sttb-navy transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            URL Slug
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              /
            </span>
            <Input
              {...register("slug")}
              className="h-11 rounded-xl border-slate-200 bg-slate-50/50 pl-6 text-xs font-mono text-slate-600 border-dashed"
            />
          </div>
          {errors.slug && (
            <p className="text-[9px] text-red-500 font-bold">
              {errors.slug.message}
            </p>
          )}
        </div>

        <div className="col-span-1 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Status
          </Label>
          <select
            {...register("status")}
            className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4 text-xs font-medium focus:ring-2 focus:ring-sttb-navy/10 focus:border-sttb-navy outline-none transition-all shadow-sm cursor-pointer"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="col-span-6 space-y-1.5">
          <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Thumbnail Image URL
          </Label>
          <Input
            {...register("thumbnailUrl")}
            placeholder="https://example.com/image.jpg"
            className="h-11 rounded-xl border-slate-200 bg-white text-xs focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-[300px] space-y-2">
        <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Event Details & Content
        </Label>
        <textarea
          {...register("content")}
          className="flex-grow w-full rounded-xl border border-slate-200 p-6 text-sm leading-relaxed resize-none bg-white focus:ring-2 focus:ring-sttb-navy/10 focus:border-sttb-navy outline-none transition-all shadow-sm"
          placeholder="Write the event description or markdown content here..."
        />
      </div>

      <div className="flex-none flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-400">
          <Layers className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            S3 Optimized Storage
          </span>
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
            className="h-12 px-10 rounded-xl font-bold bg-sttb-navy hover:bg-sttb-navy-dark text-white shadow-lg shadow-sttb-navy/20 active:scale-[0.98] transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : isEdit ? (
              "Update Schedule"
            ) : (
              "Add to Schedule"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}