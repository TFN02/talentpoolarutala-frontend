import React from 'react'
import ButtonOutline from './ButtonOutline'
import { BiStore, BiShareAlt } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { FaPlusMinus } from 'react-icons/fa6'

const StoreInformation = () => {
    return (
        <section>
            <div className='card border-2 flex flex-row justify-between'>
                <div className='flex'>
                    <img className='w-24 rounded-full' src="/src/assets/logoToko.jpeg" alt="Foto Toko" />
                    <div className='flex flex-col gap-y-1'>
                        <div className='flex'>
                            <img className='w-5 h-5 mr-1 my-1' src="/src/assets/iconProMerchant.png" alt="Icon Merchant" />
                            <p className='font-bold text-xl'>iStorebdg</p>
                        </div>
                        <p className='text-sm text-left'>
                            <strong className='text-green-600'>
                                • Online
                            </strong>
                            &nbsp; • Kota Bandung
                        </p>

                        <div className='flex gap-3 mt-5'>
                            <ButtonOutline buttonName={"Following"} />
                            <ButtonOutline buttonName={"Chat Penjual"} />
                            <BiStore size={30} className='outline outline-gray-400 text-gray-400 p-1.5 rounded-md' />
                            <BiShareAlt size={30} className='outline outline-gray-400 text-gray-400 p-1.5 rounded-md' />
                        </div>
                    </div>
                </div>
                <div className='flex divide-x-2 divide-solid gap-x-5 py-5'>
                    <span className=''>
                        <span className='flex justify-center gap-x-1'>
                            <AiFillStar size={25} className='text-yellow-400' />
                            <p className='font-bold text-lg'>5.0</p>
                        </span>
                        <p className='text-sm'>Rating & Ulasan</p>
                    </span>
                    <span className='pl-5'>
                        <span className='flex justify-center items-center gap-x-1'>
                            <FaPlusMinus size={15} />
                            <p className='font-bold text-lg'>3 jam</p>
                        </span>
                        <p className='text-sm'>pesanan diproses</p>
                    </span>
                    <span className='pl-5'>
                    <span className='flex flex-col gap-y-1'>
                        <p className='font-bold'>Buka 24 jam</p>
                        <p className='text-sm'>Jam operasi toko</p>
                    </span>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default StoreInformation