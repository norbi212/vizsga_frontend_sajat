import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { products } from "../../data/products";

export default function ProductPage() {
    const navigate = useNavigate();
    const navigateBack = () => {
        if (window.history.length > 1) {
        navigate(-1);
        } else {
        navigate("/");
        }
    }
    const { id } = useParams();
    const product = products.find((p) => p.id == parseInt(id));

    return (
        <div>Product Page
            <button onClick={navigateBack}><CgArrowLeft /></button>
            <h1>{product.title}</h1>
        </div>
  );
}