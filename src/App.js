import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import deviderDesktop from "./images/pattern-divider-desktop.svg";
import deviderMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuotes = async () => {
    const res = await axios.get("	https://api.adviceslip.com/advice");
    const data = setQuotes(res.data.slip);
    return data;
  };
  useEffect(() => {
    getQuotes();
  }, []);

  console.log(quotes.advice);
  return (
    <div className="bg-dark-blue w-full h-screen flex items-center justify-center ">
      <div className="w-5/12 sm:w-10/12 bg-dark-grayish-blue flex flex-col items-center justify-center py-5 px-10 rounded-xl shadow-lg relative">
        <p className="text-neon-green uppercase tracking-widest font-medium">
          Advice #{quotes?.id}
        </p>
        <h1 className="text-3xl text-center text-light-cyan my-8 font-bold">
          "{quotes?.advice}"
        </h1>
        <img src={deviderDesktop} alt="" className="mb-8 devider-desktop" />
        <img src={deviderMobile} alt="" className="mb-8 devider-mobile" />
        <div
          onClick={getQuotes}
          className="absolute -bottom-5 w-12 h-12 rounded-full bg-neon-green p-2 cursor-pointer flex items-center justify-center hover:shadow-neon-green hover:shadow-2xl"
        >
          <img src={dice} alt="" className=" " />
        </div>
      </div>
    </div>
  );
}

export default App;
