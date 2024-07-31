import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "../UI Components/SingleProduct";
import ErrorMsg from "../UI Components/ErrorMsg";
import CategoryDisplay from "../UI Components/CategoryDisplay";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        const productData = response.data;
        setProduct(productData);

        return axios.get(`https://dummyjson.com/products/category/${productData.category}`);
      })
      .then(response => {
        const similarProductsData = response.data.products;
        setSimilarProducts(similarProductsData);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <ErrorMsg message={error} />;
  }

  // const handelAddToCart =()=>{
  //   localStorage.setItem("cardData", JSON.stringify({...product, quantity:1}))
  //   const item = localStorage.getItem("cartData")

  // }

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {product && (
          <SingleProduct
            id={product.id}
            image={product.images}
            price={product.price}
            title={product.title}
            description={product.description}
            rating={product.rating}
            warranty={product.warrantyInformation}
            category={product.category}
            brand={product.brand}
            stock={product.stock}
            availability={product.availabilityStatus}
            returnPolicy={product.returnPolicy}
            qrCode={product.meta.qrCode}
            discount={product.discountPercentage}
          />
        )}
      </div>
      <div className="mt-10 flex items-center justify-center flex-wrap">
        {similarProducts.map((product) => {
          return (
            <CategoryDisplay
              key={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
