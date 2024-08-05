import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMsg from "../UI Components/ErrorMsg";
import { GoTrash } from "react-icons/go";


const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cartItemsKey")) ?? [];
        setCartItems(cart);
        updateTotalPrice(cart);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateTotalPrice = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const ClearCart = (id) =>{
    localStorage.removeItem("cartItemsKey");
  }

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem("cartItemsKey", JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <ErrorMsg message={error} />;
  }

  return (
    <div className="container-fluid">
      <ToastContainer />
      <h1 className="text-center my-4">Checkout</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Cart Items</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={item.thumbnail} alt={item.title} style={{ height: "100px" }} className="img-thumbnail me-3" />
                    <div>
                      <h5>{item.title}</h5>
                      <p>Rs. {item.price * 134}</p>
                      <div className="input-group">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                        <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        <button className="btn btn-outline-secondary" type="button"  onClick={ClearCart}><GoTrash /></button>
                        
                      </div>
                    </div>
                  </div>
                  <span>Rs. {(item.price * 134 * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <h2>Your Total</h2>
          <h3 className="text-primary">Rs. {(totalPrice * 134).toFixed(2)}</h3>
          <button type="button" className="btn btn-success mt-3">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
