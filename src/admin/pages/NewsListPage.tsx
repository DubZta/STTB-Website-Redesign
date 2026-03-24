// src/admin/pages/NewsListPage.tsx
// Page wrapper: AdminLayout + News management component.

import AdminLayout from '../layouts/AdminLayout';
import NewsManagement from '../components/news';

export default function NewsListPage() {
  return (
    <AdminLayout title="News">
      <NewsManagement />
    </AdminLayout>
  );
}
