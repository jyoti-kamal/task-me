import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="bg-red-600">
          hy i am red color
        </div>
      </div>
    </>
  )
}

export default App
