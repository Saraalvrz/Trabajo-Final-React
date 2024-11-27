import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar  from './assets/layouts/navbar';
import Home from './assets/pages/home/home';
import Products from './assets/pages/products/Products';
import Men from './assets/pages/byCategory/Men';
import Women from './assets/pages/byCategory/Women';
import Accesories from './assets/pages/byCategory/Accesories';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/byCategory/Men" element={<Men />} />
            <Route path="/byCategory/Women" element={<Women />} />
            <Route path="/byCategory/Accesories" element={<Accesories />} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
