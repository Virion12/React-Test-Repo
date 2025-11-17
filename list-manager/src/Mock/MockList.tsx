import type { KanbanBoardList } from "../Types/ListTypes";

export const mockBoardList: KanbanBoardList = {
  id: 1,
  title: "User's Kanban Boards",
  lists: [
    {
      id: 1,
      title: "Project A",
      lists: [
        {
          id: 1,
          title: "To Do",
          tasks: [
            { id: 1, title: "Create React app", assignedTo: "Alice", isDone: false },
            { id: 2, title: "Install Tailwind CSS", assignedTo: "Bob", isDone: false },
            { id: 3, title: "Set up project structure", assignedTo: "Charlie", isDone: false },
          ],
        },
        {
          id: 2,
          title: "In Progress",
          tasks: [
            { id: 4, title: "Setup Navbar", assignedTo: "Alice", isDone: false },
            { id: 5, title: "Connect API", assignedTo: "Bob", isDone: false },
          ],
        },
        {
          id: 3,
          title: "Done",
          tasks: [
            { id: 6, title: "Define TypeScript types", assignedTo: "Charlie", isDone: true },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Project B",
      lists: [
        {
          id: 4,
          title: "To Do",
          tasks: [
            { id: 7, title: "Create Login Page", assignedTo: "Alice", isDone: false },
            { id: 8, title: "Setup Routing", assignedTo: "Bob", isDone: false },
          ],
        },
        {
          id: 5,
          title: "In Progress",
          tasks: [
            { id: 9, title: "Implement Auth Service", assignedTo: "Charlie", isDone: false },
          ],
        },
        {
          id: 6,
          title: "Done",
          tasks: [
            { id: 10, title: "Initialize Git repo", assignedTo: "Alice", isDone: true },
          ],
        },
      ],
    },
  ],
};
