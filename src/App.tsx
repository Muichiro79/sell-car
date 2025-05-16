import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import SellCar from './pages/SellCar';
import Financing from './pages/Financing';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/cars" element={<SellCar />} />
        <Route path="/about" element={<Financing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
