import Banner from '../../components/Banner/Banner';
import Layout from '../../components/Layout/Layout';
import {useParams} from 'react-router-dom';
const DenemePage = () => {
  const {uuid} = useParams();
  console.log('param id',uuid);
  return (
    <Layout>
      <Banner />
      {/* <ImagesGrid /> */}
    </Layout>
  );
};

export default DenemePage;
