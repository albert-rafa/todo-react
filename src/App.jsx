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

  function handleAddTask(text) {
    const trimmedText = text.trim()
    if(trimmedText != '') {
      const task = {
        id: Math.random(),
        done: false,
        text: trimmedText
      }
      const newTasks = [...tasks, task]
      setTasks(newTasks)
    }
  }

  function handleToggleTask(task) {
    const newTasks = tasks.map(t => {
      if(t.id === task.id) {
        return {
          ...t,
          done: !t.done
        }
      } else return t
    })
    setTasks(newTasks)
  } 

  function handleDeleteTask(task) {
    const newTasks = tasks.filter((t) => t.id != task.id)
    setTasks(newTasks)
  }

  return (
    <div className='w-full h-full bg-sky-50'>
      <div className='w-full h-full max-w-lg mx-auto flex flex-col justify-start items-center'>
        <h1 className='w-full mt-3 py-3 text-center text-5xl font-heading font-medium antialiased tracking-wide text-sky-800'>ToDo</h1>

        <main className='grow w-full pt-9 px-7 relative bg-sky-300 rounded-t-[4rem]'>

          {showAddPage ? 
            <Add 
              addTask={handleAddTask}
              close={() => setShowAddPage(false)}
            /> :
            <Tasks 
              tasks={tasks} 
              toggleTask={handleToggleTask}
              deleteTask={handleDeleteTask}
              addTask={() => setShowAddPage(true)}
            /> 
          }

        </main>
      </div>
    </div>
  )
}