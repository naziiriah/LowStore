import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetProductByCategory } from '../Redux/Handlers/Product/AsyncThunks';
import { Products } from '../Types/Redux';
import Loading from '../components/Loading/Loading';
import ErrorComponent from '../components/Error/ErrorComponent';

interface stateType {
  products: {
    productsByCategoryStatus: 'PENDING' | 'FAILURE' | 'SUCCESSFUL';
    productsByCategory?: Products[];
  };
}
const Category = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productsByCategoryStatus, productsByCategory } = useSelector(
    (state: stateType) => state.products,
  );
  useLayoutEffect(() => {
    dispatch(GetProductByCategory({ category: params.category }));
  }, []);
  return (
    <main>
      {productsByCategoryStatus === 'PENDING' && <Loading />}
      {productsByCategoryStatus === 'FAILURE' && <ErrorComponent />}
      {/* {productsByCategoryStatus === 'SUCCESSFUL' && <section>{productsByCategory}</section>} */}
    </main>
  );
};

export default Category;
