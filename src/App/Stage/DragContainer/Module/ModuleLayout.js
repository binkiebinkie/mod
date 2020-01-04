import styled from "styled-components";

const ModuleLayout = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export default ModuleLayout;
