import React from "react";
import styled from "styled-components";

import Karakter from "./Karakter";

const Karakterler = (props) => {
  const { data } = props;
  console.log("ŞUUU", data);

  const Content = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <Content>
      {data.map((object, index) => (
        <Karakter key={index} data={object} />
      ))}
    </Content>
  );
};

export default Karakterler;
