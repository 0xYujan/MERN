import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Profile from "../Img/Profile.jpg";
import Icon from "../Img/icon.svg";
import MyWork from "../Img/my-works.png";
import Sign from "../Img/sign.png";
import Blog from "../Img/blog.png";
import Web from "../Img/web-icon.png";
import Code from "../Img/code-icon.png";
import Camera from "../Img/camera-icon.png";
import Seo from "../Img/seo-icon.png";

import "../Style/Homepage.css";

const Homepage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-7">
            <div className="clearfix">
              <img
                src={Profile}
                className="col-md-5 float-md-start mb-3 "
                alt="Profile"
              />
              <h5>Web Developer</h5>
              <h1>Yujan Ranjitkar</h1>
              <p>I am a Web Developer based in Bhaktapur, Nepal.</p>
              <Link className="button" to="/about">
                <img src={Icon} />
              </Link>
            </div>
          </div>

          <div className="col-5">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10">
                  LATEST WORK AND <b>FEATURED</b>
                </div>
                <div className="carousel-item" data-bs-interval="10">
                  LATEST WORK AND <b>FEATURED</b>
                </div>
                <div className="carousel-item" data-bs-interval="10">
                  LATEST WORK AND <b>FEATURED</b>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="first-clearfix">
                  <img
                    src={Sign}
                    className="col-md-5 float-md-center "
                    alt="Profile"
                  />
                  <h5>MORE ABOUT ME</h5>
                  <h2>
                    Credentials
                    <Link className="buttonx1" to="/">
                      {" "}
                      <img src={Icon} />
                    </Link>{" "}
                  </h2>
                </div>
              </div>
              <div className="col-6">
                <div className="first-clearfix">
                  <img src={MyWork} className="col-md-5 " alt="My Work" />
                  <h5>SHOWCASE</h5>
                  <h2>
                    Projects
                    <Link className="buttonx1" to="/works">
                      <img src={Icon} />
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <div className="Third-clearfix">
              <img src={Blog} className="col-md-5 " alt="Blog" />
              <h5>MY BLOG</h5>
              <h2>
                BLOG
                <Link className="buttonx2" to="/blog">
                  <img src={Icon} />
                </Link>
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="Third-clearfix">
              <br />
              <br />
              <img
                src={Camera}
                style={{ height: "70px", width: "70px" }}
                className="col-mdd "
                alt="Camera"
              />
              <img
                src={Code}
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                className="col-mdd "
                alt="Code"
              />
              <img
                src={Web}
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "40px",
                  color: "black",
                }}
                className="col-mdd "
                alt="Web"
              />
              <img
                src={Seo}
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                className="col-mdd "
                alt="SEO"
              />
              <br />
              <br />
              <h5>SPECIALIZATION</h5>
              <h2>
                Services Offering
                <Link className="buttonx2" to="/">
                  <img src={Icon} />
                </Link>
              </h2>
            </div>
          </div>
          <div className="col">
            <div className="Third-clearfix">
              <img src={Blog} className="col-md-5 " alt="Blog" />
              <h5>STAY WITH ME</h5>
              <h2>
                Profiles
                <Link className="buttonx2" to="/">
                  <img src={Icon} />
                </Link>
              </h2>
            </div>
          </div>
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">1 of 2</div>
          <div className="col">2 of 2</div>
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
