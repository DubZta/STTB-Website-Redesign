import { Plus } from "lucide-react"
import { motion } from "motion/react"

export default function LEADPage() {
  return (
    <div className="min-h-screen bg-white font-[Inter] text-gray-700">

      {/* HERO / INTRO */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-14 bg-red-600 rounded"></div>
                <p className="text-xs font-semibold tracking-widest text-red-600 uppercase">
                  Learning, Equipping, & Development
                </p>
              </div>

              <h1 className="text-6xl font-extrabold text-sttb-navy font-[Plus_Jakarta_Sans]">
                LEAD
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 leading-relaxed">
              <p className="text-justify">
                <strong className="text-sttb-navy">
                  STTB Learning, Equipping, And Development (disingkat L.E.A.D.) Center
                </strong>{" "}
                adalah pusat pendidikan dan pelatihan nonformal dari Sekolah
                Tinggi Teologi Bandung. Tujuan didirikannya LEAD Center adalah
                untuk <strong>"memperlengkapi orang-orang kudus bagi pekerjaan pelayanan, bagi pembangunan tubuh Kristus"</strong> (Ef 4:12).
                LEAD Center digerakkan dan didasari oleh visi STTB, yaitu
                <strong>
                  {" "}
                  "Seluruh Umat membawa Seluruh Injil ke Seluruh Dunia"
                </strong>{" "}
                (dari semboyan Lausanne Movement).
              </p>

              <div className="flex items-start gap-3">
                <Plus className="text-red-600 w-5 h-5 mt-1" />
                <Plus className="text-red-600 w-5 h-5 mt-1" />
                <p className="text-sm">
                  Salah satu buah terpenting dari reformasi adalah kembali
                  dihidupkannya keyakinan alkitabiah tentang keimaman semua
                  orang percaya <em>(the priesthood of all believers)</em>.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 font-[Plus_Jakarta_Sans] text-sttb-navy">
              Konsep Kegiatan Media
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEAD CENTER */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-red-600 text-white rounded-2xl p-8 shadow-lg relative"
            >
              <div className="absolute top-4 right-4 opacity-30">
                <Plus /><Plus />
              </div>

              <h3 className="text-2xl font-bold mb-3 font-[Plus_Jakarta_Sans] text-white">
                LEAD Center
              </h3>

              <p className="text-red-100">
                Sebagai bagian integral dari pelayanan STTB bagi tubuh Kristus,
                LEAD Center melakukannya panggilan dan peran tersebut dengan
                menyelenggarakan tiga bidang layanan: <strong>Learning</strong>,
                <strong> Equipping</strong>, dan <strong>Development</strong>.
              </p>
            </motion.div>

            {/* LEARNING */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-purple-700 text-white rounded-2xl p-8 shadow-lg relative"
            >
              <div className="absolute top-4 right-4 opacity-30">
                <Plus /><Plus />
              </div>

              <h3 className="text-2xl font-bold mb-3 font-[Plus_Jakarta_Sans] text-white">
                Layanan Learning
              </h3>

              <p className="text-purple-100">
                menyediakan kelas bagi umat Tuhan untuk dapat mengikuti kelas-kelas
                dalam sekolah teologi secara audit <em>(sit in)</em>.
              </p>
            </motion.div>

            {/* EQUIPPING */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg relative"
            >
              <div className="absolute top-4 right-4 opacity-30">
                <Plus /><Plus />
              </div>

              <h3 className="text-2xl font-bold mb-3 font-[Plus_Jakarta_Sans] text-white">
                Layanan Equipping
              </h3>

              <p className="text-blue-100">
                menyelenggarakan kursus <em>(certificate course)</em>, pelatihan
                <em>(training course)</em>, dan klinik <em>(crash course)</em>.
              </p>
            </motion.div>



            {/* DEVELOPMENT */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-sttb-navy text-white rounded-2xl p-8 shadow-lg relative"
            >
              <div className="absolute top-4 right-4 opacity-30">
                <Plus /><Plus />
              </div>

              <h3 className="text-2xl font-bold mb-3 font-[Plus_Jakarta_Sans] text-white">
                Layanan Development
              </h3>

              <p className="text-blue-100">
                Sebagai bagian integral dari pelayanan STTB bagi tubuh Kristus,
                LEAD Center melakukannya panggilan dan peran tersebut dengan
                menyelenggarakan tiga bidang layanan: <strong>Learning</strong>,
                <strong> Equipping</strong>, dan <strong>Development</strong>.
              </p>
            </motion.div>
          </div>

        </div>
      </section>


      {/* EXPLANATION TEXT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-sm leading-relaxed font-[Plus_Jakarta_Sans]">

          <div className="flex items-start gap-3">
            <Plus className="text-red-600 mt-1" />
            <Plus className="text-red-600 mt-1" />
            <p>
              Gereja adalah harapan dunia, terang dunia (Mat 5:13-16). Gereja
              yang berfungsi sepenuhnya dicirikan dengan dihasilkannya
              pekerja-pekerja yang diperlengkapi dan siap melayani.
            </p>
          </div>

          <p>
            LEAD Center ingin menjadi bagian dari tubuh Kristus yang
            menyediakan, menghasilkan, dan mendistribusikan kesempatan dan
            bahan pembinaan yang diperlukan bagi pelipatgandaan pekerja.
          </p>

        </div>
      </section>
    </div>
  )
}