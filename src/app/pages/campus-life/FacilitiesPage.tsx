import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users as UsersIcon, Home, X } from 'lucide-react';

export default function FacilitiesPage() {
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const facilities = [
    {
      icon: BookOpen,
      title: 'Belajar Bersama',
      description:
        'Sebagai sebuah kampus perguruan tinggi, STTB menyediakan fasilitas yang optimal bagi kegiatan belajar-mengajar. Format ruang kelas didesain yang mengakomodasi berbagai format pembelajaran. Perpustakaan didesain agar nyaman dan instgramable. Ruang teleconference dan ruangan kelas lainnya siap pakai bagi pembelajaran hybrid (onsite-online). Dilengkapi juga dengan studio audio-visual Didasko yang menjadi tempat produksi media pengajaran STTB maupun tempat belajar pelayanan media bagi mahasiswa.',
    },
    {
      icon: UsersIcon,
      title: 'Bertumbuh Bersama',
      description:
        'Pembelajaran di STTB tidak hanya menekankan sisi akademik, melainkan pembentukan pribadi pelayan Tuhan secara utuh. Untuk itu STTB menyediakan fasilitas pendukung pertumbuhan rohani mahasiswa, seperti ruang konseling pribadi dan konseling kelompok, beberapa tempat untuk pertemuan hangout kelompok kecil, aula untuk pertemuan ibadah/seminar dengan audiens besar, serta fasilitas di luar kampus berupa rumah retreat (Rumah Doa Bethel).',
    },
    {
      icon: Home,
      title: 'Hidup Bersama',
      description:
        'Pendidikan di STTB diselenggarakan secara residensial penuh. Artinya sepanjang masa studi, mahasiswa akan tinggal bersama sebagai satu komunitas. Ada empat asrama yang terintegrasi di lokasi kampus STTB, yaitu asrama dosen, asrama mahasiswa putra (aspra), asrama mahasiswa putri (aspri), dan asrama mahasiswa pascasarjana/tamu. Fasilitas asrama terdiri dari kamar tidur lengkap, kamar mandi dan toilet, lounge, ruang makan, berbagai sarana olah raga (jogging, senam, bola basket, bulutangkis, futsal, tenis meja, renang).',
    },
  ];

  const galleryImages = [
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-12.png', span: 'col-span-2 row-span-2' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-15.png', span: 'col-span-1 row-span-1' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-11.png', span: 'col-span-1 row-span-1' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-5-1.png', span: 'col-span-1 row-span-2' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-9.png', span: 'col-span-1 row-span-1' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-2.png', span: 'col-span-2 row-span-1' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-8.png', span: 'col-span-1 row-span-1' },
    { url: 'https://sttb.ac.id/storage/2022/08/fasilitas-18.png', span: 'col-span-1 row-span-1' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Background */}
      <section className="relative overflow-hidden bg-white">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: 'url(https://sttb.ac.id/storage/2022/02/Untitled-12-e1644567912379.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left Side - Campus Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-5">
                {/* First Image with Red Accent */}
                <div className="relative">
                  <div className="absolute -left-3 top-0 w-1 h-full bg-sttb-red rounded-full" />
                  <img
                    src="https://sttb.ac.id/storage/2022/08/fasilitas-12.png"
                    alt="STTB Campus Building"
                    className="w-full h-72 object-cover rounded-xl shadow-xl"
                  />
                </div>
                {/* Second Image */}
                <img
                  src="https://sttb.ac.id/storage/2022/08/fasilitas-11.png"
                  alt="STTB Campus"
                  className="w-full h-72 object-cover rounded-xl shadow-xl mt-10"
                />
              </div>
            </motion.div>

            {/* Right Side - Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Title */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-sttb-red mb-3">
                  {'Fasilitas Kampus'}
                </span>
                <h1 className="text-sttb-navy text-5xl md:text-6xl font-black leading-none">STTB</h1>
                <div className="w-12 h-1 bg-sttb-red rounded-full mt-4" />
              </div>

              {/* Description */}
              <div className="space-y-5">
                <p className="text-base font-semibold text-sttb-navy leading-relaxed">
                  {'STTB merupakan sekolah Alkitab yang membentuk dan memperlengkapi para pelayan Tuhan bagi pelayanan di dalam tubuh Kristus dan di tengah dunia.'}
                </p>
                <p className="text-sm text-gray-600 leading-loose">
                  {'Seluruh aspek kehidupan di dalam kampus dan asrama, yang meliputi studi, pembinaan, interaksi dalam komunitas, praktik pelayanan, maupun istirahat, senantiasa diarahkan untuk membentuk hati yang mengasihi Tuhan dan sesama bagi kemuliaan Tuhan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
              {'Apa yang Kami Sediakan'}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
              {'Tiga Pilar Kehidupan Kampus'}
            </h2>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-sttb-red/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-sttb-red" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-3">{facility.title}</h4>
                  <p className="text-sm text-gray-600 leading-loose">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sttb-red">
                {'Tur Visual'}
              </span>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-3">
                {'Galeri Fasilitas'}
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-4 auto-rows-[170px]">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`${image.span} overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={`Facility ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={selectedImage}
            alt="Selected facility"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}