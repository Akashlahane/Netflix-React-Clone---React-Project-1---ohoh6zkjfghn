import React from "react";
import styled from "styled-components";

export default function SelectGenre({ genres, parentCallback }) {
  return (
    <Select
      className="flex"
      id="mySelect"
      onChange={(e) => {
        parentCallback(e.target.value);
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.name} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  display: block;
  position: absolute;
  top: 5.5rem; /* Adjust as necessary */
  left: 3rem; /* Adjust as necessary */
  z-index: 1000;
  cursor: pointer;
  font-size: 20px;
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 2px;
  outline: none;

  /* Additional styling to ensure the options are accessible */
  option {
    background-color: black;
    color: white;
  }
`;
