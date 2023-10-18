/* eslint-disable react/react-in-jsx-scope */
import Loading from '../components/Loading/Loading';
import { useSelector } from 'react-redux';
import ErrorComponent from '../components/Error/ErrorComponent';
import useAllProducts from '../hooks/useAllProducts';
import IntroductionSection from '../components/Home/IntroductionSection';
import SecondSection from '../components/Home/SecondSection';
import AsideSection from '../components/Home/AsideSection';
import ShowCategories from '../components/Home/ShowCategories';
import CartSection from '../components/Home/Cartsection';
import Header from '../components/Header';

interface stateType {
  products: {
    productStatus: 'PENDING' | 'FAILURE' | 'SUCCESSFUL';
  };
}
const Home = () => {
  const { productStatus } = useSelector((state: stateType) => state.products);
  useAllProducts();
  return (
    <>
      <Header />
      {productStatus === 'PENDING' && <Loading />}
      {productStatus === 'FAILURE' && <ErrorComponent />}
      {productStatus === 'SUCCESSFUL' && (
        <main className='w-full'>
          <IntroductionSection />
          <SecondSection />
          <ShowCategories />
          <CartSection />
          <AsideSection />
        </main>
      )}
    </>
  );
};

export default Home;
