import { useState } from "react";
import { Trash } from "lucide-react";

export default function Item({ task, handleToggleTask, handleDeleteTask }) {

  const [taskDone, setTaskDone] = useState(task.done);

  function handleTaskDoneClick() {
    setTaskDone(prevState => !prevState)
    handleToggleTask(task)
  }

  return (
    <div className="px-2 py-1 flex flex-row items-center gap-3">
      <button
        className={`size-5 ${taskDone ? 'bg-sky-800' : 'bg-transparent'} outline-none rounded-full border-2 border-sky-800`}
        onClick={handleTaskDoneClick}
      />

      <p className={`grow text-md text-wrap break-words hyphens-auto align-middle ${taskDone ? 'line-through decoration-1' : ''} text-slate-800`}>
        {task.text}
      </p>

      <button onClick={() => handleDeleteTask(task)}>
        <Trash className="stroke-slate-600" />
      </button>
    </div>
  );
}
