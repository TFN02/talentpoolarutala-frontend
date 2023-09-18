import React from 'react'

const SortBar = () => {
    return (
        <section className='flex items-center gap-x-3 self-end'>
            <p className='font-bold'>Urutkan</p>
            <select defaultValue="Terbaru" className="border border-green-700 py-2 px-5 rounded-lg overscroll-auto ">
                <option>Paling Sesuai</option>
                <option>Terbaru</option>
                <option>Harga Tertinggi</option>
                <option>Harga Terendah</option>
                <option>Ulasan Terbanyak</option>
                <option>Pembelian Terbanyak</option>
                <option>Dilihat Terbanyak</option>
                <option>Pembaruan Terakhir</option>
            </select>
        </section>
    )
}

export default SortBar