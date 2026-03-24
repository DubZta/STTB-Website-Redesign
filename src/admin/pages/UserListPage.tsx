import { useState, useEffect } from 'react';
import { useAdminFetch } from '../functions/useAdminFetch';
import { BACKEND_BASE_URL } from '../../app/functions/BackendApiUrl';
import type { UserResponse } from '../types/User';
import { Users, UserPlus, Trash2, Key, Loader2, ShieldCheck, Mail, Search, MoreVertical, ShieldAlert } from 'lucide-react';
import { Button } from '../../app/components/ui/button';
import UserForm from '../components/user/UserForm';
import AdminLayout from '../layouts/AdminLayout';

export default function UserListPage() {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchGET, fetchDELETE } = useAdminFetch();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetchGET<UserResponse[]>(`${BACKEND_BASE_URL}/api/user`);
      if (response.data) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    const response = await fetchDELETE(`${BACKEND_BASE_URL}/api/user/${id}`);
    if (response.status === 204) {
      fetchUsers();
    }
  };

  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout title="Authority">
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Authority Management</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">Manage system access and authentication credentials</p>
          </div>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-slate-900 hover:bg-black text-white px-6 h-12 rounded-xl font-bold shadow-lg shadow-slate-900/10 transition-all active:scale-95 flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Provision New Account
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Filter by username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/10 outline-none transition-all"
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{filteredUsers.length} Active Principals</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Identity Identifier</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">Username / Principal</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">System Role</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 text-right">Access Controls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-12 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hydrating Registry...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-12 text-center text-slate-400">
                      <p className="text-sm font-medium">No system users found matching your criteria</p>
                    </td>
                  </tr>
                ) : filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <code className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {user.id}
                      </code>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{user.username}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-2.5 py-1 bg-red-50 text-red-600 text-[10px] font-black rounded-md uppercase tracking-wider border border-red-100">
                        Admin Authority
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {user.username.toLowerCase() !== 'admin' ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(user.id)}
                            className="h-9 w-9 p-0 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        ) : (
                          <div className="h-9 w-9 flex items-center justify-center text-slate-300 pointer-events-none" title="Default admin account cannot be deleted">
                            <ShieldAlert className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
              <UserForm
                onSuccess={() => { setShowForm(false); fetchUsers(); }}
                onCancel={() => setShowForm(false)}
              />
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
