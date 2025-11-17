import type {KanbanBoardList } from "../../Types/ListTypes";
import { useAppSelector } from "../../store/hooks";
import BoardCard from "../BoardCard/BoardCard";


function BoardLists(){

const boardList = useAppSelector((state) => state.boards.boardList);
//const loading = useAppSelector((state) => state.boards.laoding);
    return(
        <div className="flex gap-15 p-4 items-start">
          {boardList.lists.map((board) => (
            <BoardCard key={board.id} board={board}/>
          ))}
        </div>
    );
}
export default BoardLists