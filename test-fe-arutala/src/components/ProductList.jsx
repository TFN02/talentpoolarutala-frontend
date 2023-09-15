import React from 'react'
import ProductItems from './ProductItems'

const ProductList = ({ products }) => {

  return (
    <section className='flex flex-wrap gap-5 py-5 justify-center'>
      {products.map((item) => (

        <ProductItems key={item.id} {...item} />
        ))}
    </section>
  )
}

export default ProductList