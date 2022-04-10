import './imagesgrid.css';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import ImageTile from './ImageTile';
const ImagesGrid = ({ images }) => {
  console.log('data', images);
  const imageTiles =
    images.archiveList != undefined && images.archiveList.length > 0
      ? images.archiveList.map((image) => (
            <ImageTile imgSrc={image.file} imgAltText="New 1" />
          
        ))
      : 'Data yok';
  return (
    <div className="img-main-container">
      <div className="grid-container">
        <div className='grid-items'>
          {imageTiles}
        </div>
        <div className='grid-items'>
          {imageTiles}
        </div>
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
