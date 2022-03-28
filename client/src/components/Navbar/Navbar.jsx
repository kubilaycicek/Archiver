import { NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const navLinks = [
    { id: 1, href: '/', label: 'Animal' },
    { id: 2, href: '/deneme', label: 'City' },
    { id: 3, href: '/r', label: 'Engineering' },
    { id: 4, href: '/g', label: 'Sex' },
  ];
  return (
    <nav className="nav">
      <ul className="nav-ul">
        {navLinks.map(({ id, href, label }) => (
          <li key={id} className="nav-li">
            <NavLink
              className="nav-link"
              to={href}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
