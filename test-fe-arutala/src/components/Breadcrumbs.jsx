import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ productName }) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link className='text-green-600' to='/'>Products</Link></li>
                <li className='text-green-600'>Detail</li>
                <li>{productName}</li>
            </ul>
        </div>
    )
}

export default Breadcrumbs