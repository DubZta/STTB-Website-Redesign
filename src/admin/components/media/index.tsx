// src/admin/components/media/index.tsx
// Media management: table with thumbnail preview, upload, edit, and delete.

import { useState } from 'react';
import { useMediaData } from './hooks/useMediaData';
import { useAdminFetch } from '../../functions/useAdminFetch';
import { AdminApiUrl } from '../../functions/AdminApiUrl';
import MediaUploadForm from './MediaUploadForm';
import MediaEditForm from './MediaEditForm';
import ConfirmDeleteDialog from '../shared/ConfirmDeleteDialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/app/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Search, 
  Loader2, 
  AlertCircle, 
  ExternalLink, 
  Image as ImageIcon,
  HardDrive,
  Filter,
  ArrowUpDown,
  Layers,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MediaListItem, MediaDetail, UploadMediaPayload, UpdateMediaPayload } from '../../types/Media';

export default function MediaManagement() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const { items, totalCount, isLoading, error, isUploading, isUpdating, isDeleting, onUpload, onUpdate, onDelete } =
    useMediaData({ page, pageSize, search });

  const { fetchGET } = useAdminFetch();

  const [uploadOpen, setUploadOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaDetail | null>(null);
  const [deletingItem, setDeletingItem] = useState<MediaListItem | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleEditClick = async (item: MediaListItem) => {
    setLoadingDetail(true);
    const { data } = await fetchGET<MediaDetail>(AdminApiUrl.mediaDetail(item.id));
    setLoadingDetail(false);
    if (data) setEditingItem(data);
  };

  const handleUploadSubmit = async (payload: UploadMediaPayload): Promise<boolean> => {
    const success = await onUpload(payload);
    if (success) setUploadOpen(false);
    return success;
  };

  const handleEditSubmit = async (payload: UpdateMediaPayload): Promise<boolean> => {
    const success = await onUpdate(payload.id, payload);
    if (success) setEditingItem(null);
    return success;
  };

  const handleDeleteConfirm = async () => {
    if (!deletingItem) return;
    const success = await onDelete(deletingItem.id);
    if (success) setDeletingItem(null);
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="space-y-8 pb-10">
      {/* Page Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
             <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <HardDrive className="w-6 h-6" />
             </div>
             Media Library
          </h1>
          <p className="text-slate-500 mt-2 text-sm font-medium">Manage images, documents, and digital assets for your platform.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
           <Button variant="outline" size="sm" className="bg-white rounded-xl h-11 px-6 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition-all">
              <Filter className="w-4 h-4 mr-2" />
              Filter Assets
           </Button>
           <Button onClick={() => setUploadOpen(true)} className="bg-red-600 hover:bg-red-700 text-white rounded-xl h-11 px-8 font-bold shadow-lg shadow-red-500/20 transition-all active:scale-95 border-none">
             <Plus className="w-4 h-4 mr-2" />
             Upload Asset
           </Button>
        </div>
      </div>

      {/* Dynamic Search & Stats Slider */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by filename, alt text, or category..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); }}
              className="pl-11 border-none bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 font-medium"
            />
          </div>
          <div className="h-6 w-[1px] bg-slate-100 mx-4 hidden sm:block"></div>
          <p className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest hidden xl:block">
             {totalCount} Total Files Synchronized
          </p>
      </div>

      {/* Error Messaging */}
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold shadow-sm"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            Fatal error communicating with storage API. Please check your credentials or network status.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assets Collection Table */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 border-b border-slate-100 h-16 hover:bg-slate-50">
              <TableHead className="py-0 px-8 text-[11px] font-black text-slate-400 uppercase tracking-widest w-24">Visual</TableHead>
              <TableHead className="py-0 px-8 text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 h-16 leading-none">
                 Asset Metadata <ArrowUpDown className="w-3 h-3" />
              </TableHead>
              <TableHead className="py-0 px-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Category</TableHead>
              <TableHead className="py-0 px-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Timestamp</TableHead>
              <TableHead className="py-0 px-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Operations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="py-40 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
                    <p className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">Loading Assets...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="py-40 text-center">
                   <div className="flex flex-col items-center gap-4 opacity-30">
                      <div className="w-20 h-20 bg-slate-100 rounded-[30%] flex items-center justify-center">
                        <ImageIcon className="w-10 h-10 text-slate-400" />
                      </div>
                      <p className="max-w-[280px] text-sm text-slate-900 font-black italic tracking-tight">
                        {search ? "Zero assets matching current criteria." : "Clean Slate. Start building your library."}
                      </p>
                   </div>
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, idx) => (
                <TableRow key={item.id} className="group border-b border-slate-50 last:border-0 hover:bg-blue-50/20 transition-all">
                  <TableCell className="py-6 px-8">
                    <div className="relative w-16 h-12 rounded-xl border-2 border-slate-100 overflow-hidden bg-slate-50 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:z-10 group-hover:border-blue-200">
                      {item.thumbnailUrl || item.url ? (
                        <img
                          src={item.thumbnailUrl || item.url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            (e.currentTarget as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className={`absolute inset-0 flex items-center justify-center bg-slate-100 ${item.thumbnailUrl || item.url ? 'hidden' : ''}`}>
                         <FileText className="w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <div className="flex flex-col max-w-md">
                      <span className="font-bold text-[15px] text-slate-900 group-hover:text-blue-600 transition-colors truncate">{item.title}</span>
                      <div className="flex items-center gap-2 mt-1">
                         <span className="text-[10px] text-slate-400 font-mono tracking-tight">{item.id.substring(0,12)}...</span>
                         <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                         <span className="text-[11px] text-slate-500 font-medium italic underline decoration-blue-100 underline-offset-2">/{item.slug}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8 font-mono">
                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg w-fit border border-slate-200">
                       <span className="text-[10px] font-black uppercase tracking-wider">{item.category || "General"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <div className="flex flex-col">
                       <span className="text-[13px] font-bold text-slate-900">{formatDate(item.createdAt)}</span>
                       <span className="text-[10px] text-slate-400 font-medium">Uploaded by System</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      {item.url && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(item.url, '_blank')}
                          className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md hover:text-blue-600"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(item)}
                        disabled={loadingDetail}
                        className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md hover:text-emerald-500"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeletingItem(item)}
                        disabled={isDeleting}
                        className="h-10 w-10 rounded-xl hover:bg-red-50 hover:shadow-md hover:text-red-500 text-slate-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Large Pagination Info */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
           <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-3xl border border-slate-200 shadow-sm group">
              <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
                 {totalCount}
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mb-1">Total Assets</p>
                 <p className="text-xs font-bold text-slate-900">Synchronized Media Files</p>
              </div>
           </div>
           
           <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-xl h-11 px-6 font-black text-xs bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors border-none"
            >
              Previous
            </Button>
            <div className="px-6 flex flex-col items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Page</span>
              <span className="text-sm font-black text-slate-900 tracking-tighter leading-none">{page} / {totalPages}</span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-xl h-11 px-6 font-black text-xs bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors border-none"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Smooth Upload Overlay */}
      <Dialog open={uploadOpen} onOpenChange={(o: boolean) => { if (!o) setUploadOpen(false); }}>
        <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto rounded-[40px] p-0 border-none shadow-2xl bg-slate-50 overflow-hidden">
          <DialogHeader className="bg-blue-600 px-10 py-12 text-white relative">
             <div className="relative z-10">
               <DialogTitle className="text-4xl font-black tracking-tighter italic">Import Media</DialogTitle>
               <DialogDescription className="text-blue-100 text-xs font-bold mt-2 uppercase tracking-widest opacity-80">Drag and drop to start uploading</DialogDescription>
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          </DialogHeader>
          <div className="p-10 -mt-10 relative z-20">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
               <MediaUploadForm
                onSubmit={handleUploadSubmit}
                onCancel={() => setUploadOpen(false)}
                isSubmitting={isUploading}
               />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Elegant Edit Context */}
      <Dialog open={!!editingItem} onOpenChange={(o: boolean) => { if (!o) setEditingItem(null); }}>
        <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto rounded-[32px] p-0 border-none shadow-2xl bg-[#F1F5F9]">
          <DialogHeader className="bg-white px-10 py-8 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl font-black text-slate-900 tracking-tight">System Resource Editor</DialogTitle>
                <DialogDescription className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Refining asset metadata for {editingItem?.title}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="p-10">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              {editingItem && (
                <MediaEditForm
                  initialData={editingItem}
                  onSubmit={handleEditSubmit}
                  onCancel={() => setEditingItem(null)}
                  isSubmitting={isUpdating}
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
        open={!!deletingItem}
        itemName={deletingItem?.title ?? ''}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeletingItem(null)}
        isDeleting={isDeleting}
      />
    </div>
  );
}
