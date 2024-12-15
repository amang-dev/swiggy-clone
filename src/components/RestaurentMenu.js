import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();

  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimer />;

  const { name, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

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
      </div>
    </div>
  );
};

export default RestaurantMenu;



