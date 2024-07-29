import { Link } from 'react-router-dom';
import React from 'react';

function ProductCard({ productPicture, ProductName, description }) {
  return (
    <div className='inline-block max-w-72 border border-solid rounded-xl p-4 shadow-md text-center m-10'>
      <img className='h-48 w-48 snap-center mx-auto' src={productPicture} alt={`${ProductName} profile`} />
      <h2 className='text-xl font-bold mt-3'>{ProductName}</h2>
      <p className='text-center text-sm text-zinc-400'>{description}</p>
      <div className='m-4 flex justify-between'>
        <Link to="/cart" className='bg-gray-200 p-2 rounded-xl'>
          Add to Cart
        </Link>
        <Link to="/checkout" className='bg-slate-800 text-white p-2 rounded-xl'>
          Buy now
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
