import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-80 border-2 border-black bg-white rounded-xl shadow-lg p-6">
      <div className="mb-4 bg-gray-100 p-4 rounded text-right text-2xl font-mono overflow-hidden">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-3">
        <button
          className="col-span-2 bg-red-500 text-white rounded-lg py-2 font-semibold hover:bg-red-600"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="bg-black text-white rounded-lg py-2 font-semibold hover:bg-green-500"
          onClick={() => handleClick("/")}
        >
          ÷
        </button>
        <button
          className="bg-black text-white rounded-lg py-2 font-semibold hover:bg-green-500"
          onClick={() => handleClick("*")}
        >
          ×
        </button>
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            className="bg-gray-200 rounded-lg py-2 font-semibold hover:bg-gray-300"
            onClick={() => handleClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="bg-black text-white rounded-lg py-2 font-semibold hover:bg-green-500"
          onClick={() => handleClick("-")}
        >
          −
        </button>
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            className="bg-gray-200 rounded-lg py-2 font-semibold hover:bg-gray-300"
            onClick={() => handleClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="bg-black text-white rounded-lg py-2 font-semibold hover:bg-green-500"
          onClick={() => handleClick("+")}
        >
          +
        </button>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className="bg-gray-200 rounded-lg py-2 font-semibold hover:bg-gray-300"
            onClick={() => handleClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="row-span-2 bg-green-500 text-white rounded-lg py-6 font-semibold hover:bg-green-600"
          onClick={calculateResult}
        >
          =
        </button>
        <button
          className="col-span-2 bg-gray-200 rounded-lg py-2 font-semibold hover:bg-gray-300"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="bg-gray-200 rounded-lg py-2 font-semibold hover:bg-gray-300"
          onClick={() => handleClick(".")}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
