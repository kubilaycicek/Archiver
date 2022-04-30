import { Link } from 'react-router-dom';
import './header.css';
import Search from '../common/SearchInput/Search';
import LogoSvg from '../common/SvgIcons/LogoSvg';
import logoAlt from '../../assets/Logo/logo_alt.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="brand">
          <picture className="header-logo">
            <img src={logoAlt} alt="" height={60} />
          </picture>
          <p className="brand-text">Image Archiver</p>
        </div>
      </Link>
      <Search classname="search-top" />
    </header>
  );
};

export default Header;
