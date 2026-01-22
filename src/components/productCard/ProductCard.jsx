import "./ProductCard.css";
import "../../index.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";

export default function ProductCard({ product, showFavoriteButton = true }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const randomIndex = Math.floor(Math.random() * 8); //csak teszteléshez

  const formatPrice = (value) =>
    new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="product-card" key={product.id}>

      <div className="product-image">
        <img src={product.images[randomIndex]} alt={product.images[randomIndex]} />   {/* Élesben [0] kép */}
      </div>

      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <h2>{product.title}</h2>
        <div className="product-extra">
          <p className="product-condition">{product.condition}</p>
          <p className="product-price">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>

    { showFavoriteButton && (
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();   // megakadályozza a Link navigációt
          e.stopPropagation(); // ne triggerelje a card clicket
          setIsFavorite(!isFavorite);
        }}
        aria-label="Favorite"
      >
        {isFavorite ? (
          <AiFillHeart size={20} color="#e60023" />
        ) : (
          <AiOutlineHeart size={20} color="white" />
        )}
      </button>
    )}
      
    </div>
  );
}
