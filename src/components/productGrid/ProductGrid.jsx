import React from "react";
import ProductCard from "../productCard/ProductCard.jsx";
import "./ProductGrid.css";

const ProductGrid = ({ products , showFavoriteButton }) => {
  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} showFavoriteButton={showFavoriteButton} />
      ))}
    </div>
  );
};

export default ProductGrid;