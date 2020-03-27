export interface Task {
  name: string;
  description: string;
  mark: boolean;
}
export interface TaskList {
  taskList: Task[];
}
