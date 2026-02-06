import React from "react";

const Card = ({ company, title, type, salary, location }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      
      <p className="text-sm text-gray-500">{company}</p>

      <h2 className="text-lg font-semibold mt-1">{title}</h2>

      <div className="flex gap-2 mt-3 flex-wrap">
        {type.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-2 py-1 rounded-md "
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="font-semibold">{salary}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
          Apply now
        </button>
      </div>
    </div>
  )
}



export default Card;

// Destructuring (Clean & Pro way ✨)

// Isme baar-baar props. nahi likhna padta.