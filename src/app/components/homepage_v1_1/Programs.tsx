import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import MaskText from '../animations/MaskText';

export function Programs() {
  const { t } = useLanguage();
  const programs = [
    {
      title: 'Sarjana Teologi',
      description:
        'Program studi mendalam tentang Alkitab, dogmatika, dan praktika untuk mempersiapkan calon gembala sidang yang kompeten.',
      image:
        '/sth.JPG',
      duration: '8 Semester',
      level: 'S1',
      degreeBadge: 'S.Th',
      link: 'https://sttb.ac.id/sarjana-teologi/',
    },
    {
      title: 'Sarjana Pendidikan Kristen',
      description:
        'Program studi yang mempersiapkan guru Pendidikan Kristen kompeten untuk melayani di sekolah dan gereja.',
      image:
        '/spd.png',
      duration: '8 Semester',
      level: 'S1',
      degreeBadge: 'S.Pd.',
      link: 'https://sttb.ac.id/sarjana-pendidikan-kristen/',
    },
    {
      title: 'Magister Pendidikan Kristen',
      description:
        'Program pascasarjana yang mempersiapkan pendidik Kristen profesional dengan kompetensi pedagogik, kepribadian, sosial, dan profesional.',
      image:
        '/mpd.jpg',
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
          <span className="block text-2xl text-[#0b3f82] font-bold tracking-[0.25em] mb-3 font-[Plus_Jakarta_Sans]">
            III
          </span>
          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-[#0b3f82] mb-4 font-[Plus_Jakarta_Sans] font-bold">
              {t('programs.title')}
            </h2>
          </MaskText>
          <MaskText type="lines" delay={0.1}>
            <p className="text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto font-[Inter]">
              Sekolah Tinggi Teologi Bandung
            </p>
          </MaskText>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group min-h-[520px] flex flex-col"
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

                <div className="absolute top-4 left-4 bg-[#0b3f82] text-white px-3 py-1 text-xs uppercase tracking-wide font-[Plus_Jakarta_Sans] font-bold rounded">
                  {program.degreeBadge}
                </div>

                <div className="absolute top-4 right-4 bg-[#E31D1A] text-white px-3 py-1 text-xs uppercase tracking-wide font-[Plus_Jakarta_Sans] font-bold rounded">
                  {program.level}
                </div>

              </div>

              <div className="p-6 text-center flex flex-col flex-1">
                <h3 className="text-2xl text-slate-900 mb-3 font-[Plus_Jakarta_Sans] font-bold">
                  {program.title}
                </h3>

                <div className="inline-block bg-[#F3F4F6] text-[#374151] px-4 py-1.5 text-sm rounded-full mb-4 font-[Inter] font-medium">
                  {program.duration}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm font-[Inter]">
                  {program.description}
                </p>

                <Button
                  className="mt-auto bg-[#0B3F82] text-white hover:!bg-[#0a2f63] px-4 py-2 text-xs uppercase tracking-wider font-[Inter] font-semibold inline-flex items-center justify-center"
                  asChild
                >
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://sttb.ac.id/akademik/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0b3f82] text-white font-semibold font-[Plus_Jakarta_Sans] rounded-lg hover:bg-[#1E40AF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Lihat Semua Program Studi
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#000000] text-xs font-[Inter] font-bold opacity-75">
            Semua program terakreditasi BAN-PT
          </p>
        </div>
      </div>
    </section>
  );
}