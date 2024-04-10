import { FC } from "react";
import { TextProps } from "./text.types";
import { Text as TextStyle } from "./text.styles";

export const Text: FC<TextProps> = ({ children, id }) => {
  return (
    <div id={id}>
      <TextStyle>{children}</TextStyle>
    </div>
  );
};
