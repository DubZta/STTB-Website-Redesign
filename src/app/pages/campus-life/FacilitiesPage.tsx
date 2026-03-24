import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BookOpen, Users as UsersIcon, Home, X } from 'lucide-react';

export default function FacilitiesPage() {
  const { language } = useLanguage();
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
      title: language === 'en' ? 'Learning Together' : 'Belajar Bersama',
      description:
        language === 'en'
          ? 'As a higher education campus, STTB provides optimal facilities for teaching and learning activities. Classroom formats are designed to accommodate various learning formats. The library is designed to be comfortable and Instagram-worthy. Teleconference rooms and other classrooms are ready for hybrid learning (onsite-online). Also equipped with the Didasko audio-visual studio which serves as a place for producing STTB teaching media and a place for students to learn media ministry.'
          : 'Sebagai sebuah kampus perguruan tinggi, STTB menyediakan fasilitas yang optimal bagi kegiatan belajar-mengajar. Format ruang kelas didesain yang mengakomodasi berbagai format pembelajaran. Perpustakaan didesain agar nyaman dan instgramable. Ruang teleconference dan ruangan kelas lainnya siap pakai bagi pembelajaran hybrid (onsite-online). Dilengkapi juga dengan studio audio-visual Didasko yang menjadi tempat produksi media pengajaran STTB maupun tempat belajar pelayanan media bagi mahasiswa.',
    },
    {
      icon: UsersIcon,
      title: language === 'en' ? 'Growing Together' : 'Bertumbuh Bersama',
      description:
        language === 'en'
          ? 'Learning at STTB not only emphasizes the academic side, but also the formation of a complete servant of God. For this reason, STTB provides facilities to support students\' spiritual growth, such as private counseling rooms and group counseling, several places for small group hangout meetings, halls for worship/seminar meetings with large audiences, as well as off-campus facilities in the form of a retreat house (Bethel Prayer House).'
          : 'Pembelajaran di STTB tidak hanya menekankan sisi akademik, melainkan pembentukan pribadi pelayan Tuhan secara utuh. Untuk itu STTB menyediakan fasilitas pendukung pertumbuhan rohani mahasiswa, seperti ruang konseling pribadi dan konseling kelompok, beberapa tempat untuk pertemuan hangout kelompok kecil, aula untuk pertemuan ibadah/seminar dengan audiens besar, serta fasilitas di luar kampus berupa rumah retreat (Rumah Doa Bethel).',
    },
    {
      icon: Home,
      title: language === 'en' ? 'Living Together' : 'Hidup Bersama',
      description:
        language === 'en'
          ? 'Education at STTB is conducted on a full residential basis. This means that throughout the study period, students will live together as one community. There are four dormitories integrated at the STTB campus location, namely the lecturer dormitory, male student dormitory (aspra), female student dormitory (aspri), and postgraduate/guest student dormitory. Dormitory facilities consist of complete bedrooms, bathrooms and toilets, lounges, dining rooms, various sports facilities (jogging, gymnastics, basketball, badminton, futsal, table tennis, swimming).'
          : 'Pendidikan di STTB diselenggarakan secara residensial penuh. Artinya sepanjang masa studi, mahasiswa akan tinggal bersama sebagai satu komunitas. Ada empat asrama yang terintegrasi di lokasi kampus STTB, yaitu asrama dosen, asrama mahasiswa putra (aspra), asrama mahasiswa putri (aspri), dan asrama mahasiswa pascasarjana/tamu. Fasilitas asrama terdiri dari kamar tidur lengkap, kamar mandi dan toilet, lounge, ruang makan, berbagai sarana olah raga (jogging, senam, bola basket, bulutangkis, futsal, tenis meja, renang).',
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Campus Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* First Image with Red Accent */}
                <div className="relative">
                  <div className="absolute -left-3 top-0 w-1 h-full bg-sttb-red" />
                  <img
                    src="https://sttb.ac.id/storage/2022/08/fasilitas-12.png"
                    alt="STTB Campus Building"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Second Image */}
                <img
                  src="https://sttb.ac.id/storage/2022/08/fasilitas-11.png"
                  alt="STTB Campus"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
            </motion.div>

            {/* Right Side - Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title */}
              <div>
                <h2 className="text-sttb-red text-2xl font-bold mb-2">
                  {language === 'en' ? 'FACILITIES' : 'FASILITAS'}
                </h2>
                <h1 className="text-sttb-navy text-5xl md:text-6xl font-extrabold">STTB</h1>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-sttb-navy leading-relaxed text-justify">
                  {language === 'en'
                    ? 'STTB is a Bible school that forms and equips servants of God for ministry within the body of Christ and in the world.'
                    : 'STTB merupakan sekolah Alkitab yang membentuk dan memperlengkapi para pelayan Tuhan bagi pelayanan di dalam tubuh Kristus dan di tengah dunia.'}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  {language === 'en'
                    ? 'All aspects of life on campus and in the dormitory, including study, formation, community interaction, service practice, and rest, are always directed to form a heart that loves God and others for the glory of God.'
                    : 'Seluruh aspek kehidupan di dalam kampus dan asrama, yang meliputi studi, pembinaan, interaksi dalam komunitas, praktik pelayanan, maupun istirahat, senantiasa diarahkan untuk membentuk hati yang mengasihi Tuhan dan sesama bagi kemuliaan Tuhan.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-sttb-red/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sttb-red" />
                    </div>
                    <h4 className="text-sm font-bold text-sttb-red">{facility.title}</h4>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed text-justify">{facility.description}</p>
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
            <h3 className="text-xl font-bold text-sttb-navy text-center mb-6">
              {language === 'en' ? 'Facilities Gallery' : 'Galeri Fasilitas'}
            </h3>
            <div className="grid grid-cols-4 gap-3 auto-rows-[160px]">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`${image.span} overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group`}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={`Facility ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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