import { Routes ,Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Modal from './pages/Modal';
import WatchList from './pages/WatchList';

function App() {
  return (
    <>
    <Navbar>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </Navbar>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/modal/:id' element={<Modal/>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
    </Routes>
    </>

  );
}

export default App;

