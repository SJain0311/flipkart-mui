import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
