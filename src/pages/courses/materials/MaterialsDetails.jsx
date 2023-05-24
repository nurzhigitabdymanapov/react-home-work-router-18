import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { materials } from "../../../utils/Array";
import { styled } from "styled-components";

export const MaterialsDetails = () => {
  const params = useParams();
  console.log(params);
  const findedMaterials = materials.find((el) => el.id === +params.id);
  return (
    <MaterialsDetailsContainer>
      <MaterialsDetailsSecondContainer>
        <div>
          <p>Material Details Page:</p>
          <p>
            {findedMaterials.material} {findedMaterials.id}
          </p>
        </div>
        <main>
          <NavLinkPage to={"submited"}>Submited</NavLinkPage>
          <NavLinkPage to={"waiting"}>Waiting</NavLinkPage>
          <NavLinkPage to={"late"}>Late</NavLinkPage>
        </main>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </MaterialsDetailsSecondContainer>
    </MaterialsDetailsContainer>
  );
};
const MaterialsDetailsContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #c7cad3;
  padding-top: 5vh;
`;
const MaterialsDetailsSecondContainer = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  div {
    height: 50%;
    p {
      padding: 30px 30px;
      font-size: 30px;
    }
  }
  main {
    display: flex;
    padding-left: 50px;
    gap: 50px;
    background-color: #008000;
    height: 5vh;
    align-items: center;
  }
`;
const NavLinkPage = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  color: black;
  padding-top: 20px;
  &.active {
    color: black;
    border-bottom: 3px solid black;
    padding-bottom:5px ;
  }
  
`;
const OutletContainer = styled.div`
    background-color: green;

`