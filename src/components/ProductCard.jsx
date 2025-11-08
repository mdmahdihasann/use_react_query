import React from "react";

const ProductCard = ({ product, onDetails, onDelete }) => {
  return (
    <div className="card bg-white rounded p-2 relative">
      <img
        className="w-[100%] rounded"
        src={product.thumbnail}
        alt={product.title}
      />
      <h2 className="text-[16px] font-bold p-3">{product?.title}</h2>
      <div className="text-right">
        <a className="text-red-500 text-sm hover:text-black transition-colors duration-300 font-bold" onClick={()=>onDetails(product.id)}>Read More..</a> 
        <button className="text-sm absolute top-[10px] right-[10px] px-3 py-1 rounded bg-red-500 text-white hover:bg-green-400 transiton" onClick={()=>onDelete(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
