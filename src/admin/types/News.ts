// src/admin/types/News.ts
// Type definitions mirroring STTB.Contracts ResponseModels/News and RequestModels/News

export interface NewsListItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string; // ISO date string
  status: string;
  thumbnailUrl: string;
}

export interface GetNewsListResponse {
  items: NewsListItem[];
  totalCount: number;
}

export interface NewsDetail {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}

export interface CreateNewsPayload {
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}

export interface UpdateNewsPayload {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}
