# STTB Website Redesign

![STTB Banner](https://assets.nsd.co.id/images/kampus/logo/NzQzNUMxQkQtRjU4Ny00NUE5LUI1NzItQjQ1QzQxN0M4MTZF.jpg)

A modern, high-performance, and visually stunning redesign of the **STT Bandung (STTB)** website. This project focuses on premium aesthetics, seamless user experience, and comprehensive accessibility for prospective and current students.

**Redesign by: Team 6**

---

## ✨ Key Features

- **Full Localization (ID/EN):** Centralized translation system allowing seamless switching between Indonesian and English across all pages.
- **Academic Programs Directory:** Detailed sections for all 8 programs, including specific concentrations for Sarjana and Magister levels.
- **Interactive Admissions Portal:** Multi-step guidance for registration, requirements, and enrollment procedures.
- **Finance & Scholarships:** Dedicated modules for tuition fees (Biaya Studi), scholarship applications (Beasiswa), and donation support (Dukung STTB).
- **Campus Life & Student Development:** Interactive maps, organizational details (Senate), and spiritual formation program tracking.
- **News & Media Center:** Dynamic event calendars and news grids with localized status badges.
- **Responsive Navigation:** Sophisticated sticky headers and feature-rich sub-navigations for academic and campus life sections.

---

## 🎨 Design Philosophy

The redesign follows a **"Premium-First"** aesthetic approach:

- **Typography:** 
  - **Headings:** `Plus Jakarta Sans` for a bold, modern, and professional look.
  - **Body:** `Inter` for maximum legibility and clean data presentation.
- **Color Identity:**
  - **STTB Navy:** Used for core branding and Sarjana (Undergraduate) themes.
  - **STTB Red:** Used for accents, calls to action, and Magister (Graduate) themes.
- **Visual Effects:** 
  - **Aurora Backgrounds:** Dynamic, animated overlays for high-impact sections.
  - **Glassmorphism:** Subtle backdrop blurs and floating card effects.
  - **Micro-animations:** Powered by `Motion` (Framer Motion) for smooth entry transitions and hover feedback.
  - **Glow Cards:** Interactive spotlight effects on feature cards.

---


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DubZta/STTB-Website-Redesign
   ```

2. Navigate to the project directory:
   ```bash
   cd "STTB Website Redesign"
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

### Running the Frontend

Start the development server:
```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`.

---

## ⚙️ Backend Setup

### Prerequisites

- **.NET SDK 10.0** or higher
- **SQL Server LocalDB** (included with Visual Studio or as a standalone installer)
- **Entity Framework Core Tools** (`dotnet tool install --global dotnet-ef`)

### Database Setup

1. The connection string is configured in `backend/STTB.WebAPI/appsettings.json`. By default, it uses `(localdb)\mssqllocaldb`.
2. Apply the database migrations to create the schema (run from the `backend/STTB.WebAPI` directory):
   ```bash
   cd backend/STTB.WebAPI
   dotnet ef database update --project ../STTB.Entities
   ```

### Running the API

Start the backend server:
```bash
dotnet run
```

The API will be available at `http://localhost:5285`. You can access the Swagger UI at `http://localhost:5285/swagger`.

### Managing Content (CMS)

Once both the frontend and backend are running:
1. Access the main website at `http://localhost:5173`.
2. Access the **Admin CMS** by manually navigating to `http://localhost:5173/admin`.
3. Use the CMS to create News, Events, and Media content, which will be stored in your SQL database and displayed dynamically on the site.

---

**© 2026 Team 6 - STTB Website Redesign Project**
