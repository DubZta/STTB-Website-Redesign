import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AcademicSubNav from '../../components/navigation/AcademicSubNav';
import { BookOpen, Users, Calendar, Clock, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronDown, ChevronUp, Target, Briefcase, Info, Heart, FileCheck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function SarjanaTeologiPage() {
  const { t, language } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const programInfo = {
    code: 'S.Th.',
    name: language === 'id' ? 'Sarjana Teologi' : 'Bachelor of Theology',
    nameEn: 'Bachelor of Theology',
    duration: language === 'id' ? '4 Tahun (8 Semester)' : '4 Years (8 Semesters)',
    credits: '144 SKS',
    accreditation: language === 'id' ? 'Terakreditasi B (BAN-PT)' : 'Accredited B (BAN-PT)',
  };

  const programOverview = {
    title: language === 'id' ? 'Gambaran Program' : 'Program Overview',
    description: language === 'id' 
      ? 'Program Sarjana Teologi dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan yang memiliki pemahaman teologi Reformed yang mendalam, karakter Kristiani yang matang, and keterampilan pelayanan yang efektif. Program ini mengintegrasikan pembelajaran akademis dengan pembentukan spiritual dan praktik pelayanan.'
      : 'The Bachelor of Theology program is designed to prepare students to be servants of God with deep Reformed theological understanding, mature Christian character, and effective ministry skills. The program integrates academic learning with spiritual formation and ministry practice.',
  };

  const programObjectives = {
    title: language === 'id' ? 'Tujuan Program' : 'Program Objectives',
    objectives: language === 'id' ? [
      'Menghasilkan lulusan yang memiliki pemahaman teologi Reformed yang kokoh dan komprehensif',
      'Membentuk karakter Kristiani yang matang dengan integritas dan dedikasi dalam pelayanan',
      'Mengembangkan keterampilan pelayanan praktis yang relevan dengan konteks gereja dan masyarakat',
      'Mempersiapkan pemimpin gereja yang transformatif and berorientasi pada misi',
    ] : [
      'Produce graduates with a solid and comprehensive understanding of Reformed theology',
      'Form mature Christian character with integrity and dedication in ministry',
      'Develop practical ministry skills relevant to church and societal contexts',
      'Prepare transformative and mission-oriented church leaders',
    ],
  };

  const careerProspects = {
    title: language === 'id' ? 'Prospek Karir' : 'Career Prospects',
    careers: language === 'id' ? [
      'Pendeta/Gembala Sidang',
      'Penginjil/Misionaris',
      'Pemimpin Pelayanan Pemuda',
      'Konselor Pastoral',
      'Dosen/Pengajar Teologi',
      'Penulis/Peneliti Teologi',
    ] : [
      'Pastor/Senior Pastor',
      'Evangelist/Missionary',
      'Youth Ministry Leader',
      'Pastoral Counselor',
      'Theology Lecturer/Teacher',
      'Theology Writer/Researcher',
    ],
  };

  const profilLulusan = [
    {
      title: 'Informed',
      desc: language === 'id' 
        ? 'Pastor-scholar yang berpengetahuan luas dan aplikatif terhadap tantangan perkembangan pelayanan gerejawi dalam konteks urban.'
        : 'Knowledgeable and applicable pastor-scholar towards the challenges of ecclesiastical ministry development in urban contexts.'
    },
    {
      title: 'Transformed',
      desc: language === 'id'
        ? 'Pembelajar yang memiliki fondasi spiritualitas yang kokoh dan karakter yang matang.'
        : 'Learner with a solid spiritual foundation and mature character.'
    },
    {
      title: 'Transformative',
      desc: language === 'id'
        ? 'Pastor-scholar yang berdampak bagi jemaat dan lingkungan tempatnya melayani.'
        : 'Pastor-scholar who makes an impact on the congregation and the environment where they serve.'
    }
  ];

  const curriculumCategories = {
    dasarUmum: {
      title: language === 'id' ? 'Dasar Umum' : 'General Foundation',
      totalSks: 14,
      courses: [
        { code: 'DU1', name: language === 'id' ? 'Pancasila Dan Kewarganegaraan' : 'Pancasila and Citizenship', sks: 2, description: language === 'id' ? 'Mata kuliah ini membahas dasar-dasar Pancasila dan implementasinya dalam kehidupan berbangsa dan bernegara, dengan fokus pada nilai-nilai Kristen dalam konteks Indonesia.' : 'This course discusses the fundamentals of Pancasila and its implementation in national life, focusing on Christian values in the Indonesian context.' },
        { code: 'DU2', name: language === 'id' ? 'Bahasa Indonesia' : 'Indonesian Language', sks: 2, description: language === 'id' ? 'Pengembangan keterampilan berbahasa Indonesia secara lisan dan tulisan untuk keperluan akademis dan profesional.' : 'Development of Indonesian language skills, both oral and written, for academic and professional purposes.' },
        { code: 'DU3', name: language === 'id' ? 'Bahasa Inggris Teologi' : 'Theological English', sks: 3, description: language === 'id' ? 'Pengenalan terminologi teologi dalam bahasa Inggris untuk mendukung studi literatur internasional.' : 'Introduction to theological terminology in English to support the study of international literature.' },
        { code: 'DU4', name: language === 'id' ? 'Metode Berpikir' : 'Methods of Thinking', sks: 2, description: language === 'id' ? 'Pengembangan keterampilan berpikir kritis, logis, dan sistematis untuk studi teologi.' : 'Development of critical, logical, and systematic thinking skills for theological studies.' },
        { code: 'DU5', name: language === 'id' ? 'Psikologi Perkembangan Masa Hidup' : 'Lifespan Developmental Psychology', sks: 2, description: language === 'id' ? 'Studi tentang tahapan perkembangan manusia dari perspektif psikologi.' : 'Study of human developmental stages from a psychological perspective.' },
        { code: 'DU6', name: language === 'id' ? 'Metode Penulisan & Penelitian' : 'Writing & Research Methods', sks: 3, description: language === 'id' ? 'Teknik penelitian akademis and penulisan ilmiah sesuai standar universitas.' : 'Academic research techniques and scientific writing according to university standards.' },
      ]
    },
    studiBiblika: {
      title: language === 'id' ? 'Studi Biblika' : 'Biblical Studies',
      totalSks: 34,
      courses: [
        { code: 'SB1', name: language === 'id' ? 'Pengantar Alkitab dan Teologi Biblika' : 'Introduction to Bible and Biblical Theology', sks: 3, description: language === 'id' ? 'Survei keseluruhan Alkitab dengan fokus pada tema-tema teologis utama dan kesatuan pesan Alkitab.' : 'An overall survey of the Bible focusing on major theological themes and the unity of the biblical message.' },
        { code: 'SB2', name: language === 'id' ? 'Studi PL 1: Kitab Taurat' : 'OT Study 1: Pentateuch', sks: 3, description: language === 'id' ? 'Penafsiran kitab-kitab Taurat (Kejadian, Keluaran, Imamat, Bilangan, Ulangan).' : 'Interpretation of the books of the Pentateuch (Genesis, Exodus, Leviticus, Numbers, Deuteronomy).' },
        { code: 'SB3', name: language === 'id' ? 'Studi PL 2: Kita Sejarah' : 'OT Study 2: Historical Books', sks: 3, description: language === 'id' ? 'Penafsiran kitab-kitab sejarah dalam Perjanjian Lama dari Yosua hingga Ester.' : 'Interpretation of the historical books in the Old Testament from Joshua to Esther.' },
        { code: 'SB4', name: language === 'id' ? 'Studi PL 3: Kitab Sastra' : 'OT Study 3: Poetic Books', sks: 3, description: language === 'id' ? 'Studi kitab-kitab puisi and hikmat dalam Perjanjian Lama (Ayub, Mazmur, Amsal, Pengkhotbah, Kidung Agung).' : 'Study of poetic and wisdom books in the Old Testament (Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon).' },
        { code: 'SB5', name: language === 'id' ? 'Studi PL 4: Kitab Nabi-nabi' : 'OT Study 4: Prophetic Books', sks: 3, description: language === 'id' ? 'Penafsiran kitab-kitab nabi besar and nabi kecil dalam Perjanjian Lama.' : 'Interpretation of the major and minor prophetic books in the Old Testament.' },
        { code: 'SB6', name: language === 'id' ? 'Studi PB 1: Kitab Injil' : 'NT Study 1: Gospels', sks: 3, description: language === 'id' ? 'Penafsiran Matius, Markus, Lukas, and Yohanes dengan pendekatan kritik sastra and teologis.' : 'Interpretation of Matthew, Mark, Luke, and John with literary and theological critical approaches.' },
        { code: 'SB7', name: language === 'id' ? 'Studi PB 2: Kis Para Rasul & Paulus' : 'NT Study 2: Acts & Paul', sks: 3, description: language === 'id' ? 'Penafsiran Kisah Para Rasul and surat-surat Paulus dengan fokus pada perkembangan gereja mula-mula.' : 'Interpretation of the Book of Acts and Paul\'s epistles focusing on the development of the early church.' },
        { code: 'SB8', name: language === 'id' ? 'Studi PB3: Surat Umum & Wahyu' : 'NT Study 3: General Epistles & Revelation', sks: 3, description: language === 'id' ? 'Penafsiran surat-surat umum and kitab Wahyu.' : 'Interpretation of the general epistles and the Book of Revelation.' },
        { code: 'SB9', name: language === 'id' ? 'Hermeneutika Biblika' : 'Biblical Hermeneutics', sks: 3, description: language === 'id' ? 'Prinsip-prinsip penafsiran Alkitab yang bertanggung jawab.' : 'Principles of responsible biblical interpretation.' },
        { code: 'SB10', name: language === 'id' ? 'Bahasa Ibrani' : 'Hebrew Language', sks: 3, description: language === 'id' ? 'Pengenalan dasar bahasa Ibrani untuk studi Perjanjian Lama.' : 'Basic introduction to the Hebrew language for Old Testament studies.' },
        { code: 'SB11', name: language === 'id' ? 'Bahasa Yunani' : 'Greek Language', sks: 2, description: language === 'id' ? 'Pengenalan dasar bahasa Yunani Koine untuk studi Perjanjian Baru.' : 'Basic introduction to Koine Greek for New Testament studies.' },
        { code: 'SB12', name: language === 'id' ? 'Bahasa Yunani Lanjutan' : 'Advanced Greek', sks: 2, description: language === 'id' ? 'Lanjutan tata bahasa Yunani untuk pembacaan teks Perjanjian Baru.' : 'Advanced Greek grammar for reading New Testament texts.' },
      ]
    },
    praktika: {
      title: language === 'id' ? 'Praktika' : 'Practicum',
      totalSks: 42,
      courses: [
        { code: 'PR1', name: language === 'id' ? 'Asuhan Kristen' : 'Christian Care', sks: 2, description: language === 'id' ? 'Prinsip-prinsip penggembalaan and pendampingan rohani.' : 'Principles of pastoral care and spiritual guidance.' },
        { code: 'PR2', name: language === 'id' ? 'Formasi Spiritualitas' : 'Spiritual Formation', sks: 2, description: language === 'id' ? 'Pembentukan spiritualitas and disiplin rohani Kristen.' : 'Formation of Christian spirituality and spiritual disciplines.' },
        { code: 'PR3', name: language === 'id' ? 'Homiletika 1 (Khotbah Ekspositor)' : 'Homiletics 1 (Expository Preaching)', sks: 3, description: language === 'id' ? 'Dasar-dasar persiapan and penyampaian khotbah ekspositor.' : 'Fundamentals of preparing and delivering expository sermons.' },
        { code: 'PR4', name: language === 'id' ? 'Homiletika 2' : 'Homiletics 2', sks: 3, description: language === 'id' ? 'Teknik lanjutan homiletika and pengembangan gaya berkhotbah.' : 'Advanced homiletics techniques and development of preaching style.' },
        { code: 'PR5', name: language === 'id' ? 'Pelayanan Ibadah & Musik' : 'Worship & Music Ministry', sks: 3, description: language === 'id' ? 'Peran musik dalam ibadah and praktik pelayanan musik gerejawi.' : 'The role of music in worship and the practice of church music ministry.' },
        { code: 'PR6', name: language === 'id' ? 'Konseling Pastoral - Dasar' : 'Pastoral Counseling - Basic', sks: 2, description: language === 'id' ? 'Dasar-dasar konseling dalam pelayanan pastoral.' : 'Fundamentals of counseling in pastoral ministry.' },
        { code: 'PR7', name: language === 'id' ? 'Konseling Pastoral - Pastoral Issues' : 'Pastoral Counseling - Pastoral Issues', sks: 2, description: language === 'id' ? 'Pendekatan konseling untuk masalah-masalah umum dalam jemaat.' : 'Counseling approaches for common issues in the congregation.' },
        { code: 'PR8', name: language === 'id' ? 'Misiologi' : 'Missiology', sks: 3, description: language === 'id' ? 'Teologi and praktik misi dalam konteks global and lokal.' : 'Theology and practice of mission in global and local contexts.' },
        { code: 'PR9', name: language === 'id' ? 'Pelayanan Penggembalaan' : 'Pastoral Ministry', sks: 2, description: language === 'id' ? 'Aspek-aspek praktis pelayanan gembala sidang.' : 'Practical aspects of senior pastor ministry.' },
        { code: 'PR10', name: language === 'id' ? 'Kepemimpinan Kristen & Manajemen Gereja' : 'Christian Leadership & Church Management', sks: 2, description: language === 'id' ? 'Prinsip kepemimpinan Kristen and administrasi gereja.' : 'Principles of Christian leadership and church administration.' },
        { code: 'PR11', name: language === 'id' ? 'Perintisan & Pengembangan Gereja' : 'Church Planting & Development', sks: 2, description: language === 'id' ? 'Strategi perintisan and pengembangan gereja.' : 'Strategies for church planting and development.' },
        { code: 'PR12', name: language === 'id' ? 'Pelayanan Anak Transformatif' : 'Transformative Children\'s Ministry', sks: 3, description: language === 'id' ? 'Strategi pelayanan and pendidikan anak di gereja.' : 'Strategies for children\'s ministry and education in the church.' },
        { code: 'PR13', name: language === 'id' ? 'Pelayanan Kaum Muda Transformatif' : 'Transformative Youth Ministry', sks: 3, description: language === 'id' ? 'Pendekatan pelayanan untuk remaja and pemuda.' : 'Ministry approaches for teenagers and youth.' },
        { code: 'PR14', name: language === 'id' ? 'Pelayanan Orang Dewasa' : 'Adult Ministry', sks: 3, description: language === 'id' ? 'Pelayanan and pembinaan orang dewasa dalam gereja.' : 'Ministry and discipleship for adults in the church.' },
        { code: 'PR15', name: language === 'id' ? 'Pemuridan Transformatif' : 'Transformative Discipleship', sks: 3, description: language === 'id' ? 'Prinsip and praktik pemuridan Kristen yang transformatif.' : 'Principles and practices of transformative Christian discipleship.' },
        { code: 'PR16', name: language === 'id' ? 'Perancangan Kurikulum & Program Pembinaan' : 'Curriculum Design & Discipleship Programs', sks: 2, description: language === 'id' ? 'Desain and implementasi program pembinaan gerejawi.' : 'Design and implementation of church discipleship programs.' },
        { code: 'PR17', name: language === 'id' ? 'Media Pembelajaran & Teknologi Pendidikan' : 'Learning Media & Educational Technology', sks: 2, description: language === 'id' ? 'Penggunaan media and teknologi dalam pendidikan Kristen.' : 'Use of media and technology in Christian education.' },
      ]
    },
    studiTeologi: {
      title: language === 'id' ? 'Studi Teologi' : 'Theological Studies',
      totalSks: 23,
      courses: [
        { code: 'ST1', name: language === 'id' ? 'Prolegomena & Doktrin Alkitab' : 'Prolegomena & Doctrine of Scripture', sks: 3, description: language === 'id' ? 'Studi tentang inspirasi, otoritas, kanonisitas, and preservasi Alkitab.' : 'Study of the inspiration, authority, canonicity, and preservation of the Bible.' },
        { code: 'ST2', name: language === 'id' ? 'Doktrin Allah, Penciptaan & Manusia' : 'Doctrine of God, Creation & Humanity', sks: 3, description: language === 'id' ? 'Studi tentang keberadaan, sifat, and karya Allah Tritunggal, penciptaan, and doktrin tentang manusia.' : 'Study of the existence, attributes, and works of the Triune God, creation, and the doctrine of humanity.' },
        { code: 'ST3', name: language === 'id' ? 'Doktrin Kristus, Dosa & Keselamatan' : 'Doctrine of Christ, Sin & Salvation', sks: 3, description: language === 'id' ? 'Doktrin tentang pribadi and karya Yesus Kristus, doktrin dosa, and soteriologi.' : 'Doctrine of the person and work of Jesus Christ, the doctrine of sin, and soteriology.' },
        { code: 'ST4', name: language === 'id' ? 'Doktrin Roh Kudus & Akhir Zaman' : 'Doctrine of the Holy Spirit & Eschatology', sks: 3, description: language === 'id' ? 'Doktrin tentang pribadi and karya Roh Kudus serta eskatologi.' : 'Doctrine of the person and work of the Holy Spirit and eschatology.' },
        { code: 'ST5', name: language === 'id' ? 'Doktrin Gereja' : 'Doctrine of the Church', sks: 3, description: language === 'id' ? 'Doktrin tentang gereja, sakramen, and eklesiologi Reformed.' : 'Doctrine of the church, sacraments, and Reformed ecclesiology.' },
        { code: 'ST6', name: language === 'id' ? 'Apologetika' : 'Apologetics', sks: 2, description: language === 'id' ? 'Pembelaan iman Kristen terhadap tantangan filosofis and teologis.' : 'Defense of the Christian faith against philosophical and theological challenges.' },
        { code: 'ST7', name: language === 'id' ? 'Etika Kristen' : 'Christian Ethics', sks: 2, description: language === 'id' ? 'Prinsip-prinsip etika Kristen and aplikasinya dalam isu-isu kontemporer.' : 'Principles of Christian ethics and their application to contemporary issues.' },
        { code: 'ST8', name: language === 'id' ? 'Teologi Reformed & Injili' : 'Reformed & Evangelical Theology', sks: 3, description: language === 'id' ? 'Prinsip-prinsip teologi Reformed and tradisi Injili.' : 'Principles of Reformed theology and the Evangelical tradition.' },
      ]
    },
    sejarahBudaya: {
      title: language === 'id' ? 'Sejarah & Budaya' : 'History & Culture',
      totalSks: 11,
      courses: [
        { code: 'SB1', name: language === 'id' ? 'Sejarah Gereja Dunia' : 'World Church History', sks: 2, description: language === 'id' ? 'Perkembangan gereja universal dari masa rasuli hingga kini.' : 'Development of the universal church from the apostolic age to the present.' },
        { code: 'SB2', name: language === 'id' ? 'Sejarah Gereja Indonesia' : 'Indonesian Church History', sks: 2, description: language === 'id' ? 'Perkembangan gereja and kekristenan di Nusantara.' : 'Development of the church and Christianity in the Nusantara archipelago.' },
        { code: 'SB3', name: language === 'id' ? 'Sejarah Teologi' : 'History of Theology', sks: 3, description: language === 'id' ? 'Perkembangan doktrin and pemikiran teologi sepanjang sejarah gereja.' : 'Development of doctrine and theological thought throughout church history.' },
        { code: 'SB4', name: language === 'id' ? 'Fenomanologi Agama' : 'Phenomenology of Religion', sks: 2, description: language === 'id' ? 'Studi tentang fenomena keagamaan dalam perspektif sosiologis index antropologis.' : 'Study of religious phenomena from sociological and anthropological perspectives.' },
        { code: 'SB5', name: language === 'id' ? 'Iman & Kebudayaan' : 'Faith & Culture', sks: 2, description: language === 'id' ? 'Relasi antara iman Kristen, ilmu pengetahuan, and budaya.' : 'The relationship between Christian faith, science, and culture.' },
      ]
    },
    konsentrasiPemuridan: {
      title: language === 'id' ? 'Konsentrasi: Pemuridan & Misi' : 'Concentration: Discipleship & Mission',
      totalSks: 9,
      courses: [
        { code: 'KM1', name: language === 'id' ? 'Gereja & Pengembangan Masyarakat' : 'Church & Community Development', sks: 3, description: language === 'id' ? 'Peran gereja dalam pengembangan and pemberdayaan masyarakat.' : 'The role of the church in community development and empowerment.' },
        { code: 'KM2', name: language === 'id' ? 'Mobilisasi Misi' : 'Mission Mobilization', sks: 3, description: language === 'id' ? 'Strategi mobilisasi and pengiriman misionaris.' : 'Strategies for missionary mobilization and deployment.' },
        { code: 'KM3', name: language === 'id' ? 'Perancangan Kurikulum Pemuridan di Gereja' : 'Designing Church Discipleship Curriculum', sks: 3, description: language === 'id' ? 'Desain and implementasi program pemuridan gerejawi.' : 'Design and implementation of church discipleship programs.' },
      ]
    },
    konsentrasiAnak: {
      title: language === 'id' ? 'Konsentrasi: Pelayanan Anak' : 'Concentration: Children\'s Ministry',
      totalSks: 9,
      courses: [
        { code: 'KA1', name: language === 'id' ? 'Spiritualitas Anak' : 'Children\'s Spirituality', sks: 3, description: language === 'id' ? 'Perkembangan spiritualitas and iman anak.' : 'Development of children\'s spirituality and faith.' },
        { code: 'KA2', name: language === 'id' ? 'Perancangan Pelayanan Anak Urban' : 'Designing Urban Children\'s Ministry', sks: 3, description: language === 'id' ? 'Desain pelayanan anak dalam konteks perkotaan.' : 'Design of children\'s ministry in urban contexts.' },
        { code: 'KA3', name: language === 'id' ? 'Pendidikan Anak Integral' : 'Integral Children\'s Education', sks: 3, description: language === 'id' ? 'Pendekatan holistik dalam pendidikan Kristen untuk anak.' : 'Holistic approach to Christian education for children.' },
      ]
    },
    praktikLapangan: {
      title: language === 'id' ? 'Praktik Lapangan' : 'Field Practice',
      totalSks: 9,
      courses: [
        { code: 'PL1', name: language === 'id' ? 'Praktik Pelayanan Media 1' : 'Media Ministry Practice 1', sks: 0, description: language === 'id' ? 'Pengalaman pelayanan dasar di gereja atau lembaga Kristen.' : 'Basic ministry experience in a church or Christian institution.' },
        { code: 'PL2', name: language === 'id' ? 'Praktik Pelayanan Media 2' : 'Media Ministry Practice 2', sks: 0, description: language === 'id' ? 'Lanjutan praktik pelayanan dengan tanggung jawab lebih besar.' : 'Continued ministry practice with greater responsibility.' },
        { code: 'PL3', name: language === 'id' ? 'Praktik Pelayanan Akhir Pekan 1' : 'Weekend Ministry Practice 1', sks: 0, description: language === 'id' ? 'Praktik pelayanan intensif selama akhir pekan.' : 'Intensive ministry practice during weekends.' },
        { code: 'PL4', name: language === 'id' ? 'Praktik Pelayanan Akhir Pekan 2' : 'Weekend Ministry Practice 2', sks: 0, description: language === 'id' ? 'Lanjutan praktik pelayanan akhir pekan.' : 'Continued weekend ministry practice.' },
        { code: 'PL5', name: language === 'id' ? 'Praktik Pelayanan Akhir Pekan 3' : 'Weekend Ministry Practice 3', sks: 0, description: language === 'id' ? 'Praktik pelayanan akhir pekan tingkat lanjut.' : 'Advanced weekend ministry practice.' },
        { code: 'PL6', name: language === 'id' ? 'Praktik Pelayanan Akhir Pekan 4' : 'Weekend Ministry Practice 4', sks: 0, description: language === 'id' ? 'Praktik pelayanan akhir pekan tingkat mahir.' : 'Expert-level weekend ministry practice.' },
        { code: 'PL7', name: language === 'id' ? 'Praktik Pelayanan Akhir Pekan 5' : 'Weekend Ministry Practice 5', sks: 0, description: language === 'id' ? 'Praktik pelayanan akhir pekan tingkat ahli.' : 'Specialist-level weekend ministry practice.' },
        { code: 'PL8', name: language === 'id' ? 'Praktik Pelayanan Misi' : 'Missionary Practice', sks: 1, description: language === 'id' ? 'Praktik pelayanan dalam konteks misi.' : 'Ministry practice in a mission context.' },
        { code: 'PL9', name: language === 'id' ? 'Praktik Pelayanan 2,5 Bulan' : '2.5 Month Ministry Practice', sks: 2, description: language === 'id' ? 'Praktik pelayanan penuh selama 2,5 bulan.' : 'Full-time ministry practice for 2.5 months.' },
        { code: 'PL10', name: language === 'id' ? 'Praktik Pelayanan 6 Bulan' : '6 Month Ministry Practice', sks: 6, description: language === 'id' ? 'Praktik pelayanan penuh selama enam bulan sebagai syarat kelulusan.' : 'Full-time ministry practice for six months as a graduation requirement.' },
      ]
    },
    tugasAkhir: {
      title: language === 'id' ? 'Tugas Akhir' : 'Final Assignment',
      totalSks: 6,
      courses: [
        { 
          code: 'TA1', 
          name: language === 'id' ? 'Artikel Jurnal' : 'Journal Article', 
          sks: 3, 
          description: language === 'id' 
            ? 'Penulisan artikel akademis untuk publikasi jurnal teologi.' 
            : 'Academic article writing for theological journal publication.' 
        },
        { 
          code: 'TA2', 
          name: language === 'id' ? 'Proyek: Merancang Program Pembinaan' : 'Project: Designing Discipleship Program', 
          sks: 3, 
          description: language === 'id' 
            ? 'Desain and implementasi program pembinaan/pelayanan Kristen sebagai proyek akhir.' 
            : 'Design and implementation of Christian discipleship/ministry program as final project.' 
        },
      ]
    },
  };

  const requirements = {
    academic: language === 'id' ? [
      'Minimal lulusan SMA/ sederajat',
      'Memiliki kemampuan dasar Bahasa Inggris yang baik, membaca dan memahami teks berbahasa Inggris',
    ] : [
      'Minimum high school graduate or equivalent',
      'Good basic English skills, reading and understanding English texts',
    ],
    spiritual: language === 'id' ? [
      'Pernah terlibat pelayanan gerejawi dan/ atau lembaga Kristen minimal 2 tahun',
      'Memiliki panggilan jelas sebagai rohaniwan penuh waktu',
    ] : [
      'Involved in church or Christian institution ministry for at least 2 years',
      'Have a clear calling as a full-time minister',
    ],
    professional: language === 'id' ? [
      'Terbuka bagi lulusan baru SMA atau sederajat yang memiliki panggilan pelayanan',
    ] : [
      'Open to recent high school graduates or equivalent with a ministry calling',
    ],
    administrative: language === 'id' ? [
      'Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB',
    ] : [
      'Fulfill all admission procedures applicable at STTB',
    ],
  };

  const toggleCourse = (courseCode: string) => {
    setExpandedCourses(prev =>
      prev.includes(courseCode)
        ? prev.filter(c => c !== courseCode)
        : [...prev, courseCode]
    );
  };

  const totalSks = Object.values(curriculumCategories).reduce((sum, cat) => sum + cat.totalSks, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <AcademicSubNav />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="bg-gradient-to-br from-sttb-navy to-blue-800 rounded-xl p-8 text-white shadow-lg mb-8">
              <h1 className="text-5xl font-extrabold mb-2 text-white">{programInfo.code}</h1>
              <p className="text-3xl font-semibold text-blue-100">{programInfo.name}</p>
              <p className="text-xl text-blue-200 italic mt-2">{programInfo.nameEn}</p>
            </div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: Clock, label: language === 'id' ? "Masa Studi" : "Study Period", value: programInfo.duration, color: "text-blue-600" },
                { icon: GraduationCap, label: language === 'id' ? "Total Kredit" : "Total Credits", value: programInfo.credits, color: "text-red-600" },
                { icon: ShieldCheck, label: language === 'id' ? "Akreditasi" : "Accreditation", value: programInfo.accreditation, color: "text-green-600" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                        {item.label}
                      </p>
                      <p className="text-sm font-extrabold text-gray-900 mt-0.5 tracking-tight">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sttb-navy to-blue-800 rounded-b-2xl transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Program Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-sttb-navy" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {programOverview.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {programOverview.description}
              </p>
            </div>
          </motion.div>

          {/* Program Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-sttb-navy" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {programObjectives.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {programObjectives.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Career Prospects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-sttb-navy" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {careerProspects.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {careerProspects.careers.map((career, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profil Lulusan Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">{language === 'id' ? 'Profil Lulusan:' : 'Graduate Profile:'} <span className="text-sttb-navy">Transformative Pastor-Scholar</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profilLulusan.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sttb-navy font-bold text-lg border-l-4 border-sttb-navy pl-3">{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requirements Section - 4 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{language === 'id' ? 'Persyaratan' : 'Requirements'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Persyaratan Akademis */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-sttb-navy" />
                  <h3 className="text-lg font-bold text-gray-900">
                     {language === 'id' ? 'Akademis' : 'Academic'}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.academic.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persyaratan Spiritual */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-sttb-navy" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {language === 'id' ? 'Spiritual' : 'Spiritual'}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.spiritual.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persyaratan Professional */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-sttb-navy" />
                  <h3 className="text-lg font-bold text-gray-900">
                     {language === 'id' ? 'Kependidikan' : 'Education'}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.professional.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persyaratan Administratif */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-6 h-6 text-sttb-navy" />
                  <h3 className="text-lg font-bold text-gray-900">
                     {language === 'id' ? 'Administratif' : 'Administrative'}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirements.administrative.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* System Perkuliahan Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-sttb-navy" />
                 <h2 className="text-2xl font-extrabold text-gray-900">
                  {language === 'id' ? 'Sistem Perkuliahan' : 'Learning System'}
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>{language === 'id' ? '4 tahun full time; 3,5 tahun kuliah + 6 bulan praktik pelayanan' : '4 years full time; 3.5 years study + 6 months internship'}</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    {language === 'id' ? 'Kuliah dilakukan secara block teaching selama 3 minggu yang diikuti dengan minggu pengerjaan tugas.' : 'Lectures are conducted via block teaching for 3 weeks followed by assignment weeks.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    {language === 'id' ? 'Satu semester terdiri dari 16 pertemuan (kuliah & evaluasi).' : 'One semester consists of 16 sessions (lectures & evaluations).'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    {language === 'id' ? 'Perkuliahan akan berlangsung selama 7 semester and dilanjutkan dengan praktik pelayanan selama 6 bulan.' : 'Studies will take place over 7 semesters and continued with 6 months of ministry internship.'}
                  </span>
                </li>
                <li className="text-xs text-gray-500 italic pl-6">
                  {language === 'id' ? '*Jadwal ini bisa berubah tergantung pada kesepakatan kelas bersama dosen' : '*This schedule may change based on class agreement with the lecturer'}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Curriculum by Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-6">
               <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                {language === 'id' ? 'Daftar Mata Kuliah' : 'Course List'}
              </h2>
              <p className="text-sm text-gray-600">{language === 'id' ? 'Total:' : 'Total:'} <span className="font-bold text-sttb-navy">{totalSks} SKS</span></p>
            </div>

            {/* Sidebar + Main Content Layout */}
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Category Summary */}
              <aside className="lg:col-span-1">
                <div className="bg-sttb-navy text-white rounded-xl p-6 sticky top-24">
                 <h3 className="text-lg font-bold mb-4 text-white uppercase">{language === 'id' ? 'KATEGORI MATA KULIAH' : 'COURSE CATEGORIES'}</h3>
                  <ul className="space-y-3 text-sm">
                    {Object.entries(curriculumCategories).map(([key, category]) => (
                      <li key={key}>
                        <a
                          href={`#${key}`}
                          className="block hover:text-blue-200 transition-colors"
                        >
                          <span className="font-semibold">{category.title}</span>
                          <span className="text-blue-200 ml-2">({category.totalSks} SKS)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-blue-700">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="text-xl font-bold text-blue-200">{totalSks} SKS</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content - Course Tables */}
              <main className="lg:col-span-3 space-y-8">
                {Object.entries(curriculumCategories).map(([key, category]) => (
                  <div key={key} id={key} className="scroll-mt-24">
                    <h3 className="text-lg font-bold text-sttb-navy mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-sttb-navy rounded-sm"></div>
                      {category.title} <span className="text-gray-500 font-normal">({category.totalSks} SKS)</span>
                    </h3>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                         <thead className="bg-sttb-navy text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold w-16">No</th>
                            <th className="px-4 py-3 text-left font-semibold">{language === 'id' ? 'Mata Kuliah' : 'Course'}</th>
                            <th className="px-4 py-3 text-center font-semibold w-20">SKS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.courses.map((course, index) => (
                            <React.Fragment key={course.code}>
                              <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-4 py-3">
                                  <span className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-bold">{index + 1}</span>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-semibold text-gray-900">{course.name}</p>
                                      <p className="text-xs text-gray-500">{course.code}</p>
                                    </div>
                                    <button
                                      onClick={() => toggleCourse(course.code)}
                                      className={`p-1 rounded transition-all ${expandedCourses.includes(course.code)
                                        ? 'bg-sttb-navy text-white rotate-180'
                                        : 'text-sttb-navy hover:bg-blue-50'
                                        }`}
                                    >
                                      <ChevronDown className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 font-semibold">{course.sks}</span>
                                </td>
                              </tr>
                              {/* Expanded Description Row */}
                              {expandedCourses.includes(course.code) && (
                                <tr className="bg-blue-50 border-b border-gray-100">
                                  <td className="px-4 py-3"></td>
                                  <td colSpan={2} className="px-4 py-3">
                                    <div className="flex items-start gap-2">
                                      <FileText className="w-4 h-4 text-sttb-navy flex-shrink-0 mt-1" />
                                      <div>
                                        <h4 className="font-semibold text-sttb-navy text-sm mb-1">
                                          {course.name} ({course.sks} SKS)
                                        </h4>
                                        <p className="text-xs text-gray-700 leading-relaxed">{course.description}</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                          <tr className="bg-gray-50 font-bold">
                            <td className="px-4 py-3" colSpan={2}>Total</td>
                            <td className="px-4 py-3 text-center text-gray-900">{category.totalSks}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </main>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}