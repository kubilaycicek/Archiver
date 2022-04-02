import './postImage.css';
import { useState } from 'react';
import postFile from '../../hooks/postFile';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import uploadIcon from '../../assets/icons/upload3.svg';

function PostImage({categoryList}) {
  const countState = useSelector(state => state.countReducers)

  const [archivePostRequest, setArchivePostRequest] = useState({
    categoryUuid:'11a3eb27-8a33-4ac0-855c-b2d442b5a850',
    archiveDto: {
      file: ''
    }
  })
  const { createPost } = postFile()
  const url = 'http://localhost:9090/api/v1/archives';
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', archivePostRequest)
    createPost(url, archivePostRequest);
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
    console.log('base64', base64);
    setArchivePostRequest({ ...archivePostRequest, archiveDto: {
      ...archivePostRequest.archiveDto,
      file: base64
    } });
    console.log('objemiz', archivePostRequest);
  };
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
        <select name="categories" id="categories">
          <option value="0">Please select a category...</option>
          {
            categoryList.length>0 ? categoryList.map(category => console.log(category)) : <option>Data Yok amk</option>
          }
        </select>
        <button className='upload-submit-button' disabled={archivePostRequest.archiveDto.file !== "" ? false : true}>{archivePostRequest.archiveDto.file === "" ? 'Select a File' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default PostImage;
