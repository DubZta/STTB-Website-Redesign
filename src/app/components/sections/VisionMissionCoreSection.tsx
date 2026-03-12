import { Target, CheckCircle2, Book, Heart, Lightbulb, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'motion/react';

export default function VisionMissionCoreSection() {
  const { t } = useLanguage();

  const missions = [t('mission.1'), t('mission.2'), t('mission.3'), t('mission.4')];
  const values = [
    { icon: Book, title: t('values.biblical'), desc: t('values.biblical_desc') },
    { icon: Heart, title: t('values.christ'), desc: t('values.christ_desc') },
    { icon: Lightbulb, title: t('values.transformational'), desc: t('values.transformational_desc') },
    { icon: Award, title: t('values.professional'), desc: t('values.professional_desc') },
  ];

  return (
    <section className="pt-24 bg-transparent overflow-hidden">
      {/* 1. Bagian Visi Misi tetap dalam kontainer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          <div className="lg:col-span-5 flex flex-col">
            <motion.div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy tracking-tight">Visi & Misi</h2>
              <div className="w-12 h-1 bg-sttb-red mt-3" />
            </motion.div>
            <motion.div 
              className="bg-sttb-navy/10 backdrop-blur-[4px] p-10 md:p-12 border-l-4 border-sttb-red"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%, 0 75%)' }}
            >
              <p className="text-lg md:text-xl font-serif italic text-slate-800 leading-relaxed font-medium">"{t('vision.description')}"</p>
            </motion.div>
          </div>
          <motion.div 
            className="lg:col-span-7 bg-[#0F172A]/90 backdrop-blur-[2px] p-10 md:p-14 text-white shadow-xl"
            style={{ clipPath: 'polygon(0 0, 88% 0, 100% 12%, 100% 88%, 88% 100%, 0 100%)' }}
          >
            <ul className="space-y-5">
              {missions.map((m, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-sttb-red font-mono font-bold text-lg mt-0.5">0{i+1}</span>
                  <p className="text-sm md:text-base text-slate-200">{m}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* 2. Bagian Core Values Dikeluarkan dari max-w-7xl agar FULL WIDTH */}
      <div className="w-full bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)] z-20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] text-sttb-red uppercase block mb-3">Our Core Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sttb-navy">Prinsip Dasar</h2>
            <div className="w-12 h-1 bg-[#0F172A] mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sttb-red transition-colors shadow-sm">
                  <v.icon className="w-6 h-6 text-[#0F172A] group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-3">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}