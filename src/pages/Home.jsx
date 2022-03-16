import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Alert from "../components/Alert/Alert";
import Forecast from "../components/Forecast";
import Form from "../components/Form";
import useFetch from "../hooks/useFetch";
import { MdOutlineWrongLocation } from "react-icons/md";

const Home = () => {
  const { data, loading, error, fetchData } = useFetch();
  const handleSubmit = async (e, location) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_WEATHER_API}&q=${location}&aqi=no`;

    await fetchData(URL);
  };
  const [alert, setAlert] = useState(error);
  const closeAlert = () => {
    setAlert(false);
  };
  useEffect(async () => {
    const URL = `${process.env.REACT_APP_WEATHER_API}&q=kelibia&aqi=no`;
    await fetchData(URL);
  }, []);

  const alertRef = useRef(null);
  const scrollToBottom = () => {
    alertRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-body h-screen pt-20 px-2 relative">
      <h1 className="text-5xl text-center text-gray-700 leading-tight ">
        Weather <strong className="tracking-wide">Forecast</strong>
      </h1>
      <Form handleSubmit={handleSubmit} />
      {error && (
        <MdOutlineWrongLocation className="text-center text-9xl opacity-20 mt-20 mb-auto ml-auto mr-auto" />
      )}

      {error && <Alert message={error} ref={alertRef} />}
      {error && scrollToBottom()}

      {!error && data && <Forecast {...data} />}
    </div>
  );
};

export default Home;
