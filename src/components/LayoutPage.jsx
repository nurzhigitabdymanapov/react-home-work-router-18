import React from "react";
import { styled } from "styled-components";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <LayoutContainer>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
`;
export default LayoutPage;
