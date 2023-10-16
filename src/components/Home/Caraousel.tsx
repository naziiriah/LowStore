import React from 'react';
import { Carousel } from 'flowbite-react';
import Cards from './Cards';
import MenFashionImage from '../../assets/images/category-1.jpg';
import WomenFashionImage from '../../assets/images/wome-category-1.jpg';
import ElectronicFashionImage from '../../assets/images/category--electronic.jpg';
import JewelryFasionImage from '../../assets/images/category--jewellry-.jpg';
const Caraousel = () => {
  return (
    <Carousel pauseOnHover slideInterval={3000} className='lg:h-96 h-screen w-10/12 m-auto'>
      <Cards
        url="men's clothing"
        image={MenFashionImage}
        categoryName="men's Fashion"
        description1='👔 Timeless Classics: Explore a curated selection of timeless suits, shirts, and accessories for every occasion.'
        description2='🕶️ Accessories Galore: Elevate your look with a range of stylish belts, ties, wallets, and watches that add a touch of sophistication'
      />
      <Cards
        url="women's clothing"
        image={WomenFashionImage}
        categoryName="women's Fashion"
        description1='Trendsetting Apparel: Explore a captivating collection of dresses, tops, and accessories that let you express your unique style.'
        description2=' Chic Accessories: Elevate your look with our wide range of handbags, jewelry, and scarves that add the perfect finishing touch.'
      />
      <Cards
        url='jewelery'
        image={JewelryFasionImage}
        categoryName='Jewels'
        description1='Quality Assured: Our jewelry is expertly crafted using premium materials, ensuring
          durability and lasting beauty.'
        description2="🎁 Perfect Gifts: Whether it's a gift for yourself or a loved one, our jewelry makes
          every moment special and memorable."
      />
      <Cards
        url='electronics'
        image={ElectronicFashionImage}
        categoryName='Electronics'
        description1='🔌 Cutting-Edge Gadgets: Discover a treasure trove of the latest smartphones and more, designed to keep you connected and productive.'
        description2='💡 Smart Living: Transform your home into a smart haven with smart home devices that simplify your daily routines.'
      />
    </Carousel>
  );
};

export default React.memo(Caraousel);
