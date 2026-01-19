import "./ProductCard.css";
import { CgHeart } from "react-icons/cg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const randomIndex = Math.floor(Math.random() * 9); //csak teszteléshez

  const formatPrice = (value) =>
    new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="product-card" key={product.id}>

      <div className="product-image">
        <img src={product.images[randomIndex]} alt={product.title + " - " + randomIndex} />   {/* Élesben [0] kép */}
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

      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation(); // ne triggerelje a card clicket
          setIsFavorite(!isFavorite);
        }}
        aria-label="Favorite"
      >
        {/* <CgHeart
          size={18}
          fill={isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
        /> */}
        {isFavorite ? (
          <AiFillHeart size={20} color="#e60023" />
        ) : (
          <AiOutlineHeart size={20} color="white" />
        )}
      </button>
    </div>
  );
}
