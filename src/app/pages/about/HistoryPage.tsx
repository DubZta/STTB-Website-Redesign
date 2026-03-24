import AboutSubNav from '../../components/navigation/AboutSubNav';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

export default function HistoryPage() {

const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  // Convert scroll progress to percentage height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const historyPeriods = [
    {
      year: '1992 - 1998',
      title: 'Pendiri & Dasar Fondasi',
      content: 'Pdt. Caleb Tong, Pdt. Joseph Tong, dan Pdt. Dorothy I. Marx mendirikan STTB pada tahun 1992 dengan tujuan menghasilkan Pastor-Scholar yg memiliki kerangka teologi Reformed Injili dalam konteks pekerjaan Tuhan di Indonesia. Pdt. Daniel Lucas Lukito sebagai Dekan Akademik pertama banyak berperan dalam meletakkan kerangka dasar pembangunan STTB. Pembukaan STTB disiapkan sangat baik dengan jajaran dosen yang berkualitas. Komitmen untuk mengejar kualitas akademis yg tinggi didukung juga oleh perpustakaan yang memiliki koleksi buku dan jurnal yang sangat memadai, serta penerbitan Jurnal Teologi STULOS dalam versi Bahasa Indonesia dan Inggris. Pada tahun-tahun pertama diselenggarakan acara dengan lingkup nasional yaitu Ferakristal (Festival Remaja Kristen Pencinta Alkitab). Wisuda pertama diadakan pada tahun 1996.',
    },
    {
      year: '1999 - 2005',
      title: 'Ekspansi Program Studi',
      content: 'STTB mengalami pergantian pemimpin dan jajaran dosen. Ibu Dorothy I. Marx menjabat sebagai Rektor dan STTB terus melanjutkan kiprahnya atas anugerah Tuhan dengan membuka program-program studi baru: M.A. (Master of Arts/Magister Artium) untuk memperlengkapi kaum awam dan M.Th. (Master of Theology/Magister Teologi) untuk memperlengkapi para hamba Tuhan yang rindu berkiprah di dunia akademis. Asrama dosen dibangun bersebelahan dengan asrama mahasiswa. STTB berkomitmen menerbitkan seri buku "Sola…" dan menyelenggarakan acara nasional bagi pemuda dengan nama CYLF (Christian Youth Leadership Forum).',
    },
    {
      year: '2006 - 2010',
      title: 'Peningkatan Kualitas Akademik',
      content: 'Perkembangan STTB berlanjut dalam kepemimpinan Pdt. Joseph Tong yang berkomitmen meningkatkan kualifikasi tenaga pengajar dengan mengutus beberapa dosen untuk studi lanjut di USA. Pada periode ini terbit dua buku Seri Sola, yaitu Sola Scriptura dan Sola Fide. Dalam periode ini STTB membuka program studi berbahasa Mandarin (S.Th., M.Div., dan M.A.) sebagai kontribusinya dalam pelayanan misi di Tiongkok. Untuk itu 2 dosen yaitu Pdt. Lee Ching Yen dan Pdt. Joseph Lin dari Taiwan diundang mengajar para mahasiswa yang datang dari Tiongkok.',
    },
    {
      year: '2011 - 2016',
      title: 'Pembangunan Gedung Baru & Akreditasi',
      content: 'Periode ini ditandai dengan beberapa perkembangan yang signifikan. Pdt. Agus Gunawan melanjutkan kepemimpinan sebagai Rektor. Pada tahun 2011, STTB hadir dengan wajah baru dengan dibangunnya gedung baru berlantai tujuh yang saat ini difungsikan untuk ruang-ruang kelas, kantor dosen dan staf, asrama mahasiswa, aula, dan perpustakaan. Buku ketiga dan keempat dari Seri Sola (Sola Gratia dan Solus Christos) diterbitkan. Pada periode ini juga beberapa orang di jajaran pimpinan melanjutkan studi doktoral di Asia dan Amerika. Tahun 2012 dibuka prodi baru S.Pd.K. (Sarjana Pendidikan Kristen) bersama dengan prodi M.Min. (Magister Ministri). Selanjutnya, pada tahun 2015, STTB juga menambah program studi M.Pd.K. (Magister Pendidikan Kristen), yang dirancang untuk memperlengkapi para pemimpin pendidikan Kristen. Dalam periode ini beberapa program studi sudah mulai terakreditasi oleh BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi) dan ATA (Asian Theological Association). Selain itu juga STTB memperluas jejaring global yang ditandai dengan kehadiran beberapa orang dosen dari Inggris, India, dan Filipina, yang sangat mendukung program M.Th. yang diselenggarakan dalam Bahasa Inggris.',
    },
    {
      year: '2017 - 2022',
      title: 'Transformasi Digital & Kolaborasi Global',
      content: 'Periode ini diwarnai oleh pembenahan kualitas dan penajaman arah pengembangan program-program studi formal dan non-formal sesuai visi dan keunikan panggilan STTB. Formasi spiritualitas yg berkualitas dan terintegrasi antara kelas, kapel, kelompok pastoral, asrama, pemuridan, hingga mentoring dalam praktek pelayanan mengokohkan proses pembentukan untuk mahasiswa STh dan SPd untuk kesiapan mereka melayani. Komitmen STTB kepada dunia pendidikan kristen makin mendapat apresiasi luas melalui perkembangan program studi Magister Pendidikan, inisiasi tumbuhnya komunitas Indonesian Forum for Christian Educators (IFCE), dan kontribusi para dosen STTB dalam berbagai forum nasional. Demikian juga komitmen STTB untuk mengembangkan pendidikan teologi yang aplikatif dan transformatif mendapatkan sambutan yg positif melalui perkembangan program studi MTh yang berfokus pada Transformasi Budaya dan Masyarakat dan program studi MMin Marketplace untuk memperlengkapi profesional Kristen bermisi di dunia kerja. Sementara itu dua program MMin juga berlangsung dalam periode ini, yaitu MMin Music Leadership (bekerja sama dengan Singapore Bible College) dan MMin Pastoral Leadership. Pendidikan nonformal makin berkembang dengan budaya digital yg tumbuh pesat selama masa pandemi. Melalui pengembangan pusat studi non-formal (LEAD Center) dikembangkan modul-modul pembinaan Vocatio (marketplace), Perspectives (misi), dan materi-materi pembinaan digital yg dapat diakses melalui media sosial. Pengembangan penelitian ditandai dengan publikasi ilmiah berupa seri webinar berkala Conversation That Matters (CTM) dan penerbitan monograf untuk tesis-tesis master yg terpilih karena kualitas dan relevansinya bagi pelayanan di lapangan. Mengingat besarnya dan luasnya pekerjaan yg harus dilakukan, maka kolaborasi dan sinergi dengan berbagai gereja dan lembaga secara nasional dan global yg sejalan dengan visi STTB makin dikembangkan dalam periode ini. Dalam periode ini kepemimpinan STTB mengalami beberapa kali peralihan, yaitu Pdt Chandra Koewoso sebagai Ketua sejak Agustus 2017, dan selanjutnya Sutrisna Harjanto PhD sebagai Ketua sejak Agustus 2019 hingga saat ini.',
    },
  ];

  const historyImages = [
    'https://sttb.ac.id/storage/2022/01/sejarah-1.png',
    'https://sttb.ac.id/storage/2022/06/sejarah-2-rev.png',
    'https://sttb.ac.id/storage/2022/06/sejarah-3-rev.png',
  ];

  const logoElements = [
    {
      name: 'API',
      image: 'https://sttb.ac.id/storage/2022/01/api.png',
      description: 'di atas logo menggambarkan penyertaan dan pemenuhan dari Allah Roh Kudus yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan syarat mutlak bagi pelayan Tuhan.',
    },
    {
      name: 'ALKITAB',
      image: 'https://sttb.ac.id/storage/2022/01/alkitab.png',
      description: 'adalah satu-satunya sumber pengetahuan yang benar tentang Allah dan dasar bagi panggilan serta pelayanan',
    },
    {
      name: 'SALIB & MAHKOTA',
      image: 'https://sttb.ac.id/storage/2022/01/salib.png',
      description: 'melambangkan panggilan untuk berpegang kepada kebenaran dan merajakan Kristus.',
    },
    {
      name: 'TONGKAT GEMBALA',
      image: 'https://sttb.ac.id/storage/2022/01/tongkat.png',
      description: 'melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.',
    },
  ];

  const founders = [
    {
      name: 'Rev. DR. Caleb Tong (Alm.)',
      image: 'https://sttb.ac.id/storage/2022/06/caleb-tong-rev-1.png',
    },
    {
      name: 'Rev. DR. Joseph Tong, Ph.D.',
      image: 'https://sttb.ac.id/storage/2022/06/joseph-tong-rev-1.png',
    },
    {
      name: 'Rev. Dorothy I. Marx (Alm.)',
      image: 'https://sttb.ac.id/storage/2022/06/dorothy-marx-rev-1.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutSubNav />
      
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative py-16 mb-8 overflow-hidden flex flex-col items-center justify-center bg-gray-50"
          >
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
            />
            
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              className="w-1 bg-sttb-red mb-6"
            />
    
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-black text-sttb-navy uppercase tracking-tighter leading-none relative z-10">
                Sejarah
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter leading-none absolute top-1 left-1 -z-0 opacity-20"
                  style={{ WebkitTextStroke: '2px #1e3a8a' }}>
                Sejarah
              </h1>
            </div>
    
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-px bg-gray-300" />
              <span className="text-sttb-red font-bold text-xs tracking-[0.2em] uppercase">STTB Heritage</span>
              <div className="w-12 h-px bg-gray-300" />
            </div>
    
            <p className="mt-6 text-gray-600 max-w-lg text-center font-medium italic text-sm">
              {'Perjalanan STTB dari Masa ke Masa'}
            </p>
          </motion.div>

          {/* Animated Timeline */}
          <div className="mb-12">
            <div ref={timelineRef} style={{ position: 'relative' }}>
              {/* Vertical Line - Background (gray) - Full height */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gray-300 rounded-full" />
              
              {/* Vertical Line - Animated (red) - Fills based on scroll */}
              <motion.div
                className="absolute left-6 md:left-8 top-0 w-1 bg-gradient-to-b from-sttb-red via-red-600 to-sttb-red rounded-full"
                style={{
                  height: lineHeight,
                }}
              />

              <div className="space-y-8">
                {historyPeriods.map((period, index) => {
                  // Calculate the progress threshold for this item (0 to 1)
                  const itemProgress = index / (historyPeriods.length - 1);
                  
                  // Create motion value to check if this item is "passed"
                  const isPassed = useTransform(
                    scrollYProgress,
                    [itemProgress - 0.05, itemProgress + 0.05],
                    [0, 1]
                  );
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative pl-16 md:pl-20"
                    >
                      {/* Timeline Dot - Changes color when passed */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        className="absolute left-4 md:left-6 top-6 w-5 h-5 rounded-full shadow-md z-10"
                        style={{
                          backgroundColor: useTransform(
                            scrollYProgress,
                            [itemProgress - 0.05, itemProgress],
                            ["#fff", "#BE123C"]
                          ),
                          borderColor: "#BE123C",
                          borderWidth: "4px",
                        }}
                      />

                      {/* Content Card */}
                      <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-sttb-red hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block bg-gradient-to-r from-sttb-red to-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                            {period.year}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900">
                            {period.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed text-justify">
                          {period.content}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Historical Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-3 gap-4">
              {historyImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={image}
                    alt={`STTB History ${index + 1}`}
                    className="w-full h-48 object-cover"
                    style={{ filter: 'sepia(0.25) contrast(0.95)' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logo Meaning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            {/* Container Utama */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Kolom Kiri: Logo Utama */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center">
                <img
                  src="https://sttb.ac.id/storage/2022/01/Logo-STT-Bdg.jpg"
                  alt="Logo Utama"
                  className="w-full max-w-[220px] h-auto mb-6"
                />
                <p className="text-gray-700 text-center leading-relaxed">
                  {'Logo STTB menggambarkan pola pendidikan teologi yang akan memperlengkapi para mahasiswa untuk menjadi hamba Allah yang baik, setia, dan penuh hikmat, serta siap dipakai dalam pelayanan di ladangNya.'}
                </p>
              </div>
          
              {/* Kolom Kanan: Judul & 4 Logo Kecil */}
              <div className="flex flex-col">
                {/* Judul diletakkan di dalam kolom kanan agar bisa diatur posisinya */}
                <h2 className="text-3xl font-extrabold text-sttb-navy mb-8 mt-4">
                  {'Arti Logo STTB'}
                </h2>
                
                {/* 4 Logo Kecil tersusun vertikal */}
                <div className="grid grid-cols-1 gap-4">
                  {logoElements.map((element, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow"
                    >
                      <img
                        src={element.image}
                        alt={element.name}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-sttb-navy text-sm">{element.name}</h4>
                        <p className="text-xs text-gray-600">{element.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Founders - Layout Elegan & Dinamis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 mb-20 px-4"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-sttb-navy mb-4">
                {'Pendiri STTB'}
              </h2>
              <div className="w-20 h-1 bg-sttb-red mx-auto rounded-full" />
            </div>
          
            {/* Layout Gambar Tokoh: Tidak sejajar, memberikan kesan dinamis */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  // Menggunakan teknik margin/offset agar posisi gambar bervariasi
                  className={`flex flex-col items-center ${index === 1 ? 'md:-mt-12' : 'md:mt-0'}`}
                >
                  {/* Gambar Lingkaran dengan Border Elegan */}
                  <div className="relative w-40 h-40 md:w-48 md:h-58 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 hover:scale-105 transition-transform duration-300">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Nama Tokoh */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {founder.name}
                    </h3>
                    <p className="text-sttb-red text-sm font-medium mt-1">Founder</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}