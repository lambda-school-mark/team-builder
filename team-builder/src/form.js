import React from "react";

function Form(props) {
  const { values, onInputChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={values.name}
        onChange={onInputChange}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={onInputChange}
      ></input>
      <select name="role" value={values.role} onChange={onInputChange}>
        <option>Trucker</option>
        <option>School</option>
        <option>Coder</option>
      </select>
      <input type="submit"></input>
    </form>
  );
}
export default Form;
