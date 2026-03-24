// src/admin/functions/AdminApiUrl.ts
// Centralized API URL definitions for all admin-facing endpoints.
// NEVER hardcode these URLs anywhere else in the admin codebase.

const BACKEND_BASE_URL = 'http://localhost:5285';

export const AdminApiUrl = {
  // Auth (OpenIddict token endpoint)
  token: `${BACKEND_BASE_URL}/api/Auth/login`,

  // News
  newsList: `${BACKEND_BASE_URL}/api/News`,
  newsCreate: `${BACKEND_BASE_URL}/api/News`,
  newsDetail: (id: string) => `${BACKEND_BASE_URL}/api/News/${id}`,
  newsUpdate: (id: string) => `${BACKEND_BASE_URL}/api/News/${id}`,
  newsDelete: (id: string) => `${BACKEND_BASE_URL}/api/News/${id}`,

  // Events
  eventsList: `${BACKEND_BASE_URL}/api/Events`,
  eventsCreate: `${BACKEND_BASE_URL}/api/Events`,
  eventsDetail: (id: string) => `${BACKEND_BASE_URL}/api/Events/${id}`,
  eventsUpdate: (id: string) => `${BACKEND_BASE_URL}/api/Events/${id}`,
  eventsDelete: (id: string) => `${BACKEND_BASE_URL}/api/Events/${id}`,

  // Media
  mediaList: `${BACKEND_BASE_URL}/api/Media`,
  mediaUpload: `${BACKEND_BASE_URL}/api/Media/upload`,
  mediaDetail: (id: string) => `${BACKEND_BASE_URL}/api/Media/${id}`,
  mediaUpdate: (id: string) => `${BACKEND_BASE_URL}/api/Media/${id}`,
  mediaDelete: (id: string) => `${BACKEND_BASE_URL}/api/Media/${id}`,
};

// URL builder helpers for list endpoints with query params
export function GetNewsListUrl(page = 1, pageSize = 20, search = '') {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);
  return `${AdminApiUrl.newsList}?${params.toString()}`;
}

export function GetEventsListUrl(page = 1, pageSize = 20, search = '') {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);
  return `${AdminApiUrl.eventsList}?${params.toString()}`;
}

export function GetMediaListUrl(page = 1, pageSize = 20, search = '') {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);
  return `${AdminApiUrl.mediaList}?${params.toString()}`;
}
