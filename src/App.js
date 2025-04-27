import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';
import About from "./About";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container-fluid'>
          <BurgerMenu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <>
      <p className='delius-regular home home-welcome'>Welcome!</p>
      <h1 className='ibm-plex-serif-semibold'>Cristine Ferlly Wiyanto</h1>
      <br/>
      <Menu/>
      <br/>
      <p className='bottom-text'>  
        2025
      </p>
    </>
  )
}

function Menu(){
  return(
    <>
      <ul className='horizontal-list'>
        {menu_?.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

function BurgerMenu(){
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility
  
  const handleLinkClick = () => {
    setIsOpen(false); // Close menu after clicking a link
  };

  return(
    <nav className='navbar'>
      {/* Burger Icon */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu */}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        {menu_?.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={handleLinkClick}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const menu_ = [
  { name: "About", path: "/About"},
  { name: "Projects", path: "/"},
  { name: "Contact", path: "/"},
];

export default App;
