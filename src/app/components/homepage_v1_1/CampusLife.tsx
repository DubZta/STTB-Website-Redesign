import { useState } from "react";
import { Play, ChevronRight, BookOpen, Church, Users, Monitor, Trophy, Heart } from "lucide-react";
import { useLanguage } from '../../contexts/LanguageContext';

export function CampusLife() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "hTh0QkKxNhg";

  const activities = [
    {
      title: "Ibadah Chapel",
      description:
        "Ibadah mingguan Senin, Selasa, Jumat pukul 11.00–12.00 sebagai pusat kehidupan spiritual mahasiswa STTB.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipO8PKP6whwn9Gs75cfGLXBkAIH4ZGGcVRZpxwnh=s680-w680-h510-rw",
      icon: Church,
    },
    {
      title: "Perpustakaan",
      description:
        "Koleksi literatur teologi lengkap dengan ruang baca nyaman dan fasilitas hybrid learning.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPR4MYCqIEXJYD-ii23JVa4l_9PpL4EhcfXBIOe=w243-h174-n-k-no-nu",
      icon: BookOpen,
    },
    {
      title: "Senat Mahasiswa",
      description:
        "Wadah representasi mahasiswa yang mengkoordinasikan berbagai kegiatan kampus dan kemahasiswaan.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOqw6L0qz8eLXEV0mugUjUmUrkQlBRDig6WnHSn=w243-h174-n-k-no-nu",
      icon: Users,
    },
    {
      title: "Ruang Hybrid Learning",
      description:
        "Ruang kelas modern dengan fasilitas teleconference untuk pembelajaran onsite maupun online.",
      image: "/ruang.png",
      icon: Monitor,
    },
    {
      title: "Sports Day & Event",
      description:
        "Kegiatan tahunan seperti Sports Day, Urban Youth Summit, dan berbagai aktivitas mahasiswa.",
      image: "/games.png",
      icon: Trophy,
    },
    {
      title: "Pembinaan & Pemuridan",
      description:
        "Program retreat awal studi, pemuridan kelompok kecil dan besar untuk pembentukan karakter mahasiswa.",
      image: "/pembinaan.png",
      icon: Heart,
    },
  ];

  return (
    <section id="campus-life" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="block text-2xl text-[#0B3F82] font-bold tracking-[0.25em] mb-3 font-[Cormorant_Garamond]">
            IV
          </span>

          <h2 className="text-4xl lg:text-5xl text-[#0B3F82] mb-4 font-[Plus_Jakarta_Sans] font-bold">
            {t('nav.campus_life')}
          </h2>

          <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto font-[Inter]">
            Sekolah Tinggi Teologi Bandung
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-[#D4AF37]" />
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
                className="absolute inset-0 flex items-center justify-center bg-[#0B3F82]/50 z-10"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-24 h-24 rounded-full bg-[#E31D1A] flex items-center justify-center shadow-[0_0_24px_rgba(227,29,26,0.4)] transition hover:scale-110">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
              </button>
            )}

            <div className="aspect-video">
              <div className="absolute top-4 left-4 z-10 bg-[#0B3F82]/80 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {t('tour.title')}
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

          <p className="text-center text-slate-500 mt-6 max-w-2xl mx-auto font-[Inter]">
            Jelajahi kampus STTB dan lihat fasilitas modern kami yang mendukung
            pembentukan pastor-scholar yang transformatif.
          </p>

        </div>

        {/* Activities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Icon */}
                  <div className="w-12 h-12 mb-3 rounded-lg bg-[#0B3F82]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#0B3F82]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B3F82] mb-2 font-[Plus_Jakarta_Sans]">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-[Inter]">
                    {activity.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://sttb.ac.id/fasilitas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3F82] text-white font-semibold rounded-lg hover:bg-[#E31D1A] transition"
          >
            Lihat Semua Fasilitas
            <ChevronRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
