import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";
import ResCategory from "./ResCategory";
<<<<<<< HEAD
import { useState} from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex]= useState()
=======
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)

  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimer />;

  const { name, costForTwoMessage, avgRating } =
<<<<<<< HEAD
    resInfo?.cards[0]?.card?.card?.info;

  //  const  itemCards  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //  console.log(itemCards);

  //  console.log(resInfo);

  //  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
=======
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
<<<<<<< HEAD
  // console.log(categories);

  return (
    <div>
      <div className="w-fit border-2 border-teal-300 rounded-lg mx-auto my-5 flex justify-between items-center">
        <h1 className="font-medium text-xl bg-pink-200 px-2">{name}</h1>
        <h2 className="px-10">
          Rating <span className="font-bold">{avgRating}</span>
        </h2>
        <h3 className="text-xl bg-pink-200 px-6">{costForTwoMessage}</h3>
      </div>

      <div>
        {categories.map((category, index) => {
          return (
            <ResCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItem={index === showIndex ? true : false}
              setShowIndex={index === showIndex ? ()=>{setShowIndex(-1)} : ()=>{setShowIndex(index)}}
            />
          );
        })}
=======

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-black">{name}</h1>
            <h2 className="text-lg text-gray-600 mt-1">
              Rating: <span className="font-bold text-teal-600">{avgRating}</span>
            </h2>
          </div>
          <div className="text-center py-3 px-5 bg-black rounded-lg">
            <h3 className="text-xl font-medium text-white">{costForTwoMessage}</h3>
          </div>
        </div>

        <div>
          {categories.map((category, index) => (
            <ResCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItem={index === showIndex}
              setShowIndex={
                index === showIndex
                  ? () => setShowIndex(-1)
                  : () => setShowIndex(index)
              }
            />
          ))}
        </div>
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
      </div>
    </div>
  );
};

export default RestaurantMenu;
<<<<<<< HEAD
=======



>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
