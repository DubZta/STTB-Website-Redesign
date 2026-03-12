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
import SarjanaTeologiPage from './pages/academics/SarjanaTeologiPage';
import SarjanaPendidikanPage from './pages/academics/SarjanaPendidikanPage';
import MagisterTeologiPage from './pages/academics/MagisterTeologiPage';
import MagisterPendidikanPage from './pages/academics/MagisterPendidikanPage';
import MasterDivinityPage from './pages/academics/MasterDivinityPage';
import MagisterMinistriPastoralPage from './pages/academics/MagisterMinistriPastoralPage';
import MagisterMinistriMarketplacePage from './pages/academics/MagisterMinistriMarketplacePage';
import MasterArtsPage from './pages/academics/MasterArtsPage';
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
import EventsPage from './pages/EventsPage';
import MediaPage from './pages/MediaPage';
import ActivitiesPage from './pages/ActivitiesPage';
import LEADPage from './pages/LEADPage';
import LibraryPage from './pages/LibraryPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

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
      { path: "academics", Component: AcademicsPage },
      { path: "academics/sarjana-teologi", Component: SarjanaTeologiPage },
      { path: "academics/sarjana-pendidikan", Component: SarjanaPendidikanPage },
      { path: "academics/magister-teologi", Component: MagisterTeologiPage },
      { path: "academics/magister-pendidikan", Component: MagisterPendidikanPage },
      { path: "academics/master-divinity", Component: MasterDivinityPage },
      { path: "academics/magister-ministri-pastoral", Component: MagisterMinistriPastoralPage },
      { path: "academics/magister-ministri-marketplace", Component: MagisterMinistriMarketplacePage },
      { path: "academics/master-arts", Component: MasterArtsPage },
      { path: "admissions", Component: AdmissionsPage },
      { path: "admissions/schedule", Component: SchedulePage },
      { path: "admissions/procedure", Component: ProcedurePage },
      { path: "admissions/requirements", Component: RequirementsPage },
      { path: "admissions/faq", Component: FAQPage },
      { path: "finance", Component: FinancePage },
      { path: "campus-life", Component: CampusLifePage },
      { path: "campus-life/facilities", Component: FacilitiesPage },
      { path: "campus-life/student-development", Component: StudentDevelopmentPage },
      { path: "campus-life/senate", Component: SenatePage },
      { path: "news", Component: NewsPage },
      { path: "events", Component: EventsPage },
      { path: "media", Component: MediaPage },
      { path: "activities", Component: ActivitiesPage },
      { path: "lead", Component: LEADPage },
      { path: "library", Component: LibraryPage },
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "search", Component: SearchPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);