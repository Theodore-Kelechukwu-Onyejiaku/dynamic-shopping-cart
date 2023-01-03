import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar"
import { ShoppingCart } from "./components/ShoppingCart";


function App() {
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
