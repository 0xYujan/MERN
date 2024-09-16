import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorMsg from "../UI Components/ErrorMsg";
import CategoryDisplay from "../UI Components/CategoryDisplay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  // const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    const fetchProductAndCategory = async () => {
      try {
        const productResponse = await axios.get(`https://dummyjson.com/products/${productId}`);
        const product = productResponse.data;
        setProduct(product);
        setIsLoading(false);

        if (product?.category) {
          const categoryResponse = await axios.get(`https://dummyjson.com/products/category/${product.category}`);
          setProductsByCategory(categoryResponse.data.products);
        }
      } catch (error) {
        console.error("Error fetching product or category:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProductAndCategory();
  }, [productId]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <ErrorMsg message={error} />;
  }

  const handleAddToCart = () => {
    console.log("handleAddToCart called");
    let cart = JSON.parse(localStorage.getItem("cartItemsKey")) ?? [];
    console.log("Initial cart:", cart);

    const found = cart.find((item) => item.id === product.id);
    if (found) {
      found.quantity += 1;
      console.log(`Updated quantity for product ${product.id}:`, found.quantity);
      toast.success(`${product.title} x ${found.quantity} is added`);
    } else {
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
      console.log("Added new product to cart:", newProduct);
      toast.success(`${product.title} x 1 is added to the cart`);
    }

    localStorage.setItem("cartItemsKey", JSON.stringify(cart));
    console.log("Updated cart saved to localStorage:", cart);
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="container">
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              {product && (
                <img
                  src={product.thumbnail}
                  style={{ height: "300px" }}
                  alt={product.title}
                />
              )}
            </div>
            <div className="col-6">
              {product && (
                <>
                  <h1 className="text-4xl">{product.title}</h1>
                  <br />
                  <p>{product.rating} Rating</p>
                  <p>Brand: {product.brand}</p>
                  <br />
                  <br />
                  <hr />
                  <br />
                  <h1 className="text-3xl">Rs. {product.price * 134}</h1>
                  <h3 className="text-2xl">{product.discount}%</h3>
                  <br />
                  <br />
                  <p>
                    Stock: {product.stock}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Warranty: {product.warranty}
                  </p>
                  <br />
                  <button type="button" className="btn btn-warning">
                    Buy Now
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                  <br />
                  <br />
                </>
              )}
            </div>
            <br />
            <hr />
            <div className="col-6"></div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-5">
              {product && (
                <>
                  <p>{product.description}</p>
                  <br />
                  <p className="font-bold">Category: {product.category}</p>
                  <p className="font-bold">Availability: {product.availability}</p>
                  <p className="font-bold">Return Policy: {product.returnPolicy}</p>
                  <br />
                </>
              )}
            </div>
            <div className="col">
              {product && (
                <img
                  src={product.meta.qrCode}
                  style={{ height: "200px" }}
                  alt={product.title}
                />
              )}
            </div>
          </div>
          <br />
          <br />
          <hr />
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center flex-wrap">
        {productsByCategory
          .filter((prod) => prod.id !== product.id)
          .map((product) => (
            <CategoryDisplay
              key={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductDetails;
