import './App.css';
import Home from './Pages/Component/HomePage/Home';
import Shops from './Pages/Component/HomePage/Shops';
import {

  Route,
  Routes,

} from "react-router-dom";
import Navbar from './Pages/Component/Shares/Navbar';
import Offers from './Pages/Component/HomePage/Offers';
import Faq from './Pages/Component/HomePage/Faq';
import Contact from './Pages/Component/Contact/Contact';
import Grocery from './Pages/Component/Dashboard/Grocery';
import FishMeats from './Pages/Component/DrawerItem/FishMeats';
import FruitsVegetables from './Pages/Component/DrawerItem/FruitsVegetables';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/shops" element={<Shops></Shops>} />
        <Route path="/grocery" element={<Grocery></Grocery>} />
        <Route path="/offers" element={<Offers></Offers>} />
        <Route path="/faq" element={<Faq></Faq>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path='/fishMeats' element={<FishMeats></FishMeats>}></Route>
        <Route path='/fruitsVegetables' element={<FruitsVegetables></FruitsVegetables>}></Route>
        {/* <Route path="/shops" element={<Shops></Shops>} /> */}
      </Routes>
    </div>
  );
}

export default App;
