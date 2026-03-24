// src/admin/components/media/index.tsx
// Media management: table with thumbnail preview, upload, edit, and delete.

import { useState } from 'react';
import { useMediaData } from './hooks/useMediaData';
import { useAdminFetch } from '../../functions/useAdminFetch';
import { AdminApiUrl } from '../../functions/AdminApiUrl';
import MediaUploadForm from './MediaUploadForm';
import MediaEditForm from './MediaEditForm';
import ConfirmDeleteDialog from '../shared/ConfirmDeleteDialog';
import { Button } from '../../../app/components/ui/button';
import { Input } from '../../../app/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../../../app/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../app/components/ui/table';
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
  FileText,
  Clock
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
  const [detailOpen, setDetailOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaDetail | null>(null);
  const [viewingItem, setViewingItem] = useState<MediaDetail | null>(null);
  const [deletingItem, setDeletingItem] = useState<MediaListItem | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleEditClick = async (e: React.MouseEvent, item: MediaListItem) => {
    e.stopPropagation();
    setLoadingDetail(true);
    const { data } = await fetchGET<MediaDetail>(AdminApiUrl.mediaDetail(item.id));
    setLoadingDetail(false);
    if (data) setEditingItem(data);
  };

  const handleRowClick = async (item: MediaListItem) => {
    setLoadingDetail(true);
    const { data } = await fetchGET<MediaDetail>(AdminApiUrl.mediaDetail(item.id));
    setLoadingDetail(false);
    if (data) {
      setViewingItem(data);
      setDetailOpen(true);
    }
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
        {!!error && (
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
            <TableRow className="h-14 bg-slate-50/50 border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
              <TableHead className="px-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] w-24">Visual</TableHead>
              <TableHead className="px-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  Asset Metadata <ArrowUpDown className="w-3 h-3 text-slate-300" />
                </div>
              </TableHead>
              <TableHead className="px-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Category</TableHead>
              <TableHead className="px-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Timestamp</TableHead>
              <TableHead className="px-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Operations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="py-32 text-center">
                  <div className="flex flex-col items-center gap-4 text-slate-400">
                    <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] italic">Syncing Asset Repository...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="py-32 text-center">
                  <div className="flex flex-col items-center gap-4 opacity-50">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      {search ? "Zero matches found" : "Repository is currently empty"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow
                  key={item.id}
                  onClick={() => handleRowClick(item)}
                  className="h-20 group border-b border-slate-50 last:border-0 hover:bg-slate-50/80 transition-all cursor-pointer"
                >
                  <TableCell className="px-8">
                    <div className="relative w-14 h-10 rounded-lg border border-slate-200 overflow-hidden bg-slate-50 shadow-sm transition-transform group-hover:scale-105">
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
                        <FileText className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-8">
                    <div className="flex flex-col max-w-md">
                      <span className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight truncate">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium font-mono">
                        /{item.slug}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-8">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg w-fit border border-slate-200">
                      <span className="text-[10px] font-black uppercase tracking-wider">{item.category || "General"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-8">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 opacity-50" />
                      <span className="text-[13px] font-medium">{formatDate(item.createdAt)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                      {item.url && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e: React.MouseEvent) => { e.stopPropagation(); window.open(item.url, '_blank'); }}
                          className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md hover:text-blue-600 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e: React.MouseEvent) => handleEditClick(e, item)}
                        disabled={loadingDetail}
                        className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md hover:text-blue-600 transition-all"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e: React.MouseEvent) => { e.stopPropagation(); setDeletingItem(item); }}
                        disabled={isDeleting}
                        className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md hover:text-red-600 transition-all"
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

      <Dialog
        open={uploadOpen}
        onOpenChange={(o: boolean) => {
          if (!o) setUploadOpen(false);
        }}
      >
        <DialogContent className="!max-w-[1650px] w-[98vw] max-h-[95vh] rounded-2xl p-0 border border-slate-200 shadow-2xl bg-white overflow-hidden flex flex-col">
          <DialogHeader className="px-8 py-6 border-b border-slate-100 flex flex-row items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-red-600 rounded-full" />
              <DialogTitle className="text-xl font-bold text-slate-900 tracking-tight">
                Import Resource Assets
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto">
            <MediaUploadForm
              onSubmit={handleUploadSubmit}
              onCancel={() => setUploadOpen(false)}
              isSubmitting={isUploading}
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Elegant Edit Context */}
      <Dialog
        open={!!editingItem}
        onOpenChange={(o: boolean) => {
          if (!o) setEditingItem(null);
        }}
      >
        <DialogContent className="!max-w-[1650px] w-[98vw] max-h-[95vh] rounded-2xl p-0 border border-slate-200 shadow-2xl bg-white overflow-hidden flex flex-col">
          <DialogHeader className="px-8 py-6 border-b border-slate-100 flex flex-row items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-emerald-600 rounded-full" />
              <DialogTitle className="text-xl font-bold text-slate-900 tracking-tight">
                Update Asset Registry
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto">
            {editingItem && (
              <MediaEditForm
                initialData={editingItem}
                onSubmit={handleEditSubmit}
                onCancel={() => setEditingItem(null)}
                isSubmitting={isUpdating}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* View Detail Modal */}
      <Dialog open={detailOpen} onOpenChange={(o: boolean) => { if (!o) setDetailOpen(false); }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] p-0 border-none shadow-2xl bg-white">
          {viewingItem && (
            <>
              <div className="h-80 w-full relative group/hero">
                {viewingItem.thumbnailUrl || viewingItem.url ? (
                  <img src={viewingItem.thumbnailUrl || viewingItem.url} alt="" className="w-full h-full object-contain bg-slate-900" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <ImageIcon className="w-20 h-20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {viewingItem.category || "General"}
                    </span>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                      Media Asset
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tight">{viewingItem.title}</h2>
                  <p className="text-white/60 text-xs font-medium mt-2">
                    ID: {viewingItem.id} • /{viewingItem.slug}
                  </p>
                </div>
              </div>
              <div className="p-12">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Metadata Analysis</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-slate-500 italic">Slug Identifier</p>
                      <p className="text-sm font-black text-slate-900 mt-1">/{viewingItem.slug}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 italic">System Filename</p>
                      <p className="text-sm font-black text-slate-900 mt-1 truncate">{viewingItem.url?.split('/').pop()}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => window.open(viewingItem.url, '_blank')}
                    className="rounded-xl bg-blue-600 text-white px-10 font-black h-14 shadow-lg shadow-blue-500/20 active:scale-95 transition-all gap-3"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Open Full Resolution
                  </Button>
                </div>
              </div>
              <div className="px-12 py-8 bg-slate-50 flex justify-end border-t border-slate-100">
                <Button
                  onClick={() => setDetailOpen(false)}
                  variant="ghost"
                  className="rounded-xl text-slate-400 font-bold hover:bg-slate-200"
                >
                  Close Asset
                </Button>
              </div>
            </>
          )}
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
