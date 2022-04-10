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
  /*
  const {isLoading, data, error} = useFetchWithBody('http://localhost:9090/api/v1/archives/list/category', { "categoryUuid" : "asdasd"});
  console.log('data category page', data);*/

  useEffect(()=>{
    getData();
},[]);

  const getData = ()=>{
    fetch('http://localhost:9090/api/v1/archives/list/category', requestOptions)
    .then(response => response.json())
    .then(data =>data );


  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "categoryUuid" : "KUBİLAY"})
};

  return (
    <Layout>
      <Banner />
      {/* <ImagesGrid /> */}
    </Layout>
  );
};

export default DenemePage;
