import type { Task } from "../../Types/ListTypes";

interface kanabanListElementProps{
    element: Task
}


function KanbanListElement({element} : kanabanListElementProps){
return (
    <div className="flex flex-row bg-blue-200 min-h-10 mt-4 p-3 rounded-xl min-w-43">
        <h3 className="text-xs font-sans">{element.title}</h3>
    </div>
);

}

export default KanbanListElement;