import { Calendar, MapPin, Clock, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch } from '../functions/useAppFetch';
import { Link } from 'react-router';

interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  eventDate: string;
  status: string;
  thumbnailUrl: string;
  content: string;
}

interface GetEventListResponse {
  items: EventItem[];
  totalCount: number;
}

export default function EventsPage() {
  const { t } = useLanguage();
  const { fetchGET } = useAppFetch();
  
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setLoading(true);
    const { data } = await fetchGET<GetEventListResponse>(`${AppApiUrl.getEventList}?page=1&pageSize=50`);
    if (data?.items) {
      setEvents(data.items.filter(e => e.status !== 'Draft'));
    }
    setLoading(false);
  };

  const getFullImageUrl = (url: string) => {
    if (!url) return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getEventList.replace('/api/Events', '')}${url}`;
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-sttb-navy mb-4 uppercase">
            {t('events.title')}
          </h1>
          <p className="text-xl text-sttb-dark-slate/70">
            {t('events.subtitle')}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-sttb-navy animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getFullImageUrl(event.thumbnailUrl)}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-sttb-red text-white text-xs font-semibold rounded-full shadow-md uppercase">
                      {event.category || 'Event'}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-sttb-navy mb-3 group-hover:text-sttb-red transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-sttb-dark-slate/70 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sttb-red" />
                      <span>{new Date(event.eventDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sttb-red" />
                      <span>{new Date(event.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} WIB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sttb-red" />
                      <span>STTB Bandung</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to={`/events/${event.id}`} className="block">
                      <button className="w-full px-4 py-3 bg-sttb-navy text-white rounded-lg hover:bg-sttb-navy-light transition-colors font-bold tracking-wide uppercase">
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}