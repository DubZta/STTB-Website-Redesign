import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Search, FileText, Calendar, Newspaper, ExternalLink } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'page' | 'news' | 'event';
  title: string;
  description: string;
  url: string;
  date?: string;
}

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = (searchQuery: string) => {
    const lowerQuery = searchQuery.toLowerCase();

    // Mock data untuk pages
    const pages: SearchResult[] = [
      {
        id: 'about',
        type: 'page',
        title: 'About STTB',
        description: 'Learn about our history, vision, mission, and values',
        url: '/about',
      },
      {
        id: 'history',
        type: 'page',
        title: 'History',
        description: 'Journey of STTB from the past to present',
        url: '/about/history',
      },
      {
        id: 'vision-mission',
        type: 'page',
        title: 'Vision & Mission',
        description: 'Our vision and mission statement with core values',
        url: '/about/vision-mission',
      },
      {
        id: 'hymn',
        type: 'page',
        title: 'STTB Hymn',
        description: 'Official hymn of Bandung School of Theology',
        url: '/about/hymn',
      },
      {
        id: 'confession',
        type: 'page',
        title: 'Statement of Faith',
        description: 'What we believe as an institution',
        url: '/about/confession',
      },
      {
        id: 'faculty',
        type: 'page',
        title: 'Faculty Board',
        description: 'Academic leadership and faculty members',
        url: '/about/faculty',
      },
      {
        id: 'foundation',
        type: 'page',
        title: 'Foundation',
        description: 'Board of advisors and foundation members',
        url: '/about/foundation',
      },
      {
        id: 'academics',
        type: 'page',
        title: 'Academic Programs',
        description: 'Explore our undergraduate and graduate programs',
        url: '/academics',
      },
      {
        id: 'admissions',
        type: 'page',
        title: 'Admissions',
        description: 'Information about application process and requirements',
        url: '/admissions',
      },
      {
        id: 'finance',
        type: 'page',
        title: 'Finance & Scholarships',
        description: 'Tuition fees, payment plans, and scholarship opportunities',
        url: '/finance',
      },
      {
        id: 'campus-life',
        type: 'page',
        title: 'Campus Life',
        description: 'Student activities, facilities, and campus culture',
        url: '/campus-life',
      },
      {
        id: 'library',
        type: 'page',
        title: 'Library',
        description: 'Access to our digital and physical library resources',
        url: '/library',
      },
      {
        id: 'lead',
        type: 'page',
        title: 'LEAD Program',
        description: 'Leadership development and training programs',
        url: '/lead',
      },
    ];

    // Mock data untuk news
    const news: SearchResult[] = [
      {
        id: 'news-1',
        type: 'news',
        title: 'STTB Receives National Accreditation Excellence Award',
        description: 'Our institution has been recognized for outstanding academic excellence',
        url: '/news',
        date: '2024-03-01',
      },
      {
        id: 'news-2',
        type: 'news',
        title: 'New Research Center Opening',
        description: 'State-of-the-art research facility to open next semester',
        url: '/news',
        date: '2024-02-28',
      },
      {
        id: 'news-3',
        type: 'news',
        title: 'Student Achievement in International Conference',
        description: 'Our students presented groundbreaking research internationally',
        url: '/news',
        date: '2024-02-25',
      },
    ];

    // Mock data untuk events
    const events: SearchResult[] = [
      {
        id: 'event-1',
        type: 'event',
        title: 'Annual Theological Symposium 2024',
        description: 'Join leading theologians for three days of scholarly discussion',
        url: '/activities',
        date: '2024-04-15',
      },
      {
        id: 'event-2',
        type: 'event',
        title: 'Campus Open House',
        description: 'Visit our campus and meet faculty, staff, and students',
        url: '/activities',
        date: '2024-04-10',
      },
      {
        id: 'event-3',
        type: 'event',
        title: 'Graduation Ceremony 2024',
        description: 'Celebrating the achievements of our graduates',
        url: '/activities',
        date: '2024-05-20',
      },
    ];

    // Filter berdasarkan query
    const allItems = [...pages, ...news, ...events];
    const filtered = allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );

    setResults(filtered);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'page':
        return FileText;
      case 'news':
        return Newspaper;
      case 'event':
        return Calendar;
      default:
        return FileText;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'page':
        return 'Halaman';
      case 'news':
        return 'Berita';
      case 'event':
        return 'Kegiatan';
      default:
        return 'Lainnya';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page':
        return 'bg-blue-100 text-blue-700';
      case 'news':
        return 'bg-green-100 text-green-700';
      case 'event':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8 text-sttb-navy" />
            <h1 className="text-4xl font-extrabold text-gray-900">
              Hasil Pencarian
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Mencari untuk: <span className="font-semibold text-gray-900">"{query}"</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Ditemukan {results.length} hasil
          </p>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result) => {
              const Icon = getIcon(result.type);
              return (
                <Link
                  key={result.id}
                  to={result.url}
                  className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-sttb-navy group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sttb-navy/10 transition-colors">
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-sttb-navy transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                            result.type
                          )}`}
                        >
                          {getTypeLabel(result.type)}
                        </span>
                        {result.date && (
                          <span className="text-sm text-gray-500">
                            {new Date(result.date).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sttb-navy transition-colors flex items-center gap-2">
                        {result.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-gray-600">{result.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-200">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p className="text-gray-600 mb-6">
              Coba gunakan kata kunci yang berbeda atau lebih umum
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-sttb-navy text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}