import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='card bg-white rounded p-2'>
        <img className='w-[100%] rounded' src={product.thumbnail} alt={product.title} />
        <h2 className='text-[16px] font-bold p-3 text-center'>{product?.title}</h2>
    </div>
  )
}

export default ProductCard