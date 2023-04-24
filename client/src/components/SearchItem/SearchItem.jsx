import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  return (
    <>
      <div className='flex gap-4 bg-gradient-to-r from-slate-400'>
        <div className='flex-1'>
          <img
            className='object-fill h-full'
            alt='hotel img'
            src={item.photos[0]}
          />
        </div>
        <div className='flex-[2] flex flex-col justify-between pb-2'>
          <h2 className='font-bold text-lg text-blue-700'>{item.name}</h2>
          <div className='flex gap-3'>
            <Link className='text-xs text-blue-600 underline decoration-1'>
              {item.city}
            </Link>
            <Link className='text-xs text-blue-600 underline decoration-1'>
              Show on map
            </Link>
            <h2 className='text-xs'>0.6 km from center</h2>
          </div>
          <p className='bg-green-700 w-fit px-2 rounded text-sm text-white'>
            Free airport taxi
          </p>
          <p className='text-sm font-bold'>{item.desc}</p>
          <p className='text-sm'>1 full bed</p>
          <p className='text-green-700 font-extrabold text-xs'>
            Free cancellation
          </p>
          <p className='text-green-700 text-xs'>
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div className='flex-1 flex flex-col justify-between'>
          {item.rating && (
            <div className='flex justify-between'>
              <p className='font-bold'>Excellent</p>
              <span className='bg-blue-700 text-white px-[6px] rounded-t-md rounded-br-md'>
                {item.rating}
              </span>
            </div>
          )}
          <div className='flex flex-col justify-between h-full'>
            <p className='text-right text-2xl font-semibold mb-2'>
              ${item.cheapestPrice}
            </p>
            <div>
              <p className='text-xs text-right text-gray-500'>
                Includes taxes and fees
              </p>
              <Link to={`/hotels/${item._id}`}>
                <button className='bg-blue-600 text-white w-full p-1 rounded mt-1'>
                  See availability
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
