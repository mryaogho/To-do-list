import TaskItem from "./TaskItem"

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="m-3 rounded-2xl bg-black p-3 text-white sm:m-7 sm:p-4">
      <h3 className="p-3 text-xl font-bold sm:p-4 sm:text-2xl lg:text-3xl">
        Mes tâches
      </h3>

      <div className="flex flex-col items-center">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList