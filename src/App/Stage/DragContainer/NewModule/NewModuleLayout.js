import styled from "styled-components";

const NewModuleLayout = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  transform: translate(0, -50%);
  padding: 0;
  margin: 0;
  border: none;
  background: yellow;
`;

export default NewModuleLayout;
