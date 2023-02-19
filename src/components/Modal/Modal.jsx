import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    // console.log('Modal copmponentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
    //   console.log('Close modal - ESC');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
    //   console.log('Clicks in backdrop');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className={styles.modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal__content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
