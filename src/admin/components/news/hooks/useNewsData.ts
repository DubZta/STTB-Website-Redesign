// src/admin/components/news/hooks/useNewsData.ts
// SWR-based hook for News CRUD operations.
// Follows the useFeatureData pattern from fe-standard section 3.2.

import useSWR from 'swr';
import { useCallback, useState } from 'react';
import { useFetchWithAccessToken } from '../../../functions/useAdminFetch';
import { AdminApiUrl, GetNewsListUrl } from '../../../functions/AdminApiUrl';
import type {
  GetNewsListResponse,
  CreateNewsPayload,
  UpdateNewsPayload,
  NewsListItem,
} from '../../../types/News';

interface UseNewsDataOptions {
  page?: number;
  pageSize?: number;
  search?: string;
}

interface UseNewsDataReturn {
  items: NewsListItem[];
  totalCount: number;
  isLoading: boolean;
  error: unknown;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
  onCreate: (payload: CreateNewsPayload) => Promise<boolean>;
  onUpdate: (id: string, payload: UpdateNewsPayload) => Promise<boolean>;
  onDelete: (id: string) => Promise<boolean>;
  mutate: () => void;
}

export function useNewsData({
  page = 1,
  pageSize = 20,
  search = '',
}: UseNewsDataOptions = {}): UseNewsDataReturn {
  const { fetchGET, fetchPOST, fetchPUT, fetchDELETE } = useFetchWithAccessToken();
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const swrKey = GetNewsListUrl(page, pageSize, search);

  const { data, isLoading, error, mutate } = useSWR<GetNewsListResponse>(
    swrKey,
    (url: string) => fetchGET<GetNewsListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const onCreate = useCallback(
    async (payload: CreateNewsPayload): Promise<boolean> => {
      setIsCreating(true);
      try {
        const { error: err } = await fetchPOST<string>(AdminApiUrl.newsCreate, payload);
        if (err) {
          console.error('[useNewsData] onCreate error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useNewsData] onCreate exception:', e);
        return false;
      } finally {
        setIsCreating(false);
      }
    },
    [fetchPOST, mutate]
  );

  const onUpdate = useCallback(
    async (id: string, payload: UpdateNewsPayload): Promise<boolean> => {
      setIsUpdating(true);
      try {
        const { error: err } = await fetchPUT<void>(AdminApiUrl.newsUpdate(id), payload);
        if (err) {
          console.error('[useNewsData] onUpdate error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useNewsData] onUpdate exception:', e);
        return false;
      } finally {
        setIsUpdating(false);
      }
    },
    [fetchPUT, mutate]
  );

  const onDelete = useCallback(
    async (id: string): Promise<boolean> => {
      setIsDeleting(true);
      try {
        const { error: err } = await fetchDELETE<void>(AdminApiUrl.newsDelete(id));
        if (err) {
          console.error('[useNewsData] onDelete error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useNewsData] onDelete exception:', e);
        return false;
      } finally {
        setIsDeleting(false);
      }
    },
    [fetchDELETE, mutate]
  );

  return {
    items: data?.items ?? [],
    totalCount: data?.totalCount ?? 0,
    isLoading,
    error,
    isCreating,
    isUpdating,
    isDeleting,
    onCreate,
    onUpdate,
    onDelete,
    mutate,
  };
}
