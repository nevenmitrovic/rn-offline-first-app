export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
  syncStatus: 'synced' | 'pending'; // conflict?
}
