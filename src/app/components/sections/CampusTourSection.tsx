import { Play, Building2, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';
export default function CampusTourSection() {

const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Utama dengan Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM KIRI (Judul & Video) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-red">
              Campus Tour
            </h2>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900">
              {!isPlaying ? (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1680444873773-7c106c23ac52?q=80&w=1080" 
                    alt="Campus Tour" 
                    className="w-full h-full object-cover opacity-80" 
                  />
                  <button onClick={() => setIsPlaying(true)} className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-sttb-red rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/hTh0QkKxNhg?autoplay=1" allowFullScreen />
              )}
            </div>
          </div>

          {/* KOLOM KANAN (Info & Action) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-16 gap-6">
            
            {/* Info 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4">
              <Building2 className="w-8 h-8 text-sttb-red flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0F172A] mb-1">Fasilitas Modern</h4>
                <p className="text-sm text-slate-500">Ruang kelas dan pusat riset berteknologi tinggi untuk menunjang studi.</p>
              </div>
            </div>

            {/* Info 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4">
              <Users className="w-8 h-8 text-sttb-red flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0F172A] mb-1">Komunitas Dinamis</h4>
                <p className="text-sm text-slate-500">Lingkungan inklusif dengan mahasiswa dari berbagai daerah di Indonesia.</p>
              </div>
            </div>

            {/* Tombol ke Fasilitas */}
            <a 
              href="/fasilitas" 
              className="flex items-center justify-between bg-[#0F172A] text-white p-6 rounded-2xl hover:bg-black transition-colors group"
            >
              <span className="font-bold">Lihat Semua Fasilitas Kampus</span>
              <div className="bg-sttb-red p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}