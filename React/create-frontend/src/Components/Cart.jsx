// CartPage.js
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData"));
    setCartProducts(data);
    console.log(data);
  }, []);

  const removeCartProducts = (productId) => {
    alert("Item is deleted from the cart");

    const deleteProducts = cartProducts.filter((prod) => prod.id !== productId);
    localStorage.setItem("cartData", JSON.stringify(deleteProducts));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div>
        {cartProducts.map((product) => {
          return (
            <ul className="space-y-4" key={product.id}>
              <li className="flex items-center justify-between p-4 border rounded-lg shadow-md">
                <div className="flex items-center">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold"></h2>
                    <p className="text-gray-600">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-gray-600">
                      Price: Rs.{" "}
                      {Math.ceil(product.price * 133.5) * product.quantity}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => removeCartProducts(product.id)}
                >
                  Remove
                </button>
              </li>
            </ul>
          );
        })}

        <div className="mt-6 flex justify-between text-xl font-bold">
          <span>Total: </span>
          <span>
            Rs.{" "}
            {cartProducts.reduce(
              (acc, cur) => acc + Math.ceil(cur.price) * 133.5 * cur.quantity,
              0
            )}
          </span>
        </div>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
