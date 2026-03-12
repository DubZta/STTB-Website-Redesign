import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function LEADPage() {
  const leadPillars = [
    {
      title: 'Leadership Development',
      icon: Target,
      description: 'Mengembangkan kepemimpinan Kristen yang transformatif',
      color: 'from-sttb-navy to-blue-600',
    },
    {
      title: 'Entrepreneurship',
      icon: TrendingUp,
      description: 'Membangun jiwa wirausaha berbasis nilai Kristiani',
      color: 'from-sttb-red to-red-600',
    },
    {
      title: 'Academic Excellence',
      icon: Lightbulb,
      description: 'Keunggulan akademik dalam teologi dan pendidikan',
      color: 'from-purple-600 to-purple-400',
    },
    {
      title: 'Discipleship',
      icon: Users,
      description: 'Pemuridan yang holistik dan berkelanjutan',
      color: 'from-green-600 to-green-400',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            LEAD Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leadership, Entrepreneurship, Academic Excellence, and Discipleship
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-sttb-navy to-sttb-navy-light rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Tentang LEAD</h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            LEAD adalah program unggulan STTB yang dirancang untuk mempersiapkan pemimpin Kristen masa depan 
            yang tidak hanya memiliki kedalaman teologi, tetapi juga keterampilan kepemimpinan, 
            jiwa kewirausahaan, dan komitmen untuk pemuridan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {leadPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-sttb-red hover:bg-sttb-red/90 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
            Daftar Program LEAD
          </button>
        </div>
      </div>
    </div>
  );
}