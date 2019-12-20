import styled from "styled-components";

const ModuleLayout = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export default ModuleLayout;
