import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StoreInformation from '../components/StoreInformation'
import MenuBar from '../components/MenuBar'
import CategoryProducts from '../components/CategoryProducts'
import ProductList from '../components/ProductList'
import SortBar from '../components/SortBar'

const CatalogProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://62bd8e8dbac21839b605f865.mockapi.io/products')
      .then((response) => {
        console.log("cek data",response.data.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section>
        <StoreInformation />
        <MenuBar />
        <div className='flex mt-10'>
            <CategoryProducts />
            <div className='flex flex-col px-5'>
                <SortBar />
                <p className='font-bold text-xl text-left'>Semua Produk</p>
                <ProductList products={products} />
            </div>
        </div>
    </section>
  )
}

export default CatalogProduct