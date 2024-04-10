import { FC } from "react";
import { ContainerProps } from "./container.types";
import { Container as ContainerStyle } from "./container.styles";

export const Container: FC<ContainerProps> = ({
  flexDirection,
  id,
  children,
}) => {
  return (
    <ContainerStyle id={id} flexDirection={flexDirection}>
      {children}
    </ContainerStyle>
  );
};
