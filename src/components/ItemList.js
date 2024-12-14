import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
<<<<<<< HEAD

  const Dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //Dispatch an action
     Dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex justify-around border-b-2 border-gray-300"
          >
            <div className="w-8/12 flex flex-col justify-around ">
              <h2 className="font-semibold text-md">{item.card.info.name}</h2>
              <p className="text-lg">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="font-light text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 flex flex-col items-center my-10">
              <img
                className="w-32 rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt="food-img"
              />

               <button includeLable={true} onClick={() =>handleAddItem(item)} className="m-[-20px] px-2 bg-green-200 font-semibold rounded-sm">
                ADD+
              </button>
             
            </div>
          </div>
        );
      })}
=======
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="w-full md:w-7/12 space-y-2">
            <h2 className="text-xl font-semibold text-teal-900">
              {item.card.info.name}
            </h2>
            <p className="text-lg font-semibold text-teal-600">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-sm text-gray-600 font-light">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-full md:w-5/12 flex flex-col items-center justify-center space-y-4">
            <img
              className="w-36 h-36 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button
              onClick={() => handleAddItem(item)}
              className="w-32 py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-200"
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
    </div>
  );
};

export default ItemList;
<<<<<<< HEAD
=======

>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
