import './postImage.css';
import { useState } from 'react';
import postFile from '../../hooks/postFile';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import uploadIcon from '../../assets/icons/upload3.svg';

function PostImage() {
  const countState = useSelector(state => state.countReducers)
  const [categoryUUID, setCategoryUUID] = useState("");
  const [base64, setBase64] = useState("")
  const {isLoading, data, error} = useFetch('http://localhost:9090/api/v1/categories/list');
  const { createPost } = postFile()
  const url = 'http://localhost:9090/api/v1/archives';
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('event',e);
    if(categoryUUID !== "") {
      createPost(url, {
        categoryUuid:categoryUUID,
        archiveDto: {
          file: base64
        }
      });
    }else {
      alert('Ccategory cannot be unselected !!!')
    }
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBase64(base64);
  };
  const makeCategorySelectList = () => {
    if(data.categoryList !== undefined && data.categoryList.length > 0) {
      return data.categoryList.map(({name, uuid, id}) => <option value={uuid} key={id}>{name}</option>)
    } else {
      return <option>Data Yok Lan Defol</option>
    }
  }
  const handleCategory = (e) => {
    const { value, name } = e.target;
    console.log('value',value, 'name',name );
    setCategoryUUID(value);
  }
  return (
    <div className="PostImage">
      <form onSubmit={handleSubmit}>
        <div className="file-upload-wrapper">
        <input
          className='upload-file-input'
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          draggable
          onChange={(e) => handleFileUpload(e)}
        />
        <img src={uploadIcon} alt="Upload an Image"  className='modal-upload-icon'/>
        </div>
        <select name="categories" id="categories" onChange={handleCategory} className="category-select">
          <option value="0">Please select a category...</option>
          { makeCategorySelectList() }
        </select>
        <button className='upload-submit-button' disabled={base64 !== "" ? false : true}>{base64 === ""  && categoryUUID === "" ? 'Select a File' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default PostImage;
