import type { InfiniteData } from '@tanstack/react-query';
import { useMemo } from 'react';

export const useInfiniteData = <T, K extends keyof T>(
  data: InfiniteData<T> | undefined,
  itemId: K
) =>
  useMemo(
    () => (data?.pages.flatMap(page => page[itemId]) ?? []) as T[K],
    [data, itemId]
  );
