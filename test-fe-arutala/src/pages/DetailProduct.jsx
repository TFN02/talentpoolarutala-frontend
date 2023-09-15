import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs';
import axios from 'axios';

const DetailProduct = () => {
    const id = useParams().id;
    const [detail, setDetail] = useState([]);
    console.log("idnya:", id);

    useEffect(() => {
        axios.get(`https://62bd8e8dbac21839b605f865.mockapi.io/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setDetail(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section>
            <Breadcrumbs productName={detail.product_name} />
        </section>
    )
}

export default DetailProduct