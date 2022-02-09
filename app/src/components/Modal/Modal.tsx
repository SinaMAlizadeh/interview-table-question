import React, { useEffect } from "react";
import {
  CloseBtn,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "./Modal.styles";

type ModalComponentProps = {
  show: boolean;
  url: string;
  close: () => void;
};

function ModalComponent({ show, url, close }: ModalComponentProps) {
  if (!show) {
    return null;
  }

  const closeOnescapeKeyDown = (e) => {
    if ((e.chartCode || e.keyCode) === 27) {
      close();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnescapeKeyDown);
    () => {
      document.body.removeEventListener("keydown", closeOnescapeKeyDown);
    };
  }, []);

  return (
    <Modal onClick={close}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Header</ModalTitle>
          <CloseBtn onClick={close}>&#10005;</CloseBtn>
        </ModalHeader>
        <ModalBody>
          <img src={url} alt="..." loading="lazy" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
