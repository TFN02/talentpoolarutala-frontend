import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuBar = () => {
    const location = useLocation();
  return (
    <section>
        <ul className='flex gap-x-5 border-b-2 py-5'>
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
    </section>
  )
}

export default MenuBar