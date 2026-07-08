import React from "react";

function Park_Cards() {
  return (
    <div className="rounded-2xl border border-gray-100 shadow-md hover:shadow-xl overflow-hidden bg-gradient-to-b from-white to-emerald-50 flex flex-col transition-shadow">
      <img
        src="https://images.unsplash.com/photo-1615551043360-33de8b5f410c?w=600"
        alt="Grand Canyon National Park"
        className="w-full h-60 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="font-bold text-xl text-gray-800 mb-4 flex-1">
          Grand Canyon National Park
        </h2>
        <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-4 py-2.5 font-medium transition-colors cursor-pointer">
          See Details
        </button>
      </div>
    </div>
  );
}

export default Park_Cards;
