import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../app/components/ui/button';
import { Input } from '../../../app/components/ui/input';
import { Label } from '../../../app/components/ui/label';
import { useAdminFetch } from '../../functions/useAdminFetch';
import { BACKEND_BASE_URL } from '../../../app/functions/BackendApiUrl';
import type { UserResponse } from '../../types/User';
import { Shield, Loader2, Key, User, X } from 'lucide-react';
import { useState } from 'react';

const userSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(50),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function UserForm({ onSuccess, onCancel }: UserFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { fetchPOST } = useAdminFetch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetchPOST<UserResponse>(`${BACKEND_BASE_URL}/api/user`, data);

      if (response.data) {
        onSuccess();
      } else {
        setError(response.error || 'Failed to create user. It might already exist.');
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-slate-900/10">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Provision Account</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Define new admin credentials</p>
          </div>
        </div>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-900 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold animate-in slide-in-from-top-2">
            {error}
          </div>
        )}

        <div className="space-y-1.5">
          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Principal Username</Label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              {...register('username')}
              placeholder="e.g. administrator_02"
              className="h-12 rounded-xl border-slate-200 pl-11 text-sm font-medium focus:ring-blue-500/10 transition-all shadow-sm bg-slate-50/30"
            />
          </div>
          {errors.username && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.username.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Access Password</Label>
          <div className="relative">
            <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="h-12 rounded-xl border-slate-200 pl-11 text-sm font-medium focus:ring-blue-500/10 transition-all shadow-sm bg-slate-50/30"
            />
          </div>
          {errors.password && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.password.message}</p>}
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-slate-900 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Encrypting...
              </>
            ) : (
              'Initialize Account'
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            className="w-full h-12 rounded-xl font-bold text-slate-500 hover:bg-slate-50"
          >
            Discard
          </Button>
        </div>
      </form>
      
      <div className="px-8 py-4 bg-slate-50/80 border-t border-slate-100">
         <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed text-center">
           Security Policy: New accounts are granted Admin level authority by default.
         </p>
      </div>
    </div>
  );
}
