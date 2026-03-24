export interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  problem: string | null;
}

export function useAppFetch() {
  async function fetchGET<T>(url: string): Promise<FetchResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return { data: null, error: new Error(response.statusText), problem: await response.text() };
      }

      const data = await response.json();
      return { data, error: null, problem: null };
    } catch (err) {
      console.error('[AppFetch] GET error:', err);
      return { data: null, error: err as Error, problem: 'NETWORK_ERROR' };
    }
  }

  return { fetchGET };
}
