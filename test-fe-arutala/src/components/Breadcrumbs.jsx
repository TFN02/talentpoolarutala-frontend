import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ productName }) => {
    return (
        <div className="text-md breadcrumbs">
            <ul>
                <li><Link className='text-green-600' to='/'>Products</Link></li>
                <li className='text-green-600'>Detail Product</li>
                <li><p className='truncate w-full max-w-sm'>{productName}</p></li>
            </ul>
        </div>
    )
}

export default Breadcrumbs