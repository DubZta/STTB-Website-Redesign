// src/admin/types/Media.ts
// Type definitions mirroring STTB.Contracts ResponseModels/Media and RequestModels/Media

export interface MediaListItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  url: string;
  thumbnailUrl: string;
  createdAt: string; // ISO date string
}

export interface GetMediaListResponse {
  items: MediaListItem[];
  totalCount: number;
}

export interface MediaDetail {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  url: string;
  thumbnailUrl: string;
  filename: string;
  mimeType: string;
  fileSize: number;
  createdAt: string;
}

export interface UploadMediaPayload {
  file?: File;
  altText?: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  thumbnailUrl: string;
}

export interface UpdateMediaPayload {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  thumbnailUrl: string;
}

export interface UpdateMediaResponse {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  thumbnailUrl: string;
}

export interface UploadMediaResponse {
  id: string;
  url: string;
}
