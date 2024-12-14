import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItem, setShowIndex }) => {
<<<<<<< HEAD

  const handleClick= () =>{
    setShowIndex();
  }

  return (
    <div className="w-7/12 m-auto mb-18 shadow-sm">
      <div className="flex justify-between px-4 pt-4 cursor-pointer" onClick={handleClick}>
        <h1 className="text-xl font-bold px-2">
          {data.title} <span>({data.itemCards.length})</span>{" "}
        </h1>
        <span>⬇️</span>
      </div>
     {showItem && <ItemList items={data.itemCards} />}
=======
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="max-w-4xl mx-auto mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center px-6 py-4 bg-gray-800 cursor-pointer transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        <h1 className="text-xl font-semibold text-white">
          {data.title}{" "}
          <span className="text-sm text-gray-300">
            ({data.itemCards.length} items)
          </span>
        </h1>
        <span className="text-2xl text-teal-800">{showItem ? "▲" : "▼"}</span>
      </div>

      {showItem && (
        <div className="bg-gray-50 px-4 py-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
    </div>
  );
};

export default ResCategory;
