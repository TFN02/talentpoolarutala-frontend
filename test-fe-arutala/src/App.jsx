import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CatalogProduct from './pages/CatalogProduct'
import BerandaPage from './pages/BerandaPage'
import UlasanPage from './pages/UlasanPage'
import NotFound from './pages/NotFound'
import DetailProduct from './pages/DetailProduct'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CatalogProduct />} />
      <Route path='/beranda' element={<BerandaPage />} />
      <Route path='/ulasan' element={<UlasanPage />} />
      <Route path='/detail-product/:id' element={<DetailProduct />} />




      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
