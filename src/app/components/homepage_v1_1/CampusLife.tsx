import { useState } from "react";
import { Play, ChevronRight, BookOpen, Church, Users, Monitor, Trophy, Heart } from "lucide-react";
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';
import { Link } from 'react-router';

export function CampusLife() {

const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "hTh0QkKxNhg";

  const activities = [
    {
      title: 'Ibadah Chapel',
      description: 'Ibadah mingguan Senin, Selasa, Jumat pukul 11.00–12.00 sebagai pusat kehidupan spiritual mahasiswa STTB.',
      image: "/chapel.png",
      icon: Church,
    },
    {
      title: 'Perpustakaan',
      description: 'Koleksi literatur teologi lengkap dengan ruang baca nyaman dan fasilitas hybrid learning.',
      image: "/perpus.jpg",
      icon: BookOpen,
    },
    {
      title: 'Senat Mahasiswa',
      description: 'Wadah representasi mahasiswa yang mengkoordinasikan berbagai kegiatan kampus dan kemahasiswaan.',
      image: "/meeting.JPG",
      icon: Users,
    },
    {
      title: 'Ruang Hybrid Learning',
      description: 'Ruang kelas modern dengan fasilitas teleconference untuk pembelajaran onsite maupun online.',
      image: "/ruang.png",
      icon: Monitor,
    },
    {
      title: 'Sports Day & Event',
      description: 'Kegiatan tahunan seperti Sports Day, Urban Youth Summit, dan berbagai aktivitas mahasiswa.',
      image: "/games.png",
      icon: Trophy,
    },
    {
      title: 'Pembinaan & Pemuridan',
      description: 'Program retreat awal studi, pemuridan kelompok kecil dan besar untuk pembentukan karakter mahasiswa.',
      image: "/pembinaan.png",
      icon: Heart,
    },
  ];

  return (
    <section id="campus-life" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <span className="block text-2xl text-sttb-navy font-bold tracking-[0.25em] mb-3">
            IV
          </span>

          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-sttb-navy mb-4 font-bold">
              {'Kehidupan Kampus'}
            </h2>
          </MaskText>
          <MaskText type="lines" delay={0.1}>
            <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto">
              Sekolah Tinggi Teologi Bandung
            </p>
          </MaskText>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-yellow-500" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="h-px w-16 bg-yellow-500" />
          </div>
        </div>

        {/* Video */}
        <div className="max-w-6xl mx-auto mb-12">

          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
          >

            {!isPlaying && (
              <button
                className="absolute inset-0 flex items-center justify-center bg-sttb-navy/50 z-10"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-24 h-24 rounded-full bg-sttb-red flex items-center justify-center shadow-[0_0_24px_rgba(227,29,26,0.4)] transition hover:scale-110">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
              </button>
            )}

            <div className="aspect-video">
              <div className="absolute top-4 left-4 z-10 bg-sttb-navy/80 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {'CAMPUS TOUR'}
              </div>
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                  title="Campus Tour STTB"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="STTB Campus Tour"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

          </div>

          <p className="text-center text-slate-500 mt-6 max-w-2xl mx-auto">
            {'Jelajahi kampus STTB dan lihat fasilitas modern kami yang mendukung pembentukan pastor-scholar yang transformatif.'}
          </p>

        </div>

        {/* Activities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (
              <GlowCard
                key={index}
                className="bg-white border border-gray-200 overflow-hidden group relative"
                customSize
                glowColor="rgba(11, 63, 130, 0.3)"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sttb-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Icon size={18} className="text-sttb-navy" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-sttb-navy group-hover:w-full transition-all duration-700" />

                  <h3 className="text-lg font-bold text-sttb-navy mb-2 group-hover:text-sttb-red transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>
                </div>
              </GlowCard>
            );
          })}

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/campus-life/facilities"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sttb-navy text-white font-semibold rounded-lg hover:bg-sttb-red transition"
          >
            {'Lihat Semua Fasilitas'}
            <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}