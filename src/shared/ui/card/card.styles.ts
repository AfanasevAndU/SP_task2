import styled from "styled-components";
import { CardProps } from "./card.types";

export const Container = styled.div<CardProps>`
  width: ${(props) => (props.size === "M" ? "150px" : "200px")};
  height: ${(props) => (props.size === "M" ? "255px" : "300px")};
  min-width: 130px;
  max-width: 200px;
  min-height: 255px;
  max-height: 300px;
  background-color: #fff;
  flex-direction: column;
  margin-left: ${(props) => (props.size === "M" ? "10px" : "auto")};
  margin-right: ${(props) => (props.size === "M" ? "10px" : "auto")};
  border-radius: 12px;
  padding-top: 10px;
  text-align: center;
  image-align: center;
`;
