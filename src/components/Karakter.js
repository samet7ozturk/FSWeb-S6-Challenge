import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 400px;
  margin: 10px auto;
`;
const CharList = styled.div`
  border-radius: 10px 10px 0 0;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 10px;
  display: block;
  font-size: 1.3em;
  letter-spacing: 3px;
  overflow: hidden;
  border: 2px solid #000;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const Features = styled.div`
  padding: 10px;
  border-radius: 0 0 10px 10px;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  font-family: "Helvetica Neue";
  font-size: 1.1em;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/783/587/809/star-wars-death-star-science-fiction-wallpaper-preview.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
  color: #a6a6a6;
  letter-spacing: 2px;
`;

const Characters = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <AccordionContainer>
      <CharList onClick={() => (active ? setActive(false) : setActive(true))}>
        {data.name} {active ? "▲" : "▼"}
      </CharList>

      {active && (
        <Features>
          <p> Gender ➢ {data.gender}</p>
          <p> Height : {data.height}</p>
          <p> Mass : {data.mass}</p> <p> Birth Year: {data.birth_year}</p>{" "}
          <p> Eye Color: {data.eye_color}</p>
          <p> Hair Color : {data.hair_color}</p>
          <p> Skin Color : {data.skin_color}</p>
        </Features>
      )}
    </AccordionContainer>
  );
};

export default Characters;
