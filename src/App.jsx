import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'
import LoginAndRegister from './components/LoginAndRegister'
import Dashboard from './components/DashBoard/dashbord'
import PageNotFound from './components/DashBoard/screens/PageNotFound'
import Incident from './components/DashBoard/incident'

function App() {
  return (
    <div className="App">
      <div className='glass'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/signup" element = {<LoginAndRegister/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/dashboard/reportIncident" element={<Incident/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
    </div>
  )
}

export default App