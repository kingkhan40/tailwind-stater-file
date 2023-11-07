import React from 'react';
import "./App.css";
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';



const App = () => {
  return (
   <>
   <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    
    </Routes>
    <Footer/>
   </>
  )
}

export default App;