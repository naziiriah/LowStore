import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetAllProducts } from '../Redux/Handlers/Product/AsyncThunks';

const useAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);
};

export default useAllProducts;
