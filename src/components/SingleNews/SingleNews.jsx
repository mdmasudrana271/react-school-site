import React from "react";

const SingleNews = ({ item }) => {
  const { name, description, picture } = item;
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-100 ">
      <img className="w-full" src={picture} alt="" />
      <div className="mt-6 mb-2">
        <h2 className="text-2xl font-semibold tracking-wide text-indigo-400">{name}</h2>
      </div>
      <p className="text-sm font-semibold">{description}</p>
    </div>
  );
};

export default SingleNews;
