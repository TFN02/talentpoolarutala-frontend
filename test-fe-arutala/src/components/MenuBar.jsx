import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const MenuBar = () => {
  const location = useLocation();
  return (
    <section className='flex justify-between pr-5 gap-x-5 border-b-2 pt-5'>
      <ul className='flex '>
        <li className='ml-5 text-xl'>
          <Link to="/beranda" className={location.pathname === '/beranda' ? 'border-b-2 border-green-600 p-5 text-green-600 font-bold' : ''}>
            Beranda
          </Link>
        </li>
        <li className='text-xl'>
          <Link to="/" className={location.pathname === '/' ? 'border-b-2 border-green-600 p-5 text-green-600 font-bold' : ''}>
            Produk
          </Link>
        </li>
        <li className='text-xl'>
          <Link to="/ulasan" className={location.pathname === '/ulasan' ? 'border-b-2 border-green-600 p-5 text-green-600 font-bold' : ''}>
            Ulasan
          </Link>
        </li>
      </ul>

      <div className='flex items-center'>
        <Link to='/cart'>
          <div className='flex gap-x-3 font-bold text-green-700 items-center py-3 px-5'>
            <FaShoppingCart size={25} />
            <p>Keranjang</p>
          </div>
        </Link>

        <Link to='/list-transaction'>
          <p className='text-green-700 font-bold'>List Transaksi</p>
        </Link>
      </div>
    </section>
  )
}

export default MenuBar