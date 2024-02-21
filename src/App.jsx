import './App.css';
import React, { useState } from 'react'
import Wheel from './components/Wheel';


function App() {

  const [rotationAngle, setRotationAngle] = useState(0)

  let handleClickleft = () => {
    setRotationAngle(prevAngle => prevAngle - 45)
  }

  let handleClickright = () => {
    setRotationAngle(prevAngle => prevAngle + 45)
  }

  return (
    <div className="">
      <Wheel rotationAngle={rotationAngle} />
      <div style={{ transform: `translate(-50%, -50%)` }} className='w-32 h-32 bg-red-500 absolute top-1/2 left-1/2 rounded-full z-20'></div>
      <div style={{ height: '50vh' }} className="absolute bottom-0 right-0 left-0 w-screen bg-gradient-to-b from-gray-200 via-white to-white z-10
      flex justify-between items-center px-4">
        <div className="flex flex-col items-center">
          <button onClick={handleClickleft} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-8 px-2 rounded">&lt;</button>
        </div>
        <div className="flex flex-col items-center">
          <button onClick={handleClickright} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-8 px-2 rounded">&gt;</button>
        </div>


      </div>
    </div>

  );
}

export default App;
