import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import PostImageButton from './components/PostImageButton/PostImageButton';
import Modal from './components/Modal/Modal';
import { fetchCategories } from './store/Actions/categoryActions';
import ImagesByCategory from './pages/ImagesByCategory/ImagesByCategoryPage';
import { enlargeImageWithModal } from './store/Actions/imageActions';
import EnlargedImage from './components/EnlargedImage/EnlargedImage';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const enlargeImageSrc = useSelector(state => state.imagesReducer.enlargedImageSrc)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModalIfSrc = enlargeImageSrc ? 'show-flex' : 'hide';
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryName" element={<ImagesByCategory />} />
      </Routes>
      <PostImageButton toggleModal={setIsModalOpen} isModalOpen={isModalOpen} />
      <Modal isModalOpen={isModalOpen} toggleModal={setIsModalOpen} />
      <EnlargedImage showModalIfSrc={showModalIfSrc} enlargeImageSrc={enlargeImageSrc}/>
    </>
  );
}

export default App;
