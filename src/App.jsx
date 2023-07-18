import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import MainSection from './Components/MainSection'


function App() {
  const [currentTopic, setCurrentTopic] = useState([])

  return (
    <div className='app'>
      <Header />
      <Nav setCurrentTopic={setCurrentTopic}/>
      <MainSection />
    </div>
  )
}

export default App
