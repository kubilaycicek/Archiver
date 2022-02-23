import './App.css';
import { useState } from 'react';
import axios from 'axios';
import postFile from './hooks/postFile';
function App() {
  const [postImage, setPostImage] = useState({
    myFile: '',
  });
  const { createPost } = postFile()
  const url = 'http://localhost:5000/uploads';
 
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(url, postImage);
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
    setPostImage({ ...postImage, myFile: base64 });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <i className="las la-file-upload"></i>
        <button disabled={postImage.myFile !== "" ? false : true}>{postImage.myFile === "" ? 'Select a File' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default App;
