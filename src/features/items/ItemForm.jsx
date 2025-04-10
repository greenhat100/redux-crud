import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './ItemSlice'

const ItemForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addItem(text))
      setText('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-white rounded-2xl shadow-md w-full max-w-xl mx-auto mt-6"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add item"
        className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow"
      >
        Add
      </button>
    </form>
  )
}

export default ItemForm
