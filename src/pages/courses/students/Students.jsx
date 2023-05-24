import React from "react";
import { styled } from "styled-components";
import { students } from "../../../utils/Array";
import { Link } from "react-router-dom";

export const Students = () => {
  return (
    <StudentsContainer>
      {students.map((el) => {
        return (
          <div key={el.id}>
            <StudentsInfo>
              <h2>{el.name}</h2>
              <Link to={`${el.id}/details`}>
                <button>Details</button>
              </Link>
            </StudentsInfo>
          </div>
        );
      })}
      {/* <Outlet /> */}
    </StudentsContainer>
  );
};
const StudentsContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #c7cad3;
  display: flex;
  flex-direction: column;
`;
const StudentsInfo = styled.div`
  width: 90%;
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  margin-top: 4vh;

  h2 {
    margin-left: 5vh;
  }
  button {
    width: 10vw;
    height: 5vh;
    border-radius: 5px;
    border: 0;
    margin-right: 5vh;
    background-color: blue;
    color: white;
    font-size: 18px;
  }
`;
