import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <LifecycleClass/>
      <LifecycleFunction/>
    </div>
  )
}

export default App
