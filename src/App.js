import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Page/Home';
import Coins from './Page/Coins';
import Coinpage from './Page/Coinpage';
import Coinstrend from './Page/Coinstrend';

function App() {
  return (
    <div >
   <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}  exact></Route>
        <Route path='/coins' element={<Coins></Coins>}  exact></Route>
        <Route path='/coins/:id' element={<Coinpage></Coinpage>}> </Route>
        <Route path='/coins/1' element={<Coinstrend></Coinstrend>}> </Route>

      </Routes>
    </Router>

    </div>
  );
}

export default App;
