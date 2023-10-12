/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetProductByCategory } from '../Redux/Handlers/Product/AsyncThunks';
import { Products } from '../Types/Redux';
import Loading from '../components/Loading/Loading';
import ErrorComponent from '../components/Error/ErrorComponent';
import { Dispatch } from '@reduxjs/toolkit';
import CategoryHeader from '../components/Category/CategoryHeader';
import ProductFile from '../components/Category/ProductFile';

interface stateType {
  products: {
    productsByCategoryStatus: 'PENDING' | 'FAILURE' | 'SUCCESSFUL';
    productsByCategory: Products[];
  };
}
const Category = () => {
  const params = useParams();
  const dispatch: Dispatch<any> = useDispatch();
  const { productsByCategoryStatus, productsByCategory } = useSelector(
    (state: stateType) => state.products,
  );
  React.useEffect(() => {
    dispatch(GetProductByCategory({ category: params.category }));
  }, []);
  return (
    <main>
      {productsByCategoryStatus === 'PENDING' && <Loading />}
      {productsByCategoryStatus === 'FAILURE' && <ErrorComponent />}
      {productsByCategoryStatus === 'SUCCESSFUL' && (
        <>
          <CategoryHeader title={productsByCategory[0].category} />
          {productsByCategory?.map((state) => (
            <section key={state.id} className='w-11/12 mt-6 m-auto'>
              <ProductFile product={state} />
            </section>
          ))}
        </>
      )}
    </main>
  );
};

export default Category;
