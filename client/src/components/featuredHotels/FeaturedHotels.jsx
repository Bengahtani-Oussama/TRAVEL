import React from 'react';
import useFetch from '../Hokes/useFetch';

const FeaturedHotels = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className='flex gap-6 mt-8 '>
      {loading ? (
        'Loading Please Wait ...'
      ) : (
        <>
          {data.map((item) => (
            <div
              key={item._id}
              className='lists flex flex-col gap-2 rounded-lg overflow-hidden'
            >
              <img
                alt='Hotel room'
                className='w-[250px] h-[200px]'
                src={item.photos[0]}
              />
              <div className=''>
                <h1 className='text-lg font-medium text-black'>{item.name}</h1>
                <h2 className='text-sm font-medium text-gray-500'>
                  Location - {item.city}
                </h2>
                <h2 className='text-sm font-medium text-gray-500'>
                  Price start From :{' '}
                  <span className='text-base text-black'>
                    DZD {item.cheapestPrice}
                  </span>
                </h2>
                {item.rating && (
                  <div className='flex gap-2 items-center pb-1'>
                    <span className='bg-blue-700 text-white px-[6px] rounded-t-md rounded-br-md'>
                      {item.rating}
                    </span>
                    <span className=''>Excellent - 400 reviews</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedHotels;
