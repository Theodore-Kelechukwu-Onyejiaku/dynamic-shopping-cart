import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar"
import { ShoppingCart } from "./components/ShoppingCart";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";




function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="bg-gray-200 h-full">
      <Navbar />
      <ShoppingCart />
      <div className="mb-10 mx-10">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
