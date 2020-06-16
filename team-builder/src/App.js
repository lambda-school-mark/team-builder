import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Member from "./Member";
import { v4 as uuid } from "uuid";

const initialMemberList = [];
const initialFormValues = [];

// const initialMemberList = [
//   {
//     id: uuid(),
//     name: "Timmy",
//     email: "timbo@timz@mail.com",
//     role: "Full Time Daddy",
//   },
//   {
//     id: uuid(),
//     name: "Bob",
//     email: "bob@bobz@mail.com",
//     role: "Construction",
//   },
// ];

// const initialFormValues = [
//   {
//     id: Math.random(),
//     name: "",
//     email: "",
//     role: "",
//   },
// ];

export default function App() {
  const [memberList, setMemberList] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log(memberList);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newMember = { ...formValues, id: uuid() };
    setMemberList((memberList) => [newMember, ...memberList]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
      />
      {memberList.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}
