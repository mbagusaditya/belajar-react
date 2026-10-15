import './App.css';

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-all hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-lg">
            Card 1
          </div>
          {/* End Card 1 */}

          {/* Card 2 */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-all hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-lg">
            Card 2
          </div>
          {/* End Card 2 */}

          {/* Card 3 */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-all hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-lg">
            Card 3
          </div>
          {/* End Card 3 */}

          {/* Card 4 */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-all hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-lg">
            Card 4
          </div>
          {/* End Card 4 */}

          {/* Card 5 */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-all hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-lg">
            Card 5
          </div>
          {/* End Card 5 */}
        </div>
      </div>
    </>
  );
}

export default App;
