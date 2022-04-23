import './imagesgrid.css';
import ImageTile from './ImageTile';
const ImagesGrid = ({ images }) => {
  console.log('data', images);
  const imageTiles =
    images !== undefined && images.length > 0
      ? images.map((image, index) => (
          <ImageTile key={index} imgSrc={image.file} imgAltText="New 1" />
        ))
      : 'Data yok';
  return (
    <div className="img-main-container">
      <div className="grid-container">
        <div className="grid-items">{imageTiles}</div>
        <div className="grid-items">{imageTiles}</div>
        {/* <div className="grid-items">
          <ImageTile imgSrc={img4} imgAltText="New 1" />
          <ImageTile imgSrc={img1} imgAltText="New 1" />
          <ImageTile imgSrc={img3} imgAltText="New 1" />
          <ImageTile imgSrc={img2} imgAltText="New 1" />
        </div>
        <div className="grid-items">
          <ImageTile imgSrc={img3} imgAltText="New 1" />
          <ImageTile imgSrc={img5} imgAltText="New 1" />
          <ImageTile imgSrc={img4} imgAltText="New 1" />
          <ImageTile imgSrc={img2} imgAltText="New 1" />
        </div>
        <div className="grid-items">
          <ImageTile imgSrc={img4} imgAltText="New 1" />
          <ImageTile imgSrc={img1} imgAltText="New 1" />
          <ImageTile imgSrc={img2} imgAltText="New 1" />
          <ImageTile imgSrc={img5} imgAltText="New 1" />
        </div> */}
      </div>
    </div>
  );
};

export default ImagesGrid;
