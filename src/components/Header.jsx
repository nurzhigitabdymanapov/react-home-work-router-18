import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <HeaderMain>
      <StyledNavLink to={"/courses"}>Courses</StyledNavLink>
      <StyledNavLink to={"/anouncements"}>Anouncements</StyledNavLink>
      <StyledNavLink to={"/notification"}>Notification</StyledNavLink>
      <StyledNavLink to={"/schedule"}>Schedule</StyledNavLink>
    </HeaderMain>
  );
};
const HeaderMain = styled.div`
  background-color: blue;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 50px;

`;
const StyledNavLink = styled(NavLink)`
  color: white   ;
  font-size: 22px;
  text-decoration: none;
  margin-right: 28px;
  &.active {
    color: black;
    font-size: 25px;
  }
`;
