import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStoreValue = (key: string) => AsyncStorage.getItem(key) ?? '';
export const setStoreValue = (key: string, value: string) =>
  AsyncStorage.setItem(key, value);
export const deleteStoreValue = (key: string) => AsyncStorage.removeItem(key);
