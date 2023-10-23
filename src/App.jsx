import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Facts from './routes/Facts';
import Details from './routes/Details';

function App() {
  return (
    <BrowserRouter>
     <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/facts">Facts</Link></li>
        </ul>
        
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/details' Component={Details}></Route>
          <Route path='/facts' Component={Facts}></Route>
        </Routes>
      </nav>
      </BrowserRouter>
  );
}

export default App;
