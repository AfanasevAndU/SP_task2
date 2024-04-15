import { FC } from "react";
import { ImageProps } from "./image.types";
import { Image as ImageStyle } from "./image.styles";

export const Image: FC<ImageProps> = ({ src, alt, id }) => {
  return <ImageStyle src={src} alt={alt} id={id} />;
};
