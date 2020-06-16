import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const initialFriendsList = [
    {
      name: "Timmy",
      email: "timbo@timz@mail.com",
      role: "Full Time Daddy",
    },
    {
      name: "Bob",
      email: "bob@bobz@mail.com",
      role: "Construction",
    },
  ];

  const { memberList, setMemberList } = useState(initialFriendsList);

  console.log(memberList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
