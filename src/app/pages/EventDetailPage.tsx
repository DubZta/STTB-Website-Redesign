import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, MapPin, Clock, Loader2, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AppApiUrl } from '../functions/AppApiUrl';
import { useAppFetch } from '../functions/useAppFetch';
import { formatDate } from '../lib/utils';

interface EventDetail {
  id: string;
  title: string;
  slug: string;
  category: string;
  eventDate: string;
  content: string;
  thumbnailUrl: string;
}

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fetchGET } = useAppFetch();

  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadEvent(id);
    }
  }, [id]);

  const loadEvent = async (eventId: string) => {
    setLoading(true);
    const { data } = await fetchGET<EventDetail>(AppApiUrl.getEventDetail(eventId));
    if (data) {
      setEvent(data);
    }
    setLoading(false);
  };

  const getFullImageUrl = (url: string) => {
    if (!url) return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600';
    if (url.startsWith('http')) return url;
    return `${AppApiUrl.getEventList.replace('/api/Events', '')}${url}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-sttb-navy animate-spin" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-sm w-full">
          <Info className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
          <p className="text-gray-500 mb-8">Kegiatan yang Anda cari tidak tersedia.</p>
          <button
            onClick={() => navigate('/events')}
            className="flex items-center justify-center gap-2 w-full py-3 bg-sttb-navy text-white font-bold rounded-xl hover:bg-sttb-navy-light transition-all"
          >
            <ArrowLeft size={20} />
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={getFullImageUrl(event.thumbnailUrl)}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <button
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center gap-2 text-white font-bold hover:text-blue-300 transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm w-fit"
            >
              <ArrowLeft size={20} />
              BACK
            </button>
            <div className="inline-block px-4 py-1.5 bg-sttb-red text-white text-[10px] font-black rounded-full mb-4 uppercase tracking-[0.2em]">
              {event.category || 'EVENT'}
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight max-w-4xl drop-shadow-xl">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-50">
            <article className="prose prose-lg max-w-none prose-slate prose-headings:text-sttb-navy prose-a:text-sttb-red prose-p:leading-relaxed prose-p:text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: event.content }} />
            </article>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 sticky top-24">
              <h3 className="text-lg font-black text-sttb-navy mb-6 pb-4 border-b border-gray-100 uppercase tracking-wider">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-50 rounded-lg flex-shrink-0">
                    <Calendar className="w-5 h-5 text-sttb-red" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</div>
                    <div className="text-sttb-navy font-bold">{formatDate(event.eventDate, 'id')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-50 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-sttb-red" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Time</div>
                    <div className="text-sttb-navy font-bold">
                      {new Date(event.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} WIB
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-50 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sttb-red" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-sttb-navy font-bold">Kampus STTB Bandung</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-10 py-4 bg-sttb-navy text-white font-black rounded-2xl hover:bg-sttb-navy-light shadow-xl shadow-sttb-navy/20 transition-all active:scale-95 uppercase tracking-widest text-sm">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
