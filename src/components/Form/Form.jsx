import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [location, setLocation] = useState("Kelibia");
  return (
    <form
      className=" flex justify-center items-center mt-12 "
      onSubmit={(e) => handleSubmit(e, location)}
    >
      <div className="rounded-full bg-white flex items-center focus-within:ring-2 ring-highlight ring-offset-1 px-2 w-4/5 sm:w-2/4 lg:w-1/4 justify-between ">
        <input
          className="w-full h-full rounded-full p-2 outline-none font-semibold text-gray-600"
          type="text"
          placeholder="Exp: Berlin"
          onChange={(e) => setLocation(e.target.value.trim())}
          value={location}
        />
        <button type="submit" className=" flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FEBA85"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
