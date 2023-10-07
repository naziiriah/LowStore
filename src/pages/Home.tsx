import React from 'react';
// import { useDispatch } from 'react-redux';
// import { GetAllProducts } from '../Redux';
import Loading from '../components/Loading/Loading';
import Caraousel from '../components/Home/Caraousel';
import { useSelector } from 'react-redux';
import ErrorComponent from '../components/Error/ErrorComponent';
import useAllProducts from '../hooks/useAllProducts';

const Home = () => {
  const { isAllProductsPending, isAllProductsSuccess, isAllProductsFailure, Products } =
    useSelector((state) => state.products);
  useAllProducts();
  return (
    <>
      {isAllProductsPending && <Loading />}
      {isAllProductsFailure && <ErrorComponent />}
      {isAllProductsSuccess && (
        <div className='w-full'>
        </div>
      )}
    </>
  );
};

export default Home;
