import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItem, setShowIndex }) => {
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
    </div>
  );
};

export default ResCategory;
