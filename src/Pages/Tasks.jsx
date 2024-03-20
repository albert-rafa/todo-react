import Item from "../Components/Item";
import { Plus } from "lucide-react";

export default function Add({ tasks, toggleTask, deleteTask, addTask }) {

  return (
    <div className="w-full max-h-[90%] flex flex-col relative overflow-hidden">
      <div className="flex flex-col gap-3 overflow-x-scroll">
        {tasks.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              handleToggleTask={() => toggleTask(task)}
              handleDeleteTask={() => deleteTask(task)}
            />
          );
        })}

        <div className="w-full min-h-24"/>
      </div>
      
      <div className="fixed bottom-2 w-full max-w-md h-28 bg-gradient-to-t from-sky-300 to-transparent flex flex-col justify-end pb-3">
        <button
          onClick={addTask} 
          className="mx-auto size-20 rounded-full flex justify-center items-center bg-sky-800"
        >
          <Plus className="size-3/4 stroke-sky-300" />
        </button>
      </div>
    </div>
  );
}
