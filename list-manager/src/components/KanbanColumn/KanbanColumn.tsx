import { useState } from "react";
import type { KanbanList, Task } from "../../Types/ListTypes";
import KanbanListElement from "../KanbanListElement/KanbanListElement";

interface kanbanListColumnProps {
    column: KanbanList
}


function KanbanListColumn({column} : kanbanListColumnProps){
    const [isInAddtionMode, setIsInAdditionMode] = useState<boolean>(false);
    const [activeInput, setActiveInput] = useState<string>(""); 
    const [tasks, setTasks] = useState<Task[]>(column.tasks);

    return (
        <div className="flex flex-col  p-4 items-start w-40 m-10 bg-base-100 shadow-2xl min-w-50 min-h-100 rounded-2xl">

  <div className="flex justify-between w-full">
    <span className="ml-1 mb-2 text-2xl">{column.title}</span>
    <span className="mr-1 mb-2 text-2xl">...</span>
  </div>

  {tasks.map((task) => (
    <KanbanListElement key={task.id} element={task} />
  ))}

    <textarea 
            className={`textarea mt-3 min-h-3 p-2 resize-none ${isInAddtionMode === true ? '' : 'hidden'}`}
            placeholder="Bio"
            value={activeInput}
            onChange={e => setActiveInput(e.target.value)}
            
          />
  <div className="mt-auto w-full">
    <button
      className={`btn h-10 btn-wide mt-0 btn-active bg-blue-500 text-white w-full ${isInAddtionMode ? 'hidden' : ''}`} onClick={() => setIsInAdditionMode(true)}
    >
      Add New
    </button>


    <div className={`flex justify-evenly mt-4 w-full ${isInAddtionMode ? '' : 'hidden'}`}>
      <button className="btn h-10 w-2/5 rounded-md btn-active bg-blue-500 text-white" onClick={() => {
        if(activeInput != ''){
            setTasks([...tasks,
                {id: tasks.length+1, isDone: false,title:activeInput,assignedTo: ""}
            ]);
            setActiveInput('');
            setIsInAdditionMode(false);
        }else{
            setIsInAdditionMode(false);
        }



      }}>
        Save
      </button>
      <button className="btn h-10 w-2/5 rounded-md btn-active bg-red-500 text-white" onClick={() => setIsInAdditionMode(false)}>
        Cancel
      </button>
    </div>
  </div>
</div>

    );
}

export default KanbanListColumn