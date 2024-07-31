import { Link } from "react-router-dom";
import Product from "../Img/Prod.jpg";
import Slider1 from "../Img/1.jpg";
import Slider2 from "../Img/2.jpg";

const ProductCard = ({ image, title, price, description, id }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: " 0 40px" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rs. {price*134}</li>
          {/* <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li> */}
        </ul>
        <div className="card-body">
          <Link to="#" className="card-link">
            Add To Card
          </Link>
          <Link to={`/product-details/${id}`} className="card-link">
            View Details 
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
