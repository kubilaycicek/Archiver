import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [afterEffect, setAfterEffect] = useState('');
  const { isLoading, categories } = useSelector(
    (state) => state.categoryReducer
  );

  const navList =
    categories.categoryList !== undefined &&
    categories.categoryList.map(({ id, uuid, name }) => (
      <li
        key={id}
        className={`nav-li ${afterEffect}`}
        onMouseEnter={() => setAfterEffect('')}
        onMouseLeave={() => setAfterEffect('')}
      >
        <NavLink
          className="nav-link"
          index={uuid}
          to={`/${name.toLowerCase()}`}
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          {name}
        </NavLink>
      </li>
    ));
  useEffect(() => {
    let nav = document.querySelector('.nav-ul');
    let left = document.querySelector('.la-angle-left');
    let right = document.querySelector('.la-angle-right');
    nav.addEventListener('wheel', (ev) => {
      console.log('wheeliing');
      ev.preventDefault();
      console.log(ev.deltaY);
      nav.scrollLeft += ev.deltaY;
    });
    left.addEventListener('click', (ev) => {
      console.log('wheeliing');
      ev.preventDefault();
      nav.scrollLeft -= 100;
    });
    right.addEventListener('click', (ev) => {
      console.log('wheeliing');
      ev.preventDefault();
      nav.scrollLeft += 100;
    });
  }, []);

  return (
    <nav className="nav">
      <div className="left-arrow">
        <i className="las la-angle-left"></i>
      </div>
      <div className="right-arrow">
        <i className="las la-angle-right"></i>
      </div>
      <ul className="nav-ul">{isLoading ? 'Loading...' : navList}</ul>
    </nav>
  );
};
export default Navbar;
