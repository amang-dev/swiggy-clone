import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" 
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

          <span className="text-gray-600 font-bold">
            Online: {onlineStatus === true ? "✅" : "🔴"}
          </span>

          <Link
            to="/cart"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold flex items-center"
          >
            <MdShoppingCart className="mr-1" /> Cart ({cartItems?.length || 0} Items)
          </Link>
        </nav>

        <button
          className="md:hidden border-2 border-gray-300 rounded-lg p-2 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <span className="text-gray-600 font-bold">
              Online: {onlineStatus === true ? "✅" : "🔴"}
            </span>

            <Link
              to="/cart"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdShoppingCart className="mr-1" /> Cart ({cartItems?.length || 0} Items)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;












































// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { MdShoppingCart } from "react-icons/md";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const onlineStatus = useOnlineStatus();
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <header className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" // Replace with your logo URL or path
//             alt="Swiggy Clone Logo"
//             className="h-10 w-10"
//           />
//           <Link
//             to="/"
//             className="text-2xl font-bold text-gray-800 hover:text-orange-500"
//           >
//             Swiggy Clone
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center space-x-8">
//           <Link
//             to="/"
//             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold"
//           >
//             Contact
//           </Link>

//           <Link className="text-gray-600 font-bold">
//             Online: {onlineStatus === true ? "✅" : "🔴"}
//           </Link>

//           <Link
//             to="/cart"
//             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-bold flex items-center"
//           >
//             <MdShoppingCart /> Cart ({cartItems.length} Items)
//           </Link>
//         </nav>

//         <button
//           className="md:hidden border-2 border-gray-300 rounded-lg p-2 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
//           onClick={() => alert("Open Mobile Menu")}
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;