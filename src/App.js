import "./App.css";
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";

function App() {
  return (
    <>
      <section class="task-section">
        <Task1 />
      </section>
      <section class="task-section">
        <Task2 />
      </section>
    </>
  );
}

export default App;
