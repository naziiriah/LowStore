import { Products } from '../Types/Redux';
import { CarouselProp } from '../Types/Home';

const useRandomProducts = (props: CarouselProp) => {
  const randomProducts: Products[] = [];
  for (let i = 0; i < 4; i++) {
    const RandomNumber = Math.floor(Math.random() * 20);
    randomProducts.push(props.products[RandomNumber]);
  }
  console.log(randomProducts);
  return randomProducts;
};

export default useRandomProducts;
