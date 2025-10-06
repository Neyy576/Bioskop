import React from "react";

export default function Page() {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-900 to-gray-200 text-white flex flex-col">
      <nav className="bg-blue-800 w-full p-1 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Kalkulator Pintar</h1>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl p-3">Masukkan Angka</h1>
        <div className="border-2 border-white rounded-lg p-2 w-96">
          <input className="w-full p-2 rounded text-black" />
        </div>
        <div className="grid grid-cols-4 gap-4 p-3 text-2xl w-96">
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">7</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">8</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">9</button>
          <button className="bg-blue-300 hover:bg-blue-300 p-2 rounded-lg shadow-md">÷</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">4</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">5</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">6</button>
          <button className="bg-blue-300 hover:bg-blue-300 p-2 rounded-lg shadow-md">x</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">1</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">2</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">3</button>
          <button className="bg-blue-300 hover:bg-blue-300 p-2 rounded-lg shadow-md">-</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">0</button>
          <button className="bg-blue-700 hover:bg-blue-400 p-2 rounded-lg shadow-md">.</button>
          <button className="bg-amber-300 hover:bg-blue-300 p-2 rounded-lg shadow-md">=</button>
          <button className="bg-blue-300 hover:bg-blue-400 p-2 rounded-lg shadow-md">+</button>
        </div>
        <div className=" bg-amber-950">Obama Ganteng</div>
      </div>
    </div>
  );
}
