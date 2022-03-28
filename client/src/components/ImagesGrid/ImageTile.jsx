import './imagetile.css';

const ImageTile = ({ imgSrc, imgAltText }) => {
  return (
    <picture className="img-item">
      <img src={imgSrc} alt={imgAltText} />
      <div className="img-figures">
        <div className="icon--fav">
          <i className="las la-heart"></i>
        </div>
        <div className="icon--download">
          <i className="las la-download"></i>
        </div>
      </div>
    </picture>
  );
};

export default ImageTile;
