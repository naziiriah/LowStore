import * as React from 'react';

interface PropType {
  title: string;
}
const CategoryHeader = (props: PropType) => {
  return (
    <section className='w-full my-5 text-center font-YoungSerif uppercase font-bold text-5xl'>
      {props.title}
    </section>
  );
};

export default CategoryHeader;
