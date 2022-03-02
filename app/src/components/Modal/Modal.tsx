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
  url: string | null ;
  close: () => void;
};

function ModalComponent({ show, url, close }: ModalComponentProps) {
  if (!show) {
    return null;
  }


  useEffect(() => {
    const closeOnescapeKeyDown = (e : KeyboardEvent ) => {
      if ((e.key) === "Escape") {
        close();
      }
    };
  
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
          <img src={url == null ? '' : url} alt="..." loading="lazy" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
