import { FC } from "react";
import { CardProps } from "./card.types";
import { Container } from "./card.styles";

export const Card: FC<CardProps> = ({ children, size, id }) => {
  return (
    <Container size={size} id={id}>
      {children}
    </Container>
  );
};
