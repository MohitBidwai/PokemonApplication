
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FetchPokedex from './components/FetchPokedex.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-500 text-white p-4 rounded mb-4">
        
      </div>
      <FetchPokedex />
    </>
  );
}

export default App
