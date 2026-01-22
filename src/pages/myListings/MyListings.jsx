import ProductGrid from "../../components/productGrid/ProductGrid";
import "../../components/productGrid/ProductGrid.css"
import { products } from "../../data/products";
import "./MyListings.css"
import React from "react";

const My_User_Id = 101;

export default function MyListings() {

  const [filterStatus, setFilterStatus ] = React.useState("active");
  const myProducts = products.filter(
    (p) => p.sellerId === My_User_Id && p.status === filterStatus
  );

  return(
    <div>
      <h1>My Listings</h1>
      <div className="status-buttons">
        <button
          style={{
            backgroundColor: filterStatus === "active" ? "#007bff" : "#ccc",
            color: filterStatus === "active" ? "#fff" : "#000",
          }} 
          onClick={() => setFilterStatus("active")}
        >Active</button>

        <button
          style={{
            backgroundColor: filterStatus === "sold" ? "#007bff" : "#ccc",
            color: filterStatus === "sold" ? "#fff" : "#000",
          }} 
          onClick={() => setFilterStatus("sold")}
        >Sold</button>
      </div>
      <ProductGrid products={myProducts} />
    </div>
  )
  

}
