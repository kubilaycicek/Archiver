import './postImage.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uploadIcon from '../../assets/icons/upload3.svg';
import { postImages } from '../../store/Actions/imageActions';
import { convertToBase64 } from '../../utils/convertToBase64';

function PostImage() {
  const [categoryUUID, setCategoryUUID] = useState('');
  const [base64, setBase64] = useState('');
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
    } else {
      alert('Ccategory cannot be unselected !!!');
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBase64(base64);
  };
  const makeCategorySelectList = () => {
    if (categories.categoryList !== undefined) {
      return categories.categoryList.map(({ name, uuid, id }) => (
        <option value={uuid} key={id}>
          {name}
        </option>
      ));
    } else {
      return <option>Data Yok Lan Defol</option>;
    }
  };
  return (
    <div className="PostImage">
      <form onSubmit={handleSubmit}>
        <div className="file-upload-wrapper">
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
            src={uploadIcon}
            alt="Uploaded File"
            className="modal-upload-icon"
          />
        </div>
        <select
          name="categories"
          id="categories"
          onChange={(e) => setCategoryUUID(e.target.value)}
          className="category-select"
        >
          <option value="">Please select a category...</option>
          {makeCategorySelectList()}
        </select>
        <button
          type="submit"
          className="upload-submit-button"
          disabled={base64 !== '' && categoryUUID !== '' ? false : true}
        >
          {base64 === '' && categoryUUID === '' ? 'Select a File' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default PostImage;
