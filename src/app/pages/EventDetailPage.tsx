import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Loader2 } from 'lucide-react';
import useSWR from 'swr';
import { BackendApiUrl } from '../functions/BackendApiUrl';
import { formatDate } from '../lib/utils';
import type { EventDetail } from '../../admin/types/Events';

export default function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: event, isLoading } = useSWR<EventDetail>(
    id ? BackendApiUrl.eventsDetail(id) : null,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={event.thumbnailUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600'}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors"
            >
              <ArrowLeft size={20} />
              BACK
            </button>
            <div className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded mb-4 uppercase">
              {event.category}
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none prose-slate prose-headings:text-blue-900 prose-a:text-blue-600">
              {event.content.split('\n').map((para, i) => para.trim() && (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4 border-b pb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date</div>
                    <div className="text-gray-900 font-semibold">{formatDate(event.eventDate, 'id')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Time</div>
                    <div className="text-gray-900 font-semibold">08:00 - 12:00 WIB (Tentative)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</div>
                    <div className="text-gray-900 font-semibold">Kampus STTB Bandung</div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
