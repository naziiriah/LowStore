import React from 'react';
import { Carousel } from 'flowbite-react';
import { CarouselProp } from '../../Types/Home';
import { Products } from '../../Types/Redux';
import useRandomProducts from '../../hooks/useRandomProducts';

const Caraousel = (props: CarouselProp) => {
  const products = props.products
  return (
    <Carousel pauseOnHover slideInterval={1500} className='h-96 w-full'>
      {products.map((state) => (
        <img key={state.id} alt={state.title} src={state.image} className='' />
      ))}
    </Carousel>
  );
};

export default React.memo(Caraousel);
