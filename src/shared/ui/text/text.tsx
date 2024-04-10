import { FC } from "react";
import { TextProps } from "./text.types";
import { Text as TextStyle } from "./text.styles";

export const Text: FC<TextProps> = ({ children, id, color }) => {
  return (
    <TextStyle id={id} color={color}>
      {children}
    </TextStyle>
  );
};
