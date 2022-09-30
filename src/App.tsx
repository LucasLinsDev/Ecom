import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Register } from "./pages/Register/Register";
import { Order } from "./pages/Order/Order";
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/Cart/Cart";
import { About } from "./pages/About/About";
import { Faq } from "./pages/Faq/Faq";
import { Account } from "./pages/Admin/Account/Account";
import ShippingDetails from "./pages/Admin/Shipping/Shipping";
import MyOrders from "./pages/Admin/MyOrder/MyOrder";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/account" element={<Account />} />
      <Route path="/shipping" element={<ShippingDetails />} />
      <Route path="/my-order" element={<MyOrders />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
