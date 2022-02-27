import PostImage from '../PostImage/PostImage'
import './modal.css'
const Modal = ({isModalOpen, toggleModal}) => {
  return (
    <>
    <div id="overlay" className={`overlay ${isModalOpen ? '' : 'd-none'}`} onClick={()=>toggleModal(false)}></div>
    <div className={`modal ${isModalOpen ? 'open-position' : 'close-position'}`}>
      <div className="modal-header">
        This is a modal
      </div>
      <div className="modal-content">

        <PostImage />
      </div>
    </div>
  </>
  )
}

export default Modal