import './postImageButton.css';
import { useEffect } from 'react';
import uploadIcon from '../../assets/icons/upload-icon.png';
import upload from '../../assets/icons/upload3.svg';
const PostImageButton = ({ toggleModal, isModalOpen }) => {
  useEffect(() => {
    if(isModalOpen) {
      let iconDiv = document.querySelector('.post-icon');
      iconDiv.classList.add('open-state-icon')
      let textDiv = document.querySelector('.post-text');
      textDiv.classList.add('open-state-text')
    }else {
      let iconDiv = document.querySelector('.post-icon');
      iconDiv.classList.remove('open-state-icon')
      let textDiv = document.querySelector('.post-text');
      textDiv.classList.remove('open-state-text')
    }
  }, [isModalOpen])
  
  const handlePostModal = () => {
    console.log('Open Modal');
    toggleModal(true);
    console.log('opener',isModalOpen);
    
  };
  return (
    <button className="post-button" onClick={handlePostModal}>
      <div className="post-icon flex-center">
        <img
          src={upload}
          className="post-upload-icon"
          alt="Upload an image"
        />
      </div>
      <div className="post-text flex-center">
        <span className="post-upload-text">Post Image</span>
      </div>
    </button>
  );
};

export default PostImageButton;
