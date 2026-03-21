// src/admin/components/media/hooks/useMediaData.ts
// SWR-based hook for Media CRUD + upload operations.

import useSWR from 'swr';
import { useCallback, useState } from 'react';
import { useAdminFetch } from '../../../functions/useAdminFetch';
import { AdminApiUrl, GetMediaListUrl } from '../../../functions/AdminApiUrl';
import type {
  GetMediaListResponse,
  UploadMediaPayload,
  UpdateMediaPayload,
  UpdateMediaResponse,
  UploadMediaResponse,
  MediaListItem,
} from '../../../types/Media';

interface UseMediaDataOptions {
  page?: number;
  pageSize?: number;
  search?: string;
}

interface UseMediaDataReturn {
  items: MediaListItem[];
  totalCount: number;
  isLoading: boolean;
  error: unknown;
  isUploading: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
  onUpload: (payload: UploadMediaPayload) => Promise<boolean>;
  onUpdate: (id: string, payload: UpdateMediaPayload) => Promise<boolean>;
  onDelete: (id: string) => Promise<boolean>;
  mutate: () => void;
}

export function useMediaData({
  page = 1,
  pageSize = 20,
  search = '',
}: UseMediaDataOptions = {}): UseMediaDataReturn {
  const { fetchGET, fetchMultipart, fetchPUT, fetchDELETE } = useAdminFetch();
  const [isUploading, setIsUploading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const swrKey = GetMediaListUrl(page, pageSize, search);

  const { data, isLoading, error, mutate } = useSWR<GetMediaListResponse>(
    swrKey,
    (url: string) => fetchGET<GetMediaListResponse>(url).then((r) => r.data ?? { items: [], totalCount: 0 })
  );

  const onUpload = useCallback(
    async (payload: UploadMediaPayload): Promise<boolean> => {
      setIsUploading(true);
      try {
        const formData = new FormData();
        if (payload.file) formData.append('file', payload.file);
        if (payload.altText) formData.append('altText', payload.altText);
        formData.append('title', payload.title);
        formData.append('slug', payload.slug);
        formData.append('category', payload.category);
        formData.append('content', payload.content);
        formData.append('thumbnailUrl', payload.thumbnailUrl);

        const { error: err } = await fetchMultipart<UploadMediaResponse>(
          AdminApiUrl.mediaUpload,
          formData
        );
        if (err) {
          console.error('[useMediaData] onUpload error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useMediaData] onUpload exception:', e);
        return false;
      } finally {
        setIsUploading(false);
      }
    },
    [fetchMultipart, mutate]
  );

  const onUpdate = useCallback(
    async (id: string, payload: UpdateMediaPayload): Promise<boolean> => {
      setIsUpdating(true);
      try {
        const { error: err } = await fetchPUT<UpdateMediaResponse>(
          AdminApiUrl.mediaUpdate(id),
          payload
        );
        if (err) {
          console.error('[useMediaData] onUpdate error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useMediaData] onUpdate exception:', e);
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
        const { error: err } = await fetchDELETE<void>(AdminApiUrl.mediaDelete(id));
        if (err) {
          console.error('[useMediaData] onDelete error:', err);
          return false;
        }
        await mutate();
        return true;
      } catch (e) {
        console.error('[useMediaData] onDelete exception:', e);
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
    isUploading,
    isUpdating,
    isDeleting,
    onUpload,
    onUpdate,
    onDelete,
    mutate,
  };
}
