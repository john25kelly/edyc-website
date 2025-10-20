import styled from "styled-components";

const Tile = styled.div`
  background: ${(props) => props.theme.colors.tileBg};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 2px 8px rgba(140, 62, 95, 0.06);
  border: 1px solid ${(props) => props.theme.colors.tileBorder};
  padding: 2rem;
  margin-bottom: ${(props) => props.theme.spacing};
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(76, 110, 177, 0.16);
  }
`;

export default Tile;