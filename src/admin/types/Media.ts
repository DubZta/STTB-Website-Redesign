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
  createdAt: string;
}

export interface UploadMediaPayload {
  title: string;
  slug: string;
  category: "book" | "video" | "photo" | "article";
  thumbnailUrl: string;
  url: string;
  altText?: string;
  content: string;
}

export interface UpdateMediaPayload {
  id: string;
  title: string;
  slug: string;
  category: "book" | "video" | "photo" | "article";
  content: string;
  thumbnailUrl: string;
  url: string;
}

export interface UpdateMediaResponse {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  thumbnailUrl: string;
  url: string;
}

export interface UploadMediaResponse {
  id: string;
  url: string;
}
