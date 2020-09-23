
import React, { useState } from 'react'
import TaskList from './TaskList'
import TaskInput from './TaskInput'
import { Task } from './Types'
import './App.css'

const initialState: Task[] = [
  {
    id: 2,
    title: "second task",
    done: false
  }, {
    id: 1,
    title: "first task",
    done: true
  }
]


const App:React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div className="">
      <TaskInput setTasks={setTasks} tasks={tasks}/>
      <TaskList setTasks={setTasks} tasks={tasks}/>
    </div>
  )
}


export default App;