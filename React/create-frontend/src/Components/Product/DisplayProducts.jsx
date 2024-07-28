import ProductCard from "../../UI Components/ProdutCard";
import { useEffect, useState } from "react";

const DisplayProduct = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      // console.log("Fetched products:", data); 
      setProducts(data);
    } catch (e) {
      console.log("Data fetch error:", e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
