// hooks/use-media-query.ts

import { useState, useEffect } from 'react';

/**
 * Custom hook to track the state of a CSS media query.
 *
 * @param {string} query - The media query to match against.
 * @returns {boolean} - Whether the media query matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);
    documentChangeHandler();

    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}

