import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import SuppliersPage from "./pages/SuppliersPage";
import CustomerPage from "./pages/CustomerPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  
  return (<>
  
    <ul style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid', paddingBottom:'15px'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/customers'>Customer</Link></li>
      <li><Link to='/orders'>Orders</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
    </ul>

    <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/customers" element={<CustomerPage/>} />
            <Route path="/orders" element={<OrdersPage/>} />
            <Route path="/suppliers" element={<SuppliersPage/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>

  </>
  );
}

export default App;
