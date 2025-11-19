import { useParams } from "react-router";
import { selectBoardByTitle } from "../../store/BoardSlice";
import { useAppSelector } from "../../store/hooks";
import KanbanListColumn from "../KanbanColumn/KanbanColumn";

function KanbanList(){
    let { name } = useParams();
    const board = useAppSelector(state => selectBoardByTitle(state, name!));
    if (!board) {
        return <h1>There is no List with this name</h1>;
    }

    return(<div className="flex p-4">
          {board.lists.map((kanbanListColumn) => (
            <KanbanListColumn key={kanbanListColumn.id} column={kanbanListColumn}></KanbanListColumn>
          ))}
        </div>
        );
    
}
export default KanbanList