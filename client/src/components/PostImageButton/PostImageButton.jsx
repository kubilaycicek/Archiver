import './postImageButton.css';
import uploadIcon from '../../assets/icons/upload-icon.png';
const PostImageButton = ({toggleModal}) => {
  const handleHover = () => {
    const btn = document.querySelector('.post-button');
    const btnText = document.querySelector('.post-upload-text');
    btn.classList.add('last-width');
    btnText.classList.add('text-end');
  }
  const handleHoverOut = () => {
    const btn = document.querySelector('.post-button');
    const btnText = document.querySelector('.post-upload-text');
    btn.classList.remove('last-width');
    btnText.classList.remove('text-end');
  }
  const handlePostModal = () => {
    console.log('Open Modal');
    toggleModal(true)
  }
  return (
    <button className="post-button first-width" onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handlePostModal}>
        <img
          src={uploadIcon}
          className="post-upload-icon"
          alt="Upload an image"
        />
        <span className='post-upload-text'>Post Image</span>
    </button>
  );
};

export default PostImageButton;
