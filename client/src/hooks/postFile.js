import axios from "axios";

const postFile = () => {
  const createPost = async (url, file) => {
    try {
      await axios.post(url, file);
    } catch (error) {
      console.log('error',error);
    }
  };
  return { createPost };
};
export default postFile;