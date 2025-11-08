import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="rounded-2xl  p-8 max-w-md w-full ">
        
        <div className="rounded-xl p-8 mb-8 ">
          <p className="text-6xl font-bold text-white text-center">
            {count}
          </p>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={increment}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform shadow-lg cursor-pointer"
          >
            Increment 
          </button>
          
          <button
            onClick={reset}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform  shadow-lg cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}