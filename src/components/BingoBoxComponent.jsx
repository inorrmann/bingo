import bingoItemsArray from "../assets/BingoItemsArray.js";
import BingoItemComponent from "./BingoItemComponent.jsx";
import {useEffect, useState} from "react";

export default function BingoBoxComponent(props) {
  const [numbersArray, setNumbersArray] = useState(props.numberArray);

  useEffect(() => {
    setNumbersArray(props.numberArray);
  }, [props]);

  // console.log(numbersArray);

  const getImageOpacity = (id) => {
    if (numbersArray && numbersArray.includes(id)) {
      return ""
    } else {
      return "opacity-10";
    }
  };

  const getTextColor = (id) => {
    if (numbersArray && numbersArray.includes(id)) {
      return "text-slate-950"
    } else {
      return "text-slate-300";
    }
  };

  const getBackgroundColor = (id) => {
    if (numbersArray && numbersArray.includes(id)) {
      return "bg-slate-100"
    } else {
      return "bg-slate-400";
    }
  };

  return (
    <div className="m-2 mt-8 p-2 rounded border-2 border-slate-800 grid grid-cols-10 grid-flow-row gap-2 font-bold bg-slate-50 leading-none">
      {bingoItemsArray.map((item) => (
        <div
          key={item.id}
          className="rounded border border-slate-500 text-center uppercase text-base text-wrap"
        >
          <BingoItemComponent
            backgroundColor={getBackgroundColor(item.id)}
            icon={item.icon}
            id={item.id}
            description={item.description}
            opacity={getImageOpacity(item.id)}
            textColor={getTextColor(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
