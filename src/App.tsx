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
import { EditorPage } from "./pages/EditorPage/EditorPage";
import { MenuContainer } from "./components/Header/MenuContainer/MenuContainer";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Default } from "./pages/Default/Default";
import { PageOne } from "./pages/LandingEditor/PageOne/PageOne";
import { PageTwo } from "./pages/LandingEditor/PageTwo/PageTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
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
      <Route path="/editing" element={<EditorPage />} />
      <Route path="/drop" element={<MenuContainer />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/default" element={<Default />} />
      <Route path="/page" element={<PageTwo />} />
    </Routes>
  );
}

export default App;
