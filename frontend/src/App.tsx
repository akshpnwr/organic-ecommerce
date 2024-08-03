import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/Contact-us";
import AboutUs from "./pages/About-us";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SignUp from "./pages/Sign-up";
import Login from "./pages/Login";
import SignUpSuccess from "./pages/Sign-up-success";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/sign-up-success" element={<SignUpSuccess />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
