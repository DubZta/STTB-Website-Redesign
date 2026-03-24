import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.academics': 'Akademik',
    'nav.admissions': 'Admisi',
    'nav.finance': 'Keuangan',
    'nav.campus_life': 'Kehidupan Kampus',
    'nav.news': 'Berita',
    'nav.events': 'Kegiatan',
    'nav.media': 'Media',

    // About submenu
    'nav.about.history': 'Sejarah',
    'nav.about.vision_mission': 'Visi & Misi',
    'nav.about.hymn': 'Mars STTB',
    'nav.about.confession': 'Pengakuan Iman',
    'nav.about.faculty': 'Dewan Dosen',
    'nav.about.foundation': 'Yayasan',

    // Homepage
    'hero.subtitle': 'Menghasilkan PASTOR-SCHOLAR yang berdampak dalam konteks pelayanan urban',
    'hero.cta': 'Daftar Sekarang',
    'hero.learn_more': 'Pelajari Lebih Lanjut',

    // Core Values
    'values.title': 'CORE VALUES',
    'values.subtitle': 'Nilai-nilai yang Membentuk Karakter Kami',
    'values.biblical': 'Biblical Excellence',
    'values.biblical_desc': 'Komitmen terhadap kebenaran Alkitab dan keunggulan akademis',
    'values.christ': 'Christ-Centered',
    'values.christ_desc': 'Kristus sebagai pusat dari semua pembelajaran dan pelayanan',
    'values.transformational': 'Transformational',
    'values.transformational_desc': 'Mengubah kehidupan melalui pendidikan teologi yang relevan',
    'values.professional': 'Professionalism',
    'values.professional_desc': 'Standar profesional dalam pendidikan dan pelayanan',

    // Vision Mission
    'vision.title': 'VISI & MISI',
    'vision.our_vision': 'Visi Kami',
    'vision.description': 'Menjadi lembaga pendidikan teologi yang unggul dalam membentuk pemimpin Kristen yang transformatif untuk gereja dan masyarakat.',
    'vision.our_mission': 'Misi Kami',
    'mission.1': 'Menyelenggarakan pendidikan teologi berkualitas tinggi yang berbasis Alkitab',
    'mission.2': 'Mengembangkan pemikiran teologis yang relevan dengan konteks Indonesia',
    'mission.3': 'Membentuk karakter Kristiani yang matang dan profesional',
    'mission.4': 'Melayani gereja dan masyarakat melalui penelitian dan pengabdian',

    // Campus Tour
    'tour.title': 'CAMPUS TOUR',
    'tour.subtitle': 'Jelajahi Kampus Kami',
    'tour.description': 'Lihat fasilitas dan kehidupan kampus STTB',

    // News & Events
    'news.title': 'BERITA TERBARU',
    'news.subtitle': 'Informasi dan Perkembangan Terkini',
    'news.read_more': 'Baca Selengkapnya',
    'news.view_all': 'Lihat Semua Berita',

    'events.title': 'KEGIATAN ACARA',
    'events.subtitle': 'Acara dan Program Mendatang',
    'events.view_all': 'Lihat Semua Kegiatan',

    'media.title': 'BERITA MEDIA',
    'media.subtitle': 'Liputan Media tentang STTB',
    'media.view_all': 'Lihat Semua Media',

    // Footer
    'footer.description': 'Sekolah Tinggi Teologi Bandung berdedikasi untuk mempersiapkan pelayan Tuhan yang setia pada kebenaran Firman.',
    'footer.contact': 'HUBUNGI KAMI',
    'footer.address': 'Jl. Durian No. 16, Bandung 40264',
    'footer.phone': 'Telepon',
    'footer.email': 'Email',
    'footer.quick_links': 'SUMBER DAYA',
    'footer.library': 'Perpustakaan',
    'footer.digital_library': 'Perpustakaan Digital',
    'footer.journal': 'Jurnal Transformatio',
    'footer.podcast': 'Podcast',
    'footer.video': 'Video',
    'footer.bulletin': 'Buletin',
    'footer.help_links': 'LINK BANTUAN',
    'footer.copyright': 'Copyright © 2026 Sekolah Tinggi Teologi Bandung. All Rights Reserved.',

    // Programs
    'programs.title': 'PROGRAM STUDI',
    'programs.subtitle': 'Pilihan Program Studi Terbaik',
    'programs.undergraduate': 'Program Sarjana',
    'programs.graduate': 'Program Magister',
    'programs.learn_more': 'Selengkapnya',
    'programs.view_all': 'Lihat Semua Program Studi',
    'programs.accredited': 'Semua program terakreditasi BAN-PT',

    // Program Items
    'programs.sth.title': 'Sarjana Teologi',
    'programs.sth.desc': 'Program studi mendalam tentang Alkitab, dogmatika, dan praktika untuk mempersiapkan calon gembala sidang yang kompeten.',
    'programs.spdk.title': 'Sarjana Pendidikan Kristen',
    'programs.spdk.desc': 'Program studi yang mempersiapkan guru Pendidikan Kristen kompeten untuk melayani di sekolah dan gereja.',
    'programs.mpdk.title': 'Magister Pendidikan Kristen',
    'programs.mpdk.desc': 'Program pascasarjana yang mempersiapkan pendidik Kristen profesional dengan kompetensi pedagogik, kepribadian, sosial, dan profesional.',

    'programs.duration.8sem': '8 Semester',
    'programs.duration.4sem': '4 Semester',

    // About Page
    'about.page.title': 'Tentang STTB',
    'about.page.subtitle': 'Sejarah, Visi, Misi, dan Nilai-Nilai Kami',

    // History
    'about.history.title': 'Sejarah',
    'about.history.subtitle': 'Perjalanan STTB dari Masa ke Masa',

    // Logo Meaning
    'about.logo.title': 'Arti Logo STTB',
    'about.logo.description': 'Logo STTB menggambarkan pola pendidikan teologi yang akan memperlengkapi para mahasiswa untuk menjadi hamba Allah yang baik, setia, dan penuh hikmat, serta siap dipakai dalam pelayanan di ladangNya.',
    'about.logo.fire': 'di atas logo menggambarkan penyertaan dan pemenuhan dari Allah Roh Kudus yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan syarat mutlak bagi pelayan Tuhan.',
    'about.logo.bible': 'adalah satu-satunya sumber pengetahuan yang benar tentang Allah dan dasar bagi panggilan serta pelayanan',
    'about.logo.cross': 'melambangkan panggilan untuk berpegang kepada kebenaran dan merajakan Kristus.',
    'about.logo.staff': 'melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.',

    // Founders
    'about.founders.title': 'Pendiri STTB',

    // Vision Mission
    'about.visionmission.title': 'Visi & Misi',
    'about.vision.statement': 'Menjadi institusi pendidikan teologi yang mempersiapkan pastor-scholar yang transformatif dan memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban.',
    'about.vision.tab1': 'Pastor-Scholar',
    'about.vision.tab2': 'Berita Injil yang Utuh',
    'about.vision.tab3': 'Seluruh Umat Allah',
    'about.vision.tab4': 'Masyarakat Urban',
    'about.mission.1': 'Mempersiapkan pastor-scholar yang transfomatif untuk melayani dalam konteks urban.',
    'about.mission.2': 'Memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban melalui penelitian dan pendidikan non-formal.',
    'about.mission.3': 'Mengembangkan tim dosen, struktur organisasi dan keuangan, serta kemitraan untuk mendukung pencapaian visi STTB.',

    // Core Values
    'about.corevalues.title': 'Nilai-Nilai Inti',
    'about.corevalues.christcentered': 'Christ Centered',
    'about.corevalues.textcontext': 'Teks - Konteks',
    'about.corevalues.stewardship': 'Penatalayanan',
    'about.corevalues.transformative': 'Transformatif',

    // Hymn
    'about.hymn.title': 'Mars STTB',
    'about.hymn.subtitle': 'Hymn Resmi Sekolah Tinggi Teologi Bandung',

    // Confession
    'about.confession.title': 'Pengakuan Iman',
    'about.confession.subtitle': 'Kami Percaya',

    // Faculty
    'about.faculty.title': 'Dewan Dosen',
    'about.faculty.subtitle': 'Kepemimpinan Akademik STTB',
    'about.faculty.chairman': 'Ketua',
    'about.faculty.vicechairman': 'Wakil Ketua',

    // Foundation
    'about.foundation.title': 'Yayasan',
    'about.foundation.subtitle': 'Dewan Pembina dan Pengurus',
    'about.foundation.advisors': 'Dewan Pembina',
    'about.foundation.board': 'Dewan Pengurus',
    'about.foundation.members': 'Anggota',

    // Academics Page
    'academics.page.title': 'Program Akademik',
    'academics.page.subtitle': 'Program Studi Berkualitas Tinggi',
    'academics.title': 'Program Akademik',
    'academics.subtitle': 'Pendidikan Teologi Berkualitas untuk Melayani Tuhan dan Gereja',
    'academics.undergraduate': 'Program Sarjana (S1)',
    'academics.graduate': 'Program Magister (S2)',
    'academics.overview': 'Gambaran Program',
    'academics.objectives': 'Tujuan Program',
    'academics.career': 'Prospek Karir',
    'academics.curriculum': 'Kurikulum',
    'academics.requirements': 'Persyaratan Pendaftaran',
    'academics.programs.sth': 'Sarjana Teologi',
    'academics.programs.spdk': 'Sarjana Pendidikan Kristen',
    'academics.programs.mth': 'Magister Teologi',
    'academics.programs.mpdk': 'Magister Pendidikan Kristen',
    'academics.programs.mdiv': 'Master of Divinity',
    'academics.programs.mmin_pastoral': 'Magister Ministri (Pastoral)',
    'academics.programs.mmin_marketplace': 'Magister Ministri (Marketplace)',
    'academics.programs.ma': 'Master of Arts',

    // Admissions Page
    'admissions.page.title': 'Admisi',
    'admissions.page.subtitle': 'Bergabunglah dengan Komunitas STTB',
    'admissions.cta.title': 'Bergabunglah Dengan Kami',
    'admissions.cta.subtitle': 'Mulai perjalanan Anda menjadi pelayan Tuhan yang diperlengkapi dengan kebenaran dan kasih.',
    'admissions.step': 'STEP',
    'admissions.online': 'Daftar Online',
    'admissions.online_desc': 'Isi formulir pendaftaran secara online dan mulai proses seleksi Anda.',
    'admissions.test': 'Tes Masuk',
    'admissions.test_desc': 'Ikuti ujian tertulis dan wawancara sesuai jadwal yang ditetapkan.',
    'admissions.announcement': 'Pengumuman',
    'admissions.announcement_desc': 'Cek hasil penerimaan dan informasi lanjutan setelah tes seleksi.',
    'admissions.registration.period': 'Pendaftaran: 1 Maret - 31 Mei 2026',
    'admissions.scholarship.info': 'Beasiswa tersedia hingga 50% untuk calon mahasiswa berprestasi',
    'admissions.alumni.info': 'Lebih dari 1.000 alumni STTB melayani di berbagai gereja dan institusi.',

    // Finance Page
    'finance.page.title': 'Keuangan & Beasiswa',
    'finance.page.subtitle': 'Informasi Biaya dan Bantuan Keuangan',
    'finance.biaya.title': 'Biaya Studi',
    'finance.biaya.subtitle': 'Investasi Pendidikan untuk Masa Depan Pelayanan Anda',
    'finance.beasiswa.title': 'Beasiswa & Bantuan',
    'finance.beasiswa.subtitle': 'Dukungan Finansial untuk Mahasiswa Berprestasi dan Terpanggil',
    'finance.beasiswa.hero_desc1': 'STTB menyediakan beasiswa bagi mereka yang membutuhkannya sesuai dengan kriteria dan persyaratan yang berlaku. STTB menyediakan 3 (tiga) kategori beasiswa, yaitu beasiswa Pastor Scholar, beasiswa Formatio, dan beasiswa Transformative Leadership.',
    'finance.beasiswa.hero_desc2': 'Jika Anda memerlukannya, Anda dapat mengajukan sesuai persyaratan yang berlaku.',
    'finance.dukung.title': 'Dukung STTB',
    'finance.dukung.subtitle': 'Berinvestasi dalam Pembentukan Hamba Tuhan yang Transformatif',
    'finance.dukung.cta': 'CARA DONASI',

    // Campus Life Page
    'campuslife.page.title': 'Kehidupan Kampus',
    'campuslife.page.subtitle': 'Pengalaman Mahasiswa di STTB',

    // News Page
    'newspage.title': 'BERITA',
    'newspage.documentation': 'DOKUMENTASI',
    'newspage.subtitle': 'Ikuti perkembangan terkini dari Sekolah Tinggi Teologi Bandung',

    // Activities Page
    'activities.page.title': 'Kegiatan & Acara',
    'activities.page.subtitle': 'Acara dan Program di STTB',
    'activities.view_all': 'Lihat Semua Fasilitas',
    'activities.campus_tour_desc': 'Jelajahi kampus STTB dan lihat fasilitas modern kami yang mendukung pembentukan pastor-scholar yang transformatif.',

    // Activity Items (Homepage)
    'activity.chapel.title': 'Ibadah Chapel',
    'activity.chapel.desc': 'Ibadah mingguan Senin, Selasa, Jumat pukul 11.00–12.00 sebagai pusat kehidupan spiritual mahasiswa STTB.',
    'activity.library.title': 'Perpustakaan',
    'activity.library.desc': 'Koleksi literatur teologi lengkap dengan ruang baca nyaman dan fasilitas hybrid learning.',
    'activity.senate.title': 'Senat Mahasiswa',
    'activity.senate.desc': 'Wadah representasi mahasiswa yang mengkoordinasikan berbagai kegiatan kampus dan kemahasiswaan.',
    'activity.hybrid.title': 'Ruang Hybrid Learning',
    'activity.hybrid.desc': 'Ruang kelas modern dengan fasilitas teleconference untuk pembelajaran onsite maupun online.',
    'activity.sports.title': 'Sports Day & Event',
    'activity.sports.desc': 'Kegiatan tahunan seperti Sports Day, Urban Youth Summit, dan berbagai aktivitas mahasiswa.',
    'activity.mentoring.title': 'Pembinaan & Pemuridan',
    'activity.mentoring.desc': 'Program retreat awal studi, pemuridan kelompok kecil dan besar untuk pembentukan karakter mahasiswa.',

    // Media Page
    'mediapage.title': 'Media & Galeri',
    'mediapage.subtitle': 'Liputan Media tentang STTB',

    // LEAD Page
    'lead.page.title': 'Program LEAD',
    'lead.page.subtitle': 'Leadership Development Program',

    // Library Page
    'library.page.title': 'Perpustakaan',
    'library.page.subtitle': 'Sumber Daya Akademik dan Penelitian',

    // Contact Page
    'contact.page.title': 'Hubungi Kami',
    'contact.page.subtitle': 'Kami siap membantu Anda',
    'contact.address': 'Alamat',
    'contact.phone': 'Telepon',
    'contact.email': 'Email',
    'contact.hours': 'Jam Operasional',
    'contact.form.title': 'Kirim Pesan',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Nomor Telepon',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan',
    'contact.form.submit': 'Kirim Pesan',
    'contact.location': 'Lokasi Kami',

    // Login Page
    'login.page.title': 'Portal STTB',
    'login.page.subtitle': 'Akses ke sistem akademik, perpustakaan digital, dan layanan kampus lainnya',
    'login.welcome': 'Selamat Datang',
    'login.signin': 'Masuk ke akun STTB Anda',
    'login.type': 'Login Sebagai',
    'login.student': 'Mahasiswa',
    'login.staff': 'Staff/Dosen',
    'login.alumni': 'Alumni',
    'login.email': 'Email atau NIM',
    'login.password': 'Password',
    'login.remember': 'Ingat saya',
    'login.forgot': 'Lupa password?',
    'login.submit': 'Masuk',
    'login.help': 'Butuh bantuan?',
    'login.contact': 'Hubungi Support',

    // Homepage Stats Section
    'stats.title': 'STTB dalam Angka',
    'stats.subtitle': 'Dedikasi dan pencapaian kami dalam melayani pendidikan teologi',
    'stats.years.label': 'Tahun Pengalaman',
    'stats.years.description': 'Menghasilkan hamba Tuhan yang berkualitas sejak 1992',
    'stats.alumni.label': 'Alumni',
    'stats.alumni.description': 'Melayani di gereja dan masyarakat di seluruh dunia',
    'stats.programs.label': 'Program Studi',
    'stats.programs.description': 'Sarjana dan Magister teologi yang terakreditasi',
    'stats.faculty.label': 'Dosen',
    'stats.faculty.description': 'Pengajar berpengalaman dengan kualifikasi tinggi',

    // Activities
    'activities.upcoming': 'Mendatang',
    'activities.past': 'Selesai',
    'activities.featured': 'Unggulan',
    'activities.ongoing': 'Sedang Berlangsung',
    'activities.expired': 'Berakhir',
    'activities.details': 'Lihat Detail',
    'activities.load_more': 'Muat Lebih Banyak',

    // Programs Details
    'programs.sth.full': 'Sarjana Teologi',
    'programs.spdk.full': 'Sarjana Pendidikan Kristen',
    'programs.mth.full': 'Magister Teologi',
    'programs.mpdk.full': 'Magister Pendidikan Kristen',
    'programs.mdiv.full': 'Master of Divinity',
    'programs.mmin.full': 'Magister Ministri',

    // Common
    'common.read_more': 'Baca Selengkapnya',
    'common.learn_more': 'Pelajari Lebih Lanjut',
    'common.view_all': 'Lihat Semua',
    'common.back': 'Kembali',
    'common.submit': 'Kirim',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = 'id';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}