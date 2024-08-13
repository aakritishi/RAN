import './index.css';
import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import Home from './components/webpage/Home';
import AboutUs from './components/About Us/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
