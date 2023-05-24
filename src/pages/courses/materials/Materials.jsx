import React from "react";
import { styled } from "styled-components";
import { materials } from "../../../utils/Array";
import { Link, useSearchParams } from "react-router-dom";
import { Modal } from "../../../modal/Modal";

export const Materials = () => {
  const [openNewMaterial, setOpenNewMaterial] = useSearchParams();
  const modalState = openNewMaterial.get("modal");
  const openModalHandler = () => {
    setOpenNewMaterial({ modal: "addNewMaterial" });
  };
  const closeModalHandler = () => {
    setOpenNewMaterial({});
  };
  return (
    <Container>
      <MaterialButtonContainer>
        <Button onClick={openModalHandler}> Add new material</Button>
      </MaterialButtonContainer>
      <MaterialsContainer>
        {materials.map((el) => {
          return (
            <MaterialsContMap>
              <h1>
                {el.material} {el.id}
              </h1>
              <Link to={`${el.id}/details`}>
                <ButtonDetails>Details</ButtonDetails>
              </Link>
            </MaterialsContMap>
          );
        })}
      </MaterialsContainer>
      {modalState && <Modal onClose={closeModalHandler} />}
    </Container>
  );
};
const MaterialsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding-top: 2vh;

  div {
    width: 90%;
    height: 5vw;
    background-color: white;
    margin: 0 auto;
    padding: 10px 10px;
    border-radius: 10px;
  }
`;
const MaterialButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 90%;
  margin: 0 auto;
`;
const Container = styled.div`
  background-color: #c7cad3;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: blue;
  border: 0;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  margin-top: 50px;
`;
const ButtonDetails = styled.button`
  width: 10vw;
  height: 5vh;
  border-radius: 5px;
  border: 0;
  margin-right: 5vh;
  background-color: blue;
  color: white;
  font-size: 18px;
`;
const MaterialsContMap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
