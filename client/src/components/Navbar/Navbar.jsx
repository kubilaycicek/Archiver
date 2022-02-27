import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className='nav-link' to="/">Animal</Link>
        </li>
        <li>
          <Link className='nav-link' to="/">City</Link>
        </li>
        <li>
          <Link className='nav-link' to="/">Engineering</Link>
        </li>
        <li>
          <Link className='nav-link' to="/">Sex</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
