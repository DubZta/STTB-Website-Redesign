import { Calendar, MapPin, Clock, Loader2 } from 'lucide-react';
import useSWR from 'swr';
import { BackendApiUrl, GetEventsListUrl } from '../functions/BackendApiUrl';
import type { GetEventListResponse } from '../../admin/types/Events';
import { useMemo } from 'react';

export default function EventsPage() {

const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: eventsResponse, isLoading } = useSWR<GetEventListResponse>(
    GetEventsListUrl(1, 100),
    fetcher
  );

  const events = useMemo(() => eventsResponse?.items ?? [], [eventsResponse]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-sttb-navy mb-4">
            {'KEGIATAN ACARA'}
          </h1>
          <p className="text-xl text-sttb-dark-slate/70">
            {'Acara dan Program Mendatang'}
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
                  src={event.thumbnailUrl || 'https://images.unsplash.com/photo-1680444873773-7c106c23ac52?w=1080'}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-sttb-red text-white text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sttb-navy mb-3 group-hover:text-sttb-red transition-colors">
                  {event.title}
                </h3>
                <p className="text-sttb-dark-slate/70 mb-4 line-clamp-2">{event.title}</p>
                <div className="space-y-2 text-sm text-sttb-dark-slate/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sttb-red" />
                    <span>{new Date(event.eventDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sttb-red" />
                    <span>09:00 - 16:00 WIB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sttb-red" />
                    <span>Kampus STTB</span>
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