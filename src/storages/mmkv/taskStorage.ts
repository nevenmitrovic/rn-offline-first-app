import type { ITask } from '@/src/types/ITask';
import { createTypeSafeMMKVStorage } from '@/src/utils/mmkvUtils';

export const taskStorage = createTypeSafeMMKVStorage<ITask>('taskStorage');
