import { useState } from "react";
import { Trash } from "lucide-react";

export default function Item({ task, handleToggleTask, handleDeleteTask }) {

  const [taskDone, setTaskDone] = useState(task.done);

  function handleTaskDoneClick() {
    setTaskDone(prevState => !prevState)
    handleToggleTask(task)
  }

  return (
    <div className="px-2 py-1 border-2 border-amber-600 flex flex-row items-center gap-3">
      <button
        className={`size-4 ${taskDone ? 'bg-black' : 'bg-transparent'} rounded-full border-0 outline-none ring-2 ring-black ring-offset-2 ring-offset-green-500`}
        onClick={handleTaskDoneClick}
      />

      <div className={`grow text-md text-wrap align-middle ${taskDone ? 'line-through decoration-1' : ''}`}>
        {task.text}
      </div>

      <button onClick={() => handleDeleteTask(task)}>
        <Trash />
      </button>
    </div>
  );
}
