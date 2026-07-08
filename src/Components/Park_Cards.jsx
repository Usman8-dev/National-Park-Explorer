import React from "react";
import { Link } from "react-router-dom";

function Park_Cards({ park }) {
  return (
    <div className="rounded-2xl border border-gray-100 shadow-md hover:shadow-xl overflow-hidden bg-gradient-to-b from-white to-emerald-50 flex flex-col transition-shadow">
      <img
        src={park.images?.[0]?.url}
        alt={park.images?.[0]?.altText}
        className="w-full h-60 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="font-bold text-xl text-gray-800 mb-4 flex-1">
          {park.fullName}
        </h2>
        {/* <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-4 py-2.5 font-medium transition-colors cursor-pointer">
          See Details
        </button> */}
        <Link
          to={`/park/${park.id}`}
          className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-4 py-2.5 font-medium transition-colors cursor-pointer text-center inline-block"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

export default Park_Cards;
