import { Button } from "./ui/button";
import UnicornScene from "unicornstudio-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Unicorn Studio Background Effect */}
      <div className="absolute inset-0 z-0">
        <UnicornScene
          projectId="mgpOXBPQmcFpBG47sv2u"
          width="110%"
          height="110%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 z-5 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-0 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Decorative frame */}
          <div className="border border-white/20 p-8 lg:p-16 relative backdrop-blur-sm bg-white/5">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]" />

            <h1 className="text-white font-bold tracking-tight leading-tight mx-0 mt-0 mb-6 whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-[Plus_Jakarta_Sans]">
              {t('hero.title2') === 'THEOLOGY' ? 'Domino, Optimo, Maximo' : 'Domino, Optimo, Maximo'}
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl text-white/90 mb-10 italic max-w-3xl mx-auto leading-relaxed font-[Inter]">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#DC2626] text-white hover:!bg-[#B91C1C] border-2 border-[#DC2626] px-8 py-6 text-base uppercase tracking-wider shadow-[0_4px_6px_rgba(220,38,38,0.3)] font-serif transition-transform hover:-translate-y-0.5"
              >
                <span className="font-bold font-[Plus_Jakarta_Sans]">
                  {t('hero.cta')}
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:!bg-white/10 border-2 border-white px-8 py-6 text-base uppercase tracking-wider font-serif"
              >
                <span className="font-[Plus_Jakarta_Sans]">
                  {t('hero.learn_more')}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
