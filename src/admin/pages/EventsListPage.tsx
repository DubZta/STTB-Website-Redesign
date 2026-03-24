// src/admin/pages/EventsListPage.tsx
// Page wrapper: AdminLayout + Events management component.

import AdminLayout from '../layouts/AdminLayout';
import EventsManagement from '../components/events';

export default function EventsListPage() {
  return (
    <AdminLayout title="Events">
      <EventsManagement />
    </AdminLayout>
  );
}
