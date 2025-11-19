import { useState } from "react";
import type {KanbanBoardList } from "../../Types/ListTypes";
import { useAppSelector } from "../../store/hooks";
import BoardCard from "../BoardCard/BoardCard";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";


function BoardLists(){

const boardList = useAppSelector((state) => state.boards.boardList);

const [open, setOpen] = useState(false);

// const handleOpen = () => setOpen(!open);
//const loading = useAppSelector((state) => state.boards.laoding);
    return(
        <div className="flex gap-4 p-4 items-start items-stretch">
          {boardList.lists.map((board) => (
            <BoardCard key={board.id} board={board}/>
          ))}
           
          <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl" onClick={() => setOpen(true)}>
          <div className="card-body justify-center">
            <h1 className="text-center font-sans font-semibold text-xl ml-10 mr-10 mt-0">+ Add new</h1>
          </div>
          </div>
          
          <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Add new board
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                       <input type="text" placeholder="Name" className="input" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Add
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
          
        </div>
    );
}
export default BoardLists