import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layouts from "./components/Layouts";
import HomePages from "./pages/HomePages";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import EmailVerify from "./auth/EmailVerify";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePages />} />
          <Route path="productdetails/:productId" element={<ProductDetails />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="email/confirmation/:token" element={<EmailVerify />} />
          <Route path="signin" element={<Login />}/>
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="reset/password/:token" element={<ResetPassword />} />

        
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default MyRoute;
