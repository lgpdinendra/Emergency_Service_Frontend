import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Register from './Components/Register';
import PublicUserLogin from './Components/PublicUserLogin';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div>
      <Router>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/PublicUserLogin" element={<PublicUserLogin />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;