import { products } from "../../data/products";
import ProductCard from "../../components/productCard/ProductCard.jsx";

export default function Home() {
  return (
    <div>
      <h1>Főoldal</h1>
        <div className="home-container" style={styles.container}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      {/* <img src={ImageIceland} alt="Iceland" style={styles.img}/> */}
    </div>
  );
}

const styles = {
  img: {
    width: "",
    height: "auto",
    position: "fixed",
    bottom: "0",

  },
  container:{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
    width: 'calc(100vw-40px)'
  }
};