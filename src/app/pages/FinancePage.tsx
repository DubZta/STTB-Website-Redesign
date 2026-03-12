import { CreditCard, Building2, FileText } from 'lucide-react';

export default function FinancePage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Keuangan & Biaya Kuliah
          </h1>
          <p className="text-xl text-gray-600">
            Informasi lengkap mengenai biaya pendidikan di STTB
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-sttb-navy to-sttb-navy-light rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Biaya Kuliah
            </h3>
            <p className="text-gray-600">
              Informasi biaya kuliah per semester untuk program S1 dan S2
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-sttb-red to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Metode Pembayaran
            </h3>
            <p className="text-gray-600">
              Transfer bank, virtual account, dan cicilan tersedia
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Beasiswa
            </h3>
            <p className="text-gray-600">
              Program beasiswa akademik dan kebutuhan tersedia
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sttb-navy/20 to-sttb-red/10 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Rekening Pembayaran</h2>
          <div className="bg-white rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-500 text-sm mb-2">Bank</p>
                <p className="text-gray-900 font-semibold text-lg">BCA Cab. Surya Sumantri</p>
                <p className="text-gray-600">Bandung</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">No. Rekening</p>
                <p className="text-gray-900 font-mono text-2xl font-bold">282.300.5555</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">Atas Nama</p>
                <p className="text-gray-900 font-semibold text-lg">Yayasan STT Bandung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}