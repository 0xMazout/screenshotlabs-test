"use client";

import { useState, useEffect } from "react";

// Hook personnalisé pour débouncer une valeur
export const useDebounce = (value: unknown, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
