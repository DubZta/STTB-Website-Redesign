import { useState } from "react";
import { Play, ChevronRight, BookOpen, Church, Users, Monitor, Trophy, Heart } from "lucide-react";
import { useLanguage } from '../../contexts/LanguageContext';
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';
import { Link } from 'react-router';

export function CampusLife() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "hTh0QkKxNhg";

  const activities = [
    {
      title: t('activity.chapel.title'),
      description: t('activity.chapel.desc'),
      image: "/chapel.png",
      icon: Church,
    },
    {
      title: t('activity.library.title'),
      description: t('activity.library.desc'),
      image: "/perpus.jpg",
      icon: BookOpen,
    },
    {
      title: t('activity.senate.title'),
      description: t('activity.senate.desc'),
      image: "/meeting.JPG",
      icon: Users,
    },
    {
      title: t('activity.hybrid.title'),
      description: t('activity.hybrid.desc'),
      image: "/ruang.png",
      icon: Monitor,
    },
    {
      title: t('activity.sports.title'),
      description: t('activity.sports.desc'),
      image: "/games.png",
      icon: Trophy,
    },
    {
      title: t('activity.mentoring.title'),
      description: t('activity.mentoring.desc'),
      image: "/pembinaan.png",
      icon: Heart,
    },
  ];

  return (
    <section id="campus-life" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <span className="block text-2xl text-[#0B3F82] font-bold tracking-[0.25em] mb-3">
            IV
          </span>

          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-[#0B3F82] mb-4 font-bold">
              {t('nav.campus_life')}
            </h2>
          </MaskText>
          <MaskText type="lines" delay={0.1}>
            <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto">
              Sekolah Tinggi Teologi Bandung
            </p>
          </MaskText>

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

          <p className="text-center text-slate-500 mt-6 max-w-2xl mx-auto">
            {t('activities.campus_tour_desc')}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3F82]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Icon size={18} className="text-[#0B3F82]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-[#0B3F82] group-hover:w-full transition-all duration-700" />

                  <h3 className="text-lg font-bold text-[#0B3F82] mb-2 group-hover:text-[#E31D1A] transition-colors">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3F82] text-white font-semibold rounded-lg hover:bg-[#E31D1A] transition"
          >
            {t('activities.view_all')}
            <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}