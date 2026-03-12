import { useEffect, useState, type KeyboardEvent } from 'react';
import { Eye, Flag } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import MaskText from '../animations/MaskText';

export function About() {
  const { t } = useLanguage();
  const [activeSide, setActiveSide] = useState<'visi' | 'misi' | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveSide(null);
    }
  }, [isMobile]);

  const handleKeyDown = (side: 'visi' | 'misi') => (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveSide(side);
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setActiveSide(null);
    }
  };

  const stats = [
    { number: '30+', label: 'Tahun Pelayanan' },
    { number: '1,000+', label: 'Alumni Tersebar' },
    { number: '8', label: 'Program Studi' },
  ];
  const visionItems = [
    {
      title: t('about.vision.tab1'),
      description:
        'memiliki jiwa gembala (kepemimpinan yg melayani di gereja, dunia pendidikan, maupun profesi lain) dan sekaligus pembelajar (semangat untuk terus belajar, daya nalar kritis seorang Intelektual Kristen, dan kemampuan berkontribusi terhadap dunia ilmu pengetahuan dari perspektif Kristen)',
    },
    {
      title: t('about.vision.tab2'),
      description:
        'kuasa Injil yg mampu mentransformasi seluruh aspek hidup manusia dan seluruh ciptaan yg sudah jatuh dalam dosa (total depravity), yg kesempurnaannya baru akan terjadi setelah kedatangan Kristus yang kedua, namun cicipan awalnya sudah bisa dirasakan hari ini.',
    },
    {
      title: t('about.vision.tab3'),
      description:
        'kuasa penebusan Kristus dinyatakan melalui hidup setiap pengikut Kristus, di tengah keluarga, gereja, dan masyarakat.',
    },
    {
      title: t('about.vision.tab4'),
      description:
        'mahasiswa STTB dipersiapkan dengan fokus melayani masyarakat di perkotaan, tanpa menutup kemungkinan tuntunan lain yang Tuhan berikan kepada mereka di tempat lain.',
    },
  ];
  const missionBullets = [
    t('about.mission.1'),
    t('about.mission.2'),
    t('about.mission.3'),
  ];

  const visionIntro =
    'Menjadi institusi pendidikan teologi yang mempersiapkan pastor-scholar yang transformatif dan memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban.';

  const missionIntro =
    'Mempersiapkan pastor-scholar yang transformatif untuk melayani dalam konteks urban, memberdayakan seluruh umat Allah melalui penelitian dan pendidikan non-formal, serta mengembangkan tim dosen, struktur organisasi, dan kemitraan untuk mendukung pencapaian visi STTB.';

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span className="block text-2xl text-[#0b3f82] font-bold tracking-[0.25em] mb-3 font-[Plus_Jakarta_Sans]">
            I
          </span>
          <MaskText type="lines">
            <h2 className="text-4xl lg:text-5xl text-[#0b3f82] mb-4 font-[Plus_Jakarta_Sans] font-bold">
              {t('about.page.title')}
            </h2>
          </MaskText>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div>
            <MaskText type="lines" delay={0.1}>
              <p className="text-xl leading-normal text-slate-700 mb-8 font-[Plus_Jakarta_Sans]">
                <span className="text-7xl font-[Inter] font-bold text-[#0b3f82] float-left mr-3 leading-[0.8]">
                  S
                </span>
                ekolah Tinggi Teologi Bandung hadir sebagai lembaga pendidikan
                teologi yang berkomitmen pada kebenaran Alkitab dan warisan iman
                Reformatoris. Kami berdedikasi untuk mempersiapkan pastor-scholar
                yang transformatif yang tidak hanya cerdas secara intelektual, tetapi juga
                memiliki hati yang berkobar untuk melayani dalam konteks masyarakat urban, gereja, dan masyarakat.
              </p>
            </MaskText>

            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 text-center border border-gray-200 transition-all hover:-translate-y-2 hover:border-[#E31D1A] hover:shadow-lg group relative"
                >
                  <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-transparent group-hover:border-[#0b3f82] transition-all" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-transparent group-hover:border-[#0b3f82] transition-all" />
                  <div className="text-3xl lg:text-4xl font-bold text-[#0b3f82] mb-2 font-[Inter]">
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600 uppercase tracking-wide font-[Plus_Jakarta_Sans] font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="relative overflow-hidden rounded-t-[40%_20%] border-8 border-white shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(11,63,130,0.3)] group-hover:-translate-y-4 group-hover:rotate-x-2">
              <img
                src="/about.png"
                alt="STTB Library"
                className="w-full h-[500px] lg:h-[600px] object-cover object-right grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-[#0b3f82]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16 lg:mt-20">
          <div className="h-0.5 w-16 bg-[#D4AF37]" />
        </div>

        {/* Visi Misi Section */}
        <div className="mt-16 lg:mt-20">
          <div
            className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto"
            onMouseLeave={() => !isMobile && setActiveSide(null)}
          >

            <div
              role="button"
              tabIndex={0}
              onMouseEnter={() => !isMobile && setActiveSide('visi')}
              onKeyDown={handleKeyDown('visi')}
              className={`group relative overflow-hidden rounded-xl p-10
              bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff]
              border border-gray-200
              transition-all duration-500
              hover:shadow-2xl hover:-translate-y-1
              cursor-pointer

              ${activeSide === 'visi'
                  ? 'lg:w-[65%]'
                  : activeSide === 'misi'
                    ? 'lg:w-[35%]'
                    : 'lg:w-1/2'
                }`}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[#0b3f82]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0b3f82]/30 rounded-xl transition-all" />

              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#0b3f82]/30 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-[#1E3A8A]" strokeWidth={2} aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-[#1E3A8A] font-[Plus_Jakarta_Sans]">
                    Visi
                  </h3>
                </div>

                <p className="text-slate-700 mb-6 font-[Inter]">
                  {visionIntro}
                </p>

                {activeSide === 'visi' && (
                  <div className="space-y-3">
                    {visionItems.map(item => (
                      <div key={item.title}>
                        <h4 className="font-semibold text-[#1E3A8A] font-[Plus_Jakarta_Sans]">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 font-[Inter]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div
              role="button"
              tabIndex={0}
              onMouseEnter={() => !isMobile && setActiveSide('misi')}
              onKeyDown={handleKeyDown('misi')}
              className={`group relative overflow-hidden rounded-xl p-10
              bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff]
              border border-gray-200
              transition-all duration-500
              hover:shadow-2xl hover:-translate-y-1
              cursor-pointer

              ${activeSide === 'misi'
                  ? 'lg:w-[65%]'
                  : activeSide === 'visi'
                    ? 'lg:w-[35%]'
                    : 'lg:w-1/2'
                }`}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[#0b3f82]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0b3f82]/30 rounded-xl transition-all" />

              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#0b3f82]/30 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="w-6 h-6 text-[#1E3A8A]" strokeWidth={2} aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-[#1E3A8A] font-[Plus_Jakarta_Sans]">
                    Misi
                  </h3>
                </div>

                <p className="text-slate-700 mb-6 font-[Inter]">
                  {missionIntro}
                </p>

                {activeSide === 'misi' && (
                  <ul className="space-y-3">
                    {missionBullets.map(bullet => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#3B82F6] flex-shrink-0" />
                        <span className="text-sm text-slate-600 font-[Inter]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}