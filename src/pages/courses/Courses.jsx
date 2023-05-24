import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const Courses = () => {
  return (
    <div>
      <CoursesMain>
        <StyledNavLinkCourses to="materials">Materials</StyledNavLinkCourses>
        <StyledNavLinkCourses to="/courses/students">
          Students
        </StyledNavLinkCourses>
        <StyledNavLinkCourses to="/courses/ratings">
          Rating
        </StyledNavLinkCourses>
      </CoursesMain>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
const CoursesMain = styled.div`
  background-color: blue;
  width: 75vw;
  height: 10vh;
  display: flex;
  align-items: center;
  gap: 50px;
  padding-left: 5vw;
`;
const StyledNavLinkCourses = styled(NavLink)`
  color: white;
  font-size: 22px;
  text-decoration: none;
  margin-right: 28px;

  &.active {
    color: black;
    border-bottom: 3px solid black;
    padding-bottom:5px ;
  }
`;
