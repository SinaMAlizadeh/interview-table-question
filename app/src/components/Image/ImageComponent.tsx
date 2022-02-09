import React, { useState } from "react";
import ModalComponent from "../Modal/Modal";
import { Image } from "./ImageComponent.styles";
var Diamond = require("../../assets/hiveLogo.png");

type IamgeProps = {
  url: string | null;
  alt: string;
};

function ImageComponent({ url }: IamgeProps) {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Image
        src={url as string}
        placeholder={Diamond}
        onClick={() => (url != null ? setShow(true) : null)}
      />
      <ModalComponent show={show} url={url as string} close={closeModal} />
    </>
  );
}

export default ImageComponent;
