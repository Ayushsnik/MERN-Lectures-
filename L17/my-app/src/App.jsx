import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Doubt from './Components/Doubt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Doubt/>
    </div>
  )
}

export default App
