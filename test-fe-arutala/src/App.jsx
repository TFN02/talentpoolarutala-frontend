import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CatalogProduct from './pages/CatalogProduct'
import BerandaPage from './pages/BerandaPage'
import UlasanPage from './pages/UlasanPage'
import NotFound from './pages/NotFound'
import DetailProduct from './pages/DetailProduct'
import { ProductProvider } from './ProductContext'
import CartPage from './pages/CartPage'
import ListTransaction from './pages/ListTransaction'
import DetailTransaction from './pages/DetailTransaction'


function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<CatalogProduct />} />
          <Route path='/beranda' element={<BerandaPage />} />
          <Route path='/ulasan' element={<UlasanPage />} />
          <Route path='/detail-product/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/list-transaction' element={<ListTransaction />} />
          <Route path='/list-transaction/detail' element={<DetailTransaction />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
