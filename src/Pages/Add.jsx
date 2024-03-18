import { useState } from "react"
import { Check, X } from 'lucide-react'

export default function Add({ tasks, updateTasks, close }) {
    const [text, setText] = useState('')

    function handleAdd() {
        const trimmedText = text.trim()
        if(trimmedText != '') {
            const newTask = {
                id: Math.random(),
                done: false,
                text: trimmedText
            }
    
            const newTasks = [...tasks, newTask]
            updateTasks(newTasks)
        }
        close()
    }

    return (
        <div className="h-full w-full">
            <textarea 
                onChange={e => setText(e.target.value)}
                className="h-1/2 w-full resize-none rounded-3xl p-4 text-xl text-slate-800 focus:outline-none" 
            />

            <div className="w-full mt-10 flex justify-center items-center gap-3">
                <button 
                    onClick={handleAdd}
                    className="size-20 bg-sky-800 flex justify-center items-center rounded-full"
                >
                    <Check className="size-3/4 stroke-sky-300" />
                </button>
                <button 
                    onClick={close}
                    className="size-16 flex justify-center items-center"
                >
                    <X className="size-3/4 stroke-sky-800" />
                </button>
            </div>
        </div>
    )
}