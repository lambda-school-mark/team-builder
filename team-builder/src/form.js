import React from "react";

function Form(props) {
  const { values, onInputChange, onSubmit } = props;

  const formStyle = {
    margin: "100px auto",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    alignItems: "center",
  };

  const inputStyle = {
    border: "1px solid black",
    margin: "8px",
    padding: "10px 20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <form style={formStyle} onSubmit={onSubmit}>
      <input
        style={inputStyle}
        type="text"
        name="name"
        placeholder="Enter Name"
        value={values.name}
        onChange={onInputChange}
      ></input>
      <input
        style={inputStyle}
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={onInputChange}
      ></input>
      <select
        style={inputStyle}
        name="role"
        value={values.role}
        onChange={onInputChange}
      >
        <option>Trucker</option>
        <option>School</option>
        <option>Coder</option>
      </select>
      <input style={inputStyle} type="submit"></input>
    </form>
  );
}
export default Form;
