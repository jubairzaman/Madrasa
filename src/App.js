
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/home' element={<Home></Home>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>



      </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
