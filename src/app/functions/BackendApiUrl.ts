// src/app/functions/BackendApiUrl.ts
// Compatibility layer for legacy components

export const BACKEND_BASE_URL = 'http://localhost:5285';

export const BackendApiUrl = {
  eventsDetail: (id: string) => `${BACKEND_BASE_URL}/api/Events/${id}`,
};
