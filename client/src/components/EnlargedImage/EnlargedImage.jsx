import { useDispatch } from 'react-redux';
import { enlargeImageWithModal } from '../../store/Actions/imageActions';
import './enlargedImage.css';
const EnlargedImage = ({ showModalIfSrc, enlargeImageSrc }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id="overlay"
        className={`overlay ${showModalIfSrc}`}
        onClick={() => dispatch(enlargeImageWithModal(''))}
      ></div>
      <div className={`img-modal ${showModalIfSrc}`}>
        <div className="img-modal-header">
          <p>Image Title</p>
          <div className="img-modal-close">
            <i
              className="las la-times"
              onClick={() => dispatch(enlargeImageWithModal(''))}
            ></i>
          </div>
        </div>
        <img src={enlargeImageSrc} alt="" />
      </div>
    </>
  );
};

export default EnlargedImage;
