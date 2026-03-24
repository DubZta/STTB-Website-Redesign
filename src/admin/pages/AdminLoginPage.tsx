// src/admin/pages/AdminLoginPage.tsx
// Standalone admin login page. Calls backend OpenIddict token endpoint.
// On success, stores the token in sessionStorage and redirects to dashboard.

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { AdminApiUrl } from '../functions/AdminApiUrl';
import { useAdminAuth } from '../functions/useAdminAuth';
import { Lock, User, Shield, Loader2 } from 'lucide-react';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLoginPage() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { login, isLoggingIn } = useAdminAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoginError(null);
    const result = await login(data.username, data.password);

    if (result.success) {
      window.location.href = '/admin/dashboard';
    } else {
      setLoginError(result.error ?? 'Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[420px]"
      >
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl mb-4 border-2 border-slate-100">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">STTB <span className="text-red-600 italic">ADMIN</span></h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Content Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-10 shadow-xl">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-900">Sign In</h2>
            <p className="text-slate-500 text-xs mt-1">Enter your credentials to access the console</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-xs font-bold text-slate-700 ml-1">Username</Label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="username"
                  {...register('username')}
                  placeholder="admin_id"
                  className="h-12 pl-11 rounded-xl bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                />
              </div>
              {errors.username && (
                <p className="text-[10px] font-bold text-red-500 mt-1 ml-1 uppercase">{errors.username.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs font-bold text-slate-700 ml-1">Password</Label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                  placeholder="••••••••"
                  className="h-12 pl-11 rounded-xl bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                />
              </div>
              {errors.password && (
                <p className="text-[10px] font-bold text-red-500 mt-1 ml-1 uppercase">{errors.password.message}</p>
              )}
            </div>

            <AnimatePresence>
              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold text-center"
                >
                  {loginError}
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={isLoggingIn}
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all mt-4"
            >
              {isLoggingIn ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Logging in...
                </span>
              ) : (
                'Log In'
              )}
            </Button>
          </form>
        </div>

        {/* System Footer */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            &copy; 2026 STTB Website Redesign Project
          </p>
        </div>
      </motion.div>
    </div>
  );
}
