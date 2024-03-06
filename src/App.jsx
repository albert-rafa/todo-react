
function App() {
  return (
    <div className='bg-red-700 w-full h-full'>
      <div className='bg-lime-800 w-full h-full max-w-lg mx-auto flex flex-col justify-start items-center'>
        <h1 className='bg-blue-800 w-full mt-3 py-3 text-center text-3xl'>ToDo</h1>

        <main className='bg-green-500 grow w-full py-3 px-5'>
          <div className="border-2 border-amber-600">Item</div>
          <div className="border-2 border-amber-600">Item</div>
          <div className="border-2 border-amber-600">Item</div>
          <div className="border-2 border-amber-600">Item</div>
        </main>
      </div>
    </div>
  )
}

export default App