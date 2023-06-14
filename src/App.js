import { useState } from "react";
import { Icon } from "@iconify/react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit() {
    setData((data) => [...data, value]);
    setValue("");
  }

  function handleDelete(itemIndex) {
    console.log(`Deleted item at ${itemIndex}`);
    let filteredData = data.filter((item, index) => {
      return index !== itemIndex;
    });
    setData(filteredData);
  }

  return (
    <>
      <div className="App">
        <h1> My TODO </h1>{" "}
        <div className="todoInput">
          <input
            type="text"
            name="input"
            id="input"
            value={value}
            placeholder="Enter todo values"
            onChange={(e) => setValue(e.target.value)}
          />{" "}
          <Icon icon="zondicons:add-solid" onClick={handleSubmit} />{" "}
        </div>{" "}
        <div className="listOutput">
          {" "}
          {data.length > 1 ? (
            <ul>
              {" "}
              {data.map((item, index) => {
                return (
                  <li key={index}>
                    <h3> Task Number {index + 1} </h3>{" "}
                    <div>
                      {" "}
                      {item}{" "}
                      <Icon
                        icon="solar:trash-bin-2-bold"
                        onClick={() => handleDelete(index)}
                      />{" "}
                    </div>{" "}
                  </li>
                );
              })}{" "}
            </ul>
          ) : (
            <h2> No task added </h2>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default App;
