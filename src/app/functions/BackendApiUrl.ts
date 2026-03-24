// src/app/functions/BackendApiUrl.ts
// Centralized API URL definitions for all frontend-facing endpoints.

export const BACKEND_BASE_URL = '/app/api/gateway';

export const BackendApiUrl = {
  // News
  newsList: `${BACKEND_BASE_URL}/api/News`,
  newsDetail: (id: string | number) => `${BACKEND_BASE_URL}/api/News/${id}`,

  // Events
  eventsList: `${BACKEND_BASE_URL}/api/Events`,
  eventsDetail: (id: string | number) => `${BACKEND_BASE_URL}/api/Events/${id}`,

  // Media
  mediaList: `${BACKEND_BASE_URL}/api/Media`,
  mediaDetail: (id: string | number) => `${BACKEND_BASE_URL}/api/Media/${id}`,
};

// URL builder helpers for list endpoints with query params
export function GetNewsListUrl(page = 1, pageSize = 12, search = '') {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);
  return `${BackendApiUrl.newsList}?${params.toString()}`;
}

export function GetEventsListUrl(page = 1, pageSize = 12, search = '') {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);
  return `${BackendApiUrl.eventsList}?${params.toString()}`;
}

export function GetMediaListUrl(page = 1, pageSize = 12, search = '', category = '') {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);
  if (category && category !== 'all') params.append('category', category);
  return `${BackendApiUrl.mediaList}?${params.toString()}`;
}
