import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar  from './assets/layouts/navbar';
import Home from './assets/pages/home/home';
import Products from './assets/pages/products/products';
import Shoes from './assets/pages/byCategory/Shoes';
import Clothing from './assets/pages/byCategory/Clothing';
import Miscellaneous from './assets/pages/byCategory/Miscellaneous';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/byCategory/Shoes" element={<Shoes />} />
            <Route path="/byCategory/Clothing" element={<Clothing />} />
            <Route path="/byCategory/Miscellaneous" element={<Miscellaneous />} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
