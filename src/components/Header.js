<<<<<<< HEAD
// import { LOGO_URL } from "../utils/constant";
// import { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import userContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const { loggedInUser } = useContext(userContext);
//   const [btnName, setBtnName] = useState("Login");

//   useEffect(() => {}, [btnName]);

//   const onlineStatus = useOnlineStatus();

//   //Subscribing to the store using slector

//   const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);

//   return (
//     <div className="flex justify-between items-center px-6 py-2 bg-green-100 mt-2 rounded-xl text-lg">
//       <div className="w-[90px]">
//         <img className="logo" src={LOGO_URL} />
//       </div>

//       <div className="nav-items">
//         <ul className="flex">
//           <li className="px-5">
//             Online Status: {onlineStatus === true ? "✅" : "🔴"}
//           </li>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-5">
//             <Link to="/about">About</Link>
//           </li>
//           <li className="px-5">
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li className="px-5">
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li className="px-5 font-bold">
//             <Link to="/cart">Cart ({cartItems.length} Items) </Link>
//           </li>
//           <button
//             onClick={() => {
//               btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
//             }}
//           >
//             {btnName}
//           </button>
//           <li className="px-5">{loggedInUser}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;



import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
=======
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdShoppingCart } from "react-icons/md";
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
<<<<<<< HEAD
  const { loggedInUser } = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, [btnName]);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="px-6 py-2 flex justify-between items-center bg-green-100 rounded-xl text-lg">
      <div className="flex justify-between items-center">
        <div className="w-[80px]">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <button 
          className="block md:hidden ml-36"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`nav-items ${isMenuOpen ? "block" : "hidden"} md:flex md:justify-end`}>
        <ul className="flex flex-col md:flex-row md:space-x-5">
          <li className="mb-2 md:mb-0">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li className="font-bold">
            <Link to="/cart">Cart ({cartItems.length} Items) </Link>
          </li>
          <button
            className="mb-2 md:mb-0 ml-2 md:ml-5 px-3 rounded-lg bg-green-200"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
=======
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" // Replace with your logo URL or path
            alt="Swiggy Clone Logo"
            className="h-10 w-10"
          />
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-orange-500"
          >
            Swiggy Clone
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
          >
            Contact
          </Link>

          <Link className="text-gray-600 font-bold">
            Online: {onlineStatus === true ? "✅" : "🔴"}
          </Link>

          <Link
            to="/cart"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold flex items-center"
          >
            <MdShoppingCart /> Cart ({cartItems.length} Items)
          </Link>
        </nav>

        <button
          className="md:hidden border-2 border-gray-300 rounded-lg p-2 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
          onClick={() => alert("Open Mobile Menu")}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
  );
};

export default Header;
<<<<<<< HEAD








=======
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
