import { Mail, Phone, MapPin, Clock } from 'lucide-react';
export default function ContactPage() {

const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Durian No. 26', 'Bandung 40264', 'Jawa Barat, Indonesia'],
      color: 'from-sttb-navy to-blue-600',
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 22 2500689', '+62 22 2501252', 'Fax: +62 22 2500689'],
      color: 'from-sttb-red to-red-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sttb.ac.id', 'admissions@sttb.ac.id', 'academic@sttb.ac.id'],
      color: 'from-green-600 to-green-400',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 08:00 - 16:00', 'Sabtu: 08:00 - 12:00', 'Minggu: Tutup'],
      color: 'from-purple-600 to-purple-400',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {'Hubungi Kami'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {'Kami siap membantu Anda'}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all"
                  placeholder="Topik pesan Anda"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sttb-navy focus:border-transparent transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-sttb-navy text-white rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Lokasi Kami
            </h2>
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798591363594!2d107.60865931476984!3d-6.914744195009107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e624d6e5c8f9%3A0x5a3b8c4d7e6f9a1b!2sJl.%20Durian%2C%20Bandung!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STTB Location"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sttb-navy mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Sekolah Tinggi Teologi Bandung
                  </p>
                  <p className="text-gray-600 text-sm">
                    Jl. Durian No. 26, Bandung 40264, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Kampus kami berlokasi strategis di pusat kota Bandung, mudah diakses dengan berbagai transportasi umum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}