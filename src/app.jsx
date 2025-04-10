import ItemForm from './features/items/ItemForm'
import ItemList from './features/items/ItemList'



const App = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 p-6">
    <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-md">Redux CRUD</h1>
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl">
      <ItemForm />
    </div>
    <div className="bg-white p-8 rounded-xl shadow-2xl mt-8 w-full max-w-3xl">
      <ItemList />
    </div>
  </div>
)

export default App