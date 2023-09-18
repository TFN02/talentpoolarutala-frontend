import React, { useState } from 'react'
import { BiMinusCircle, BiPlusCircle, BiTrash } from 'react-icons/bi'
import { useProductContext } from '../ProductContext';

const CartCardList = ({ dataCart }) => {
    const [quantity, setQuantity] = useState(1);

    function formatRupiah(price) {
        const formatted = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(price);
        return formatted.replace(/\,00$/, '');
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className='border-b-4 border-gray-100 py-5'> 
                        <div className='flex items-center gap-x-3 pb-5'>
                            <input type="checkbox" className='checkbox border-black' />
                            <div>
                                <div className='flex items-center gap-x-2 font-bold'>
                                    <img
                                        className='w-5 h-5'
                                        src="/src/assets/iconProMerchant.png"
                                        alt="icon merchant" />
                                    <span>iStorebdg</span>
                                </div>
                                <p className='text-sm '>Kota Bandung</p>
                            </div>
                        </div>
                        {dataCart.map((cart) => (
                            <div key={cart.id}> 
                            <hr className='py-3' />
                        <div className='flex items-center gap-x-3'>
                            <input type="checkbox" className='checkbox border-black' />
                            <img
                                className='w-20 rounded-xl'
                                src="/src/assets/fotoProduct.jpg"
                                alt="foto produk" />
                            <div>
                                <p className='truncate w-full max-w-xl text-lg'>{cart.product_name}</p>
                                <p className='text-sm mb-3'>{cart.variant_product[0]}, {cart.ukuran[0]}</p>
                                <p className='text-md font-bold'>{formatRupiah(cart.price)}</p>
                            </div>
                        </div>
                        <div className='flex justify-between pt-5 ml-10'>
                            <p className='text-green-600 text-md'>Tulis Catatan</p>
                            <div className='flex items-center gap-x-2 text-gray-500'>
                                <p className='border-r-2 pr-3'>Pindahkan ke Wishlist</p>
                                <BiTrash size={20} />
                                <div className='rounded-lg ml-5 w-32 h-9 items-center flex gap-x-5'>
                                    <div onClick={decreaseQuantity} className='cursor-pointer text-green-600'><BiMinusCircle size={25} /></div>
                                    <div>{quantity}</div>
                                    <div onClick={increaseQuantity} className='cursor-pointer text-green-600'><BiPlusCircle size={25} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
            </div>
        </>
    )
}

export default CartCardList