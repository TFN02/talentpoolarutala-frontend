import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StoreInformation from '../components/StoreInformation'
import MenuBar from '../components/MenuBar'
import CategoryProducts from '../components/CategoryProducts'
import ProductList from '../components/ProductList'
import SortBar from '../components/SortBar'
import { useProductContext } from '../ProductContext'

const CatalogProduct = () => {
  const { products } = useProductContext();

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