import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#2c698d",
        color: "white"
      }}
    >
      <StyledLink to="/">
        <p>React Quiz</p>
      </StyledLink>
      <StyledLink to="/questions">
        <p>Set Questions</p>
      </StyledLink>
      <StyledLink to="quiz">
        <p>Play Quiz</p>
      </StyledLink>
    </div>
  );
};
export default Navbar;
