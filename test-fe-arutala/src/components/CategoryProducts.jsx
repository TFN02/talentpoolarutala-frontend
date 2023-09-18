import React from 'react'
import { getAllCategory } from '../utils'

const CategoryProducts = () => {
  const dataCategory = getAllCategory();
  return (
    <section className='flex flex-col shadow-md bg-white border rounded-xl py-2 gap-y-3 px-2'>
      <p className='flex self-start text-lg font-bold'>Etalase Toko ({dataCategory.length})</p>
      {
        dataCategory.map((category, index) => (
          <span key={index} className='flex flex-col w-64'>
            <button className='text-left text-lg bg-transparent py-1 pl-3 hover:font-bold hover:bg-gray-100 hover:rounded-lg'>{category.title}</button>
          </span>
        ))
      }
    </section>
  )
}

export default CategoryProducts