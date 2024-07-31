// import { Link } from "react-router-dom";
import Category from "./CategoryDisplay";

const SingleProduct = ({ title, image,qrCode, discount, description, warranty, price, rating, category, brand, stock, availability, returnPolicy  }) => {
  return (

    
    <div className="container">
       
    
        <br />
  <div className="row">
  <div className="col-1">
    </div>
    <div className="col">
          <img src={image} style={{height:"300px"}} alt={title} />
    </div>
    <div className="col-6">
      <h1 className="text-4xl">{title}</h1>
      <br />
    <p>{rating} Rating</p>
  
    <p>Brand: {brand}</p>
    <br /><br />
    <hr />
    <br />
    <h1 className="text-3xl">Rs. {price * 134}</h1>
    <h3 className="text-2xl" >{discount}%</h3>
    <br /><br/>
    <p>Stock: {stock}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Warranty:  {warranty}</p>
      <p> </p><br />
      
<button type="button" className="btn btn-warning">Buy Now</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-info" onClick={handelAddToCart}>Add To Cart</button><br /><br />

    </div><br />
    <hr />
    
    <div className="col-6">

    </div>
   
  </div><br /><br />
  <div className="row">
    <div className="col-2">
    
    </div>
    <div className="col-5">
     
      <p>{description}</p>
      <br/>
      <p className="font-bold">Category: {category}</p>
      <p className="font-bold">Availability: {availability}</p>
      <p className="font-bold">ReturnPolicy: {returnPolicy}</p>
      <br/>

    </div>
    <div className="col">
              <img src={qrCode} style={{height:"200px"}} alt={title} />

    </div>
  </div>
  <br /> <br />
  <hr />
 
  <Category />
</div>
  );


};

export default SingleProduct;
