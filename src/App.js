import "./App.css";
import React, { useState } from "react";
import DropBox from "./components/DropBox/DropBox";
import Header from "./components/Header/Header";
import MembersList from "./components/MembersList/MembersList";
import { Sections } from "./constants/constants";

const App = () => {
  const [list, setList] = useState([]);
  const [section, setSection] = useState(Sections.upload);

  console.log("List", list);
  return (
    <div className="App">
      <Header setSection={setSection} />
      <main>
        {section === Sections.membersList && <MembersList list={list} />}
        {section === Sections.upload && <DropBox setList={setList} />}
      </main>
      <footer>Thank you</footer>
    </div>
  );
};

export default App;
