import { useLanguage } from '../../contexts/LanguageContext';
import AboutSubNav from '../../components/navigation/AboutSubNav';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConfessionPage() {
  const { t } = useLanguage();

  const confessions = [
    {
      number: 1,
      content:
        'bahwa Alkitab secara keseluruhan, Perjanjian Lama dan Perjanjian Baru, adalah firman Allah yang diwahyukan dan diilhamkan tanpa kesalahan. Oleh karena itu, Alkitab adalah sumber otoritas tertinggi bagi iman dan kehidupan orang percaya di segala abad dan tempat.',
    },
    {
      number: 2,
      content:
        'bahwa Allah adalah Esa dan kekal, Mahakudus, dan penuh rahmat. Ia adalah pencipta, penguasa, dan pemelihara alam semesta beserta segala isinya, Tritunggal sebagai Bapa, Anak, dan Roh Kudus. Masing-masing adalah Pribadi yang tidak diciptakan, sehakekat, dan setara dalam kuasa dan kemuliaan. Ia berdaulat baik dalam keselamatan maupun dalam penghakiman umat manusia.',
    },
    {
      number: 3,
      content:
        'bahwa manusia, laki-laki dan perempuan, telah diciptakan oleh Allah menurut gambar-Nya, yang telah dimahkotai-Nya dengan kemuliaan serta mandat untuk memenuhi bumi, mengelola dan memelihara seluruh ciptaan-Nya. Tetapi manusia telah jatuh ke dalam dosa, terpisah dari Allah, dan kehilangan kemampuan untuk hidup sesuai dengan citranya sebagai ciptaan Allah, sehingga tidak mampu menyelamatkan dirinya sendiri.',
    },
    {
      number: 4,
      content:
        'bahwa Yesus Kristus adalah Anak Tunggal Allah, Allah sejati dan Manusia sejati, penebus dan satu-satunya jalan keselamatan bagi seluruh umat manusia. Ia dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, sempurna dalam pengorbanan dan kasih. Ia mati di atas kayu salib, bangkit kembali dari antara orang mati dalam tubuh kebangkitan yang nyata, naik ke sorga, duduk di sebelah kanan Allah Bapa, menjadi Imam Besar Agung bagi orang percaya, dan pengantara tunggal antara Allah dan manusia, serta Raja di atas segala raja.',
    },
    {
      number: 5,
      content:
        'bahwa Roh Kudus adalah Allah yang hidup, yang menginsafkan manusia akan dosa, kebenaran, dan penghakiman. Ia melahirbarukan orang berdosa yang percaya, mendiami, menguduskan, dan memberi kuasa serta karunia-karunia kepada setiap orang percaya menurut kehendak-Nya demi kesaksian, persekutuan, dan pelayanan untuk pembangunan tubuh Kristus.',
    },
    {
      number: 6,
      content:
        'bahwa manusia hanya dapat diselamatkan oleh kasih karunia melalui penebusan oleh Tuhan Yesus Kristus dan dibenarkan melalui iman, tanpa jasa, usaha, ataupun kesalehan dari pihak manusia. Melalui penyelamatan Allah dalam Kristus, gambar Allah pada manusia dipulihkan. Dengan demikian, manusia dimampukan untuk menjalani kehidupan yang penuh tanggung jawab dalam pengabdian dan kasih di hadapan Allah dan manusia.',
    },
    {
      number: 7,
      content:
        'bahwa Gereja selaku garam dan terang dunia adalah himpunan semua orang percaya dari segala abad dan bangsa. Ia adalah tubuh Kristus yang kudus dan Am, dengan Kristus sebagai Kepalanya. Gereja memberitakan Kerajaan Allah melalui kebaktian, pengajaran, sakramen baptisan dan perjamuan kudus, serta pemberitaan Injil dan misi umat Allah seutuhnya di tengah dunia.',
    },
    {
      number: 8,
      content:
        'bahwa kepastian kedatangan kembali Yesus Kristus secara nyata dan pribadi akan terjadi pada akhir zaman untuk menjemput umat-Nya untuk menghakimi seluruh umat manusia, baik yang hidup maupun yang mati. Pada kedatangan-Nya kedua kali itulah setiap orang mati akan dibangkitkan, orang percaya masuk ke dalam kehidupan yang kekal, orang yang tidak percaya masuk ke dalam kebinasaan yang kekal.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutSubNav />

      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Pengakuan Iman
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter leading-none absolute top-1 left-1 -z-0 opacity-20 whitespace-nowrap"
                  style={{ WebkitTextStroke: '2px #1e3a8a' }}>
                Pengakuan Iman
              </h1>
            </div>
    
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-px bg-gray-300" />
              <span className="text-sttb-red font-bold text-xs tracking-[0.2em] uppercase">STTB Confession</span>
              <div className="w-12 h-px bg-gray-300" />
            </div>
          </motion.div>

          {/* Confessions */}
          <div className="space-y-5 mb-12">
            {confessions.map((confession, index) => (
              <motion.div
                key={confession.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sttb-navy to-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">
                        {confession.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-sttb-navy mb-2 uppercase tracking-wide">
                      Kami Percaya
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {confession.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Text - DOMINO OPTIMO MAXIMO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 border-t border-gray-200 pt-16"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                
                {/* Sisi Kiri: Moto dengan Aksen Garis Tradisional */}
                <div className="p-10 bg-gray-50/50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="space-y-6">
                    {[
                      { latin: 'DOMINO', eng: 'TO THE LORD' },
                      { latin: 'OPTIMO', eng: 'THE BEST' },
                      { latin: 'MAXIMO', eng: 'THE GREATEST' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-baseline gap-4">
                        <h3 
                          className="text-2xl font-serif font-bold text-gray-800 tracking-widest"
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {item.latin}
                        </h3>
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase whitespace-nowrap">
                          — {item.eng}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
          
                {/* Sisi Kanan: Filosofi Minimalis */}
                <div className="p-10 flex flex-col justify-center relative">
                  {/* Aksen Kecil Identitas Univ */}
                  <div className="absolute top-0 right-0 flex">
                    <div className="w-12 h-1 bg-sttb-red"></div>
                    <div className="w-12 h-1 bg-sttb-navy"></div>
                  </div>
          
                  <div className="max-w-sm">
                    <h4 className="text-sm font-bold text-sttb-navy uppercase tracking-widest mb-3">
                      Visi Pengabdian
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm italic">
                      "Segala bentuk pengajaran dan pelayanan kami dedikasikan seutuhnya bagi kemuliaan Tuhan sebagai wujud bakti yang terbaik dan tertinggi."
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sttb-red"></div>
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-tighter">
                        Soli Deo Gloria
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
