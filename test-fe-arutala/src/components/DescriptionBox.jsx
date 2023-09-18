import React, { useState } from 'react'
import VarianProduct from './VarianProduct'
import { Link } from 'react-router-dom'

const DescriptionBox = ({ detailData }) => {
    const [detail, setDetail] = useState(false);

    function formatRupiah(angka) {
        const formatted = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(angka);
        return formatted.replace(/\,00$/, '');
    }

    const onOpen = () => {
        setDetail(true)
    }
    const onClose = () => {
        setDetail(false)
    }

    return (
        <section className='w-full max-w-md'>
            <div className='text-left'>
                <p className='text-lg font-bold leading-6'>{detailData.product_name}</p>
                <p className='text-gray-700 ml-1'>{detailData.jml_view} orang melihat barang ini</p>
                <p className='text-2xl font-bold mt-2'>{formatRupiah(detailData.price)}</p>
            </div>
            <hr className='mt-5' />
            <div className='text-left'>
                <VarianProduct dataVarian={detailData.variant_product} dataUkuran={detailData.ukuran} />
                <ul className='flex gap-x-3 text-lg border-b'>
                    <li className='text-green-600 border-b-2 pb-2 w-1/4 text-center font-semibold border-green-600'>Detail</li>
                    <li>Info Penting</li>
                </ul>
                <p className={!detail ? 'line-clamp-4' : ''}>
                    {detailData.detail_product}
                </p>
                {!detail ?
                    <Link onClick={onOpen} className='text-green-600'>Lihat Selengkapnya</Link>
                    :
                    <Link onClick={onClose} className='text-green-600'>Lihat Lebih Sedikit</Link>
                }

            </div>
        </section>
    )
}

export default DescriptionBox