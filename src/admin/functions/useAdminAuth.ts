// src/admin/functions/useAdminAuth.ts
// Centralized authentication hook for the Admin module.

import { useState, useCallback, useEffect } from 'react';
import { AdminApiUrl } from './AdminApiUrl';
import { setAdminToken, clearAdminToken, isAdminAuthenticated } from './useAdminFetch';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAdminAuthenticated());
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Re-check auth status when hook is initialized
  useEffect(() => {
    setIsAuthenticated(isAdminAuthenticated());
  }, []);

  const login = useCallback(async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoggingIn(true);
    try {
      const response = await fetch(AdminApiUrl.token, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        return { success: false, error: errData.message || 'Invalid username or password.' };
      }

      const result = await response.json() as { access_token?: string };

      if (!result.access_token) {
        return { success: false, error: 'Authentication failed. Please try again.' };
      }

      setAdminToken(result.access_token);
      setIsAuthenticated(true);
      return { success: true };
    } catch (err) {
      console.error('[useAdminAuth] login exception:', err);
      return { success: false, error: 'Cannot connect to server.' };
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const logout = useCallback(() => {
    clearAdminToken();
    setIsAuthenticated(false);
    window.location.href = '/admin/';
  }, []);

  return {
    isAuthenticated,
    isLoggingIn,
    login,
    logout,
  };
}
