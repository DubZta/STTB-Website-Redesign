import React, { useState, useRef } from 'react';
import MaskText from '../../components/animations/MaskText';
import { Button } from '../../components/homepage_v1_1/ui/button';
import { AuroraBackground } from '../../components/homepage_v1_1/ui/aurora-background';
import { ChevronRight, Heart, BookOpen, UserPlus, Phone } from 'lucide-react';

const DonationPriorityCard = ({ icon: Icon, title, description, phone, color }: any) => (
  <div className="border border-slate-200 hover:border-sttb-navy rounded-3xl p-10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-3 flex flex-col items-start text-left group h-full">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${color}-50 text-${color}-600 group-hover:scale-110 transition-transform duration-500`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow text-justify">
      {description}
    </p>
    <div className="space-y-3 w-full">
      {phone && (
        <div className="flex items-center text-slate-600 text-sm">
          <Phone size={16} className="mr-2 text-sttb-red" />
          <span>{phone}</span>
        </div>
      )}
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-sttb-navy">{question}</span>
        <span className="text-2xl text-sttb-red">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-3 text-slate-600">{answer}</p>}
    </div>
  );
};

export default function DukungSTTBPage() {

const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    supportType: 'Lembaga',
    companyName: '',
    companyAddress: '',
    contact: '',
    position: '',
    email: '',

    firstName: '',
    lastName: '',
    salutation: '',
    address: '',
    donationType: 'rutin',
    monthlyNominal: '',

    areaDonasi: 'beasiswa',
    studentName: '',
    studyProgram: '',
    needReceipt: false,
    transferProof: null as File | null,
    acceptTerms: false,
  });

  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, transferProof: e.target.files![0] }));
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Form submitted', formData);
    alert('Terima kasih atas dukungan Anda!');
  };

  const renderStepFields = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Ingin Mendukung STTB atas nama:</label>
              <select
                name="supportType"
                className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-4 py-4 outline-none transition-all w-full text-gray-500"
                value={formData.supportType}
                onChange={handleChange}
              >
                <option value="Lembaga">Lembaga</option>
                <option value="Perorangan">Perorangan</option>
              </select>
            </div>

            {formData.supportType === 'Lembaga' ? (
              <>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Nama Perusahaan"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
                <input
                  type="text"
                  name="companyAddress"
                  placeholder="Alamat Perusahaan *"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="contact"
                    placeholder="No. Kontak"
                    value={formData.contact}
                    onChange={handleChange}
                    className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Jabatan"
                    value={formData.position}
                    onChange={handleChange}
                    className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Nama Depan"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nama Belakang"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                  />
                </div>
                <input
                  type="text"
                  name="salutation"
                  placeholder="Salutasi"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="No. Kontak"
                  value={formData.contact}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Alamat"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
              </>
            )}
          </>
        );

      case 2:
        return (
          <>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Bentuk Donasi *</label>
              <select
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-4 py-4 outline-none transition-all w-full text-gray-500"
              >
                <option value="rutin">Donasi Rutin (Per Bulan)</option>
                <option value="satu kali">Satu Kali Donasi</option>
              </select>
            </div>

            {formData.donationType === 'rutin' && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nominal Donasi Rutin</label>
                <input
                  type="text"
                  name="monthlyNominal"
                  placeholder="Rp ..."
                  value={formData.monthlyNominal}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
              </div>
            )}
          </>
        );

      case 3:
        return (
          <>
            <p className="text-sm text-slate-600 mb-4 italic">
              Apabila Bapak/Ibu memilih area donasi untuk beasiswa dan memiliki nama khusus (calon) mahasiswa yang akan didukung maka Anda dapat menuliskan nama lengkap (calon) mahasiswa tersebut dan program studi yang diambil di kolom isian di bawah ini.
            </p>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Area Donasi *</label>
              <select
                name="areaDonasi"
                value={formData.areaDonasi}
                onChange={handleChange}
                className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-4 py-4 outline-none transition-all w-full text-gray-500"
              >
                <option value="beasiswa">Beasiswa</option>
                <option value="perpustakaan">Perpustakaan Digital</option>
                <option value="dukungan">Dukungan STTB</option>
              </select>
            </div>

            {formData.areaDonasi === 'beasiswa' && (
              <>
                <input
                  type="text"
                  name="studentName"
                  placeholder="Nama Mahasiswa yang Didukung"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
                <input
                  type="text"
                  name="studyProgram"
                  placeholder="Program Studi Mahasiswa Didukung"
                  value={formData.studyProgram}
                  onChange={handleChange}
                  className="bg-white border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-sttb-navy rounded-xl px-6 py-4 outline-none transition-all w-full"
                />
              </>
            )}
          </>
        );

      case 4:
        return (
          <>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Apakah Bapak/Ibu membutuhkan bukti tanda terima kasih atas dukungan yang diberikan?</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="needReceipt"
                    checked={formData.needReceipt}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span>Ya, saya membutuhkan bukti tanda terima</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Tanda Bukti Transfer</label>
              <p className="text-xs text-slate-500 mb-2">
                Jika Bapak/Ibu telah melakukan transfer dukungan, mohon dapat mengirimkan foto bukti transfer tersebut melalui attachment di bawah ini:
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sttb-navy file:text-white hover:file:bg-sttb-navy-dark"
              />
            </div>

            <div className="text-slate-600 text-sm italic border-l-2 border-sttb-red pl-4 py-2">
              Terima kasih atas dukungan dan perhatian Bapak/Ibu kepada STTB. Kami percaya Tuhan akan selalu memelihara dan memberkati kita semua. Salam hormat,<br />
              <strong>Wemmy Prayogo, M.Ed.</strong><br />
              Wakil Ketua II Bidang Adm. & Keuangan
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-slate-700">I accept the Terms of Use *</span>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <AuroraBackground className="h-[60vh] overflow-hidden bg-sttb-navy">
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-full bg-gradient-to-l from-white/30 to-transparent skew-x-12 translate-x-24" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-yellow-500 font-bold tracking-[0.4em] text-sm uppercase block mb-6">
            SUPPORT US
          </span>
          <MaskText type="lines">
            <h1 className="text-7xl lg:text-[100px] font-bold text-white mb-8 leading-none tracking-tighter">
              {'Dukung STTB'}
            </h1>
          </MaskText>
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-sttb-red text-white hover:!bg-red-700 px-12 py-5 h-auto text-sm uppercase font-bold tracking-widest rounded-full shadow-2xl shadow-red-500/30 group"
              onClick={() => formSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              {'CARA DONASI'}
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </AuroraBackground>

      {/* KONTRIBUSI ANDA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-50 rounded-full -z-10" />
              <div className="bg-sttb-red rounded-[100px_10px_100px_10px] p-1 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000"
                  alt="Community"
                  className="rounded-[100px_10px_100px_10px] w-full h-[600px] object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-sttb-red font-bold tracking-widest text-sm uppercase block mb-4">
                KONTRIBUSI ANDA
              </span>
              <h2 className="text-6xl font-bold text-sttb-navy mb-8 tracking-tighter leading-none">
                MEMBANGUN <br />BERSAMA
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
                <p>
                  Dapat menolong STTB melanjutkan amanat Kristus untuk mempersiapkan dan mendidik pelayan-pelayan Tuhan yang sangat dibutuhkan untuk menjawab tantangan jaman agar menjadi pelayan-pelayan Tuhan yang berdampak bagi masyarakat.
                </p>
                <p>
                  STTB sebagai Sekolah Tinggi yang terbuka bagi siapapun yang terpanggil untuk mau diperlengkapi, dibentuk dan dididik melalui program Studi S1 dan S2.
                </p>
                <p>
                  Dukungan Bapak/Ibu akan sangat membantu biaya studi mahasiswa yang memiliki kendala finansial peningkatan sumber daya, kualitas pendidik dan pendidikan, serta menunjang fasilitas teknologi pembelajaran.
                </p>
                <p>
                  Bagi STTB, kontribusi Bapak/Ibu sangat penting, seberapapun nilainya akan sangat menolong kehidupan mahasiswa dan STTB. Terima kasih untuk dukungan dana dan doa yang telah diberikan yang sangat berdampak bagi pelayanan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIORITAS PENGGUNAAN DONASI */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
          <h2 className="text-5xl font-bold text-sttb-navy mb-6 tracking-tight">PRIORITAS PENGGUNAAN DONASI</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tiga cara utama Anda dapat berkontribusi dan mendapatkan informasi.</p>
        </div>

        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
          <DonationPriorityCard
            icon={Heart}
            title="BEASISWA"
            description="Sebagian pribadi yang Tuhan panggil untuk melanjutkan ke jenjang pendidikan S1 bahkan S2 terkadang terkendala dengan pendanaan, dan mereka tidak tahu bagaimana dan kemana mereka bisa mendapat dukungan untuk mewujudkan panggilan tersebut. Dukungan beasiswa terbuka bagi mahasiswa yang sudah menjalani proses belajar sampai dengan semester ke-2 dengan minimal IPK 3,0 dan telah lulus proses seleksi serta wawancara dengan Tim Beasiswa sebelumnya. Hal ini ditetapkan agar hanya mahasiswa-mahasiswa terpilih yang bisa mendapatkan beasiswa. Biaya yang dibutuhkan oleh mahasiswa yang termasuk dalam kategori beasiswa bersifat bulanan (biaya kuliah), biaya administrasi dan buku (per semester), biaya skripsi dan wisuda (semester akhir). Untuk nominal dan jenis biaya dapat dilihat dalam keterangan biaya kuliah per program studi."
            color="red"
          />
          <DonationPriorityCard
            icon={BookOpen}
            title="PERPUSTAKAAN DIGITAL"
            description="Perpustakaan STTB memiliki sektor 50.000 buku dan terus berusaha memperkaya koleksi buku-buku baru yang dibutuhkan. Selain koleksi buku fisik, STTB juga menyediakan akses layanan e-book dan e-journal. Melalui provider Ebscohost, saat ini STTB memiliki e-library yang berisi koleksi e-books yang relevan untuk pendidikan teologi dan juga berlangganan akses terhadap database jurnal ATLA (Database Jurnal Teologi dan Pendidikan Kristen). Koleksi e-books tersebut dapat dimanfaatkan oleh dosen, mahasiswa, dan alumni. Ketersediaan buku baik fisik, e-book maupun jurnal yang tepat merupakan salah satu syarat utama dari terwujudnya kualitas pendidikan yang baik. Kerinduan kami dapat menambah koleksi e-books secara regular setiap tahun."
            color="blue"
          />
          <DonationPriorityCard
            icon={UserPlus}
            title="DUKUNGAN LAIN"
            description="Sebagai lembaga pendidikan yang terus menciptakan pendidikan-pendidikan yang bukan saja bertambah secara kuantitas tapi secara kualitas semakin baik. STTB tentunya tidak akan berhenti berinovasi dan berkembang sesuai dengan kemajuan dan kebutuhan jaman. Oleh karena itu berbagai perencanaan ke depan telah kami persiapkan untuk mengembangkan semua sumber daya termasuk pembangunan, digital ministry, pembuatan studio rekaman video dan audio, pembinaan Hamba-hamba Tulisan di daerah-daerah, pelaksanaan seminar/perkuliahan langsung di tempat-tempat terpilih dan program-program lainnya."
            color="yellow"
          />
        </div>
      </section>

      {/* KESEDIAAN MENDUKUNG */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-sttb-navy mb-8 tracking-tight">KESEDIAAN MENDUKUNG</h2>
          <p className="text-xl text-slate-700 leading-relaxed italic border-l-4 border-sttb-red pl-8">
            "Dengan segala kerendahan hati, kami mengundang Bapak/Ibu untuk menjadi rekan bagi pengembangan Kerajaan Allah dengan menginvestasikan pemimpin-pemimpin masa depan yang dapat mentransformasi kehidupan dan komunitas."
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold text-sttb-navy mb-12 text-center">FAQ CALON PENERIMA BEASISWA</h2>
          <div className="space-y-2">
            <FAQItem
              question="Apakah STTB memiliki program beasiswa?"
              answer="Ya, STTB memiliki 5 (lima) jenis beasiswa."
            />
            <FAQItem
              question="Bagaimana saya dapat berpartisipasi mendukung program ini?"
              answer="Dengan segala kerendahan hati, kami mengundang Bapak/Ibu untuk menjadi rekan bagi pengembangan Kerajaan Allah dengan menginvestasikan pemimpin-pemimpin masa depan yang dapat mentransformasi kehidupan dan komunitas."
            />
            <FAQItem
              question="Apakah STTB akan menyediakan laporan beasiswa bagi sponsor?"
              answer="Ya, STTB akan menyediakan laporan berkala bagi para sponsor beasiswa."
            />
            <FAQItem
              question="Berapa dana untuk dapat berpartisipasi dalam program beasiswa?"
              answer="Besaran dana disesuaikan dengan jenis beasiswa yang dipilih. Silakan hubungi kami untuk informasi lebih lanjut."
            />
            <FAQItem
              question="Bagaimana saya dapat memberikan dana sponsor beasiswa?"
              answer="Anda dapat memberikan dana melalui transfer bank ke rekening BCA 282.300.5555 a.n Yayasan STT Bandung atau melalui email ke keuangan@sttb.ac.id"
            />
          </div>
        </div>
      </section>

      {/* FORMULIR DUKUNGAN (multi‑step) */}
      <section ref={formSectionRef} className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-1/2 p-12 bg-slate-50 rounded-[40px] border border-gray-100 flex flex-col justify-center border border-slate-200 hover:border-sttb-navy rounded-3xl p-10 bg-white shadow-sm transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-sttb-navy font-semibold">
                  {step}/4 Page {step}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-sttb-navy mb-8">FORMULIR DUKUNGAN</h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {renderStepFields()}

                <div className="flex justify-between gap-4 pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm"
                    >
                      Back
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-sttb-navy text-white hover:!bg-sttb-navy-dark px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-blue-900/20 ml-auto"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!formData.acceptTerms}
                      className={`bg-sttb-navy text-white hover:!bg-sttb-navy-dark px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-blue-900/20 ml-auto ${!formData.acceptTerms ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                      Kirim
                    </Button>
                  )}
                </div>
              </form>
            </div>

            {/* Right: QRIS */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center text-center p-12 border-4 border-dashed border-slate-100 rounded-[40px]">
              <div className="bg-slate-50 p-8 rounded-[40px] mb-8 shadow-inner">
                <img src="/qris.png" alt="QRIS STTB" className="w-100 h-100 object-contain" />
              </div>
              <h4 className="text-2xl font-bold text-sttb-navy mb-2">PINDAI UNTUK DONASI</h4>
              <p className="text-slate-500 mb-8 italic">QRIS STT Bandung | Yayasan STT Bandung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}