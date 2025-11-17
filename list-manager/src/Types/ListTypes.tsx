export interface Task {
  id: number;
  title: string;
  assignedTo: string;
  isDone: boolean;
}

export interface KanbanList {
  id: number;
  title: string;
  tasks: Task[];
}

export interface KanbanBoard {
  id: number;
  title: string;
  lists: KanbanList[];
}

export interface KanbanBoardList {
    id: number,
    title : string,
    lists: KanbanBoard[];
}
