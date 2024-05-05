import React from "react";
import styled from "styled-components";
export default function SelectGenre({ genres, parentCallback}) {

  return (
    <Select className="flex" id="mySelect" onChange={(e) => {parentCallback(e.target.value);}}>
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
  position: fixed;
  z-index:1000;
  margin-left: 3rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: black;
  color: white;
`;