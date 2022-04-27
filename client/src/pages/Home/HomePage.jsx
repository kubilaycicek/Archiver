import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import Layout from '../../components/Layout/Layout';
import { fetchImages } from '../../store/Actions/imageActions';
import './homepage.css';
const HomePage = () => {
  const dispatch = useDispatch();
  const {postImageSuccess} = useSelector(state => state.imagesReducer)
  console.log(postImageSuccess)
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch, postImageSuccess])
  useEffect(()=>{},[dispatch])

  const { images, isImageListLoading } = useSelector((state) => state.imagesReducer);
  console.log('state', images.archiveList);
  //   const imageList = images.archiveList !== undefined && images.archiveList;
  // console.log('images', imageList);

  return (
    <Layout>
      <Banner />
      {isImageListLoading ? 'Images Loading Amk' : <ImagesGrid images={images.archiveList} />}
      
    </Layout>
  );
};

export default HomePage;
