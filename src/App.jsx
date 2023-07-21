import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import MainSection from './Components/MainSection'


function App() {
  const [currentTopic, setCurrentTopic] = useState([])
  const [user, setUser] =useState('weegembump')

  return (
    <div className='app'>
      <Header />
      <Nav setCurrentTopic={setCurrentTopic}/>
      <MainSection user={user}/>
    </div>
  )
}

export default App
