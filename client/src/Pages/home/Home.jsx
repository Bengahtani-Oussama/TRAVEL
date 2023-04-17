import React from 'react';
import Featured from '../../components/featured/Featured';
import FeaturedHotels from '../../components/featuredHotels/FeaturedHotels';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import NavBar from '../../components/navbar/NavBar';
import PropertyList from '../../components/propertyList/PropertyList';

const Home = () => {
  return (
    <div className='box-border'>
      <NavBar />
      <div className='container w-3/4 m-auto'>
        <Featured />
        <h1 className='text-xl font-semibold py-2'>Browse by property type</h1>
        <PropertyList />
        <h1 className='text-xl font-semibold  py-6'>Homes guests love</h1>
        <FeaturedHotels />
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
