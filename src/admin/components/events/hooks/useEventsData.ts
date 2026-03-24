// src/admin/components/events/hooks/useEventsData.ts
// SWR-based hook for Events CRUD operations.

import useSWR from 'swr';
import { useCallback, useState } from 'react';
import { useAdminFetch } from '../../../functions/useAdminFetch';
import { AdminApiUrl, GetEventsListUrl } from '../../../functions/AdminApiUrl';
import type {
  GetEventListResponse,
  CreateEventPayload,
  UpdateEventPayload,
  EventListItem,
} from '../../../types/Events';

interface UseEventsDataOptions {
  page?: number;
  pageSize?: number;
  search?: string;
}

interface UseEventsDataReturn {
  items: EventListItem[];
  totalCount: number;
  isLoading: boolean;
  error: unknown;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
  onCreate: (payload: CreateEventPayload) => Promise<boolean>;
  onUpdate: (id: string, payload: UpdateEventPayload) => Promise<boolean>;
  onDelete: (id: string) => Promise<boolean>;
  mutate: () => void;
}

export function useEventsData({
  page = 1,
  pageSize = 20,
  search = '',
}: UseEventsDataOptions = {}): UseEventsDataReturn {
  const { fetchGET, fetchPOST, fetchPUT, fetchDELETE } = useAdminFetch();
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const swrKey = GetEventsListUrl(page, pageSize, search);

  const { data, isLoading, error, mutate } = useSWR<GetEventListResponse>(
    swrKey,
    (url: string) => fetchGET<GetEventListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const onCreate = useCallback(
    async (payload: CreateEventPayload): Promise<boolean> => {
      setIsCreating(true);
      try {
        const { error: err } = await fetchPOST<string>(AdminApiUrl.eventsCreate, payload);
        if (err) {
          console.error('[useEventsData] onCreate error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useEventsData] onCreate exception:', e);
        return false;
      } finally {
        setIsCreating(false);
      }
    },
    [fetchPOST, mutate]
  );

  const onUpdate = useCallback(
    async (id: string, payload: UpdateEventPayload): Promise<boolean> => {
      setIsUpdating(true);
      try {
        const { error: err } = await fetchPUT<void>(AdminApiUrl.eventsUpdate(id), payload);
        if (err) {
          console.error('[useEventsData] onUpdate error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useEventsData] onUpdate exception:', e);
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
        const { error: err } = await fetchDELETE<void>(AdminApiUrl.eventsDelete(id));
        if (err) {
          console.error('[useEventsData] onDelete error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useEventsData] onDelete exception:', e);
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
