import { Link } from "react-router-dom";
import '../Style/Footer.css';
import Yujan from '../Img/YUJAN.png'

const Footer = () =>{
    return(
        <div>
        <div className="container" >
  <footer className="py-3">
    <img src={Yujan} style={{height:"80px"}} />
    <ul className="nav justify-content-center  pb-3 mb-3">
      <li className="nav-item" ><Link to="#" className="nav-link px-8 ">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-8 ">About</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-8 ">Works</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-8 ">Contact</Link></li>
    </ul>
    <p className="text-center" style={{marginLeft:"0px"}}>© 2024 Yujan Ranjitkar</p>
  </footer>
</div>
        </div>
    )
}

export default Footer;