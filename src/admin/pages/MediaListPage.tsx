// src/admin/pages/MediaListPage.tsx
// Page wrapper: AdminLayout + Media management component.

import AdminLayout from '../layouts/AdminLayout';
import MediaManagement from '../components/media';

export default function MediaListPage() {
  return (
    <AdminLayout title="Media">
      <MediaManagement />
    </AdminLayout>
  );
}
