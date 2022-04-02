import './App.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import PostImageButton from './components/PostImageButton/PostImageButton';
import useFetch from './hooks/useFetch';
import Modal from './components/Modal/Modal';
import DenemePage from './pages/Deneme/DenemePage';
function App() {
  
  const countState = useSelector((state) => state.countReducers);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deneme" element={<DenemePage />} />
      </Routes>
      <PostImageButton toggleModal={setIsModalOpen} isModalOpen={isModalOpen} />
      <Modal isModalOpen={isModalOpen} toggleModal={setIsModalOpen}/>
    </>
  );
}

export default App;
