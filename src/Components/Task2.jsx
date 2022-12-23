import { useState, useEffect } from "react";

function Task2() {
  const [state, setState] = useState([]);

  const addTask = () => {
    const newTask = {
      id: !state[state.length - 1] ? 0 : state[state.length - 1].id + 1,
      time: randomInteger(10, 30),
      flag: true,
    };
    setState((prevState) => [...prevState, newTask]);
  };

  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setState((prev) =>
          prev.map(function (task) {
            return {
              id: task.id,
              flag: task.time < 0 ? false : true,
              time: task.time--,
            };
          })
        ),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <button onClick={addTask}>Добавить новую задачку</button>
      <ol>
        {state.map((task) =>
          task.flag ? (
            <li key={task.id}>Исчезнет через {task.time} секунд</li>
          ) : null
        )}
      </ol>
    </>
  );
}

export default Task2;
