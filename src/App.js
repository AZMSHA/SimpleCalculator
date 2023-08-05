import { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState(0);
  const [result, setResult] = useState(0);

  function operation(operator) {
    switch (operator) {
      case "+":
        setResult(result + inputData);
        break;
      case "-":
        setResult(result - inputData);
        break;
      case "*":
        setResult(result * inputData);
        break;
      case "/":
        //in .js 0/0 = NaN, to fix this i used ternary operator
        setResult(isNaN(result / inputData) ? 0 : result / inputData);
        break;
      case "reset input":
        setInputData(0);
        break;
      case "reset result":
        setResult(0);
        break;
      default:
        break;
    }
  }

  const actions = [
    ["+", "ADD"],
    ["-", "SUBTRACT"],
    ["*", "MULTIPLY"],
    ["/", "DIVIDE"],
    ["reset input", "RESET INPUT"],
    ["reset result", "RESET RESULT"],
  ];

  return (
    <form>
      <h1>{result}</h1>
      <input
        type="number"
        value={inputData}
        onChange={(e) => setInputData(parseInt(e.target.value))}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setResult(parseInt(e.target.value));
            setInputData(0);
          }
        }}
      />
      <section>
        {actions.map((action, index) => (
          <button
            type="button"
            key={index}
            onClick={(e) => {
              operation(action[0]);
              setInputData(0);
            }}
          >
            {action[1]}
          </button>
        ))}
      </section>
    </form>
  );
}

export default App;
