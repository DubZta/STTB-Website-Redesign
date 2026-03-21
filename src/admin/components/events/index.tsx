// src/admin/components/events/index.tsx
// Events management list with table, search, create, edit, and delete.

import { useState } from 'react';
import { useEventsData } from './hooks/useEventsData';
import { useAdminFetch } from '../../functions/useAdminFetch';
import { AdminApiUrl } from '../../functions/AdminApiUrl';
import EventsForm from './EventsForm';
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
  Calendar,
  Filter,
  ArrowUpDown,
  Tag,
  Clock,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EventListItem, EventDetail, CreateEventPayload, UpdateEventPayload } from '../../types/Events';

export default function EventsManagement() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const { items, totalCount, isLoading, error, isCreating, isUpdating, isDeleting, onCreate, onUpdate, onDelete } =
    useEventsData({ page, pageSize, search });

  const { fetchGET } = useAdminFetch();

  const [formOpen, setFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EventDetail | null>(null);
  const [deletingItem, setDeletingItem] = useState<EventListItem | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleCreateClick = () => {
    setEditingItem(null);
    setFormOpen(true);
  };

  const handleEditClick = async (item: EventListItem) => {
    setLoadingDetail(true);
    const { data } = await fetchGET<EventDetail>(AdminApiUrl.eventsDetail(item.id));
    setLoadingDetail(false);
    if (data) {
      setEditingItem(data);
      setFormOpen(true);
    }
  };

  const handleFormSubmit = async (payload: CreateEventPayload | UpdateEventPayload): Promise<boolean> => {
    let success: boolean;
    if (editingItem) {
      success = await onUpdate(editingItem.id, payload as UpdateEventPayload);
    } else {
      success = await onCreate(payload as CreateEventPayload);
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
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
             Event Schedules
          </h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">Coordinate and manage all institutional events and calendars.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
           <Button variant="outline" size="sm" className="bg-white rounded-xl h-11 px-6 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold">
              <Filter className="w-4 h-4 mr-2" />
              Categorize
           </Button>
           <Button onClick={handleCreateClick} className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 px-8 font-bold shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
             <Plus className="w-4 h-4 mr-2" />
             New Event
           </Button>
        </div>
      </div>

      {/* Search & Tool Area */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-2">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search events by name, location, or tag..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); }}
            className="pl-11 border-none bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 font-medium"
          />
        </div>
        <div className="h-6 w-[1px] bg-slate-100 mx-2 hidden sm:block"></div>
        <div className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hidden lg:block">
           {totalCount} Active Events
        </div>
      </div>

      {/* Error State */}
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            Unable to sync event data. Authentication might have expired or server returned an error.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Events Table */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 border-b border-slate-100 hover:bg-slate-50">
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Event Identity</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest uppercase">Tag</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Visibility</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Timeline</TableHead>
              <TableHead className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Settings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="py-32 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
                    <p className="text-sm font-bold text-slate-500">Fetching schedules from cloud...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="py-32 text-center">
                   <div className="flex flex-col items-center gap-4 opacity-40">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="max-w-[240px] text-sm text-slate-500 font-bold">
                        {search ? "Zero results for current keyword." : "Calendar is clean. No events currently listed."}
                      </p>
                   </div>
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, idx) => (
                <TableRow key={item.id} className="group border-b border-slate-50 last:border-0 hover:bg-emerald-50/20 transition-all">
                  <TableCell className="py-5 px-6">
                    <div className="flex flex-col max-w-sm">
                      <span className="font-bold text-[15px] text-slate-900 group-hover:text-emerald-600 transition-colors">{item.title}</span>
                      <div className="flex items-center gap-2 mt-1">
                         <span className="text-[10px] text-slate-400 font-mono">ID: {item.id.substring(0,8)}</span>
                         <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                         <span className="text-[10px] text-slate-400 italic">/{item.slug}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg w-fit border border-emerald-100">
                      <Tag className="w-3 h-3 opacity-60" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <div className="flex flex-col gap-1.5">
                       <div className="flex items-center gap-2 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-blue-500" />
                          <span className="text-[12px] font-bold">{formatDate(item.eventDate)}</span>
                       </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(item)}
                        className="h-9 w-9 rounded-xl hover:bg-white hover:shadow-lg hover:text-emerald-600"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeletingItem(item)}
                        className="h-9 w-9 rounded-xl hover:bg-red-50 hover:shadow-lg hover:text-red-500 text-slate-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Dashboard */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8 bg-slate-50 p-4 rounded-3xl border border-slate-200">
          <div className="flex items-center gap-3">
             <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                <span className="text-xs font-black text-slate-900">{totalCount}</span>
             </div>
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Total Event Entries</span>
          </div>
          <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-xl h-10 px-4 font-bold text-[11px]"
            >
              Back
            </Button>
            <div className="px-4 text-[11px] font-black text-slate-900 select-none border-x border-slate-100">
               {page} OF {totalPages}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-xl h-10 px-4 font-bold text-[11px]"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Editor Modal */}
      <Dialog open={formOpen} onOpenChange={(o: boolean) => { if (!o) setFormOpen(false); }}>
        <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto rounded-[40px] p-0 border-none shadow-2xl bg-slate-50">
          <DialogHeader className="bg-emerald-600 px-10 py-10 text-white relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">{editingItem ? 'Edit Entry' : 'New Schedule'}</p>
                <DialogTitle className="text-3xl font-black tracking-tighter italic">{editingItem ? 'Update Event' : 'Create Event'}</DialogTitle>
                <DialogDescription className="sr-only">Form for {editingItem ? 'updating' : 'creating'} an institutional event</DialogDescription>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          </DialogHeader>
          <div className="p-10 -mt-6 relative z-20">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <EventsForm
                initialData={editingItem ?? undefined}
                onSubmit={handleFormSubmit}
                onCancel={() => setFormOpen(false)}
                isSubmitting={isCreating || isUpdating}
              />
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
