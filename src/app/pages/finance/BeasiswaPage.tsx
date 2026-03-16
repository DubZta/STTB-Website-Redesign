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
  const { t, language } = useLanguage();

  const scholarships = [
    {
      category: language === 'id' ? "BEASISWA S1" : "BACHELOR SCHOLARSHIP",
      title: "PASTOR SCHOLAR",
      description: "",
      benefits: language === 'id' ? [
        "Diperuntukkan bagi mahasiswa S1 dan menjadikan STTB sebagai pilihan pertama",
        "Beasiswa meliputi biaya pendidikan dari semester 1",
        "Memiliki prestasi yang mengagumkan di SMA (rata-rata rapor minimal 8.0)",
        "Memiliki panggilan yang jelas",
        "Memiliki rekomendasi yang kuat",
        "Minimal IPK 2.75 pada semester 1 dan minimal IPK 3.0 pada semester 2-4",
        "Bersedia mengalokasikan waktu 15 jam/bulan untuk membantu kegiatan administrasi/akademik di STTB",
        "Kelanjutan beasiswa akan dievaluasi per semester",
        "Bersedia memenuhi ikatan dinas 0.5 N (setara 2 tahun) setelah mahasiswa lulus"
      ] : [
        "Intended for S1 students who make STTB their first choice",
        "Scholarship covers tuition fees from semester 1",
        "Excellent high school performance (minimum average report card 8.0)",
        "Have a clear calling",
        "Have strong recommendations",
        "Minimum GPA 2.75 in semester 1 and minimum GPA 3.0 in semesters 2-4",
        "Willing to allocate 15 hours/month to assist administration/academic activities at STTB",
        "Scholarship continuation evaluated every semester",
        "Willing to fulfill service bond of 0.5 N (approx. 2 years) after graduation"
      ],
      image: "/s1.png",
      icon: Users,
    },
    {
      category: language === 'id' ? "BEASISWA S1" : "BACHELOR SCHOLARSHIP",
      title: "FORMATIO",
      description: "",
      benefits: language === 'id' ? [
        "Beasiswa meliputi biaya pendidikan S1 dari tahun kedua atau telah menempuh semester 2",
        "Memiliki prestasi belajar yang baik serta lolos seleksi dan wawancara",
        "Kelanjutan beasiswa akan dievaluasi per semester",
        "Bersedia mengalokasikan waktu 15 jam/bulan untuk membantu kegiatan administrasi/akademik di STTB",
        "Bersedia memenuhi ikatan dinas 0.5 N"
      ] : [
        "Scholarship covers S1 tuition from the second year or after semester 2",
        "Good academic performance and pass selection/interview",
        "Scholarship continuation evaluated every semester",
        "Willing to allocate 15 hours/month to assist administration/academic activities at STTB",
        "Willing to fulfill service bond of 0.5 N"
      ],
      image: "/s1.1.png",
      icon: GraduationCap,
      reverse: true
    },
    {
      category: language === 'id' ? "BEASISWA S1 - S2" : "BACHELOR - MASTER SCHOLARSHIP",
      title: "TRANSFORMATIVE LEADERSHIP",
      description: "",
      benefits: language === 'id' ? [
        "Diperuntukkan bagi mahasiswa S2 dengan prestasi akademik maupun non akademik yang menonjol",
        "Memiliki integritas dan panggilan yang jelas",
        "Meliputi maksimal 50% dari total biaya pendidikan",
        "Memberikan surat keterangan yang menyatakan telah melakukan pelayanan sebanyak 10 jam di pelayanan di lembaga pelayanan atau lembaga domisili setempat",
        "Bersedia menjadi bagian kepanitiaan acara event STTB dan bersedia menjadi ketua & koordinator kelas",
        "Tidak diberlakukan ikatan dinas"
      ] : [
        "Intended for S2 students with outstanding academic or non-academic achievements",
        "Have integrity and a clear calling",
        "Covers up to 50% of total tuition fees",
        "Provide a statement of 10 hours of service at a local ministry institution or domicile",
        "Willing to participate in STTB event committees and serve as class leader & coordinator",
        "No service bond applicable"
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

            <div className="space-y-4 border border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm">

              <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase block mb-4">
                {language === 'id' ? 'FAQ Calon Penerima' : 'FAQ for Candidates'}
              </span>

              <h2 className="text-5xl font-bold text-[#0b3f82] mb-6 tracking-tight">
                {language === 'id' ? 'BEASISWA' : 'SCHOLARSHIP'}
              </h2>

              <div className="p-8 bg-[#0b3f82] rounded-3xl text-white relative overflow-hidden">

                <h4 className="text-xl font-bold mb-3 text-white">{language === 'id' ? 'Punya Pertanyaan Lain?' : 'Have Other Questions?'}</h4>

                <p className="text-white/70 text-sm mb-6">
                  {language === 'id' ? 'Hubungi kantor admisi kami untuk informasi lebih lanjut.' : 'Contact our admissions office for more information.'}
                </p>

                <Button className="bg-[#E31D1A] text-white hover:!bg-[#b91815] w-full rounded-xl">
                  <a href="https://wa.me/6281573360009">
                    {language === 'id' ? 'HUBUNGI KAMI' : 'CONTACT US'}
                  </a>
                </Button>

              </div>

            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            </div>

            <div className="space-y-4 border border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm">

              <Accordion type="single" collapsible className="w-full">

                {[
                  {
                    q: language === 'id' ? "Apakah STTB menyediakan beasiswa bagi mahasiswa?" : "Does STTB provide scholarships for students?",
                    a: language === 'id' ? "Ya, STTB menyediakan beasiswa bagi mahasiswa S1 dan S2" : "Yes, STTB provides scholarships for Bachelor's (S1) and Master's (S2) students."
                  },
                  {
                    q: language === 'id' ? "Apa saja jenis beasiswa yang STTB tawarkan?" : "What types of scholarships does STTB offer?",
                    a: language === 'id' ? "STTB menawarkan 3 kategori beasiswa: Pastor Scholar, Formatio, dan Transformative Leadership. Mahasiswa dapat mengajukan sesuai kriteria yang ditentukan di setiap jenis beasiswa" : "STTB offers 3 scholarship categories: Pastor Scholar, Formatio, and Transformative Leadership. Students can apply according to the criteria specified for each scholarship type."
                  },
                  {
                    q: language === 'id' ? "Siapa saja yang bisa mendapatkan beasiswa?" : "Who can receive a scholarship?",
                    a: language === 'id' ? "Mahasiswa yang memenuhi kriteria dan persyaratan yang ditetapkan untuk masing-masing jenis beasiswa" : "Students who meet the criteria and requirements set for each scholarship type."
                  },
                  {
                    q: language === 'id' ? "Apa syarat dan ketentuannya?" : "What are the terms and conditions?",
                    a: language === 'id' ? "Mengisi formulir, melengkapi dokumen, memenuhi kriteria, mengikuti seleksi dan wawancara, serta memenuhi persyaratan akademik" : "Fill out the form, complete supporting documents, meet criteria, undergo selection and interviews, and fulfill academic requirements."
                  },
                  {
                    q: language === 'id' ? "Bagaimana cara saya mendaftar aplikasi beasiswa?" : "How do I apply for a scholarship?",
                    a: language === 'id' ? "Unduh formulir beasiswa, lengkapi dokumen penunjang, dan kirimkan ke unit beasiswa sesuai jadwal yang ditetapkan" : "Download the scholarship form, complete supporting documents, and submit them to the scholarship unit according to the established schedule."
                  },
                  {
                    q: language === 'id' ? "Kapan saya bisa mengirim aplikasi beasiswa?" : "When can I submit my scholarship application?",
                    a: language === 'id' ? "Pengiriman aplikasi disesuaikan dengan jadwal yang ditetapkan oleh unit beasiswa STTB" : "Application submission is adjusted to the schedule set by the STTB scholarship unit."
                  },
                  {
                    q: language === 'id' ? "Apakah saya bisa kehilangan beasiswa saya selama masa studi?" : "Can I lose my scholarship during my studies?",
                    a: language === 'id' ? "Ya, jika tidak memenuhi persyaratan IPK minimal atau melanggar ketentuan dan peraturan STTB" : "Yes, if you do not meet the minimum GPA requirements or violate STTB's terms and regulations."
                  },
                  {
                    q: language === 'id' ? "Apakah penerima beasiswa jenis tertentu dapat mengajukan jenis beasiswa yang lain?" : "Can recipients of one scholarship type apply for another?",
                    a: language === 'id' ? "Silakan hubungi unit beasiswa untuk informasi lebih lanjut mengenai kebijakan ini" : "Please contact the scholarship unit for more information regarding this policy."
                  },
                  {
                    q: language === 'id' ? "Jika saya tidak lolos seleksi, apakah saya dapat mengajukan aplikasi untuk periode berikutnya?" : "If I don't pass the selection, can I apply for the next period?",
                    a: language === 'id' ? "Ya, Anda dapat mengajukan kembali pada periode berikutnya dengan melengkapi persyaratan yang diperlukan" : "Yes, you can reapply in the next period by completing the necessary requirements."
                  }
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

            <div className="border border-slate-200 hover:border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm transition-all duration-300">

              <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase block mb-4">
                {language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}
              </span>

              <h3 className="text-3xl font-bold text-[#0b3f82] mb-6">
                {language === 'id' ? 'BEASISWA' : 'SCHOLARSHIP'}
              </h3>

              <ul className="space-y-3">
                {[
                  language === 'id' ? "Mengisi formulir beasiswa dan melengkapi dokumen penunjang serta mengirimkan kembali ke unit beasiswa sesuai jadwal yang ditetapkan" : "Fill out the scholarship form, complete supporting documents, and submit them to the scholarship unit according to the established schedule.",
                  language === 'id' ? "Memenuhi kriteria beasiswa yang didaftarkan, mengikuti proses seleksi dan wawancara" : "Meet the criteria for the registered scholarship, undergo the selection process and interview.",
                  language === 'id' ? "Mengikuti evaluasi semester yang diadakan oleh unit beasiswa dan jika dinyatakan tidak lolos, maka beasiswa tidak dilanjutkan" : "Participate in semester evaluations held by the scholarship unit, and if deemed unsuccessful, the scholarship will not be continued.",
                  language === 'id' ? "Memiliki prestasi akademik yang baik (bagi siswa SMA memiliki nilai rata-rata minimal 8,5 dan bagi mahasiswa aktif, memiliki IPK minimal 3,0)" : "Have good academic performance (for high school students, a minimum average score of 8.5; for active university students, a minimum GPA of 3.0).",
                  language === 'id' ? "Bersedia memenuhi ikatan dinas (pada jenis beasiswa yang mewajibkan ikatan dinas)" : "Willing to fulfill a service bond (for scholarship types that require a service bond)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E31D1A] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            </div>

            <div className="border border-slate-200 hover:border-[#0b3f82] rounded-3xl p-10 bg-white shadow-sm transition-all duration-300">

              <span className="text-[#E31D1A] font-bold tracking-widest text-sm uppercase block mb-4">
                {language === 'id' ? 'Sanksi Bagi Penerima' : 'Sanctions for Recipients'}
              </span>

              <h3 className="text-3xl font-bold text-[#0b3f82] mb-6">
                {language === 'id' ? 'BEASISWA' : 'SCHOLARSHIP'}
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                {language === 'id' ? "Yang melanggar ketentuan dan peraturan STTB dan mendapatkan Surat Peringatan, maka:" : "Recipients who violate STTB's terms and regulations and receive a Warning Letter will face the following:"}
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