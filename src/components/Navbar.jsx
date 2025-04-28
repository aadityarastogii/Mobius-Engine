import { Link } from "react-router-dom";
// import {Web logo} from '../assets/web-logo.png'

function Navbar() {
  return (
    <div className="flex justify-center ">
        <img
            src="https://static.wixstatic.com/media/5bc310_f90551ddd1fa489d9c3d9d78dccb2fa4~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/v2.png"
            alt="Mobius Engine Logo"
            className="h-16 w-16 mr-4"></img>
      <nav className="p-1 pt-7 font-semibold ml-50">
        <Link to="/" className="ml-5  text-blue-500">
          Home
        </Link>
        <Link to="/about" className="ml-5  hover:text-blue-500">
          About Us
        </Link>
        <Link to="/plans" className="ml-5  hover:text-blue-500">
          Plans
        </Link>
        <Link to="/testimonials" className="ml-5  hover:text-blue-500">
          Testimonials
        </Link>
        <Link to="/privacy-policy" className="ml-5  hover:text-blue-500">
          Privacy Policy
        </Link>
        <Link to="/more" className="ml-5  hover:text-blue-500">
          More
        </Link>
      </nav>

      <button class="py-1 px-3 mt-5 ml-75 bg-blue-500 text-white rounded ">Sign In</button>

    </div>
  );
}

export default Navbar;
