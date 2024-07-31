import ErrorImg from "../Img/error.png";
import {Link} from 'react-router-dom'

const ErrorMsg = () => {
  return (
    <div>
      <div className="card mb-3" style={{ alignItems: "center" }}>
        <img
          className="card-img-top"
          src={ErrorImg}
          style={{ height: "200px", width: "200px" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h1 className="card-title">We’re Sorry, an error has occurred</h1>
          <p className="card-text">
            We seem to have lost this page but we don’t want to lose you.
          </p>
          <br />
          <button type="button"className="btn btn-outline-secondary">
          <Link to="/" >BACK TO HOMEPAGE</Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorMsg;
