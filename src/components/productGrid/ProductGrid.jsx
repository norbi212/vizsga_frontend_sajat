import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard.jsx";
import "./ProductGrid.css";

const ProductGrid = ({ products , showFavoriteButton }) => {
  return (
    <div className="product-grid">
      {products.map(p => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <ProductCard key={p.id} product={p} showFavoriteButton={showFavoriteButton} />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;