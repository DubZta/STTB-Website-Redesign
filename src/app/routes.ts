import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/about/HistoryPage';
import VisionMissionPage from './pages/about/VisionMissionPage';
import HymnPage from './pages/about/HymnPage';
import ConfessionPage from './pages/about/ConfessionPage';
import FacultyPage from './pages/about/FacultyPage';
import FoundationPage from './pages/about/FoundationPage';
import AcademicsPage from './pages/AcademicsPage';

// Undergraduate Programs
import SarjanaTeologiPage from './pages/academics/SarjanaTeologiPage';
import SarjanaPendidikanKristenPage from './pages/academics/SarjanaPendidikanKristenPage';

// Graduate Programs - Magister Teologi
import MagisterTeologiPelayananPastoralGerejaUrbanPage from './pages/academics/MagisterTeologiPelayananPastoralGerejaUrbanPage';
import MagisterTeologiTransformasiBudayaMasyarakatPage from './pages/academics/MagisterTeologiTransformasiBudayaMasyarakatPage';

// Graduate Programs - Magister Pendidikan
import MagisterPendidikanKristenPage from './pages/academics/MagisterPendidikanKristenPage';

// Graduate Programs - Magister Ministri
import MagisterMinistriMarketplacePage from './pages/academics/MagisterMinistriMarketplacePage';
import MagisterMinistriKepemimpinanPastoralPage from './pages/academics/MagisterMinistriKepemimpinanPastoralPage';
import MagisterMinistriTeologiPelayananGerejawiPage from './pages/academics/MagisterMinistriTeologiPelayananGerejawiPage';

import AdmissionsPage from './pages/AdmissionsPage';
import SchedulePage from './pages/admissions/SchedulePage';
import ProcedurePage from './pages/admissions/ProcedurePage';
import RequirementsPage from './pages/admissions/RequirementsPage';
import FAQPage from './pages/admissions/FAQPage';
import FinancePage from './pages/FinancePage';
import CampusLifePage from './pages/CampusLifePage';
import FacilitiesPage from './pages/campus-life/FacilitiesPage';
import StudentDevelopmentPage from './pages/campus-life/StudentDevelopmentPage';
import SenatePage from './pages/campus-life/SenatePage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import EventsPage from './pages/EventsPage';
import MediaPage from './pages/MediaPage';
import MediaDetailPage from './pages/MediaDetailPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivitiesDetailPage from './pages/ActivitiesDetailPage';
import LEADPage from './pages/LEADPage';
import LibraryPage from './pages/LibraryPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import BiayaStudiPage from './pages/finance/BiayaStudiPage';
import BeasiswaPage from './pages/finance/BeasiswaPage';
import DukungSTTBPage from './pages/finance/DukungSTTBPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "about/history", Component: HistoryPage },
      { path: "about/vision-mission", Component: VisionMissionPage },
      { path: "about/hymn", Component: HymnPage },
      { path: "about/confession", Component: ConfessionPage },
      { path: "about/faculty", Component: FacultyPage },
      { path: "about/foundation", Component: FoundationPage },

      // Academics Main
      { path: "academics", Component: AcademicsPage },

      // Undergraduate Programs
      { path: "academics/sarjana-teologi", Component: SarjanaTeologiPage },
      { path: "academics/sarjana-pendidikan-kristen", Component: SarjanaPendidikanKristenPage },

      // Graduate Programs - Magister Teologi
      { path: "academics/magister-teologi-pelayanan-pastoral-gereja-urban", Component: MagisterTeologiPelayananPastoralGerejaUrbanPage },
      { path: "academics/magister-teologi-transformasi-budaya-masyarakat", Component: MagisterTeologiTransformasiBudayaMasyarakatPage },

      // Graduate Programs - Magister Pendidikan
      { path: "academics/magister-pendidikan-kristen", Component: MagisterPendidikanKristenPage },

      // Graduate Programs - Magister Ministri
      { path: "academics/magister-ministri-marketplace", Component: MagisterMinistriMarketplacePage },
      { path: "academics/magister-ministri-kepemimpinan-pastoral", Component: MagisterMinistriKepemimpinanPastoralPage },
      { path: "academics/magister-ministri-teologi-pelayanan-gerejawi", Component: MagisterMinistriTeologiPelayananGerejawiPage },

      // Admissions
      { path: "admissions", Component: AdmissionsPage },
      { path: "admissions/schedule", Component: SchedulePage },
      { path: "admissions/procedure", Component: ProcedurePage },
      { path: "admissions/requirements", Component: RequirementsPage },
      { path: "admissions/faq", Component: FAQPage },

      // Finance
      { path: "finance", Component: FinancePage },
      { path: "finance/biaya-studi", Component: BiayaStudiPage },
      { path: "finance/beasiswa", Component: BeasiswaPage },
      { path: "finance/dukung-sttb", Component: DukungSTTBPage },

      // Campus Life
      { path: "campus-life", Component: CampusLifePage },
      { path: "campus-life/facilities", Component: FacilitiesPage },
      { path: "campus-life/student-development", Component: StudentDevelopmentPage },
      { path: "campus-life/senate", Component: SenatePage },

      // News & Media
      { path: "news", Component: NewsPage },
      { path: "news/:id", Component: NewsDetailPage },
      { path: "events", Component: EventsPage },
      { path: "media", Component: MediaPage },
      { path: "media/:id", Component: MediaDetailPage },
      { path: "activities", Component: ActivitiesPage },
      { path: "activities/:id", Component: ActivitiesDetailPage },

      // Special Programs
      { path: "lead", Component: LEADPage },
      { path: "library", Component: LibraryPage },

      // Utility Pages
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "search", Component: SearchPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);