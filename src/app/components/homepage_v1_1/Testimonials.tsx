import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import MaskText from '../animations/MaskText';
import { AuroraBackground } from "./ui/aurora-background";
export function Testimonials() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const amount = 400;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth"
        });
    };

    const testimonials = [
        {
            name: "Maria Elsa",
            degree: "S.Pd. 2014",
            quote:
                "Menjadi guru Kristen adalah sebuah panggilan Allah untuk mewujudkan misi-Nya dalam dunia pendidikan. Saya bersyukur bisa bergabung dan diperlengkapi dalam program studi Sarjana Pendidikan Kristen di STT Bandung. Saya tidak hanya diajar secara kognitif melainkan juga belajar melalui pengalaman orang lain. Selain itu, di STT Bandung juga saya tidak hanya bertumbuh secara pemikiran tetapi juga bertumbuh dalam spiritualitas. Benar-benar menjadi jawaban dalam kebutuhan pelayanan saya. Saya berharap 30 tahun STT Bandung kiranya semakin maju, berkembang, dan terus mempersiapkan pelayan Tuhan yang menjadi berkat di manapun mereka ditempatkan."
        },
        {
            name: "Yogi Fitra Firdaus",
            degree: "S.Th. 2015",
            quote:
                "STT Bandung sebagai seminari yang multikultur telah mempersiapkan saya sebagai hamba Tuhan yang mampu beradaptasi dalam berbagai konteks budaya yang ada di tengah gereja urban. Dengan visi menghasilkan pastor-scholar, diskusi teologis mengenai isu-isu di tengah masyarakat seperti kemiskinan, hak-hak anak dan ekologi memperlengkapi saya dengan satu pemahaman misi gereja yang holistik bahwa umat Allah tidak hanya dipanggil mewartakan Injil keselamatan tetapi juga hadir untuk menjadi agen transformasi sosial. STT Bandung juga memberikan ruang diseminasi ilmiah terhadap hasil-hasil riset yang dilakukan oleh dosen, mahasiswa dan alumni sehingga seluruh civitas academica dapat memberikan kontribusi strategis bagi gereja dan masyarakat."
        },
        {
            name: "Samuel Wiratama",
            degree: "M.Th. 2018",
            quote:
                "Bagi saya, STT Bandung telah menghadirkan berkat besar dalam kehidupan pelayanan. Dengan menekankan keseimbangan dalam karakter, akademik, dan praktik, menolong saya untuk menjadi seorang gembala yang mahir dalam pelayanan praktis gereja dengan berlandaskan akademik kuat dan kehidupan etis yang dapat menjadi teladan. Tidak ketinggalan, para dosen yang sangat care dalam membimbing dan memperhatikan para mahasiswa menjadi nilai tambah yang amat bermanfaat untuk membekali mahasiswa dalam pelayanan. Saya berharap STT Bandung terus bertumbuh dalam hal-hal ini sehingga dapat menjadi berkat bagi kekristenan di Indonesia."
        },
        {
            name: "Jakub Santoso",
            degree: "M.Min Marketplace 2019",
            quote:
                "STT Bandung merubah pola pikir saya mengenai pekerjaan dan pelayanan. Sebelum kuliah, saya menganggap pekerjaan dan pelayanan adalah dua hal yang berbeda. Pekerjaan untuk mencari uang, sedangkan pelayanan untuk melayani Tuhan. Tetapi sekarang saya menyadari bahwa dengan bekerja berarti juga melayani Tuhan, sehingga saya bisa lebih enjoy ketika bekerja karena dengan bekerja berarti saya juga sedang melayani Tuhan dalam pekerjaan saya. Perlakuan saya terhadap supplier, konsumen dan karyawan pun berubah karena saya adalah hamba Tuhan di pekerjaan saya. Apa pun juga yang saya perbuat, saya perbuat dengan segenap hati seperti untuk Tuhan dan bukan untuk manusia."
        },
        {
            name: "Ray Stephen",
            degree: "M.Min Marketplace 2018",
            quote:
                "Saya sangat bersyukur mengikuti program M.Min Marketplace. Program ini menolong saya melihat dunia pekerjaan secara berbeda. Saya juga didorong untuk memahami betapa dekatnya aplikasi Injil dalam kehidupan sehari-hari saya. Kurikulum pembelajaran di STT Bandung juga disampaikan secara kreatif dan aplikatif, membuat mahasiswa lebih mudah memahami materi dan menerapkannya di pekerjaan. Setelah kuliah, saya tidak lagi melihat keuntungan materi sebagai tujuan utama pekerjaan saya, namun lebih kepada dampak yang bisa saya berikan, yaitu upaya memberikan “cicipan” kerajaan Allah lewat pekerjaan saya di industri keuangan."
        },
        {
            name: "Monica Andreas",
            degree: "M.Pd. 2019",
            quote:
                "Berkuliah di STT Bandung merupakan salah satu keputusan terbaik saya dalam hidup ini. Selama berkuliah, saya tidak hanya diperlengkapi dengan ilmu pengetahuan, akan tetapi belajar dari kehidupan para dosen yang rendah hati dan senang membagikan hidup mereka pada kami. Dalam setiap pembelajaran yang terjadi, para dosen berusaha membawakan kuliah-kuliah yang komprehensif, aplikatif, integratif dan juga prospektif. Saya merasa sudah diperlengkapi dengan baik yang memampukan saya untuk dapat melayani dan mengimani panggilan saya sebagai guru bukan saja di tempat saya bekerja bahkan lebih luas dari itu."
        },
        {
            name: "Roni Sudarmo",
            degree: "M.Pd. 2014",
            quote:
                "Kuliah di Magister Pendidikan STT Bandung telah memperlengkapi saya dalam pelayanan, khususnya yang berkaitan dengan anak dan keluarga. Wawasan saya semakin luas melalui bidang studi yang diajarkan oleh dosen-dosen yang berkualitas dalam bidangnya masing-masing. Satu keunggulan yang saya banggakan adalah apa yang dipelajari pada akhirnya mengarahkan mahasiswa bukan sekedar tahu, tetapi mampu menerapkannya dalam pelayanan. Hingga kini saya masih melakukan penerapan-penerapan tersebut yang ternyata membuahkan hasil yaitu terjadinya pergerakan pemuridan keluarga. Terima kasih STT Bandung."
        },
        {
            name: "Rikke Rosady",
            degree: "S.Pd. 2015",
            quote:
                "Pendidikan di STT Bandung merupakan salah satu pathway yang sangat bermakna di hidup saya. Saya sangat diberkati melalui materi pembelajaran dan kehidupan bersama di STT Bandung. Materi pembelajaran yang diberikan sangat memperlengkapi mahasiswa untuk dapat melayani secara kontekstual. Diversitas di asrama STT Bandung telah menolong saya bertumbuh dengan cara berpikir yang baru. Kiranya STT Bandung terus dipakai Tuhan untuk memperlengkapi para hamba Tuhan yang dipercayakan oleh Tuhan untuk siap melayani Tuhan."
        },
        {
            name: "Kristian Kusumawardana",
            degree: "M.Th. 2019",
            quote:
                "Bukan sebuah kebetulan jika saya bisa menikmati studi lanjut di STT Bandung. Ketika melihat daftar mata kuliah program M.Th, saya langsung tertarik untuk mempelajarinya. Menurut saya, isu-isu yang dipelajari sangat kontekstual, baik bagi pelayanan lokal maupun global. Didukung dengan pengajar-pengajar dan narasumber-narasumber yang berkompeten di bidangnya, rekan-rekan diskusi yang saling membangun, fasilitas belajar yang memadai, semakin memperlengkapi saya dalam menjalani panggilan-Nya."
        },
        {
            name: "Teguh Juliawan",
            degree: "M.Pd. 2018",
            quote:
                "Program Magister Pendidikan Kristen di STT Bandung sungguh berbeda. Pertama, dari materi pendidikan yang telah memberikan pemahaman lebih dalam. Artinya saya mendapatkan kemampuan menganalisa, mengevaluasi serta menciptakan pemahaman baru dengan lebih progresif. Kedua, materi bidang kerohanian telah membuat saya berakar lebih kuat dalam pemahaman kekristenan. Gabungan keduanya membentuk diri saya menjadi pastor-scholar yang siap berkarya di masyarakat."
        },
        {
            name: "Desi Vivianti",
            degree: "S.Th. 2016",
            quote:
                "Saya bersyukur karena selama di STT Bandung saya mempunyai kesempatan dan waktu yang lebih banyak untuk belajar. Dengan bimbingan dan pengajaran dari dosen, saya belajar untuk memperlengkapi diri menjadi seorang pastor-scholar yang baik. Dengan kehidupan asrama, saya belajar melihat keunikan setiap pribadi manusia dan belajar menerima perbedaan yang ada. Bahkan dengan tugas dan tanggung jawab yang diberikan, baik sebagai mahasiswa atau dalam pelayanan praktik, saya belajar melihat dan menggali potensi diri saya. Sampai hari ini, saat saya berada dalam dunia pelayanan, saya bersyukur untuk semua pembelajaran itu, dan terus mendorong diri untuk belajar, agar layak dipakai bagi kemuliaan nama-Nya."
        },
        {
            name: "Viyane Y. Moniung",
            degree: "S.Pd. 2014",
            quote:
                "Keunikan STT Bandung: COURAGEOUS to make a Changes, INNOVATIVE to see the Chances FAST to respond the Challenges. STT Bandung membuat saya belajar merendahkan hati dan mau melayani tanpa membedakan jenis pelayanan, di gereja atau sekolah. Ketika di asrama saya belajar melayani melalui tugas piket masak, jaga, membersihkan asrama, meja makan, dan perpustakaan. Hal-hal tersebut telah membentuk saya untuk melayani sepenuh hati. STT Bandung juga memberikan saya kesempatan untuk belajar menyampaikan aspirasi melalui kegiatan organisasi senat dan training group. Melalui STT Bandung saya mendapatkan kesempatan untuk mempresentasikan tugas akhir skripsi saya dalam satu kegiatan prosiding umum. Thank you and Happy 30th Birthday STTB. Soli Deo Gloria."
        }
    ];

    return (

        <section className="py-24 overflow-hidden relative">
            <AuroraBackground className="absolute inset-0 z-0" showRadialGradient={true}>
                <div />
            </AuroraBackground>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">

                    <span className="block text-2xl text-sttb-navy font-bold tracking-[0.25em] mb-3 font-[Plus_Jakarta_Sans]">
                        VI
                    </span>

                    <MaskText type="lines">
                        <h2 className="text-4xl lg:text-5xl mb-4 font-bold text-sttb-navy font-[Plus_Jakarta_Sans]">
                            Testimoni Alumni
                        </h2>
                    </MaskText>

                    <div className="flex items-center justify-center gap-4 text-gray-400">
                        <div className="h-px w-16 bg-yellow-500" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <div className="h-px w-16 bg-yellow-500" />
                    </div>

                </div>

                <div className="flex justify-end gap-3 mb-6">

                    <button
                        onClick={() => scroll("left")}
                        className="p-2 rounded-full bg-white border hover:bg-sttb-navy hover:text-white transition"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="p-2 rounded-full bg-white border hover:bg-sttb-navy hover:text-white transition"
                    >
                        <ChevronRight size={18} />
                    </button>

                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-12 overflow-x-auto scroll-smooth no-scrollbar pb-6"
                >

                    {testimonials.map((t, index) => (

                        <div
                            key={index}
                            className="group min-w-[700px] min-h-[420px] h-auto bg-white border border-gray-200 rounded-xl p-8
transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-sttb-red flex flex-col justify-between"
                        >

                            {/* Quote icon */}
                            <div className="text-sttb-navy opacity-25 mb-3">
                                <Quote size={38} />
                            </div>

                            <div className="relative flex-1 overflow-hidden">

                                <div className="h-full overflow-y-auto pr-2 scrollbar-thin">

                                    <p className="text-gray-700 italic leading-relaxed text-sm">
                                        "{t.quote}"
                                    </p>

                                </div>

                                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent" />

                            </div>

                            {/* Author */}
                            <div className="border-t pt-4 mt-4">

                                <div className="font-bold text-slate-900">
                                    {t.name}
                                </div>

                                <div className="text-sm text-gray-500">
                                    {t.degree}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>

    );
}