import Item from "../Components/Item";
import { Plus } from "lucide-react";

export default function Add({ tasks, toggleTask, deleteTask, addTask }) {

  return (
    <div className="w-full h-full flex flex-col gap-3 relative">
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

      <button
        onClick={addTask} 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 size-20 rounded-full flex justify-center items-center bg-sky-800"
      >
        <Plus className="size-3/4 stroke-sky-300" />
      </button>
    </div>
  );
}
