import React from "react";

const ProductCard = ({ product, onDetails }) => {
  return (
    <div className="card bg-white rounded p-2">
      <img
        className="w-[100%] rounded"
        src={product.thumbnail}
        alt={product.title}
      />
      <h2 className="text-[16px] font-bold p-3">{product?.title}</h2>
      <div className="text-right">
        <a className="text-red-500 text-sm hover:text-black transition-colors duration-300 font-bold" onClick={()=>onDetails(product.id)}>Read More..</a>
      </div>
    </div>
  );
};

export default ProductCard;
