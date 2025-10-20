import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
background: ${(props) => props.theme.colors.primary};
color: #fff;
text-align: center;
padding: 1.5rem 0;
margin-top: 2rem;
font-size: 1rem;
`;

function Footer() {
return (
  <Foot>
    &copy; {new Date().getFullYear()} EDYC Club. All rights reserved.
  </Foot>
);
}

export default Footer;