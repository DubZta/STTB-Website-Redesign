// src/admin/components/news/index.tsx
// News management list: table with search, create, edit, and delete actions.

import { useState } from 'react';
import { useNewsData } from './hooks/useNewsData';
import { useAdminFetch } from '../../functions/useAdminFetch';
import { AdminApiUrl } from '../../functions/AdminApiUrl';
import NewsForm from './NewsForm';
import ConfirmDeleteDialog from '../shared/ConfirmDeleteDialog';
import StatusBadge from '../shared/StatusBadge';
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
  Filter,
  ArrowUpDown,
  MoreVertical,
  Calendar,
  Tag,
  Newspaper,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NewsListItem, NewsDetail, CreateNewsPayload, UpdateNewsPayload } from '../../types/News';

export default function NewsManagement() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const { items, totalCount, isLoading, error, isCreating, isUpdating, isDeleting, onCreate, onUpdate, onDelete } =
    useNewsData({ page, pageSize, search });

  const { fetchGET } = useAdminFetch();

  // Dialog state
  const [formOpen, setFormOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsDetail | null>(null);
  const [viewingItem, setViewingItem] = useState<NewsDetail | null>(null);
  const [deletingItem, setDeletingItem] = useState<NewsListItem | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleCreateClick = () => {
    setEditingItem(null);
    setFormOpen(true);
  };

  const handleEditClick = async (e: React.MouseEvent, item: NewsListItem) => {
    e.stopPropagation();
    setLoadingDetail(true);
    const { data } = await fetchGET<NewsDetail>(AdminApiUrl.newsDetail(item.id));
    setLoadingDetail(false);
    if (data) {
      setEditingItem(data);
      setFormOpen(true);
    }
  };

  const handleRowClick = async (item: NewsListItem) => {
    setLoadingDetail(true);
    const { data } = await fetchGET<NewsDetail>(AdminApiUrl.newsDetail(item.id));
    setLoadingDetail(false);
    if (data) {
      setViewingItem(data);
      setDetailOpen(true);
    }
  };

  const handleFormSubmit = async (payload: CreateNewsPayload | UpdateNewsPayload): Promise<boolean> => {
    let success: boolean;
    if (editingItem) {
      success = await onUpdate(editingItem.id, payload as UpdateNewsPayload);
    } else {
      success = await onCreate(payload as CreateNewsPayload);
    }
    if (success) setFormOpen(false);
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
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">News & Articles</h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">Manage your website's news content and blog posts from here.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" size="sm" className="bg-white rounded-xl h-11 px-6 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button onClick={handleCreateClick} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 px-8 font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            <Plus className="w-4 h-4 mr-2" />
            Create Article
          </Button>
        </div>
      </div>

      {/* Toolbar & Search */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-2">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search by title, category, or content slug..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); }}
            className="pl-11 border-none bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 font-medium"
          />
        </div>
        <div className="h-6 w-[1px] bg-slate-100 mx-2 hidden sm:block"></div>
        <div className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hidden lg:block">
          {totalCount} Total Items
        </div>
      </div>

      {/* Error State */}
      <AnimatePresence>
        {!!error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium shadow-sm"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            System encountered an error while fetching news data. Please check your connection or retry.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table Section */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="h-14 bg-slate-50/50 border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
              <TableHead className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] w-24">Visual</TableHead>
              <TableHead className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  Title & SEO Details <ArrowUpDown className="w-3 h-3 text-slate-300" />
                </div>
              </TableHead>
              <TableHead className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Category</TableHead>
              <TableHead className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Publication</TableHead>
              <TableHead className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Date</TableHead>
              <TableHead className="px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Operations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="py-32 text-center">
                  <div className="flex flex-col items-center gap-4 text-slate-400">
                    <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] italic">Syncing Data Registry...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="py-32 text-center">
                  <div className="flex flex-col items-center gap-4 opacity-50">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                      <Newspaper className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      {search ? 'Zero matches found' : 'Database is currently empty'}
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
                  <TableCell className="px-6">
                    <div className="w-14 h-10 rounded-lg border border-slate-200 overflow-hidden bg-slate-50 shadow-sm transition-transform group-hover:scale-105">
                      {item.thumbnailUrl ? (
                        <img src={item.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="px-6">
                    <div className="flex flex-col max-w-sm">
                      <span className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight truncate">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium font-mono">
                        /{item.slug}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg w-fit border border-slate-200">
                      <Tag className="w-3 h-3 opacity-50 text-slate-400" />
                      <span className="text-[10px] font-black uppercase tracking-wider">{item.category}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6">
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell className="px-6">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 opacity-50" />
                      <span className="text-[13px] font-medium">{formatDate(item.publishedAt)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8 px-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic flex items-center gap-2">
            Showing <span className="text-slate-900 border-b border-blue-500">{items.length}</span> of {totalCount} Articles
          </p>
          <div className="flex items-center gap-4 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-xl h-10 px-4 font-bold text-xs"
            >
              Previous
            </Button>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <span className="text-xs font-black text-slate-900 px-4 select-none uppercase tracking-tighter">
              Page {page} / {totalPages}
            </span>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-xl h-10 px-4 font-bold text-xs"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      <Dialog open={formOpen} onOpenChange={(o: boolean) => { if (!o) setFormOpen(false); }}>
        <DialogContent className="!max-w-[1650px] w-[98vw] max-h-[95vh] rounded-2xl p-0 border border-slate-200 shadow-2xl bg-white overflow-hidden flex flex-col">
          <DialogHeader className="px-8 py-6 border-b border-slate-100 flex flex-row items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              <DialogTitle className="text-xl font-bold text-slate-900 tracking-tight">
                {editingItem ? "Update News Registry" : "Register New Article"}
              </DialogTitle>
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto">
            <NewsForm
              initialData={editingItem ?? undefined}
              onSubmit={handleFormSubmit}
              onCancel={() => setFormOpen(false)}
              isSubmitting={isCreating || isUpdating}
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* View Detail Modal */}
      <Dialog open={detailOpen} onOpenChange={(o: boolean) => { if (!o) setDetailOpen(false); }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] p-0 border-none shadow-2xl bg-white">
          {viewingItem && (
            <>
              <div className="h-64 w-full relative">
                {viewingItem.thumbnailUrl ? (
                  <img src={viewingItem.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <ImageIcon className="w-20 h-20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {viewingItem.category}
                    </span>
                    <StatusBadge status={viewingItem.status} />
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tight">{viewingItem.title}</h2>
                  <p className="text-white/60 text-xs font-medium mt-2">
                    Published on {formatDate(viewingItem.publishedAt)} • /{viewingItem.slug}
                  </p>
                </div>
              </div>
              <div className="p-12 prose prose-slate max-w-none">
                <div className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                  {viewingItem.content}
                </div>
              </div>
              <div className="px-12 py-8 bg-slate-50 flex justify-end">
                <Button
                  onClick={() => setDetailOpen(false)}
                  className="rounded-xl bg-slate-900 text-white px-8 font-bold"
                >
                  Close Preview
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
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
