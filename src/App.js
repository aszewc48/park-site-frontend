import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import AllParks from './pages/AllParks';
import NavBar from './components/NavBar';
import SinglePark from './pages/SinglePark';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/parks' element={<AllParks />} />
        <Route path='/parks/:parkCode' element={<SinglePark />} />
      </Routes>
    </div>
  );
}

export default App;
