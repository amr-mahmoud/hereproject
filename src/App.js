import "./App.css";
import React, { useState } from "react";
import DropBox from "./components/DropBox/DropBox";

const App = () => {
  const [list, setList] = useState([]);

  console.log("List", list);
  return (
    <div className="App">
      <header>Title</header>
      <main>
        <DropBox />
      </main>
      <footer>Thank you</footer>
    </div>
  );
};

export default App;
