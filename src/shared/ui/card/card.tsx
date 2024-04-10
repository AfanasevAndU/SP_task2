import { FC } from "react";
import { CardProps } from "./card.types";
import { Container } from "./card.styles";

export const Card: FC<CardProps> = ({ children, type, size, id }) => {
  return (
    <Container type={type} size={size} id={id}>
      {children}
    </Container>
  );
};
