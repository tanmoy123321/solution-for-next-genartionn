
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Otherb from "./components/pages/Otherb";
import Contact from "./components/pages/Contact";
import Footer from "./components/inc/Footer";
function App() {
  return (
    <Router>
      
  
      
                      <div>
      
       
        
        <Routes>
        <Route axact path="/" element={<Home/>}/>
        <Route axact path="/aboutus" element={<Aboutus/>}/>
                <Route axact path="/otherbusiness" element={<Otherb/>}/>
                <Route axact path="/contact" element={<Contact/>}/>
      
        </Routes>

<Footer/>
  </div>
 
  </Router>
 
  );
}

export default App;
