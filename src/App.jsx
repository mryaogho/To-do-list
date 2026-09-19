import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"
import TaskList from "./components/TaskList"

const App = () => {
  const [tasks, setTasks] = useState([])

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isDone: !task.isDone }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      isDone: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-3 sm:p-6">
      <div className="w-full max-w-3xl rounded-3xl bg-white">
        <Header />

        <Input onAdd={addTask} />

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <Footer tasks={tasks} />
      </div>
    </div>
  )
}

export default App