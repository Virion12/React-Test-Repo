import { Link } from "react-router";
import type { KanbanBoard } from "../../Types/ListTypes";

interface BoardCardProp {
    board : KanbanBoard
}

function BoardCard({board} : BoardCardProp){
return(
    <Link to={`/my-lists/${board.title}`}>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-10 p-5 justify-center">
    <div className="card-body">
       <h1 className="text-center">{board.title}</h1>
    </div>
    </div>
    </Link> 
);
}
export default BoardCard;