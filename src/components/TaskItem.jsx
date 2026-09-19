import { GoTrash } from "react-icons/go"

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex w-full flex-col items-center sm:w-[93%]">
      <div className="mb-4 flex w-full items-center justify-between rounded-2xl bg-white p-3 font-bold text-black">
        <input
          type="checkbox"
          className="w-6 h-6 accent-green-500"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />

        <span
          className={`ml-3 min-w-0 flex-1 break-words text-sm sm:text-base lg:text-lg ${
            task.isDone ? "line-through" : ""
          }`}
        >
          {task.text}
        </span>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="cursor-pointer rounded-2xl bg-red-500 p-3 text-lg text-white transition-transform active:scale-95 sm:p-4 sm:text-xl"
        >
          <GoTrash />
        </button>
      </div>
    </div>
  )
}

export default TaskItem