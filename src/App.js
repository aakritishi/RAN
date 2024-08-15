import './index.css';
import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import {Home} from './components/webpage/Home';
import AboutUs from './components/About Us/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutRobo from './components/Robotics/AboutRobo';
import Product from './components/Our-Product/Product';
import ContactUsPage from './components/Contact/ContactUsPage';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: "'Merriweather', serif" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/robotics" element={<AboutRobo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
