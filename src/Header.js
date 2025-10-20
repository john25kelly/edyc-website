import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.colors.tileBorder};
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

function Header() {
  return (
    <Nav>
      <Logo>EDYC</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/gallery">Gallery</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
}

export default Header;