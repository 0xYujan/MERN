import axios from "axios";
import ProductCard from "../../UI Components/ProdutCard";
import { useEffect, useState } from "react";

const DisplayProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  // async function fetchProducts() {
  //   try {
  //     const url = await fetch("https://fakestoreapi.com/products");
  //     const data = await url.json();
  //     // console.log("Fetched products:", data);
  //     setProducts(data);
  //   } catch (e) {
  //     console.log("Data fetch error:", e);
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  useEffect(()=>{
    const fetchProducts = async() =>{
      try{
        const res = await axios.get("https://dummyjson.com/products")
        setProducts(res.data.products)
        setIsLoading(false)
      }catch(err){
        setError(err)
        setIsLoading(false)
      }
    }
    fetchProducts()
    },[])

  if(error){
    return(
      <h1>{error}</h1>
    )
  }

  return (
    <div className="container-fluid">
      {
        isLoading && <h2>Loading......</h2>
      }
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id = {product.id}
            image={product.thumbnail}
            price={product.price}
            title={product.title}
            description={product.description}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
