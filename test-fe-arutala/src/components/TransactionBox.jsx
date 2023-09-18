import React from 'react'
import ButtonOutline from './ButtonOutline'

const TransactionBox = () => {
    return (
        <div className='w-80 p-3 bg-white shadow-md border rounded-lg'>
            <p className='text-left font-bold text-lg pb-5'>Ringkasan belanja</p>
            <div className='flex text-left text-md justify-between pb-5'>
            <p>Total Harga (2 barang)</p>
            <p>Rp 39.000.000</p>
            </div>
            <hr />
            <div className='flex justify-between py-5'>
                <p className='text-lg text-left font-bold'>Total Harga</p>
                <p className='text-lg font-bold'>Rp 37.000.000</p>
            </div>
            <div className='flex gap-x-3'>
                <ButtonOutline
                    className="text-white border-green-600 bg-green-600 text-lg w-full h-12 hover:bg-green-700"
                    buttonName={"Beli (1)"}
                />
            </div>
        </div>
    )
}

export default TransactionBox