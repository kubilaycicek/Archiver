import './search.css';
import { useState } from 'react';
const Search = ({ name, classname }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchBar = (ev) => {
    setInputValue(ev.target.value);
  };
  return (
    <div className={`search-input-container ${classname}`}>
      <div className="icon icon--search">
        <i className="las la-search search-icon"></i>
      </div>
      <input
        className="search-input"
        type="search"
        name={name}
        value={inputValue}
        onChange={handleSearchBar}
        placeholder="Placeholderr"
      />
      <div className="icon icon--delete" onClick={() => setInputValue('')}>
        <i
          className={`las la-times ${inputValue !== '' ? 'show' : 'hide'}`}
        ></i>
      </div>
    </div>
  );
};

export default Search;
