import React from 'react';
import MaskText from '../../components/animations/MaskText';
import { Button } from '../../components/homepage_v1_1/ui/button';
import { AuroraBackground } from '../../components/homepage_v1_1/ui/aurora-background';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/homepage_v1_1/ui/accordion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronRight, GraduationCap, Users, Trophy } from 'lucide-react';

const ScholarshipCard = ({ category, title, description, benefits, image, icon: Icon, reverse }: any) => (

  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start mb-24 gap-12 group`}>

    {/* IMAGE TOP-ALIGNED */}
    <div className="lg:w-1/2 relative overflow-hidden rounded-3xl shadow-xl">

      <img
        src={image}
        alt={title}
        className="w-full h-[550px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-[#0b3f82]/10 via-transparent to-[#E31D1A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    </div>

    {/* TEXT */}
    <div className="lg:w-1/2 flex flex-col justify-start pt-2">

      <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase mb-3">
        {category}
      </span>

      <h3 className="text-4xl font-bold text-[#0b3f82] mb-6 tracking-tight">
        {title}
      </h3>

      <div className="space-y-4 mb-8">
        <ul className="space-y-3">
          {benefits.map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-1">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E31D1A]" />
              <span className="text-sm text-slate-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>

  </div>

);

export default function BeasiswaPage() {
  const { t } = useLanguage();

  const scholarships = [
    {
      category: "BEASISWA S1",
      title: "PASTOR SCHOLAR",
      description: "",
      benefits: [
        "Diperuntukkan bagi mahasiswa S1 dan menjadikan STTB sebagai pilihan pertama",
        "Beasiswa meliputi biaya pendidikan dari semester 1",
        "Memiliki prestasi yang mengagumkan di SMA (rata-rata rapor minimal 8.0)",
        "Memiliki panggilan yang jelas",
        "Memiliki rekomendasi yang kuat",
        "Minimal IPK 2.75 pada semester 1 dan minimal IPK 3.0 pada semester 2-4",
        "Bersedia mengalokasikan waktu 15 jam/bulan untuk membantu kegiatan administrasi/akademik di STTB",
        "Kelanjutan beasiswa akan dievaluasi per semester",
        "Bersedia memenuhi ikatan dinas 0.5 N (setara 2 tahun) setelah mahasiswa lulus"
      ],
      image: "/s1.png",
      icon: Users,
    },
    {
      category: "BEASISWA S1",
      title: "FORMATIO",
      description: "",
      benefits: [
        "Beasiswa meliputi biaya pendidikan S1 dari tahun kedua atau telah menempuh semester 2",
        "Memiliki prestasi belajar yang baik serta lolos seleksi dan wawancara",
        "Kelanjutan beasiswa akan dievaluasi per semester",
        "Bersedia mengalokasikan waktu 15 jam/bulan untuk membantu kegiatan administrasi/akademik di STTB",
        "Bersedia memenuhi ikatan dinas 0.5 N"
      ],
      image: "/s1.1.png",
      icon: GraduationCap,
      reverse: true
    },
    {
      category: "BEASISWA S1 - S2",
      title: "TRANSFORMATIVE LEADERSHIP",
      description: "",
      benefits: [
        "Diperuntukkan bagi mahasiswa S2 dengan prestasi akademik maupun non akademik yang menonjol",
        "Memiliki integritas dan panggilan yang jelas",
        "Meliputi maksimal 50% dari total biaya pendidikan",
        "Memberikan surat keterangan yang menyatakan telah melakukan pelayanan sebanyak 10 jam di pelayanan di lembaga pelayanan atau lembaga domisili setempat",
        "Bersedia menjadi bagian kepanitiaan acara event STTB dan bersedia menjadi ketua & koordinator kelas",
        "Tidak diberlakukan ikatan dinas"
      ],
      image: "/s2.png",
      icon: Trophy
    }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <AuroraBackground className="h-[80vh] min-h-[600px] overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src="/ngajar.png"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3f82]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white">

          <div className="max-w-2xl">

            <MaskText type="lines">
              <h1 className="text-7xl lg:text-8xl font-bold mb-6 leading-none tracking-tighter">
                {t('finance.beasiswa.title')}
              </h1>
            </MaskText>

            <p className="text-lg text-white/90 leading-relaxed mb-6 max-w-xl">
              {t('finance.beasiswa.hero_desc1')}
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              {t('finance.beasiswa.hero_desc2')}
            </p>

          </div>

        </div>

      </AuroraBackground>

      {/* SCHOLARSHIPS */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white">

        <div className="container mx-auto px-6 lg:px-12">

          {scholarships.map((s, i) => (
            <ScholarshipCard key={i} {...s} />
          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className="bg-white">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-start">

            {/* LEFT */}
            <div className="space-y-4 border border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm">

              <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase block mb-4">
                FAQ Calon Penerima
              </span>

              <h2 className="text-5xl font-bold text-[#0b3f82] mb-6 tracking-tight">
                BEASISWA
              </h2>

              <div className="p-8 bg-[#0b3f82] rounded-3xl text-white relative overflow-hidden">

                <h4 className="text-xl font-bold mb-3 text-white">Punya Pertanyaan Lain?</h4>

                <p className="text-white/70 text-sm mb-6">
                  Hubungi kantor admisi kami untuk informasi lebih lanjut.
                </p>

                <Button className="bg-[#E31D1A] text-white hover:!bg-[#b91815] w-full rounded-xl">
                  HUBUNGI KAMI
                </Button>

              </div>

            </div>

            {/* CENTER DIVIDER */}
            <div className="hidden lg:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 border border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm">

              <Accordion type="single" collapsible className="w-full">

                {[
                  { q: "Apakah STTB menyediakan beasiswa bagi mahasiswa?", a: "Ya, STTB menyediakan beasiswa bagi mahasiswa S1 dan S2" },
                  { q: "Apa saja jenis beasiswa yang STTB tawarkan?", a: "STTB menawarkan 3 kategori beasiswa: Pastor Scholar, Formatio, dan Transformative Leadership. Mahasiswa dapat mengajukan sesuai kriteria yang ditentukan di setiap jenis beasiswa" },
                  { q: "Siapa saja yang bisa mendapatkan beasiswa?", a: "Mahasiswa yang memenuhi kriteria dan persyaratan yang ditetapkan untuk masing-masing jenis beasiswa" },
                  { q: "Apa syarat dan ketentuannya?", a: "Mengisi formulir, melengkapi dokumen, memenuhi kriteria, mengikuti seleksi dan wawancara, serta memenuhi persyaratan akademik" },
                  { q: "Bagaimana cara saya mendaftar aplikasi beasiswa?", a: "Unduh formulir beasiswa, lengkapi dokumen penunjang, dan kirimkan ke unit beasiswa sesuai jadwal yang ditetapkan" },
                  { q: "Kapan saya bisa mengirim aplikasi beasiswa?", a: "Pengiriman aplikasi disesuaikan dengan jadwal yang ditetapkan oleh unit beasiswa STTB" },
                  { q: "Apakah saya bisa kehilangan beasiswa saya selama masa studi?", a: "Ya, jika tidak memenuhi persyaratan IPK minimal atau melanggar ketentuan dan peraturan STTB" },
                  { q: "Apakah penerima beasiswa jenis tertentu dapat mengajukan jenis beasiswa yang lain?", a: "Silakan hubungi unit beasiswa untuk informasi lebih lanjut mengenai kebijakan ini" },
                  { q: "Jika saya tidak lolos seleksi, apakah saya dapat mengajukan aplikasi untuk periode berikutnya?", a: "Ya, Anda dapat mengajukan kembali pada periode berikutnya dengan melengkapi persyaratan yang diperlukan" }
                ].map((item, idx) => (

                  <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-100 rounded-2xl px-6 mb-4 bg-slate-50 overflow-hidden">
                    <AccordionTrigger className="text-left font-bold text-slate-800 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>

                ))}

              </Accordion>

            </div>

          </div>

        </div>

      </section>

      {/* REQUIREMENTS + SANCTIONS */}
      <section className="pt-16 pb-28 bg-slate-50">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16">

            {/* SYARAT */}
            <div className="border border-slate-200 hover:border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm transition-all duration-300">

              <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase block mb-4">
                Syarat & Ketentuan
              </span>

              <h3 className="text-3xl font-bold text-[#0b3f82] mb-6">
                BEASISWA
              </h3>

              <ul className="space-y-3">
                {[
                  "Mengisi formulir beasiswa dan melengkapi dokumen penunjang serta mengirimkan kembali ke unit beasiswa sesuai jadwal yang ditetapkan",
                  "Memenuhi kriteria beasiswa yang didaftarkan, mengikuti proses seleksi dan wawancara",
                  "Mengikuti evaluasi semester yang diadakan oleh unit beasiswa dan jika dinyatakan tidak lolos, maka beasiswa tidak dilanjutkan",
                  "Memiliki prestasi akademik yang baik (bagi siswa SMA memiliki nilai rata-rata minimal 8,5 dan bagi mahasiswa aktif, memiliki IPK minimal 3,0)",
                  "Bersedia memenuhi ikatan dinas (pada jenis beasiswa yang mewajibkan ikatan dinas)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E31D1A] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* CENTER DIVIDER */}
            <div className="hidden lg:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            </div>

            {/* SANKSI */}
            <div className="border border-slate-200 hover:border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm transition-all duration-300">

              <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase block mb-4">
                Sanksi Bagi Penerima
              </span>

              <h3 className="text-3xl font-bold text-[#0b3f82] mb-6">
                BEASISWA
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Yang melanggar ketentuan dan peraturan STTB dan mendapatkan Surat Peringatan, maka:
              </p>

              <ol className="space-y-2 mb-6 ml-4">
                {[
                  "Dana beasiswa akan dihentikan pada semester berjalan",
                  "Penerima beasiswa wajib mengembalikan seluruh dukungan beasiswa yang telah diterima",
                  "Penerima beasiswa akan di skorsing selama 1 semester"
                ].map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-700">
                    {idx + 1}. {item}
                  </li>
                ))}
              </ol>

              <p className="text-sm text-slate-700">
                Yang tidak memenuhi persyaratan IPK minimal yaitu pada semester I, IPK {'<'} min = 2,75 dan semester II, IPK {'<'} 3, maka dana beasiswa akan diberhentikan pada semester berjalan
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}