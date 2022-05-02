import { useDispatch } from 'react-redux';
import { enlargeImageWithModal } from '../../store/Actions/imageActions';
import './imagesgrid.css';
const ImagesGrid = ({ images }) => {
  const dispatch = useDispatch();
  const enlargeImage = (src) => {
    dispatch(enlargeImageWithModal(src))
  }
  const imageTiles =
    images !== undefined && images.length > 0
      ? images.map(item => (
        <div className="img-tile" key={item.id} onClick={()=>enlargeImage(item.file)}>
          <img src={item.file} alt="New" />
          <div className="img-attrs">
            <div className="icon--fav">
              <i className="las la-heart"></i>
            </div>
            <div className="icon--download">
              <i className="las la-download"></i>
            </div>
          </div>
        </div>
      ))
      : "There isn't any image data on server. Please try add new images.";
  return (
    <div className="img-main-container">
      <div className="masonry">
        {imageTiles}
      </div>
    </div>
  );
};

export default ImagesGrid;
