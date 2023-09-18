import React from 'react'
import TransactionBox from '../components/TransactionBox'
import CartCardList from '../components/CartCardList'
import { useProductContext } from '../ProductContext';

const CartPage = () => {
    const { products } = useProductContext();
    const productCart = products.filter((product) => product.isCart === true);
 

    return (
        <div className='flex px-5'>
            <div className='flex flex-col w-full max-w-3xl text-left py-10'>
                <p className='text-2xl font-bold py-3'>Keranjang</p>
                <div className='flex justify-between pb-3 border-b-4 border-gray-100'>
                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" className='checkbox border-black' />
                        &nbsp;Pilih Semua
                    </div>
                    <p className='text-green-600 font-bold'>Hapus</p>
                </div>

                <CartCardList dataCart={productCart} />
            </div>
            <div className='fixed right-20 py-10'>
                <TransactionBox />
            </div>
        </div>
    )
}

export default CartPage