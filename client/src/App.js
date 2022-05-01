import './App.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import PostImageButton from './components/PostImageButton/PostImageButton';
import Modal from './components/Modal/Modal';
import DenemePage from './pages/Deneme/DenemePage';
import { fetchCategories } from './store/Actions/categoryActions';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryName" element={<DenemePage />} />
      </Routes>
      <PostImageButton toggleModal={setIsModalOpen} isModalOpen={isModalOpen} />
      <Modal isModalOpen={isModalOpen} toggleModal={setIsModalOpen} />
    </>
  );
}

export default App;
