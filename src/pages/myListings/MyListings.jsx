import ProductGrid from "../../components/productGrid/ProductGrid";
//import "../../components/productGrid/ProductGrid.css"
import { products } from "../../data/products";
import "./MyListings.css"
import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const My_User_Id = 101;

export default function MyListings() {

  const [filterStatus, setFilterStatus ] = React.useState("active");
  const myProducts = products.filter(
    (p) => p.sellerId === My_User_Id && p.status === filterStatus
  );

  const navigate = useNavigate();
  const navigateBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return(
    <div>
      <div className="header-div">
        <button onClick={navigateBack}><CgArrowLeft /></button>
        <h1>My Listings</h1>
      </div>
      <div className="status-buttons">
        <button
          style={{
            backgroundColor: filterStatus === "active" ? "var(--button-bg-main)" : "var(--button-bg-secondary)",
            color: filterStatus === "active" ? "var(--button-text-main)" : "var(--button-text-secondary)",
          }} 
          onClick={() => setFilterStatus("active")}
        >Active</button>

        <button
          style={{
            backgroundColor: filterStatus === "sold" ? "var(--button-bg-main)" : "var(--button-bg-secondary)",
            color: filterStatus === "sold" ? "var(--button-text-main)" : "var(--button-text-secondary)",
          }} 
          onClick={() => setFilterStatus("sold")}
        >Sold</button>
      </div>
      <ProductGrid products={myProducts} showFavoriteButton={false} />
    </div>
  )
  

}
