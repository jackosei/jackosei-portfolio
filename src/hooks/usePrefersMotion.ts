'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true if we **should** animate:
 *  – user has **not** enabled OS-level "Reduce Motion"
 *  – viewport is wider than the given minWidth (default 768 px)
 */
export function usePrefersMotion(minWidth = 768) {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width:${minWidth}px)`);
    const reduced   = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () =>
      setAllowMotion(mediaQuery.matches && !reduced.matches);

    update();
    mediaQuery.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      mediaQuery.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, [minWidth]);

  return allowMotion;
}
