import reactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, portalEl)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}

      {/* <Backdrop /> */}
      {/* <ModalOverlay>{props.children}</ModalOverlay> */}
    </>
  );
};

export default Modal;
