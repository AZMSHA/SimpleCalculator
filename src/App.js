import { useRef, useState} from "react";
import "./App.css";

function App() {

  const inputRef = useRef(null);

  const [result, setResult] = useState(0);

  function operation(operator) {

    const input = JSON.parse(inputRef.current.value);

    switch (operator) {

      case "+":
        setResult(result + input);
        break;

      case "-":
        setResult(result - input);
        break;

      case "*":
        setResult(result * input);
        break;

      case "/":
        setResult(result / input);
        break;

      case "reset input":
        inputRef.current.value = 0;
        break;

      case "reset result":
        setResult(0);
        break;

      default:
        break;
    }
  }

  return (
    <form>
      <h1>{result}</h1>
      <input type="text" ref={inputRef} />
      <Button operator={"+"}>ADD</Button>
      <Button operator={"-"}>SUBTRACT</Button>
      <Button operator={"*"}>MULTIPLY</Button>
      <Button operator={"/"}>DIVIDE</Button>
      <Button operator={"reset input"}>RESET INPUT</Button>
      <Button operator={"reset result"}>RESET RESULT</Button>
    </form>
  );
}

function Button({operator,children}) {
  return <button onClick={() => operate(operator)}>{children}</button>;
}

export default App;
