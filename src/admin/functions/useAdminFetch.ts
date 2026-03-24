// src/admin/functions/useAdminFetch.ts
// Authenticated fetch hook for admin API calls.
// Reads Bearer token from sessionStorage (more secure than localStorage for short sessions).
// All API communication goes through these methods — never raw fetch in components.

const TOKEN_KEY = 'admin_access_token';

export function getAdminToken(): string | null {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token: string): void {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken(): void {
  sessionStorage.removeItem(TOKEN_KEY);
}

export function isAdminAuthenticated(): boolean {
  return !!getAdminToken();
}

interface FetchResult<T> {
  data: T | null;
  error: string | null;
  status: number;
}

function buildHeaders(isMultipart = false): HeadersInit {
  const token = getAdminToken();
  const headers: Record<string, string> = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (!isMultipart) {
    headers['Content-Type'] = 'application/json';
  }

  return headers;
}

async function handleResponse<T>(response: Response): Promise<FetchResult<T>> {
  const status = response.status;

  if (status === 401) {
    const token = getAdminToken();
    console.error(`[AdminFetch] 401 Unauthorized for: ${response.url}. Token Present: ${!!token}${token ? ` (Length: ${token.length})` : ''}. Redirecting to login.`);
    clearAdminToken();
    window.location.href = '/admin/';
    return { data: null, error: 'Unauthorized', status };
  }

  if (status === 403) {
    console.warn(`[AdminFetch] 403 Forbidden for: ${response.url}. You have a valid token but might be missing the "Admin" role.`);
  }

  if (status === 204) {
    return { data: null, error: null, status };
  }

  let data: T | null = null;
  let error: string | null = null;

  try {
    const text = await response.text();
    if (text) {
      data = JSON.parse(text) as T;
    }
  } catch {
    error = 'Failed to parse response';
  }

  if (!response.ok) {
    error = (data as unknown as { message?: string })?.message
      || (data as unknown as { title?: string; detail?: string })?.title
      || (data as unknown as { title?: string; detail?: string })?.detail
      || `Request failed with status ${status}`;
    data = null;
  }

  return { data, error, status };
}

export function useFetchWithAccessToken() {
  async function fetchGET<T>(url: string): Promise<FetchResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: buildHeaders(),
      });
      return handleResponse<T>(response);
    } catch (err) {
      console.error('[AdminFetch] GET error:', err);
      return { data: null, error: 'Network error', status: 0 };
    }
  }

  async function fetchPOST<T>(url: string, body: unknown): Promise<FetchResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: buildHeaders(),
        body: JSON.stringify(body),
      });
      return handleResponse<T>(response);
    } catch (err) {
      console.error('[AdminFetch] POST error:', err);
      return { data: null, error: 'Network error', status: 0 };
    }
  }

  async function fetchPUT<T>(url: string, body: unknown): Promise<FetchResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: buildHeaders(),
        body: JSON.stringify(body),
      });
      return handleResponse<T>(response);
    } catch (err) {
      console.error('[AdminFetch] PUT error:', err);
      return { data: null, error: 'Network error', status: 0 };
    }
  }

  async function fetchDELETE<T>(url: string): Promise<FetchResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: buildHeaders(),
      });
      return handleResponse<T>(response);
    } catch (err) {
      console.error('[AdminFetch] DELETE error:', err);
      return { data: null, error: 'Network error', status: 0 };
    }
  }

  async function fetchMultipart<T>(url: string, formData: FormData): Promise<FetchResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: buildHeaders(true), // No Content-Type header — browser sets multipart boundary
        body: formData,
      });
      return handleResponse<T>(response);
    } catch (err) {
      console.error('[AdminFetch] Multipart POST error:', err);
      return { data: null, error: 'Network error', status: 0 };
    }
  }

  return { fetchGET, fetchPOST, fetchPUT, fetchDELETE, fetchMultipart };
}

export const useAdminFetch = useFetchWithAccessToken;
