import React from 'react';
import Caraousel from './Caraousel';
const ShowCategories = () => {
  return (
    <section className='w-full lg:h-screen my-10'>
      <div>
        <h1 className='font-YoungSerif text-5xl text-center mb-16'>Category</h1>
        <article>
          <Caraousel />
        </article>
      </div>
    </section>
  );
};

export default ShowCategories;
