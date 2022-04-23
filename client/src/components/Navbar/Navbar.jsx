import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const {isLoading, categories } = useSelector(state => state.categoryReducer)

  const navList = categories.categoryList !== undefined && categories.categoryList.map(({ id,uuid, name }) => (
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
  ));

  return (
    <nav className="nav">
      <ul className="nav-ul">
        {isLoading ? 'Loading...' : navList}
      </ul>
    </nav>
  );
};
export default Navbar;
