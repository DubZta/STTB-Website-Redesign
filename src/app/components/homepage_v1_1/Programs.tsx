import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { GlowCard } from '../ui/spotlight-card';
import MaskText from '../animations/MaskText';
import { Link } from 'react-router';

export function Programs() {

const programs = [
    {
      title: 'Sarjana Teologi',
      description: 'Program studi mendalam tentang Alkitab, dogmatika, dan praktika untuk mempersiapkan calon gembala sidang yang kompeten.',
      image: '/sth.JPG',
      duration: '8 Semester',
      level: 'S1',
      degreeBadge: 'S.Th',
      link: 'https://sttb.ac.id/sarjana-teologi/',
    },
    {
      title: 'Sarjana Pendidikan Kristen',
      description: 'Program studi yang mempersiapkan guru Pendidikan Kristen kompeten untuk melayani di sekolah dan gereja.',
      image: '/spd.png',
      duration: '8 Semester',
      level: 'S1',
      degreeBadge: 'S.Pd.',
      link: 'https://sttb.ac.id/sarjana-pendidikan-kristen/',
    },
    {
      title: 'Magister Pendidikan Kristen',
      description: 'Program pascasarjana yang mempersiapkan pendidik Kristen profesional dengan kompetensi pedagogik, kepribadian, sosial, dan profesional.',
      image: '/mpd.jpg',
      duration: '4 Semester',
      level: 'S2',
      degreeBadge: 'M.Pd.',
      link: 'https://sttb.ac.id/magister-teologi/',
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F1F5F9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(203,213,225,0.1) 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-sttb-navy font-bold tracking-[0.25em] mb-3">
            III
          </span>
          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-sttb-navy mb-4 font-bold">
              {'PROGRAM STUDI'}
            </h2>
          </MaskText>
          <MaskText type="lines" delay={0.1}>
            <p className="text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto">
              Sekolah Tinggi Teologi Bandung
            </p>
          </MaskText>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-yellow-500" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="h-px w-16 bg-yellow-500" />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <GlowCard
              key={index}
              className="bg-white border border-gray-200 min-h-[520px] flex flex-col group"
              customSize
              glowColor="rgba(11, 63, 130, 0.3)"
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover rounded-t-[40%_20%] grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=STTB+Program';
                  }}
                />

                <div className="absolute top-4 left-4 bg-sttb-navy text-white px-3 py-1 text-xs uppercase tracking-wide font-bold rounded">
                  {program.degreeBadge}
                </div>

                <div className="absolute top-4 right-4 bg-sttb-red text-white px-3 py-1 text-xs uppercase tracking-wide font-bold rounded">
                  {program.level}
                </div>

              </div>

              <div className="p-6 text-center flex flex-col flex-1">
                <h3 className="text-2xl text-slate-900 mb-3 font-bold">
                  {program.title}
                </h3>

                <div className="inline-block bg-[#F3F4F6] text-[#374151] px-4 py-1.5 text-sm rounded-full mb-4 font-medium">
                  {program.duration}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {program.description}
                </p>

                <Button
                  className="mt-auto bg-sttb-navy text-white hover:!bg-sttb-navy-dark px-4 py-2 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center"
                  asChild
                >
                  <Link
                    to="/academics"
                    className="inline-flex items-center"
                  >
                    {'Selengkapnya'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/academics"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sttb-navy text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {'Lihat Semua Program Studi'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#000000] text-xs font-bold opacity-75">
            {'Semua program terakreditasi BAN-PT'}
          </p>
        </div>
      </div>
    </section>
  );
}