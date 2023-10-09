import React from 'react';
// import { useDispatch } from 'react-redux';
// import { GetAllProducts } from '../Redux';
import Loading from '../components/Loading/Loading';
import { useSelector } from 'react-redux';
import ErrorComponent from '../components/Error/ErrorComponent';
import useAllProducts from '../hooks/useAllProducts';
import IntroductionSection from '../components/Home/IntroductionSection';

const Home = () => {
  const { isAllProductsPending, isAllProductsSuccess, isAllProductsFailure } = useSelector(
    (state) => state.products,
  );
  useAllProducts();
  return (
    <>
      {isAllProductsPending && <Loading />}
      {isAllProductsFailure && <ErrorComponent />}
      {isAllProductsSuccess && (
        <main className='w-full'>
          <IntroductionSection />
          <IntroductionSection />
          <IntroductionSection />
          <IntroductionSection />
          <IntroductionSection />
        </main>
      )}
    </>
  );
};

export default Home;
