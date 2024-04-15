import { FC } from "react";
import { ModalProps } from "./modal.types";
import { Container } from "../container";
import { StyledForm, StyledInput } from "./modal.styles";
import { Button } from "../button";

export const Modal: FC<ModalProps> = ({ state, onClick }) => {
  if (state === false) {
    return undefined;
  }
  return (
    <StyledForm>
      <Container flexDirection="column">
        <StyledInput type="text" placeholder="Картинка" />
        <StyledInput type="text" placeholder="Заголовок" required={true} />
        <StyledInput type="text" placeholder="id" required={true} />
        <StyledInput type="text" placeholder="Навык" required={true} />
        <Button type="submit" onClick={onClick}>
          Добавить
        </Button>
      </Container>
    </StyledForm>
  );
};
