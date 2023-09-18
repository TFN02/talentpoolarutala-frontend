import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs';
import DescriptionBox from '../components/DescriptionBox';
import ChekoutBox from '../components/ChekoutBox';
import { useProductContext } from '../ProductContext';

const DetailProduct = () => {
    const { products, updateProduct } = useProductContext();
    const { id } = useParams();
  
    const detail = products.find((product) => product.id === id);
  
    if (!detail) {
      return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        const updatedDetail = { ...detail, isCart: true };
        updateProduct(updatedDetail);
      };
    

    return (
        <section className='relative px-10'>
            <Breadcrumbs productName={detail.product_name} />
            <div className='grid grid-cols-3 gap-x-5'>
                <img className='fixed w-72 mt-6 rounded-lg' src={detail.img_product} alt="" />
                <div className='absolute left-1/2 transform -translate-x-1/2 py-6'> 
                    <DescriptionBox detailData={detail} />
                </div>
                <div className='fixed right-20 py-5'>
                    <ChekoutBox dataCheckout={detail} onAddToCart={handleAddToCart} />
                </div>
            </div>
        </section>

    )
}

export default DetailProduct