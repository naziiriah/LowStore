import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProducts } from '../Redux/Handlers/Product/AsyncThunks';
import { AllProductType } from '../Types/Home';

const useAllProducts = () => {
  const dispatch = useDispatch();
  const { productStatus } = useSelector((state: AllProductType) => state.products);
  useEffect(() => {
    if (productStatus !== 'SUCCESSFUL') {
      dispatch(GetAllProducts());
    }
  }, []);
};

export default useAllProducts;
