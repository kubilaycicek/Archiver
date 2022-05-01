import Banner from '../../components/Banner/Banner';
import Layout from '../../components/Layout/Layout';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getImagesByCategory } from '../../store/Actions/imageActions';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
const DenemePage = () => {
  const {categoryName} = useParams();
  console.log('param id',categoryName);
  const dispatch = useDispatch();
  const { isLoading, categories } = useSelector((state) => state.categoryReducer);
  let catUuid = categories.categoryList !== undefined ? categories.categoryList.filter(item => item.name.toLowerCase() == categoryName)[0].uuid : '';
  console.log('name',categoryName,catUuid);
  const images = useSelector(state => state.imagesReducer.imagesByCategories);
  useEffect(() => {
    dispatch(getImagesByCategory({categoryUuid: catUuid}))
  }, [dispatch, catUuid ])
  

  console.log('by categoury images',images);
  return (
    <Layout>
      <Banner />
      <div className="category">
        Categoriesss
      </div>
      <ImagesGrid images={images}/>
    </Layout>
  );
};

export default DenemePage;
