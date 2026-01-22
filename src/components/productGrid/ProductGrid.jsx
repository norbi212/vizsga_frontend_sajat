import React from "react";
import ProductCard from "../productCard/ProductCard.jsx";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;