import React from 'react';
import Banner from '../../components/Banner/Banner';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import Layout from '../../components/Layout/Layout';

import './homepage.css';
const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <ImagesGrid />
    </Layout>
  );
};

export default HomePage;
