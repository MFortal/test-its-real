import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Task2() {
  const [state, setState] = useState([]);

  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      time: randomInteger(10, 30),
    };
    setState((prevState) => [...prevState, newTask]);
  };

  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        let newState = [];
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].time < 0) continue;

          newState.push({
            id: prev[i].id,
            time: prev[i].time--,
          });
        }

        return newState;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <button onClick={addTask}>Добавить новую задачку</button>
      <ol>
        {state.map((task) => (
          <li key={task.id}>Исчезнет через {task.time} секунд</li>
        ))}
      </ol>
    </>
  );
}

export default Task2;
