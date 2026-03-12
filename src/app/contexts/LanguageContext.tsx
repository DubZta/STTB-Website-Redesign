import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
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
    'footer.contact': 'KONTAK KAMI',
    'footer.address': 'Jl. Durian No. 16, Bandung 40264',
    'footer.phone': 'Telepon',
    'footer.email': 'Email',
    'footer.quick_links': 'Sumber Daya',
    'footer.library': 'Perpustakaan',
    'footer.digital_library': 'Perpustakaan Digital',
    'footer.journal': 'Jurnal Transformatio',
    'footer.podcast': 'Podcast',
    'footer.video': 'Video',
    'footer.bulletin': 'Buletin',
    'footer.help_links': 'Link Bantuan',
    'footer.copyright': '© 2026 Sekolah Tinggi Teologi Bandung. Hak Cipta Dilindungi.',

    // Programs
    'programs.title': 'PROGRAM STUDI',
    'programs.undergraduate': 'Program Sarjana',
    'programs.graduate': 'Program Magister',

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

    // Finance Page
    'finance.page.title': 'Keuangan & Beasiswa',
    'finance.page.subtitle': 'Informasi Biaya dan Bantuan Keuangan',

    // Campus Life Page
    'campuslife.page.title': 'Kehidupan Kampus',
    'campuslife.page.subtitle': 'Pengalaman Mahasiswa di STTB',

    // News Page
    'newspage.title': 'Berita Terbaru',
    'newspage.subtitle': 'Informasi dan Berita dari STTB',

    // Activities Page
    'activities.page.title': 'Kegiatan & Acara',
    'activities.page.subtitle': 'Acara dan Program di STTB',

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
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.academics': 'Academics',
    'nav.admissions': 'Admissions',
    'nav.finance': 'Finance',
    'nav.campus_life': 'Campus Life',
    'nav.news': 'News',
    'nav.events': 'Events',
    'nav.media': 'Media',

    // About submenu
    'nav.about.history': 'History',
    'nav.about.vision_mission': 'Vision & Mission',
    'nav.about.hymn': 'STTB Hymn',
    'nav.about.confession': 'Statement of Faith',
    'nav.about.faculty': 'Faculty Board',
    'nav.about.foundation': 'Foundation',

    // Homepage
    'hero.subtitle': 'Producing impactful PASTOR-SCHOLARS in the context of urban ministry',
    'hero.cta': 'Register Now',
    'hero.learn_more': 'Learn More',

    // Core Values
    'values.title': 'Core Values',
    'values.subtitle': 'Values That Shape Our Character',
    'values.biblical': 'Biblical Excellence',
    'values.biblical_desc': 'Commitment to biblical truth and academic excellence',
    'values.christ': 'Christ-Centered',
    'values.christ_desc': 'Christ at the center of all learning and ministry',
    'values.transformational': 'Transformational',
    'values.transformational_desc': 'Transforming lives through relevant theological education',
    'values.professional': 'Professionalism',
    'values.professional_desc': 'Professional standards in education and service',

    // Vision Mission
    'vision.title': 'VISION & MISSION',
    'vision.our_vision': 'Our Vision',
    'vision.description': 'To be an excellent theological education institution in shaping transformative Christian leaders for the church and society.',
    'vision.our_mission': 'Our Mission',
    'mission.1': 'Provide high-quality Bible-based theological education',
    'mission.2': 'Develop theological thinking relevant to the Indonesian context',
    'mission.3': 'Form mature and professional Christian character',
    'mission.4': 'Serve the church and society through research and service',

    // Campus Tour
    'tour.title': 'CAMPUS TOUR',
    'tour.subtitle': 'Explore Our Campus',
    'tour.description': 'See STTB campus facilities and life',

    // News & Events
    'news.title': 'LATEST NEWS',
    'news.subtitle': 'Current Information and Developments',
    'news.read_more': 'Read More',
    'news.view_all': 'View All News',

    'events.title': 'EVENTS',
    'events.subtitle': 'Upcoming Events and Programs',
    'events.view_all': 'View All Events',

    'media.title': 'MEDIA NEWS',
    'media.subtitle': 'Media Coverage about STTB',
    'media.view_all': 'View All Media',

    // Footer
    'footer.contact': 'Contact Us',
    'footer.address': 'Jl. Durian No. 16, Bandung 40264',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.quick_links': 'Resources',
    'footer.library': 'Library',
    'footer.digital_library': 'Digital Library',
    'footer.journal': 'Transformatio Journal',
    'footer.podcast': 'Podcast',
    'footer.video': 'Videos',
    'footer.bulletin': 'Bulletin',
    'footer.help_links': 'Help Links',
    'footer.copyright': '© 2026 Bandung School of Theology. All Rights Reserved.',

    // Programs
    'programs.title': 'STUDY PROGRAMS',
    'programs.undergraduate': 'Undergraduate Programs',
    'programs.graduate': 'Graduate Programs',

    // About Page
    'about.page.title': 'About STTB',
    'about.page.subtitle': 'Our History, Vision, Mission, and Values',

    // History
    'about.history.title': 'History',
    'about.history.subtitle': "STTB's Journey Through Time",

    // Logo Meaning
    'about.logo.title': 'STTB Logo Meaning',
    'about.logo.description': 'The STTB logo depicts a theological education pattern that will equip students to become good, faithful, and wise servants of God, ready to be used in His service.',
    'about.logo.fire': 'at the top of the logo depicts the presence and fulfillment of God the Holy Spirit who is the source of wisdom, power, and love and is an absolute requirement for servants of the Lord.',
    'about.logo.bible': 'is the only source of true knowledge about God and the basis for calling and ministry',
    'about.logo.cross': 'symbolizes the call to hold fast to the truth and enthrone Christ.',
    'about.logo.staff': "symbolizes God's call to shepherd His people.",

    // Founders
    'about.founders.title': 'STTB Founders',

    // Vision Mission
    'about.visionmission.title': 'Vision & Mission',
    'about.vision.statement': 'To be a theological education institution that prepares transformative pastor-scholars and empowers all of God\'s people to present the whole Gospel in the context of urban society.',
    'about.vision.tab1': 'Pastor-Scholar',
    'about.vision.tab2': 'The Whole Gospel',
    'about.vision.tab3': 'All of God\'s People',
    'about.vision.tab4': 'Urban Society',
    'about.mission.1': 'Prepare transformative pastor-scholars to serve in urban contexts.',
    'about.mission.2': 'Empower all of God\'s people to present the whole Gospel in urban society through research and non-formal education.',
    'about.mission.3': 'Develop faculty team, organizational and financial structure, and partnerships to support the achievement of STTB\'s vision.',

    // Core Values
    'about.corevalues.title': 'Core Values',
    'about.corevalues.christcentered': 'Christ Centered',
    'about.corevalues.textcontext': 'Text - Context',
    'about.corevalues.stewardship': 'Stewardship',
    'about.corevalues.transformative': 'Transformative',

    // Hymn
    'about.hymn.title': 'STTB Hymn',
    'about.hymn.subtitle': 'Official Hymn of Bandung School of Theology',

    // Confession
    'about.confession.title': 'Statement of Faith',
    'about.confession.subtitle': 'We Believe',

    // Faculty
    'about.faculty.title': 'Faculty Board',
    'about.faculty.subtitle': 'STTB Academic Leadership',
    'about.faculty.chairman': 'Chairman',
    'about.faculty.vicechairman': 'Vice Chairman',

    // Foundation
    'about.foundation.title': 'Foundation',
    'about.foundation.subtitle': 'Board of Advisors and Executives',
    'about.foundation.advisors': 'Board of Advisors',
    'about.foundation.board': 'Board of Executives',
    'about.foundation.members': 'Members',

    // Academics Page
    'academics.page.title': 'Academic Programs',
    'academics.page.subtitle': 'High-Quality Study Programs',
    'academics.title': 'Academic Programs',
    'academics.subtitle': 'Quality Theological Education to Serve God and the Church',
    'academics.undergraduate': 'Undergraduate Programs (S1)',
    'academics.graduate': 'Graduate Programs (S2)',
    'academics.overview': 'Program Overview',
    'academics.objectives': 'Program Objectives',
    'academics.career': 'Career Prospects',
    'academics.curriculum': 'Curriculum',
    'academics.requirements': 'Admission Requirements',
    'academics.programs.sth': 'Bachelor of Theology',
    'academics.programs.spdk': 'Bachelor of Christian Education',
    'academics.programs.mth': 'Master of Theology',
    'academics.programs.mpdk': 'Master of Christian Education',
    'academics.programs.mdiv': 'Master of Divinity',
    'academics.programs.mmin_pastoral': 'Master of Ministry (Pastoral)',
    'academics.programs.mmin_marketplace': 'Master of Ministry (Marketplace)',
    'academics.programs.ma': 'Master of Arts',

    // Admissions Page
    'admissions.page.title': 'Admissions',
    'admissions.page.subtitle': 'Join the STTB Community',

    // Finance Page
    'finance.page.title': 'Finance & Scholarships',
    'finance.page.subtitle': 'Cost Information and Financial Aid',

    // Campus Life Page
    'campuslife.page.title': 'Campus Life',
    'campuslife.page.subtitle': 'Student Experience at STTB',

    // News Page
    'newspage.title': 'Latest News',
    'newspage.subtitle': 'Information and News from STTB',

    // Activities Page
    'activities.page.title': 'Events & Activities',
    'activities.page.subtitle': 'Events and Programs at STTB',

    // Media Page
    'mediapage.title': 'Media & Gallery',
    'mediapage.subtitle': 'Media Coverage about STTB',

    // LEAD Page
    'lead.page.title': 'LEAD Program',
    'lead.page.subtitle': 'Leadership Development Program',

    // Library Page
    'library.page.title': 'Library',
    'library.page.subtitle': 'Academic and Research Resources',

    // Contact Page
    'contact.page.title': 'Contact Us',
    'contact.page.subtitle': 'We are ready to help you',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Operating Hours',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.location': 'Our Location',

    // Login Page
    'login.page.title': 'STTB Portal',
    'login.page.subtitle': 'Access academic system, digital library, and other campus services',
    'login.welcome': 'Welcome',
    'login.signin': 'Sign in to your STTB account',
    'login.type': 'Login as',
    'login.student': 'Student',
    'login.staff': 'Staff/Faculty',
    'login.alumni': 'Alumni',
    'login.email': 'Email or NIM',
    'login.password': 'Password',
    'login.remember': 'Remember me',
    'login.forgot': 'Forgot password?',
    'login.submit': 'Sign in',
    'login.help': 'Need help?',
    'login.contact': 'Contact Support',

    // Homepage Stats Section
    'stats.title': 'STTB in Numbers',
    'stats.subtitle': 'Our dedication and achievements in serving theological education',
    'stats.years.label': 'Years of Experience',
    'stats.years.description': 'Producing quality servants of God since 1992',
    'stats.alumni.label': 'Alumni',
    'stats.alumni.description': 'Serving in churches and communities around the world',
    'stats.programs.label': 'Study Programs',
    'stats.programs.description': 'Accredited Bachelor and Master of Theology programs',
    'stats.faculty.label': 'Faculty',
    'stats.faculty.description': 'Experienced teachers with high qualifications',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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