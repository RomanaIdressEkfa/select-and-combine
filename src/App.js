import './App.css';
import Home from './Pages/Component/HomePage/Home';
// import Shops from './Pages/Component/Dashboard/Shops';
import {

  Route,
  Routes,

} from "react-router-dom";
import Navbar from './Pages/Component/Shares/Navbar';
import Offers from './Pages/Component/HomePage/Offers';

import FishMeats from './Pages/Component/DrawerItem/FishMeats';
import FruitsVegetables from './Pages/Component/DrawerItem/FruitsVegetables';
import Login from './Pages/Component/ContactPart/Login/Login';
import Snacks from './Pages/Component/DrawerItem/Snacks';
import PetCare from './Pages/Component/DrawerItem/PetCare';
import HomeClean from './Pages/Component/DrawerItem/HomeClean';
import Dairy from './Pages/Component/DrawerItem/Dairy';
import Cooking from './Pages/Component/DrawerItem/Cooking';
import Breakfast from './Pages/Component/DrawerItem/Breakfast';
import Beverage from './Pages/Component/DrawerItem/Beverage';
import HealthBeauty from './Pages/Component/DrawerItem/HealthBeauty';
import Dashboard from './Pages/Component/Dashboard/Dashboard';
import Signin from './Pages/Component/ContactPart/Signin/Signup';
import RequireAuth from './Pages/Component/Auth/RequireAuth';
import Signup from './Pages/Component/ContactPart/Signin/Signup';
import Profile from './Pages/Component/Dashboard/Profile';
// import AdminPanel from './Pages/Component/Dashboard/Shops/AdminPanel';
import Shops from './Pages/Component/Dashboard/Shops/Shops';
import Drawer from './Pages/Component/HomePage/Drawer';
import AdminPanel from './Pages/Component/Dashboard/AdminPanel';
import DrawerItem from './Pages/Component/DrawerItem/DrawerItem';
import NotFound from './Pages/Component/Shares/NotFound';
// import Dashboard from './Pages/Component/DashboardRoute/Dashboard';
// import AddProduct from './Pages/Component/DashboardRoute/AddProduct';
// import { getAuth } from "firebase/auth";
// import app from './firebase_init';

// const auth = getAuth(app);


function App() {

  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/offers" element={<Offers></Offers>} />
        {/* <Route path="/faq" element={<Faq></Faq>} /> */}
        <Route path="login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />

        {/* Dashboard */}
        <Route path='/' element={<Home></Home>}>
          {/* <Route path='drawer' element={<Drawer></Drawer>}></Route> */}
          <Route path='fishMeats' element={<FishMeats></FishMeats>}></Route>
          <Route path='fruitsVegetables' element={<FruitsVegetables></FruitsVegetables>}></Route>
          <Route path='snacks' element={<Snacks></Snacks>}></Route>
          <Route path='petCare' element={<PetCare></PetCare>}></Route>
          <Route path='homeClean' element={<HomeClean></HomeClean>}></Route>
          <Route path='dairy' element={<Dairy></Dairy>}></Route>
          <Route path='cooking' element={<Cooking></Cooking>}></Route>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='beverage' element={<Beverage></Beverage>}></Route>
          <Route path="healthBeauty" element={<HealthBeauty></HealthBeauty>} />
        </Route>



        {/* Admin */}

        <Route path='shops' element={
          <RequireAuth>
            <Shops />
          </RequireAuth>}>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='adminPanel' element={<AdminPanel></AdminPanel>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
