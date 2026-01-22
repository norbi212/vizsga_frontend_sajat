import { products } from "../../data/products";
import ProductGrid from  "../../components/productGrid/ProductGrid"

export default function Home() {
  return (
    <div>
      <h1>Főoldal</h1>
      <ProductGrid products={products} />
      {/* <img src={ImageIceland} alt="Iceland" style={styles.img}/> */}
    </div>
  );
}