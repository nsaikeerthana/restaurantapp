import react from 'react';
import Home from './pages/User/Home';
import AboutUs from './pages/User/AboutUs';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import ContactUs from './pages/User/ContactUs';
import HomePage from './pages/User/HomePage';
import Menu from './pages/User/Menu';
import SearchMenu from './pages/User/SearchMenu';
import ReserveTable from './pages/User/ReserveTable';
import TimeSlot from './pages/User/TimeSlot';
import PaymentForm from './pages/User/PaymentForm';
import OrderSummary from './pages/User/OrderSummary';
import Cart from './pages/User/Cart';
import StaffLogin from './pages/Staff/StaffLogin';
import HistoryOrders from './pages/Staff/HistoryOrders';
import OrdersPlaced from './pages/Staff/OrdersPlaced';
import EmployeeProfile from './pages/Staff/EmployeeProfile';
import EmployeeDashboard from './pages/Staff/EmployeeDashboard';
import OwnerLogin from './pages/Owner/OwnerLogin';
import ItemCart from './pages/Owner/ItemCart';
import EmployeeList from './pages/Owner/EmployeeList';
import ProfileUpdate from './pages/Owner/ProfileUpdate';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';;
function App() {
  return (
  <div>
    <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/signIn" element={<SignIn/>} />
              <Route path="/signUp" element={<SignUp/>} />
              <Route path="/contactUs" element={<ContactUs/>} />
              <Route path="/homePage"  element={<HomePage/>}/>
              <Route path="/menu"  element={<Menu/>}/>
              <Route path="/reserveTable"  element={<ReserveTable/>}/>
              <Route path="/searchMenu"  element={<SearchMenu/>}/>
              <Route path="/cart"  element={<Cart/>}/>
              <Route path="/orderSummary" element={<OrderSummary/>}/>
              <Route path="/timeSlot" element={<TimeSlot/>}/>
              <Route path="/payment" element={<PaymentForm/>}/>
              <Route path="/orders" element={<OrdersPlaced/>}/>
              <Route path="/profile" element={<EmployeeProfile/>}/>
              <Route path="/history" element={<HistoryOrders/>}/>
              <Route path="/dashboard" element={<EmployeeDashboard/>}/>
              <Route path="/stafflogin" element={<StaffLogin/>}/>
              <Route path="/ownerlogin" element={<OwnerLogin/>}/>
              <Route path="/items-list" element={<ItemCart/>}/>
              <Route path="/items-list" element={<ItemCart/>}/>
              <Route path="/employee-list" element={<EmployeeList/>}/>
              <Route path="/employee-profile" element={<ProfileUpdate/>}/>
          </Routes>
      </Router>
      </div>
  );
}
export default App;
