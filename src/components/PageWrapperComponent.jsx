import bingoItemsArray from "../assets/BingoItemsArray.js";
import BingoBoxComponent from "./BingoBoxComponent.jsx";
import { useState } from "react";
import ConfirmResetModalComponent from "./ConfirmResetModalComponent.jsx";

export default function PageWrapperComponent() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [usedNumbers, setUsedNumbers] = useState([]);
  const [restartState, setRestartState] = useState(false);

  const getRandomNumber = () => {
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * 50) + 1;
    } while (usedNumbers.includes(randomNumber));

    setUsedNumbers([...usedNumbers, randomNumber]);

    if (usedNumbers.length === 50) {
      setUsedNumbers([]);
    }

    setSelectedNumber(randomNumber);
  };

  const findDescriptionInArray = (selectedNumber) => {
    const item = bingoItemsArray.find(item => item.id === selectedNumber);
    if (item) {
      return item.longDescription;
    }
  };

  const findIconInArray = (selectedNumber) => {
    const item = bingoItemsArray.find(item => item.id === selectedNumber);
    if (item) {
      return item.icon ;
    }
  };

  const submitRestartGame = () => {
    setRestartState(true);
  };

  const cancelRestartGame = () => {
    setRestartState(false);
  }

  const restartGame = () => {
    console.log('restart triggered');
    setSelectedNumber(null);
    setUsedNumbers([]);
    setRestartState(false);
  };

  return (
    <>
    <div className="m-2 bg-yellow-100">
      <BingoBoxComponent numberArray={usedNumbers} />

      <div className="flex justify-between text-center">
        <div className="flex justify-start m-4 mb-2 h-52">
          <img
            src={findIconInArray(selectedNumber)}
            alt={findDescriptionInArray(selectedNumber)}
            className="max-h-48 max-w-48 mr-4 object-contain"
          />
          <div className="text-6xl font-bold uppercase mt-20 text-slate-800">
            {selectedNumber}{selectedNumber !== null ? "." : ""} {findDescriptionInArray(selectedNumber)}
          </div>
        </div>

        <div className="block text-white text-xl uppercase font-bold">
          <div
            className="m-8 mt-16 p-2 rounded border border-slate-600 bg-slate-500 cursor-pointer"
            onClick={getRandomNumber}
          >
            Next Number
          </div>
          <div
            className="m-8 p-2 rounded border border-slate-600 bg-slate-500 cursor-pointer"
            onClick={submitRestartGame}
          >
            Restart Game
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <img
          src="src/assets/icons/cub-scouts.svg"
          alt="Cub Scouts Logo"
          className="w-24 h-24"
        />
        <span className="text-7xl mt-8 font-bold text-slate-400">
          BRIDGING BINGO
        </span>
        <img
          src="src/assets/icons/bsa.png"
          alt="BSA Logo"
          className="w-24 h-24"
        />
      </div>
    </div>
      { restartState &&
        <ConfirmResetModalComponent
          cancelRestartGame={cancelRestartGame}
          restartGame={restartGame}
        />
      }
      </>
  );
}
