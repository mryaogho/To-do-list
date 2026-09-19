import { useState } from "react"

const Input = ({ onAdd }) => {
  const [text, setText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!text.trim()) return

    onAdd(text.trim())
    setText("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-3 flex flex-col gap-3 sm:m-7 sm:flex-row"
    >
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Ajouter une tâche"
        className="min-w-0 flex-1 rounded-2xl border-2 border-black p-3 text-sm sm:text-base lg:text-lg focus:outline-none"
      />

      <button
        type="submit"
        className="rounded-2xl bg-green-500 p-3 text-sm font-bold text-white hover:bg-green-600 active:scale-95 sm:text-base lg:text-lg"
      >
        Ajouter
      </button>
    </form>
  )
}

export default Input