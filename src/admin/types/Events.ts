// src/admin/types/Events.ts
// Type definitions mirroring STTB.Contracts ResponseModels/Events and RequestModels/Events

export interface EventListItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  eventDate: string; // ISO date string
  status: string;
  thumbnailUrl: string;
}

export interface GetEventListResponse {
  items: EventListItem[];
  totalCount: number;
}

export interface EventDetail {
  id: string;
  title: string;
  slug: string;
  category: string;
  eventDate: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}

export interface CreateEventPayload {
  title: string;
  slug: string;
  category: string;
  eventDate: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}

export interface UpdateEventPayload {
  id: string;
  title: string;
  slug: string;
  category: string;
  eventDate: string;
  content: string;
  status: string;
  thumbnailUrl: string;
}
