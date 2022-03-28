import './search.css';

const Search = ({ name, value }) => {
  return (
    <div className={`search-input-container`}>
      <div className="icon icon--search">
        <i className="las la-search search-icon"></i>
      </div>
      <input
        className="search-input"
        type="search"
        name={name}
        value={value}
        placeholder="Placeholderr"
      />
      <div className="icon icon--delete">
        <i className={`las la-times ${value !== '' ? 'show' : 'hide'}`}></i>
      </div>
    </div>
  );
};

export default Search;
