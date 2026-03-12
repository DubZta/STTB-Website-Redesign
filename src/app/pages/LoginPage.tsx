import { useState } from 'react';
import { LogIn, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'student' | 'staff' | 'alumni'>('student');
  const { t } = useLanguage();

  const userTypes = [
    { value: 'student', label: t('login.student'), color: 'sttb-navy' },
    { value: 'staff', label: t('login.staff'), color: 'sttb-red' },
    { value: 'alumni', label: t('login.alumni'), color: 'purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-sttb-navy to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
              <div className="mb-8">
                <h1 className="text-4xl font-extrabold mb-4">
                  {t('login.page.title')}
                </h1>
                <p className="text-xl text-blue-100">
                  {t('login.page.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <LogIn className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Single Sign-On</h3>
                    <p className="text-blue-100 text-sm">
                      Satu akun untuk mengakses semua layanan kampus
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Aman & Terpercaya</h3>
                    <p className="text-blue-100 text-sm">
                      Data Anda terlindungi dengan enkripsi tingkat enterprise
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                    <p className="text-blue-100 text-sm">
                      Tim kami siap membantu kapan saja Anda membutuhkan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-blue-100">
                  Belum punya akun? Hubungi bagian administrasi untuk mendapatkan kredensial login Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                {t('login.welcome')}
              </h2>
              <p className="text-gray-600">
                {t('login.signin')}
              </p>
            </div>

            {/* User Type Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {t('login.type')}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {userTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setUserType(type.value as any)}
                    className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                      userType === type.value
                        ? 'bg-sttb-navy text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email atau NIM
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all"
                    placeholder="Masukkan email atau NIM"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all"
                    placeholder="Masukkan password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-sttb-navy focus:ring-sttb-navy"
                  />
                  <span className="text-sm text-gray-600">Ingat saya</span>
                </label>
                <a href="#" className="text-sm font-semibold text-sttb-navy hover:text-blue-800 transition-colors">
                  Lupa password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-sttb-navy text-white rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                <span>Masuk</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                Butuh bantuan?{' '}
                <a href="/contact" className="font-semibold text-sttb-navy hover:text-blue-800 transition-colors">
                  Hubungi Support
                </a>
              </p>
            </div>

            {/* Mobile Info */}
            <div className="lg:hidden mt-8 p-6 bg-gray-50 rounded-2xl">
              <p className="text-sm text-gray-600">
                💡 <strong>Tips:</strong> Belum punya akun? Hubungi bagian administrasi untuk mendapatkan kredensial login Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}