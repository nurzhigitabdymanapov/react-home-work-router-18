import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { students } from "../../../utils/Array";
import { styled } from "styled-components";

export const StudentDetails = () => {
  const params = useParams();
  console.log(params);
  const findedStudents = students.find((el) => el.id === +params.id);
  return (
    <DetailsContainer>
      <DetailsInfoContainer>
        <h1>Student Details page</h1>
        <h2>
          {findedStudents.id} {findedStudents.name}
        </h2>
      </DetailsInfoContainer>
    </DetailsContainer>
  );
};
const DetailsContainer = styled.div`
  background-color: #c7cad3;
  height: 85vh;
  padding-top: 5vh;
`;
const DetailsInfoContainer = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  h1{
    padding: 20px 20px;
  }
  h2{
    padding-left: 20px;
  }
`;
