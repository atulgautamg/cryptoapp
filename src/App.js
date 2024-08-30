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
import Coins3 from './Page/Coins3';
import Practice from './Page/Practice';
import Index3  from './Index3';
function App() {
  
  return (
    <div >
   <Router>
      <Routes>
      <Route path='/practice' element={<Practice></Practice>}  exact></Route>
        
        <Route path='/' element={<Home></Home>}  exact></Route>
        <Route path='/coins' element={<Coins></Coins>}  exact></Route>
        <Route path='/coins/:id' element={<Coinpage></Coinpage>}> </Route>
        <Route path='/coins/1' element={<Coinstrend></Coinstrend>}> </Route>
         <Route path='/coins1'element={<Coins3></Coins3>} ></Route>
         <Route path='/index'element={<Index3></Index3>} ></Route>
        
      </Routes>
    </Router>

    </div>
  );
}
export default App;
