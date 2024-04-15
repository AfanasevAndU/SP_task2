import { BaseSyntheticEvent, FC, useState } from "react";
import { ModalProps } from "./modal.types";
import { Container } from "../container";
import { StyledInput } from "./modal.styles";
import { Button } from "../button";

export const Modal: FC<ModalProps> = ({ state, onCreate }) => {
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [knowledge, setKnowledge] = useState<number>();
  const [id, setId] = useState<number>();

  const onTitleChange = (e: BaseSyntheticEvent) => {
    setTitle(e.target.value);
  };

  const onSrcChange = (e: BaseSyntheticEvent) => {
    setSrc(e.target.value);
  };

  const onKnowledgeChange = (e: BaseSyntheticEvent) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) {
      alert("Введите число");
      return;
    }
    setKnowledge(value);
  };

  const onIdChange = (e: BaseSyntheticEvent) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) {
      alert("Введите число");
      return;
    }
    setId(value);
  };

  if (state === false) {
    return undefined;
  }
  return (
    <Container flexDirection="column">
      <StyledInput
        type="text"
        placeholder="Картинка"
        required={true}
        value={src}
        onChange={onSrcChange}
      />
      <StyledInput
        type="text"
        placeholder="Заголовок"
        required={true}
        value={title}
        onChange={onTitleChange}
      />
      <StyledInput
        type="text"
        placeholder="id"
        required={true}
        value={id}
        onChange={onIdChange}
      />
      <StyledInput
        type="text"
        placeholder="Навык"
        required={true}
        value={knowledge}
        onChange={onKnowledgeChange}
      />
      <Button
        type="submit"
        onClick={() => {
          if (!src || !title || typeof knowledge === "undefined" || !id) {
            alert("Заполните все поля");
            return;
          }

          onCreate({
            src: src,
            title: title,
            knowledge: knowledge,
            id: id,
            color: "black",
          });
        }}
      >
        Добавить
      </Button>
    </Container>
  );
};
