import { Calendar, Users, MapPin, Clock } from 'lucide-react';

export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      title: 'Ibadah Pagi Rutin',
      date: 'Setiap Senin - Jumat',
      time: '07:00 - 07:45 WIB',
      location: 'Chapel STTB',
      category: 'Worship',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    },
    {
      id: 2,
      title: 'Seminar Teologi',
      date: '15 Maret 2026',
      time: '13:00 - 16:00 WIB',
      location: 'Auditorium Utama',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    },
    {
      id: 3,
      title: 'Retreat Mahasiswa',
      date: '20-22 Maret 2026',
      time: 'Full Day',
      location: 'Lembang, Bandung',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Kegiatan Kampus
          </h1>
          <p className="text-xl text-gray-600">
            Aktif dalam pembelajaran dan pelayanan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-sttb-red text-white text-xs font-semibold rounded-full">
                  {activity.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sttb-navy" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sttb-navy" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sttb-navy" />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}