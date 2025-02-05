import React from "react";

const ProductItem = ({
  id,
  title,
  price,
  description,
  image,
  rating,
}: Product) => {
  return <div className="bg-slate-800 rounded-md p-3 h-64">
    <h1 className="text-slate-50">{title}</h1>
    <h1 className="text-slate-50">{description}</h1>
    <h1 className="text-slate-50">{price}</h1>

  </div>;
};

export default ProductItem;
