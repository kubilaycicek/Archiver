import './banner.css';
import bannerImg from '../../assets/images/archive-img-2.jpg';
import Search from '../common/SearchInput/Search';
const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImg} loading="lazy" alt="Banner" />
      <div className="banner-filter"></div>
      <div className="banner-content">
        <h1 className="banner-title">Image Archiver</h1>
        <p className="banner-description">Archive image as a base64...</p>
        <div className="banner-search-filter">
          <Search value={''} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
