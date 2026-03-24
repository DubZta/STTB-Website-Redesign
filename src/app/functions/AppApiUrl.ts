export const BACKEND_BASE_URL = 'http://localhost:5285';

export const AppApiUrl = {
  getNewsList: `${BACKEND_BASE_URL}/api/News`,
  getNewsDetail: (id: string) => `${BACKEND_BASE_URL}/api/News/${id}`,
  
  getEventList: `${BACKEND_BASE_URL}/api/Events`,
  getEventDetail: (id: string) => `${BACKEND_BASE_URL}/api/Events/${id}`,
  
  getMediaList: `${BACKEND_BASE_URL}/api/Media`,
  getMediaDetail: (id: string) => `${BACKEND_BASE_URL}/api/Media/${id}`,
};
