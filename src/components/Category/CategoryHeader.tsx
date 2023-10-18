/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

interface PropType {
  title: string;
}
const CategoryHeader = (props: PropType) => {
  return (
    <section className='w-full my-5 text-center font-YoungSerif uppercase font-bold lg:text-5xl text-2xl'>
      {props.title}
    </section>
  );
};

export default CategoryHeader;
