import './App.css';
import Home from './pages/Home';
import History from './pages/History';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/History" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
