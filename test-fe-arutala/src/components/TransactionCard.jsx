import React, { useState } from 'react'
import ButtonOutline from './ButtonOutline'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { SlArrowRight, SlOptions } from 'react-icons/sl'
import { BsSearch } from 'react-icons/bs'
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia'

const TransactionCard = () => {
    return (
        <section>
            <p className='text-xl font-bold text-left mb-5 ml-1'>Daftar Transaksi</p>
            <div className='card bg-white shadow-md border'>
                <div className='grid grid-cols-3 pb-5 space-x-3'>
                    <BsSearch className='absolute inset-x-14 inset-y-11' size={20} />
                    <input type="search" placeholder='Cari trasaksimu di sini' className='border border-black p-2 pl-10 rounded-lg' />
                    <select defaultValue="Semua Produk" className='rounded-lg px-2 border border-black'>
                        <option value="">Semua Produk</option>
                    </select>
                    <input type="date" className='border border-black px-2 rounded-lg' />
                </div>
                <div className='flex gap-x-2 items-center pb-5 pl-5'>
                    <p className='pr-2 font-bold'>Status</p>
                    <ButtonOutline
                        className="bg-green-100 h-10 rounded-xl border-green-600 text-green-600"
                        buttonName={"Semua"}
                    />
                    <ButtonOutline
                        className="h-10 rounded-xl border-gray-600 text-gray-600"
                        buttonName={"Berlangsung"}
                    />
                    <ButtonOutline
                        className="h-10 rounded-xl border-gray-600 text-gray-600"
                        buttonName={"Berhasil"}
                    />
                    <ButtonOutline
                        className="h-10 rounded-xl border-gray-600 text-gray-600"
                        buttonName={"Tidak Berhasil"}
                    />
                    <ButtonOutline
                        className="h-10 rounded-xl border-gray-600 text-gray-600"
                        buttonName={"E-tiket & voucher Aktif"}
                    />

                    <p className='font-bold text-green-600 pl-5'>Reset Filter</p>
                </div>
                <div className='flex items-center justify-between border border-gray-300 rounded-lg p-3 mb-5'>
                    <div className='flex items-center gap-x-2'>
                        <LiaMoneyBillWaveAltSolid size={25} className='text-green-600' />
                        <p>Menunggu Pembayaran</p>
                    </div>
                    <SlArrowRight />
                </div>
                <div className='card bg-white shadow-md border'>
                    <div className='flex gap-x-3 items-center'>
                        <HiOutlineShoppingBag size={20} />
                        <p className='font-bold'>Belanja</p>
                        <p className='font-semibold'>10 Feb 2023</p>
                        <p className='bg-green-100 font-bold text-green-600 px-3'>Selesai</p>
                        <p>IVR/20230820/XXIII/VIII/1730297017</p>
                    </div>
                    <div className='flex gap-x-3 items-center py-5'>
                        <img src="/src/assets/iconProMerchant.png" className='w-5 h-5' alt="merchant" />
                        <p className='text-md font-bold'>iStorebdg</p>
                    </div>
                    <div className='flex justify-between pr-28'>
                        <div className='flex gap-x-3'>
                            <img src="/src/assets/fotoProduct.jpg" className='w-20 rounded-lg' alt="product" />
                            <div className='text-left'>
                                <p className='text-lg font-bold truncate'>Hayaidesu Handgrip THE STORM - Hand Grip Stang Motor Universal - Hitam</p>
                                <p className='text-sm'>1 Barang x Rp80.000.000</p>
                            </div>
                        </div>
                        <div className='flex flex-col border-l-2 pl-5'>
                            <p>Total Belanja</p>
                            <p className='font-bold'>Rp80.000.000</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center gap-x-3'>
                        <SlOptions size={40} className='border border-gray-400 p-2 rounded-lg text-gray-400' />
                        <ButtonOutline
                            className="bg-green-600 text-white w-28 h-10"
                            buttonName={"Beli Lagi"}
                        />

                        <p className="text-green-600 font-bold cursor-pointer" onClick={() => document.getElementById('modal').showModal()}>Lihat Detail Transaksi</p>
                        <dialog id="modal" className="modal">
                            <div className="modal-box w-full max-w-2xl">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <p className="font-bold text-lg text-left p-3">Detail Transaksi</p>
                                    <hr />
                                </div>
                                <div className='flex justify-between items-center px-3'>
                                    <p className='font-bold'>Selesai</p>
                                    <div tabIndex={0} className="collapse collapse-arrow w-40">
                                        <div className="collapse-title text-md text-green-600 font-bold">
                                            Lihat Detail
                                        </div>
                                        <div className="collapse-content">
                                            <p>Transaksi Selesai</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 px-3 border-b-4 pb-3'>
                                    <div className='flex flex-col gap-y-2 text-left text-sm '>
                                        <p>No. Invoice</p>
                                        <p>Tanggal Pembelian</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2 text-right text-sm'>
                                        <p className='text-green-600 font-bold'>INV/20220909/MPL/2643451740</p>
                                        <p>09 September 2022, 20:17 WIB</p>
                                    </div>
                                </div>
                                <div className='flex justify-between py-5 px-3'>
                                    <p className='font-bold'>Detail Produk</p>
                                    <div className='flex items-center gap-x-2'>
                                        <img src="/src/assets/iconProMerchant.png" className='w-5 h-5' alt="" />
                                        <p>iStorebdg</p>
                                    </div>
                                </div>
                                <div className='flex gap-x-5 border border-gray-300 p-3 rounded-lg'>
                                    <div className='border-r pr-3 w-9/12'>
                                        <div className='flex'>
                                            <img src="/src/assets/fotoProduct.jpg" className='w-20' alt="" />
                                            <p className='font-bold text-left ml-3'>Apple Macbook Pro 2023 14 inch M2 Pro M2 Max 512GB 1TB Garansi iBox - inter M2 Pro, 16/512GB Silver</p>

                                        </div>
                                        <p className='text-left ml-24 text-sm'>1 x Rp39.000.000</p>
                                    </div>
                                    <div className='flex flex-col pl-5 text-right'>
                                        <p>Total Harga</p>
                                        <p className='font-bold mb-3'>Rp39.000.000</p>
                                        <ButtonOutline
                                            className="text-green-600 w-32"
                                            buttonName={"Beli Lagi"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransactionCard