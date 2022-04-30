import './search.css';
import { useState } from 'react';
const Search = ({ name, classname }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false)
  const handleSearchBar = (ev) => {
    setInputValue(ev.target.value);
  };
  return (
    <div
      className={`search-input-container ${classname !== undefined ? classname : ''} ${isFocused ? 'border' : ''}`}
    >
      <div className="icon icon--search">
        <i className="las la-search search-icon"></i>
      </div>
      <input
        className="search-input"
        type="search"
        name={name}
        value={inputValue}
        onChange={handleSearchBar}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
        placeholder="Search Images..."
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
