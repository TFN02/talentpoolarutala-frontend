import React from 'react'
import { SlOptions } from 'react-icons/sl'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, product_name, price, img_product, rating, jml_terjual }) => {
    return (

        <div className="rounded-lg w-40 bg-white shadow-md border">
            <Link to={`/detail-product/${id}`}>
                <img className='rounded-t-md' src={img_product} alt="foto produk" />
                <div className="card-body p-2">
                    <p className='text-sm text-left font-semibold h-9 line-clamp-2'>{product_name}</p>
                    <p className='font-bold text-lg text-left'>Rp {price}</p>

                    {rating !== 0 && (
                        <div className='flex items-center gap-x-1'>
                            <AiFillStar className='text-yellow-400' />
                            <p className='text-left text-sm text-gray-500'>{rating.toFixed(1)} | Terjual {jml_terjual}</p>
                        </div>
                    )}

                    <SlOptions className='self-end text-gray-400' />
                </div>
            </Link>
        </div>
    )
}

export default ProductItems