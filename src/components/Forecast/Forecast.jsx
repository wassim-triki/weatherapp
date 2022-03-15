import React from "react";
import { RiWindyLine } from "react-icons/ri";
import { BiDroplet } from "react-icons/bi";
const Forecast = ({
  temperature: { tempC, discription, windKPH, humidity },
  location: { name, region, country },
}) => {
  return (
    <div className="text-text bg-white  w-4/5 sm:w-2/4 lg:w-1/4 ml-auto mr-auto flex flex-col items-center gap-5 mt-6 rounded-3xl p-4">
      <h2 className="text-lg font-forecast">{`${name}, ${region}, ${country}`}</h2>
      <p className=" w-min whitespace-nowrap rounded-full px-3 py-1 bg-darkbg">
        {discription}
      </p>
      <p className="text-8xl">{tempC}°C</p>
      <div className="flex items-center w-full justify-around font-semibold text-xl">
        <div className="flex items-center gap-1">
          <RiWindyLine className="text-textdark" />
          <p>{windKPH} km/h</p>
        </div>
        <div className="flex items-center gap-1">
          <BiDroplet className="text-textdark" />
          <p>{humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
