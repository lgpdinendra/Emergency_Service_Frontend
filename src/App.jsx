import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'


function App() {
  return (
    <div className="App">
      <div className='glass'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App