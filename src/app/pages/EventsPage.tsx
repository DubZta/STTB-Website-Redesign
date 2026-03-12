import { Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: 'Seminar Nasional Teologi dan Transformasi Sosial',
      date: '20 Februari 2026',
      time: '09:00 - 16:00 WIB',
      location: 'Auditorium STTB',
      type: 'Seminar',
      description: 'Konferensi tahunan yang membahas peran gereja dalam transformasi sosial Indonesia.',
      image: 'https://images.unsplash.com/photo-1680444873773-7c106c23ac52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMDg5OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Open House & Campus Tour 2026',
      date: '5 Maret 2026',
      time: '10:00 - 14:00 WIB',
      location: 'Kampus STTB',
      type: 'Open House',
      description: 'Kesempatan untuk mengunjungi kampus, bertemu dengan dosen, dan mengetahui program studi kami.',
      image: 'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzczMTE4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Worship Night - Celebrating God\'s Faithfulness',
      date: '15 Maret 2026',
      time: '18:00 - 21:00 WIB',
      location: 'Chapel STTB',
      type: 'Worship',
      description: 'Malam pujian dan penyembahan bersama seluruh sivitas akademika STTB.',
      image: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NzMxMTA5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Workshop Pengembangan Kurikulum Teologi',
      date: '25 Maret 2026',
      time: '13:00 - 17:00 WIB',
      location: 'Ruang Seminar STTB',
      type: 'Workshop',
      description: 'Pelatihan untuk dosen dan pendidik teologi tentang pendekatan kontekstual dalam pengajaran.',
      image: 'https://images.unsplash.com/photo-1589872880544-76e896b0592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzMxMDkxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Konser Paduan Suara STTB',
      date: '10 April 2026',
      time: '19:00 - 21:00 WIB',
      location: 'Gedung Kesenian Bandung',
      type: 'Concert',
      description: 'Penampilan paduan suara mahasiswa STTB dengan repertoar himne klasik dan kontemporer.',
      image: 'https://images.unsplash.com/photo-1613412007998-214b3bd9f760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NzMwNTYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Retret Spiritual Mahasiswa',
      date: '20-22 April 2026',
      time: '3 Hari',
      location: 'Lembang, Bandung',
      type: 'Retreat',
      description: 'Retret spiritual tahunan untuk penguatan iman dan kebersamaan mahasiswa.',
      image: 'https://images.unsplash.com/photo-1680444873773-7c106c23ac52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMDg5OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-sttb-navy mb-4">
            {t('events.title')}
          </h1>
          <p className="text-xl text-sttb-dark-slate/70">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-sttb-red text-white text-xs font-semibold rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sttb-navy mb-3 group-hover:text-sttb-red transition-colors">
                  {event.title}
                </h3>
                <p className="text-sttb-dark-slate/70 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-sttb-dark-slate/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sttb-red" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sttb-red" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sttb-red" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-sttb-navy text-white rounded-lg hover:bg-sttb-navy-light transition-colors font-medium">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}