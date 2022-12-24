import { useState } from "react";

function Task1() {
  const [value, setValue] = useState("");
  const [state, setState] = useState("");

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
      <div>
        <p>Введенная строка: {state.value} </p>
        <p>Количество правильных скобочек: {state.count}</p>
      </div>
    </>
  );

  return (
    <>
      <h2>Задача 1</h2>
      <div>
        Дана строка, содержащая скобки трёх видов (круглые, квадратные и
        фигурные) и любые другие символы. Посчитайте сколько скобок расставлено
        корректно а сколько нет.
      </div>
      <form onSubmit={handleSubmit}>
        <div class="text-field">
          <label class="text-field__label" for="brackets">
            Скобочки
          </label>
          <input
            class="text-field__input"
            type="text"
            name="brackets"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" class="btn">
          Отправить
        </button>
      </form>
      {state ? output : null}
    </>
  );
}

export default Task1;
