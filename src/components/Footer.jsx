const Footer = ({ tasks }) => {
  const completedTasks = tasks.filter(
    (task) => task.isDone
  ).length

  return (
    <div>
      <hr className="mx-4 sm:mx-20" />

      <div className="m-4 flex flex-col items-center justify-around gap-2 sm:flex-row">
        <h5 className="text-lg font-bold text-red-500 sm:text-xl lg:text-2xl">
          Tâche : {tasks.length}
        </h5>

        <h5 className="text-lg font-bold text-green-500 sm:text-xl lg:text-2xl">
          Terminée : {completedTasks}
        </h5>
      </div>
    </div>
  )
}

export default Footer