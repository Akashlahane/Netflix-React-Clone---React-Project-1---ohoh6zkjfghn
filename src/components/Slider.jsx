import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {return movies.slice(from, to);};
  
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(1, 12)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(13, 25)} title="New Releases" />
      <CardSlider data={getMoviesFromRange(26, 38)} title="Blockbuster Movies"/>
      <CardSlider data={getMoviesFromRange(39,52)} title="Popular on Netflix"/>
      <CardSlider data={getMoviesFromRange(53, 65)} title="Critically Acclaimed"/>
      <CardSlider data={getMoviesFromRange(66, 78)} title="Only on Netflix" />
    </Container>
  );
}

const Container = styled.div``;