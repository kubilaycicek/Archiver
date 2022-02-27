import './postImage.css';
import { useState } from 'react';
import postFile from '../../hooks/postFile';
import { useDispatch, useSelector } from 'react-redux';
function PostImage() {
  const countState = useSelector(state => state.countReducers)

  const [archiveDto, setArchiveDto] = useState({
    file: '',
    category:''
  })
  const { createPost } = postFile()
  const url = 'http://localhost:5000/uploads';
 
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(url, archiveDto);
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
    setArchiveDto({ ...archiveDto, file: base64 });
  };
  return (
    <div className="PostImage">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <i className="las la-file-upload"></i>
        <button disabled={archiveDto.file !== "" ? false : true}>{archiveDto.file === "" ? 'Select a File' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default PostImage;
