import { useState } from "react";

function Task1() {
  const [value, setValue] = useState("");
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setState({ value: value, count: calculateCurrentBrackets(value) });

    setValue("");
    event.preventDefault();
  };

  const calculateCurrentBrackets = (str) => {
    let stek = [];
    const leftBrackets = ["(", "{", "["];
    const rightBrackets = [")", "}", "]"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (leftBrackets.includes(str[i])) {
        stek.push(str[i]);
      } else {
        const index = rightBrackets.findIndex((item) => item === str[i]);

        if (stek[stek.length - 1] === leftBrackets[index]) {
          stek.pop();
          count += 2;
        }
      }
    }
    return count;
  };

  const output = (
    <>
      <p>Введенная строка: {state.value} </p>
      <p>Количество правильных скобочек: {state.count}</p>
    </>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Введите строку:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
      {state ? output : null}
    </>
  );
}

export default Task1;
