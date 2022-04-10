import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './navbar.css';
const Navbar = () => {
  const navLinks = [
    { id: 1, href: '/', label: 'Animal' },
    { id: 2, href: '/deneme', label: 'City' },
    { id: 3, href: '/r', label: 'Engineering' },
    { id: 4, href: '/g', label: 'Sex' },
  ];
  const {isLoading, data, error} = useFetch('http://localhost:9090/api/v1/categories/list');
  console.log('categories ', data);
  const navList = data.categoryList !== undefined && data.categoryList.length > 0 ? data.categoryList.map(({ id,uuid, name }) => (
    <li key={id} className="nav-li">
      <NavLink
        className="nav-link"
        to={`category/${uuid}`}
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}
      >
        {name}
      </NavLink>
    </li>
  )) : [];

  return (
    <nav className="nav">
      <ul className="nav-ul">
        {navList}
      </ul>
    </nav>
  );
};
export default Navbar;
