import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
<<<<<<< HEAD
    const { resData } = props;

    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    const { deliveryTime } = resData?.info.sla;
    return (
        <div className="h-[64vh] shadow-lg shadow-gray-400 m-10 p-2 w-64 hover:bg-gray-300 flex flex-col justify-around items-center h-auto">
            <img className="res-img p-1 rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
            <h3 className="text-lg font-medium">{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>

    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-1 ml-10 mt-3 rounded-sm">Best Seller</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
=======
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="w-72 h-auto shadow-lg rounded-lg overflow-hidden bg-white m-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-40 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="p-4 flex flex-col space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </h4>
        <div className="flex items-center justify-between mt-2">
          <h4
            className={`text-sm px-2 py-1 rounded-lg font-medium ${
              avgRating >= 4
                ? "bg-green-100 text-green-600"
                : avgRating >= 3
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            ⭐ {avgRating} Stars
          </h4>
          <h4 className="text-sm text-gray-600">{deliveryTime} min</h4>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white text-xs font-semibold px-2 py-1 top-2 left-2 rounded-md">
          Best Seller
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
