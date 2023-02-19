import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

// const EditMaterialModal = ({ onClose, onEdit }) => {
//   return (
//     <div>
//       <h2>Modal editor window</h2>
//       <button
//         type="button"
//         onClick={() => {
//           onEdit();
//           onClose();
//         }}
//       >
//         Editing
//       </button>
//       <button type="button" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   );
// };

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete } = this.props;
    // const { item, onUpdate, onDelete } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div>
        <p>
          <b>Name: </b>
          {item.title}
        </p>
        <p>
          <b>URL: </b>
          {item.link}
        </p>

        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button type="button" onClick={this.openModal}>
          Editing
        </button>

        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1>Title modal</h1>
            <button type="button" onClick={this.closeModal}>
              Close modal
            </button>
          </Modal>
        )}
        {/* {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )} */}
      </div>
    );
  }
}
