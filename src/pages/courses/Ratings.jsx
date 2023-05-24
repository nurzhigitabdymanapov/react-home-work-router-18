import React from "react";
import { styled } from "styled-components";

export const Ratings = () => {

  return (
    <RatingsContainer>
      <div>
        <h1>Ratings Page</h1>
      </div>
    </RatingsContainer>
  );
};
const RatingsContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #c7cad3;
  padding-top: 5vh;
  div{
    width: 90%;
    background-color: white;
    height: 90%;
    margin: 0 auto;
    border-radius: 10px;
    h1{
        padding: 20px 20px;
    }
  }
`;
