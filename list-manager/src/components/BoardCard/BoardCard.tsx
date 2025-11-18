import { Link } from "react-router";
import type { KanbanBoard } from "../../Types/ListTypes";

interface BoardCardProp {
    board : KanbanBoard
}

function BoardCard({board} : BoardCardProp){
return(
    <Link to={`/my-lists/${board.title}`}>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  justify-center">
        <h1 className="text-end pt-3 pr-4">...</h1>
    <div className="card-body">
       <h1 className="text-center font-sans font-semibold text-xl ml-10 mr-10 mt-0">{board.title}</h1>
    </div>
    </div>
    </Link> 
);
}
export default BoardCard;