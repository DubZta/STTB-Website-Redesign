// src/admin/components/shared/ConfirmDeleteDialog.tsx
// Reusable delete confirmation dialog using shadcn/ui AlertDialog primitives.

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/app/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';

interface ConfirmDeleteDialogProps {
  open: boolean;
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting?: boolean;
}

import { AlertTriangle, Loader2 } from 'lucide-react';

export default function ConfirmDeleteDialog({
  open,
  itemName,
  onConfirm,
  onCancel,
  isDeleting = false,
}: ConfirmDeleteDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={(o) => { if (!o) onCancel(); }}>
      <AlertDialogContent className="max-w-md rounded-[32px] p-8 border-none shadow-3xl">
        <AlertDialogHeader className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 border border-red-100/50">
             <AlertTriangle className="w-8 h-8" />
          </div>
          <AlertDialogTitle className="text-2xl font-black text-slate-900 tracking-tight">
            Confirm Destruction
          </AlertDialogTitle>
          <AlertDialogDescription className="text-slate-500 font-medium leading-relaxed italic">
            You are about to permanently remove{' '}
            <span className="text-slate-900 font-black not-italic">"{itemName}"</span> from the administrative index. This operation is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-8 flex items-center gap-3 sm:justify-center">
          <AlertDialogCancel 
            onClick={onCancel} 
            disabled={isDeleting}
            className="rounded-xl h-12 px-8 font-bold text-slate-400 border-none hover:bg-slate-50 transition-all m-0"
          >
            Abort
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => { e.preventDefault(); onConfirm(); }}
            disabled={isDeleting}
            className="rounded-xl h-12 px-10 font-black bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-500/20 active:scale-95 transition-all m-0 border-none"
          >
            {isDeleting ? (
              <span className="flex items-center gap-2">
                 <Loader2 className="w-4 h-4 animate-spin" />
                 Processing...
              </span>
            ) : 'Destroy Resource'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
