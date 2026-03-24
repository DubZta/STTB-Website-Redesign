import { motion } from 'motion/react';
export default function StatsSection() {

const stats = [
    { value: '30+', label: 'Tahun Pengalaman' },
    { value: '2,000+', label: 'Alumni' },
    { value: '8', label: 'Program Studi' },
    { value: '40+', label: 'Dosen' }, // Contoh penyesuaian label
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label Kecil di Atas (Ciri khas Harvard/Oxford) */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.4em] text-gray-400 uppercase">
            STTB at a Glance
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative text-center lg:text-left px-4"
            >
              {/* Garis Vertikal Halus (Hanya muncul di desktop) */}
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-0 h-full w-[1px] bg-gray-100" />
              )}

              <div className="space-y-2">
                <h2 
                  className="text-5xl md:text-6xl font-light tracking-tighter text-sttb-navy"
                  style={{ fontFamily: 'Georgia, serif' }} // Font serif memberikan kesan prestisius
                >
                  {stat.value}
                </h2>
                
                <div className="flex flex-col">
                  <span className="h-[2px] w-8 bg-sttb-red mb-3 mx-auto lg:mx-0" />
                  <span className="text-xs md:text-sm font-bold tracking-widest text-gray-900 uppercase">
                    {stat.label}
                  </span>
                </div>
                
                {/* Deskripsi tipis di bawah */}
                <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed max-w-[180px] mx-auto lg:mx-0 font-medium italic">
                  Memberikan kontribusi nyata bagi pendidikan teologi di Indonesia.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}