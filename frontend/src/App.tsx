import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/Contact-us";
import AboutUs from "./pages/About-us";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      {/* Wrap elements in layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
