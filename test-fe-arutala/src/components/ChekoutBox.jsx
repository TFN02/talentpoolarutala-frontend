import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { MdOutlineChat } from 'react-icons/md';
import { BsHeart, BsShare } from 'react-icons/bs';
import ButtonOutline from './ButtonOutline';
import ButtonCart from './ButtonCart';

const ChekoutBox = ({ dataCheckout, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    function formatRupiah(angka) {
        const formatted = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(angka);
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

    const price = dataCheckout.price;
    const formattedPrice = parseFloat(price);
    const subtotal = formattedPrice * quantity;

    const handleAddToCart = () => {
        onAddToCart();
    };

    return (
        <div className='w-64 p-3 bg-white shadow-md border rounded-lg'>
            <p className='text-left font-bold text-md pb-5'>Atur jumlah dan catatan</p>
            <p className='text-left pb-3'>
                {dataCheckout.variant_product[0]}, {dataCheckout.ukuran[0]}
            </p>
            <hr />
            <div className='flex py-3'>
                <div className='border border-gray-500 rounded-lg px-1 w-32 h-9 items-center flex gap-x-7'>
                    <div onClick={decreaseQuantity} className='cursor-pointer text-green-600 p-1 hover:bg-slate-100 hover:rounded-sm hover:p-1'><AiOutlineMinus size={15} /></div>
                    <div>{quantity}</div>
                    <div onClick={increaseQuantity} className='cursor-pointer text-green-600 p-1 hover:bg-slate-100 hover:rounded-sm hover:p-1'><AiOutlinePlus size={15} /></div>
                </div>
                <p className='flex items-center ml-2'>Stok:&nbsp; <strong>{dataCheckout.stok}</strong></p>
            </div>
            <p className='text-left text-green-600 text-sm font-bold flex items-center gap-x-1'><BiPencil />Tambah Catatan</p>
            <div className='flex justify-between py-5'>
                <p className='text-md text-left'>Subtotal</p>
                <p className='text-xl font-bold'>{formatRupiah(subtotal)}</p>
            </div>
            <div className='flex gap-x-3'>
                <ButtonOutline
                    className="border-green-600 text-green-600 text-lg w-28 h-10 hover:bg-transparent hover:text-green-600"
                    buttonName={"Beli"}
                />
                <ButtonCart
                    className="h-10 hover:bg-green-700"
                    buttonName={"Keranjang"}
                    onClick={handleAddToCart}
                />
            </div>
            <div className='flex gap-x-3 justify-evenly pt-3 font-bold'>
                <button className='flex text-sm items-center gap-x-2 bg-transparent'><MdOutlineChat />Chat |</button>
                <button className='flex text-sm items-center gap-x-2 bg-transparent'><BsHeart />Wishlist |</button>
                <button className='flex text-sm items-center gap-x-2 bg-transparent'><BsShare />Share</button>
            </div>
        </div>
    );
}

export default ChekoutBox;
