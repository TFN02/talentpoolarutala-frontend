// ProductContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0); // Menambahkan state subtotal

  useEffect(() => {
    axios.get('https://62bd8e8dbac21839b605f865.mockapi.io/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Fungsi untuk memperbarui produk berdasarkan ID
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
      return updatedProducts;
    });
  };

  // Fungsi untuk menghitung subtotal
  // useEffect(() => {
  //   const calculatedSubtotal = products.reduce((total, product) => {
  //     if (product.isCart) {
  //       return total + (product.price * product.quantity);
  //     }
  //     return total;
  //   }, 0);
  //   setSubtotal(calculatedSubtotal);
  // }, [products]);

  return (
    <ProductContext.Provider value={{ products, updateProduct, subtotal }}>
      {children}
    </ProductContext.Provider>
  );
}
