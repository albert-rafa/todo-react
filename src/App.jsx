import { useState } from 'react';
import Item from './Components/Item';

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

  function handleDeleteTask(task) {
    // TODO: Implementar remoção da tarefa do array 'tasks'
    console.log(`Delentando tarefa '${task.text}'`)
  }

  return (
    <div className='bg-red-700 w-full h-full'>
      <div className='bg-lime-800 w-full h-full max-w-lg mx-auto flex flex-col justify-start items-center'>
        <h1 className='bg-blue-800 w-full mt-3 py-3 text-center text-4xl'>ToDo</h1>

        <main className='bg-green-500 grow w-full py-4 px-5 flex flex-col justify-start gap-3 '>

          {tasks.map((task) => {
            return (
              <Item 
                key={task.id}
                task={task}
                deleteCallback={handleDeleteTask} 
              />)
          })}

        </main>
      </div>
    </div>
  )
}