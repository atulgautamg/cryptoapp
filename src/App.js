import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Page/Home';
import Coins from './Page/Coins';
import Coinpage from './Page/Coinpage';

function App() {
  return (
    <div >
   <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}  exact></Route>
        <Route path='/coins' element={<Coins></Coins>}  exact></Route>
        <Route path='/coins/:id' element={<Coinpage></Coinpage>}> </Route>
        
      </Routes>
    </Router>

    </div>
  );
}

export default App;
