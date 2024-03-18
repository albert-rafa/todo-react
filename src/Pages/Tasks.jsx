import Item from '../Components/Item'

export default function Add({ tasks, updateTasks }) {
    
    function handleToggleTask(task) {
        const newTasks = tasks.map(t => {
            if(t.id === task.id) {
                return {
                    ...t,
                    done: !t.done
                }
            }
            else return t
        })
        updateTasks(newTasks)
    }

    function handleDeleteTask(task) {
        const newTasks = tasks.filter(t => t.id != task.id)
        updateTasks(newTasks)
    }

    return (
        <div className='w-full h-full flex flex-col gap-3'>
            {tasks.map((task) => {
            return (
              <Item 
                key={task.id}
                task={task}
                handleToggleTask={handleToggleTask}
                handleDeleteTask={handleDeleteTask} 
              />)
          })}
        </div>
    )
}