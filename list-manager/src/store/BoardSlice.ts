import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockBoardList } from "../Mock/MockList";
import type { KanbanBoard, KanbanBoardList } from "../Types/ListTypes";

interface BoardState{
    boardList : KanbanBoardList,
    laoding : boolean
}

const initialState : BoardState = {
    boardList: mockBoardList,
    laoding: false,
}

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    //Add new kanban board
    addBoard: (state, action: PayloadAction<KanbanBoard>) => {
      state.boardList.lists.push(action.payload);
    },
    //Remove one by ID
    removeBoard: (state, action: PayloadAction<number>) => {
        state.boardList.lists=state.boardList.lists.filter(board => board.id !== action.payload);
    },
    //Update one
    updateBoard: (state, action: PayloadAction<KanbanBoard>) => {
        const index = state.boardList.lists.findIndex(
            board => board.id === action.payload.id
        );
        if (index !== -1) {
            state.boardList.lists[index] = action.payload;
        }
    }
    }
});
export const { addBoard, removeBoard, updateBoard } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;