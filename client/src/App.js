import './App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import PostImageButton from './components/PostImageButton/PostImageButton';
import Modal from './components/Modal/Modal';
function App() {
  const countState = useSelector((state) => state.countReducers);
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <PostImageButton  toggleModal={setIsModalOpen}/>
      <Modal isModalOpen={isModalOpen} toggleModal={setIsModalOpen}/>
      
    </>
  );
}

export default App;
