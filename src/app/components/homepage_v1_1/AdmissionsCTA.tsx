import { Button } from './ui/button';
import { ArrowRight, FileText, Calendar, HelpCircle } from 'lucide-react';
import { Link } from 'react-router';
import MaskText from '../animations/MaskText';

export function AdmissionsCTA() {

return (
    <section
      id="admissions"
      className="py-20 lg:py-28 bg-sttb-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="block text-2xl text-yellow-500 font-bold tracking-[0.25em] mb-3">
              VII
            </span>
            <MaskText type="lines">
              <h2 className="text-4xl lg:text-5xl mb-6 font-bold text-white">
                {'Bergabunglah Dengan Kami'}
              </h2>
            </MaskText>
            <MaskText type="lines" delay={0.1}>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {'Mulai perjalanan Anda menjadi pelayan Tuhan yang diperlengkapi dengan kebenaran dan kasih.'}
              </p>
            </MaskText>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="w-full lg:w-3/5 bg-white/10 border border-yellow-500/60 shadow-[0_0_30px_rgba(212,175,55,0.15)] rounded-xl p-10 text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="w-7 h-7 rounded-full bg-yellow-500 text-[#FFFFFF] text-xs font-bold inline-flex items-center justify-center">
                  1
                </span>
                <span className="ml-2 text-xs tracking-[0.2em] text-white font-bold">
                  {'STEP'}
                </span>
              </div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-yellow-500 mb-6 border-2 border-white/20">
                <FileText size={36} />
              </div>
              <h3 className="text-2xl mb-3 font-bold text-white">{'Daftar Online'}</h3>
              <p className="text-white/75 text-sm mb-6">
                {'Isi formulir pendaftaran secara online dan mulai proses seleksi Anda.'}
              </p>
              <Link to="/admissions">
                <Button
                  size="lg"
                  className="group bg-sttb-red text-white hover:!bg-red-700 border-2 border-sttb-red px-8 py-6 text-base uppercase tracking-wider shadow-[0_4px_6px_rgba(220,38,38,0.3)] hover:shadow-lg transition-transform hover:scale-105 font-bold"
                >
                  {'Daftar Sekarang'}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-4/5">
              <div className="flex-1 bg-white/10 border border-white/20 rounded-lg p-8 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-yellow-500/30">
                <div className="flex items-center justify-center mb-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-500 text-[#FFFFFF] text-[11px] font-bold inline-flex items-center justify-center">
                    2
                  </span>
                  <span className="ml-2 text-xs tracking-[0.2em] text-white font-bold">
                    {'STEP'}
                  </span>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-yellow-500 mb-4 border border-white/20">
                  <Calendar size={28} />
                </div>
                <h4 className="text-xl mb-2 font-bold text-white">{'Tes Masuk'}</h4>
                <p className="text-white/70 text-sm">
                  {'Ikuti ujian tertulis dan wawancara sesuai jadwal yang ditetapkan.'}
                </p>
              </div>

              <div className="flex-1 bg-white/10 border border-white/20 rounded-lg p-8 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-yellow-500/30">
                <div className="flex items-center justify-center mb-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-500 text-[#FFFFFF] text-[11px] font-bold inline-flex items-center justify-center">
                    3
                  </span>
                  <span className="ml-2 text-xs tracking-[0.2em] text-white font-bold">
                    {'STEP'}
                  </span>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-yellow-500 mb-4 border border-white/20">
                  <HelpCircle size={28} />
                </div>
                <h4 className="text-xl mb-2 font-bold text-white">{'Pengumuman'}</h4>
                <p className="text-white/70 text-sm">
                  {'Cek hasil penerimaan dan informasi lanjutan setelah tes seleksi.'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-white/70 text-sm">
            <p className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90 font-semibold">
              <Calendar size={14} className="text-yellow-500" />
              {'Pendaftaran: 1 Maret - 31 Mei 2026'}
            </p>
            <p className="mt-2 text-white">
              {'Beasiswa tersedia hingga 50% untuk calon mahasiswa berprestasi'}
            </p>
            <p className="mt-4 text-sm text-white">
              {'Lebih dari 1.000 alumni STTB melayani di berbagai gereja dan institusi.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}