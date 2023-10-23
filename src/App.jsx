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
      </nav>

      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/details/:id' Component={Details}></Route>{/*ne asteptam sa primim un parametru id. Va fi path variabil */}
        <Route path='/facts' Component={Facts}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
