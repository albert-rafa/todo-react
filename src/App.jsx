import Item from './Components/Item';

export default function App() {
  const tasks = [
    {
      done: false,
      text: "Tarefa número 1"
    },
    {
      done: true,
      text: "Estudar React"
    },
    {
      done: false,
      text: "Dar push depois que terminar"
    }
  ]

  return (
    <div className='bg-red-700 w-full h-full'>
      <div className='bg-lime-800 w-full h-full max-w-lg mx-auto flex flex-col justify-start items-center'>
        <h1 className='bg-blue-800 w-full mt-3 py-3 text-center text-4xl'>ToDo</h1>

        <main className='bg-green-500 grow w-full py-4 px-5 flex flex-col justify-start gap-3 '>

          {tasks.map((task) => {
            return <Item done={task.done} text={task.text} />
          })}

        </main>
      </div>
    </div>
  )
}