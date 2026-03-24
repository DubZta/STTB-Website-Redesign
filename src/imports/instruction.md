Instruction : REDESIGN STTB WEB

1. Goal
Posisikan diri anda sebagai UI/UX atau Fullstack Developer, anda diminta untuk MENDESAIN ULANG website STTB (https://sttb.ac.id/)  menjadi lebih baik dan professional seperti Oxford atau Havard, serta CMS baru untuk admin control.
Desain harus : 
- Clear content hierarchy and easy content editing
- Fast navigation between content, media, pages, and settings
- Scalable management for multiple content types and sections
- Visibility of publishing status, approvals, and auditability
- Usable dashboards for content performance and operational overview
- Structured tables and forms for heavy back-office usage
- Role-based access and administration flows
- Desain konsisten jika memang sama
- Warna template sesuai dengan STTB dominan biru dan merah

2. Primary User :
- User : Untuk melihat website yang sudah ada seperti STTB sekarang
- admin : untuk memanage content pada CMS untuk mengatur content di website user page

3. Pages :
Project structure:

/src
├── app/                      # Next.js App Router (Routing per page)
│   ├── (home)/               # Folder Homepage
│   ├── about/                # Folder Tentang Kami (Sejarah, Visi, Misi)
│   ├── academics/            # Folder Akademik (List Program Studi)
│   ├── admissions/           # Folder Admisi (Pendaftaran, FAQ)
│   └── layout.tsx            # Header & Footer utama (Global)
├── components/               # Komponen Modular (Wajib Konsisten)
│   ├── navigation/           # Navbar, DropdownMenu, LangSwitcher
│   ├── ui/                   # Button, Card, Badge (Merah-Biru)
│   └── sections/             # NewsGrid, ProgramList, HeroSection
├── lib/                      # Utilitas (i18n, API client, formatting)
├── types/                    # TypeScript Interfaces (Mapping data)
└── styles/                   # Tailwind globals.css

page meliputi:
-Beranda : Homepage itself
- Kegiatan
- Berita 
- Media	
- LEAD
- Perpustakaan

Navigation:
- Tenatng Kami -> Sejarah, Visi & Misi, Mars STTB, Pengakuan Iman, Dewan Dosen, Yayasan
- Akademik -> SARJANA TEOLOGI, SARJANA PENDIDIKAN KRISTEN, MAGISTER TEOLOGI PELAYANAN PASTORAL GEREJA URBAN, MAGISTER TEOLOGI TRANSFORMASI BUDAYA & MASYARAKAT, MAGISTER PENDIDIKAN KRISTEN, MAGISTER MINISTRI MARKETPLACE, MAGISTER MINISTRI KEPEMIMPINAN PASTORAL, MAGISTER MINISTRI TEOLOGI PELAYANAN GEREJAWI
- Admisi : Pendaftaran Online, Jadwal Admisi, Prosedur Admisi, Info Persyaratan, FAQ
- Keuangan : Biaya Studi, Beasiswa, Dukung STTB
- Kehidupan Kampus : Fasilitas, Pembinaan, Senat

Footer:
- Sumber Daya : Perpustakaan, Perpustakaan Digital, Jurnal Transformatio, Podcast, Video, Buletin
- Link bantuan (mengarah ke link tidak pelru page)


4. Design Styles:
Color Palette (Strict):
-STTB uses primary color with Blue and Red.
-Primary Brand: Deep Navy Blue (#1E3A8A) — Use for headers, main text, and background sections.
-Accent/Action: Crimson Red (#BE123C) — Use ONLY for CTA buttons (Register, Login, More Info) and active state highlights.
-Neutral: Clean White (#FFFFFF) for card backgrounds, Light Grey (#F8FAFC) for page background, Dark Slate (#1E293B) for body text.

Layout & Composition:
-Grid: 12-column system with balanced white space.
-Components: Modern cards with subtle shadows (shadow-sm) and 12px corner radius.
-Spacing: Use generous padding (24px-40px) between sections to prevent "heavy" feel.

UI Elements:
-Navbar: Fixed/Sticky. Integrated 'ID | EN' Language Switcher in the top right.
-Typography: Sans-serif (Inter or Roboto). Headlines: Extra-bold, Body: Regular/Medium.
-Responsiveness: Use Figma Auto Layout for all components. Stacking: Horizontal (Desktop) to Vertical (Mobile).

Implementation Note:
-The design must look like a high-performance platform (Next.js/Tailwind CSS ready).
-Maintain clear Visual Hierarchy: The Red CTA should be the most noticeable element in every hero section.

5. Accessibility Notes: 
-Support switchable language option for Indonesia(default) to English
-All interactive elements must have visible focus states

6. Additional Instruction : 
-Keep refactoring to maintain clean and scalable code structure
-Preserve finished elements and do not modify them unless explicitly requested
-Keep file sizes small and place helper functions and reusable components in separate files
-Date formats should be in the year 2026 for mock data and examples
-All generated code should use Next.js with Tailwind CSS
-Keep all UI elements aligned and non-overlapping unless explicitly instructed otherwise
-Only use absolute positioning when truly necessary; prefer responsive layouts using flexbox and grid


