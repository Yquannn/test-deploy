import '../index.css';
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productImage from '../assets/2x2 picture.jpg';  // Rename import to productImage

const AddProductPage = () => {
  const [productPicture, setProductPicture] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <button 
        onClick={() => {
          setProductPicture(productImage);  // Use productImage for setting state
          setName("kalii");
          setDescription("Lorem ipsum dolor sit amet.");
        }}
      >
        Add Product
      </button>
      <ProductCard ProductPicture={productPicture} ProductName={name} description={description} />
    </>
  );
}

export default AddProductPage
