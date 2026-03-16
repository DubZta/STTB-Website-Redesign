import { useLanguage } from '../../contexts/LanguageContext';
import AboutSubNav from '../../components/navigation/AboutSubNav';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConfessionPage() {
  const { t, language } = useLanguage();

  const confessions = language === 'id' ? [
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
  ] : [
    {
      number: 1,
      content:
        'that the Bible as a whole, both the Old and New Testaments, is the revealed and inspired word of God, without error. Therefore, the Bible is the source of the highest authority for the faith and life of believers in every age and place.',
    },
    {
      number: 2,
      content:
        'that God is One and eternal, All-Holy, and full of grace. He is the creator, ruler, and sustainer of the universe and all that is in it, the Trinity as Father, Son, and Holy Spirit. Each is an uncreated Person, of the same essence, and equal in power and glory. He is sovereign both in salvation and in the judgment of mankind.',
    },
    {
      number: 3,
      content:
        'that humans, male and female, were created by God after His image, crowned by Him with glory and the mandate to fill the earth, manage and maintain all His creation. But humans fell into sin, were separated from God, and lost the ability to live according to their image as God\'s creation, thus being unable to save themselves.',
    },
    {
      number: 4,
      content:
        'that Jesus Christ is the Only Begotten Son of God, true God and true Man, the redeemer and the only way of salvation for all mankind. He was conceived of the Holy Spirit, born of the virgin Mary, lived without sin, perfect in sacrifice and love. He died on the cross, rose again from the dead in a real resurrection body, ascended to heaven, sits at the right hand of God the Father, became the Great High Priest for believers, and the sole mediator between God and man, as well as King of kings.',
    },
    {
      number: 5,
      content:
        'that the Holy Spirit is the living God, who convicts humans of sin, righteousness, and judgment. He regenerates believing sinners, indwells, sanctifies, and empowers and gives gifts to every believer according to His will for the sake of testimony, fellowship, and ministry for the building up of the body of Christ.',
    },
    {
      number: 6,
      content:
        'that humans can only be saved by grace through redemption by the Lord Jesus Christ and justified through faith, without merit, effort, or piety on the part of humans. Through God\'s salvation in Christ, God\'s image in humans is restored. Thus, humans are enabled to lead a life of full responsibility in devotion and love before God and man.',
    },
    {
      number: 7,
      content:
        'that the Church as the salt and light of the world is the assembly of all believers from every age and nation. It is the holy and Universal body of Christ, with Christ as its Head. The Church proclaims the Kingdom of God through worship, teaching, the sacraments of baptism and holy communion, and the proclamation of the Gospel and the mission of the whole people of God in the midst of the world.',
    },
    {
      number: 8,
      content:
        'that the certainty of the second coming of Jesus Christ visibly and personally will occur at the end of time to fetch His people and to judge all humanity, both the living and the dead. At His second coming, every dead person will be resurrected, believers will enter into eternal life, and unbelievers will enter into eternal destruction.',
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
                {language === 'id' ? 'Pengakuan Iman' : 'Statement of Faith'}
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter leading-none absolute top-1 left-1 -z-0 opacity-20 whitespace-nowrap"
                style={{ WebkitTextStroke: '2px #1e3a8a' }}>
                {language === 'id' ? 'Pengakuan Iman' : 'Statement of Faith'}
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
                      {language === 'id' ? 'Kami Percaya' : 'We Believe'}
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
                      {language === 'id' ? 'Visi Pengabdian' : 'Devotional Vision'}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm italic">
                      {language === 'id'
                        ? '"Segala bentuk pengajaran dan pelayanan kami dedikasikan seutuhnya bagi kemuliaan Tuhan sebagai wujud bakti yang terbaik dan tertinggi."'
                        : '"All forms of teaching and service are fully dedicated to God\'s glory as a form of the best and highest devotion."'}
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