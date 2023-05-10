import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutIndex from "./Pages/AboutPage/AboutIndex";
import HomeIndex from "./Pages/HomePage/HomeIndex";
import ServicesIndex from "./Pages/ServicesPage/ServicesIndex";
import ContactIndex from "./Pages/ContactPage/ContactIndex";
import Navbar from './Components/Navbar/Navbar';
import FooterImdex from './Components/Navbar/FooterComponent/FooterImdex';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeIndex/>}/>
          <Route path='/about' element={<AboutIndex/>}/>
          <Route path='/services' element={<ServicesIndex/>}/>
          <Route path='/contact' element={<ContactIndex/>}/>
          {/* <Route path='*' element={<Error/>}/> */}
        </Routes>
        <FooterImdex/>
      </BrowserRouter>
    </div>
  );
}

export default App;
