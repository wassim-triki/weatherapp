import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
const Alert = ({ message }) => {
  const [visible, setVisible] = useState(message != null);
  useEffect(() => console.log(visible));
  return (
    visible && (
      <div
        className={` shadow-md flex items-center justify-between rounded-full bg-white p-1 gap-2 w-fit absolute bottom-5 transition-all  duration-200 ease-in-out  left-0 right-0 ml-auto mr-auto text-center `}
      >
        <MdError className="text-xl text-red-500 bg-red-100 w-12 h-12 p-2 rounded-full" />
        <p className="text-gray-700 font-semibold capitalize">{message}</p>
        <MdOutlineClose
          onClick={() => setVisible(false)}
          className="text-lg text-gray-500 hover:bg-gray-100 active:bg-gray-200 cursor-pointer w-12 h-12 p-3 rounded-full"
        />
      </div>
    )
  );
};

export default Alert;
