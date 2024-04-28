import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'
import LoginAndRegister from './components/LoginAndRegister'
import Dashboard from './components/DashBoard/dashbord'
import PageNotFound from './components/DashBoard/screens/PageNotFound'
import Ambulance from './routes/ServiceComponent/Ambulance'
import Fire from './routes/ServiceComponent/Fire'
import Flood from './routes/ServiceComponent/Flood'
import VehicleRecovery from './routes/ServiceComponent/VehicleRecovery'
import Incidents from './components/DashBoard/incident'
import ServiceUsers from './components/DashBoard/serviceuser'
import PublicUser from './components/DashBoard/publicuser'

function App() {
  return (
    <div className="App">
      <div className='glass'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/service/*" element = {<Service/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/signup" element = {<LoginAndRegister/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/dashboard/incident/*" element = {<Incidents/>}/>
        <Route path = "/dashboard/users/*" element = {<PublicUser/>}/>
        <Route path = "/dashboard/services/*" element = {<ServiceUsers/>}/>
        <Route path = "/service/ambulance" element = {<Ambulance/>}/>
        <Route path = "/service/fire" element = {<Fire/>}/>
        <Route path = "/service/flood" element = {<Flood/>}/>
        <Route path = "/service/vehicle" element = {<VehicleRecovery/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
    </div>
  )
}

export default App