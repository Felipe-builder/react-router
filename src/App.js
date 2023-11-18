import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

// 1 - config react router

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products/:id/info' element={<Info />}/>
          <Route path='/products/:id' element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
