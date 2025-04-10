// src/features/items/ItemList.jsx
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, editItem } from './ItemSlice'
import { useState } from 'react'

const ItemList = () => {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  return (
    <ul className="space-y-4 mt-6">
      {items.map((item) => (
        <li key={item.id} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          {editingId === item.id ? (
            <div className="flex items-center gap-2">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => {
                  dispatch(editItem({ id: item.id, newText: editText }))
                  setEditingId(null)
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-gray-800">{item.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingId(item.id)
                    setEditText(item.text)
                  }}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteItem(item.id))}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ItemList
