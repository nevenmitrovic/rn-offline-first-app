import type { ITask } from '../types/ITask';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../utils/apiUtils';

export const useGetTasks = () =>
  useQuery<ITask[]>({
    queryKey: ['tasks'],
    placeholderData: keepPreviousData,
    initialData: [],
    queryFn: () => axiosInstance.get('/tasks'),
  });
