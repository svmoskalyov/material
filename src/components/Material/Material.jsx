import { Component } from 'react';
import { AiFillDelete, AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import {
  Item,
  List,
  Name,
  ModalTitle,
  ModalText,
  ModalButton,
} from './Material.styled';

export class Material extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { item, onUpdate, onDelete } = this.props;
    const { showModal } = this.state;

    return (
      <List>
        <Item>
          <Name>URL:</Name>
          {item.link}
        </Item>
        <Item>
          <Name>Description:</Name>
          {item.title}
        </Item>

        <Item>
          <Button
            type="button"
            icon={AiFillEdit}
            onClick={this.toggleModal}
            aria-label="editing material"
          >
            Editing
          </Button>
          <Button
            type="button"
            icon={AiFillDelete}
            onClick={() => onDelete(item.id)}
            aria-label="delete material"
          >
            Delete
          </Button>
        </Item>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Box>
              <ModalTitle>Edit material</ModalTitle>
              <ModalText>
                Сlick the button 'Editing' to edit the material
              </ModalText>
            </Box>

            <ModalButton>
              <Button
                type="button"
                icon={AiFillEdit}
                onClick={() => {
                  onUpdate({ id: item.id, title: Date.now() });
                  this.toggleModal();
                }}
                aria-label="editing material in modal window"
              >
                Editing
              </Button>
              <Button
                type="button"
                icon={AiFillCloseCircle}
                onClick={this.toggleModal}
                aria-label="close modal window"
              >
                Close
              </Button>
            </ModalButton>
          </Modal>
        )}
      </List>
    );
  }
}
