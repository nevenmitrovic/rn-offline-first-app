import { createMMKV } from 'react-native-mmkv';

export const createTypeSafeMMKVStorage = <T>(id: string) => {
  const instance = createMMKV({
    id,
  });

  return {
    getItem: (): T | null => {
      const data = instance.getString(id);
      return data ? JSON.parse(data) : null;
    },
    setItem: (data: T) => {
      instance.set(id, JSON.stringify(data));
    },
    removeItem: () => {
      instance.remove(id);
    },
  };
};
