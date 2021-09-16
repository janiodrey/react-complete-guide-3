import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import css from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={css.modal}>
      <header className={css.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={css.content}>
        <p>{props.message}</p>
      </div>
      <footer className={css.actions}>
        <Button>Ok!</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
