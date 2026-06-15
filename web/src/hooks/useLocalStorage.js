import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initial;
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore quota errors */ }
  }, [key, value]);

  const update = useCallback((next) => {
    setValue(prev => (typeof next === 'function' ? next(prev) : next));
  }, []);

  return [value, update];
}
