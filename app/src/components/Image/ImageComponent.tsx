import React from "react";
import { Image } from "./ImageComponent.styles";
var Diamond = require("../../assets/hiveLogo.png");

type IamgeProps = {
  url: string | null;
  alt: string;
};

function ImageComponent({ url, alt }: IamgeProps) {
  return <Image src={url as string} placeholder={Diamond} />;
}

export default ImageComponent;
