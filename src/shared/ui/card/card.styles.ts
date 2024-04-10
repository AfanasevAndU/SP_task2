import styled from "styled-components";
import { CardProps } from "./card.types";

export const Container = styled.div<CardProps>`
  width: ${(props) => (props.size === "M" ? "100px" : "200px")};
  height: ${(props) => (props.size === "M" ? "150px" : "250px")};
  background-color: #fff;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  padding-top: 10px;
  text-align: center;
  image-align: center;
`;
