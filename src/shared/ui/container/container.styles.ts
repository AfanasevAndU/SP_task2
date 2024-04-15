import styled from "styled-components";
import { ContainerProps } from "./container.types";

export const Container = styled.div<ContainerProps>`
  flex-direction: ${(props) => props.flexDirection};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
