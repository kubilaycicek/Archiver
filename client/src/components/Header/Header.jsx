import { Link } from 'react-router-dom';
import './header.css';
import Search from '../common/SearchInput/Search';
import LogoSvg from '../common/SvgIcons/LogoSvg';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <picture className='header-logo'>
        <LogoSvg />
        </picture>
      </Link>
      <Search classname="search-top"/>
    </header>
  );
};

export default Header;
