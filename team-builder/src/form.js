import React from "react";

export default function Form() {
  return (
    <form>
      <input type="text" name="name" placeholder="Enter Name"></input>
      <input type="text" name="name" placeholder="Enter Email"></input>
      <select>
        <option>Trucker</option>
        <option>School</option>
        <option>Coder</option>
      </select>
      <input type="submit"></input>
    </form>
  );
}
