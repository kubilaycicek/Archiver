import React from 'react';
import Banner from '../../components/Banner/Banner';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import Layout from '../../components/Layout/Layout';
import useFetch from '../../hooks/useFetch';
import './homepage.css';
const HomePage = () => {
  const {isLoading, data, error} = useFetch('http://localhost:9090/api/v1/archives/list');
  console.log('data home page', data);
  const images = data.archiveList !== undefined && data.archiveList.length > 0 ? data : [];
console.log('images', images);
  
  return (
    <Layout>
      <Banner />
      <ImagesGrid  images={images}/>
    </Layout>
  );
};

export default HomePage;
