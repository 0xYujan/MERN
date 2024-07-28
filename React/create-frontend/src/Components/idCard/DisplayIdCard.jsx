import React from "react";
import IdCard from "../idCard/IdCard";
import cardDetails from "../../card.json";

const DisplayIdCard = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl  mb-5">ID Cards:</h1>
      <div className="grid grid-cols-4 gap-4">
        {cardDetails.map((card) => (
          <IdCard
            name={card.name}
            level={card.level}
            faculty={card.faculty}
            valid={card.validDate}
            profile={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayIdCard;
