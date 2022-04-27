import PostImage from '../PostImage/PostImage';
import './modal.css';
const Modal = ({ isModalOpen, toggleModal }) => {
  return (
    <>
      <div
        id="overlay"
        className={`overlay ${isModalOpen ? '' : 'd-none'}`}
        onClick={() => toggleModal(false)}
      ></div>
      <div
        className={`modal ${isModalOpen ? 'open-position' : 'close-position'}`}
      >
        <div className="modal-header">Drag an image file or click to select</div>
        <div className="modal-content">
          <PostImage toggleModal={toggleModal}/>
        </div>
      </div>
    </>
  );
};

export default Modal;
