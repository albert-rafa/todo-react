import { useState } from 'react';
import Tasks from './Pages/Tasks';
import Add from './Pages/Add';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      done: false,
      text: "Tarefa número 1"
    },
    {
      id: 2,
      done: true,
      text: "Estudar React"
    },
    {
      id: 3,
      done: false,
      text: "Dar push depois que terminar"
    }
  ])

  const [showAddPage, setShowAddPage] = useState(false)

  return (
    <div className='w-full h-full bg-sky-50'>
      <div className='w-full h-full max-w-lg mx-auto flex flex-col justify-start items-center'>
        <h1 className='w-full mt-3 py-3 text-center text-5xl font-heading font-medium antialiased tracking-wide text-sky-800'>ToDo</h1>

        <main className='grow w-full pt-9 px-7 relative bg-sky-300 rounded-t-[4rem]'>

          {showAddPage ? 
            <Add /> :
            <Tasks tasks={tasks} updateTasks={setTasks} /> 
          }

        </main>
      </div>
    </div>
  )
}