<<<<<<< HEAD
=======
// import { useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

// const dispatch = useDispatch();

//   const handleClearCart = () =>{
//     dispatch(clearCart());
//   }
  
//   return (
//     <div className="m-4">
//       <h1 className="text-center w-fit m-auto px-12 border-2 border-teal-300 rounded-lg bg-pink-100 font-bold text-lg tracking-widest">
//         Cart
//       </h1>
//       <h2 onClick={handleClearCart} className="cursor-pointer w-fit px-8 border-2 border-teal-300 rounded-lg bg-pink-100 font-bold text-lg tracking-widest float-right">
//         Clear Cart
//       </h2>
//       <div className="w-6/12 m-auto">
//       {cartItems.length ===0 ? <h1 className="text-center mt-12 text-2xl font-bold tracking-widest">Cart is Empty!!</h1> :  <ItemList items={cartItems} />}
//       </div>
//     </div>
//   );
// };

// export default Cart;



>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
<<<<<<< HEAD

const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }
  
  return (
    <div className="m-4">
      <h1 className="text-center w-fit m-auto px-12 border-2 border-teal-300 rounded-lg bg-pink-100 font-bold text-lg tracking-widest">
        Cart
      </h1>
      <h2 onClick={handleClearCart} className="cursor-pointer w-fit px-8 border-2 border-teal-300 rounded-lg bg-pink-100 font-bold text-lg tracking-widest float-right">
        Clear Cart
      </h2>
      <div className="w-6/12 m-auto">
      {cartItems.length ===0 ? <h1 className="text-center mt-12 text-2xl font-bold tracking-widest">Cart is Empty!!</h1> :  <ItemList items={cartItems} />}
=======
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + (item.card.info.price ? item.card.info.price / 100 : 0),
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full bg-gray-900 p-4">
        <h1 className="text-center text-white text-2xl font-bold">
          🛒 Your Cart
        </h1>
      </div>

      <button
        onClick={handleClearCart}
        className="w-45 mt-4 px-6 py-2 border-2 rounded-lg bg-gray-900 font-bold text-lg tracking-wider text-white hover:bg-gray-700 transition duration-300 mx-auto"
      >
        🧹 Clear Cart
      </button>

      <div className="flex-grow w-full md:w-8/12 lg:w-6/12 mx-auto mt-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-8/12">
          {cartItems.length === 0 ? (
            <h1 className="text-center mt-12 text-2xl font-bold text-gray-600 tracking-wider">
              🛍️ Your Cart is Empty!
            </h1>
          ) : (
            <ItemList items={cartItems} />
          )}
        </div>

        <div className="w-full h-fit md:w-4/12 mt-6 md:mt-0 flex flex-col items-center space-y-6 p-4 border-2 border-teal-300 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-teal-900">
            Total Price: ₹{totalPrice.toFixed(2)}
          </h2>

          <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-200">
            Proceed to Checkout
          </button>
        </div>
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
      </div>
    </div>
  );
};

export default Cart;
