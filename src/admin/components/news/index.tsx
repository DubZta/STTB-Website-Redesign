// src/admin/components/news/index.tsx
// News management list: table with search, create, edit, and delete actions.

import { useState } from 'react';
import { useNewsData } from './hooks/useNewsData';
import { useAdminFetch } from '../../functions/useAdminFetch';
import { AdminApiUrl } from '../../functions/AdminApiUrl';
import NewsForm from './NewsForm';
import ConfirmDeleteDialog from '../shared/ConfirmDeleteDialog';
import StatusBadge from '../shared/StatusBadge';
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
  Filter,
  ArrowUpDown,
  MoreVertical,
  Calendar,
  Tag,
  Newspaper
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
  const [editingItem, setEditingItem] = useState<NewsDetail | null>(null);
  const [deletingItem, setDeletingItem] = useState<NewsListItem | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleCreateClick = () => {
    setEditingItem(null);
    setFormOpen(true);
  };

  const handleEditClick = async (item: NewsListItem) => {
    setLoadingDetail(true);
    const { data } = await fetchGET<NewsDetail>(AdminApiUrl.newsDetail(item.id));
    setLoadingDetail(false);
    if (data) {
      setEditingItem(data);
      setFormOpen(true);
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
        {error && (
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
            <TableRow className="bg-slate-50 border-b border-slate-100 hover:bg-slate-50">
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                Title & SEO Details <ArrowUpDown className="w-3 h-3" />
              </TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Category</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Publication</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Date</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Settings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="py-32 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
                    <p className="text-sm font-bold text-slate-500 tracking-tight">Syncing with database...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="py-32 text-center">
                   <div className="flex flex-col items-center gap-4 opacity-50">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                        <Newspaper className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="max-w-[240px] text-sm text-slate-500 font-medium">
                        {search ? 'Found no matches for your current search criteria.' : 'Your news library is empty. Start by creating your first article.'}
                      </p>
                   </div>
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, idx) => (
                <TableRow key={item.id} className="group border-b border-slate-50 last:border-0 hover:bg-blue-50/30 transition-all">
                  <TableCell className="py-5 px-6">
                    <div className="flex flex-col max-w-sm">
                      <span className="font-bold text-[15px] text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{item.title}</span>
                      <span className="text-xs text-slate-400 font-medium mt-0.5 font-mono select-all">/{item.slug}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg w-fit">
                      <Tag className="w-3 h-3 opacity-50" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">{item.category}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 opacity-50" />
                      <span className="text-[13px] font-medium">{formatDate(item.publishedAt)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-1 px-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(item)}
                        disabled={loadingDetail}
                        className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md hover:text-blue-600 transition-all"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeletingItem(item)}
                        disabled={isDeleting}
                        className="h-10 w-10 rounded-xl hover:bg-red-50 hover:shadow-md hover:text-red-600 transition-all text-slate-400"
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

      {/* Create/Edit Modal */}
      <Dialog open={formOpen} onOpenChange={(o: boolean) => { if (!o) setFormOpen(false); }}>
        <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto rounded-[32px] p-0 border-none shadow-2xl bg-slate-50">
          <DialogHeader className="px-10 py-8 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight">
                  {editingItem ? 'Update Post' : 'Compose New Article'}
                </DialogTitle>
                <DialogDescription className={`mt-1 text-[10px] font-black uppercase tracking-widest ${editingItem ? 'text-amber-600' : 'text-blue-600'}`}>
                   {editingItem ? 'Editing Mode' : 'New Entry'} — Refining system records
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="p-10">
            <NewsForm
                initialData={editingItem ?? undefined}
                onSubmit={handleFormSubmit}
                onCancel={() => setFormOpen(false)}
                isSubmitting={isCreating || isUpdating}
            />
          </div>
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
