import {useEffect, useState} from 'react';
import Banner from '../../components/Banner/Banner';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import Layout from '../../components/Layout/Layout';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useFetchWithBody from '../../hooks/useFetchWithBody';
import axios from 'axios';
const DenemePage = () => {
  const {uuid} = useParams();
  console.log('param id',uuid);
  const {isLoading, data, error} = useFetchWithBody('http://localhost:9090/api/v1/archives/list/category', { "categoryUuid": uuid})
  //const {isLoading, data, error} = useFetch('http://localhost:9090/api/v1/archives/list/category', uuid );
  console.log('data category page', data);
 // const images = data.archiveList !== undefined && data.archiveList.length > 0 ? data : [];
//console.log('images', images);
  
  return (
    <Layout>
      <Banner />
      {/* <ImagesGrid /> */}
    </Layout>
  );
};

export default DenemePage;
