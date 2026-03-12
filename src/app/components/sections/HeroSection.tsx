import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'motion/react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white py-20">
      {/* Elegant Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/75 z-10" />
        <img
          src="https://images.unsplash.com/photo-1706371154713-bdc5010a51c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzEyMjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="STTB Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sttb-red/5 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sttb-navy/5 rounded-full blur-3xl z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-sttb-red rounded-full" />
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Est. 1949 • Accredited Excellence
            </span>
          </motion.div>

          {/* Main Heading - Clean & Professional */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5"
          >
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
              {t('hero.title')}
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"><span className="bg-gradient-to-r from-sttb-red to-red-400 bg-clip-text text-transparent">{t('hero.title2')}</span></span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons - Minimal & Elegant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-sttb-red hover:bg-sttb-red/90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-lg font-semibold transition-all backdrop-blur-md"
            >
              {t('hero.learn_more')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}