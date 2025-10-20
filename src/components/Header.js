import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.colors.tileBorder};
  position: sticky;
  top: 0;
  z-index: 40;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    margin-top: 12px;
    background: ${(props) => props.theme.colors.primary};
    padding: 12px 0;
    position: absolute;
    left: 0;
    top: calc(100% + 0px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 8px;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    background: rgba(255,255,255,0.04);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo>EDYC</Logo>

      <DesktopLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/gallery">Gallery</StyledLink>
        <StyledLink to="/history">History</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </DesktopLinks>

      <MenuButton aria-label="Toggle menu" onClick={() => setOpen((s) => !s)}>
        {open ? "✕" : "☰"}
      </MenuButton>

      <NavLinks open={open}>
        <StyledLink to="/" onClick={() => setOpen(false)}>Home</StyledLink>
        <StyledLink to="/news" onClick={() => setOpen(false)}>News</StyledLink>
        <StyledLink to="/events" onClick={() => setOpen(false)}>Events</StyledLink>
        <StyledLink to="/gallery" onClick={() => setOpen(false)}>Gallery</StyledLink>
        <StyledLink to="/history" onClick={() => setOpen(false)}>History</StyledLink>
        <StyledLink to="/contact" onClick={() => setOpen(false)}>Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
}

export default Header;