import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/Logo/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <picture>
          <img className="logo" src={logo} alt="Application Name" />
        </picture>
      </Link>
      <div className="search-filter">
        <input type="search" className='search-input' name="search" id="search" placeholder='Search Image...'/>
        <i className="las la-search search-icon"></i>
      </div>
    </header>
  );
};

export default Header;
