import './index.css';
import  Header  from './components/navbar/Header';
import Footer from "./components/navbar/Footer";
import Home from "./components/webpage/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
