import { Trash } from "lucide-react";
import { useState } from "react";

export default function Item({ done, text }) {

  const [taskDone, setTaskDone] = useState(done);

  function handleDoneClick() {
    setTaskDone(prevState => !prevState)
  }

  return (
    <div className="px-2 py-1 border-2 border-amber-600 flex flex-row items-center gap-3">
      <button
        className={`size-4 ${taskDone ? 'bg-black' : 'bg-transparent'} rounded-full border-0 outline-none ring-2 ring-black ring-offset-2 ring-offset-green-500`}
        onClick={handleDoneClick}
      />

      <div className={`grow text-md text-wrap align-middle ${taskDone ? 'line-through decoration-1' : ''}`}>
        {text}
      </div>

      <button>
        <Trash />
      </button>
    </div>
  );
}
