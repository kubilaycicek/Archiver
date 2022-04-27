import './postImage.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uploadIcon from '../../assets/icons/upload3.svg';
import { postImages } from '../../store/Actions/imageActions';
import { convertToBase64 } from '../../utils/convertToBase64';
function PostImage({toggleModal}) {
  const [categoryUUID, setCategoryUUID] = useState('');
  const [base64, setBase64] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const { categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('event', e);
    if (categoryUUID !== '') {
      console.log('post işlemi başladı');
      dispatch(
        postImages({
          categoryUuid: categoryUUID,
          archiveDto: {
            file: base64,
          },
        })
        );
      }
      handleClear();
      toggleModal(false)

  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBase64(base64);
    setIsImageSelected(true);
  };
  const makeCategorySelectList = () => {
    return (
      <select
        name="categories"
        id="categories"
        onChange={(e) => setCategoryUUID(e.target.value)}
        className="category-select"
        value={categoryUUID}
        
      >
        <option value="">Please select a category...</option>
        {categories.categoryList !== undefined ? (
          categories.categoryList.map(({ name, uuid, id }) => (
            <option value={uuid} key={id}>
              {name}
            </option>
          ))
        ) : (
          <option>Can't found any category data on server.</option>
        )}
      </select>
    );
  };
  const submitButton = () => {
    if (categoryUUID !== '' && base64 !== '' && isImageSelected) {
      return (
        <button type="submit" className="upload-submit-button">
          Submit
        </button>
      );
    }
  };
  const handleClear = () => {
    setIsImageSelected(false);
    setCategoryUUID('');
  };
  return (
    <div className="PostImage">
      <form onSubmit={handleSubmit}>
        <div className="file-upload-wrapper">
          <button
            type="reset"
            className={`clear-button ${isImageSelected ? '' : 'd-none'}`}
            onClick={handleClear}
          >
            <i className="las la-trash"></i>
          </button>
          <input
            className="upload-file-input"
            type="file"
            label="Image"
            name="myFile"
            accept=".jpeg, .png, .jpg"
            draggable
            onChange={(e) => handleFileUpload(e)}
          />
          <img
            src={isImageSelected ? base64 : uploadIcon}
            alt="Uploaded File"
            className={isImageSelected ? 'modal-upload-img' : 'modal-upload-icon'}
          />
        </div>
        {makeCategorySelectList()}
        {submitButton()}
      </form>
    </div>
  );
}

export default PostImage;
