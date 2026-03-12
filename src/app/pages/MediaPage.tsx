import { Play, Image as ImageIcon, Mic, FileText } from 'lucide-react';

export default function MediaPage() {
  const mediaCategories = [
    {
      title: 'Video Gallery',
      icon: Play,
      count: '120+ Videos',
      color: 'from-sttb-red to-red-600',
    },
    {
      title: 'Photo Gallery',
      icon: ImageIcon,
      count: '500+ Photos',
      color: 'from-sttb-navy to-sttb-navy-light',
    },
    {
      title: 'Podcasts',
      icon: Mic,
      count: '50+ Episodes',
      color: 'from-purple-600 to-purple-400',
    },
    {
      title: 'Publications',
      icon: FileText,
      count: '200+ Documents',
      color: 'from-green-600 to-green-400',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Media Center
          </h1>
          <p className="text-xl text-gray-600">
            Dokumentasi dan konten multimedia STTB
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sttb-navy to-sttb-navy-light rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-200">
            Media center lengkap sedang dalam pengembangan
          </p>
        </div>
      </div>
    </div>
  );
}