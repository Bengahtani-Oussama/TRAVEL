import React from 'react';
import useFetch from '../Hokes/useFetch';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=Madrid,London,Djelfa'
  );

  // console.log('data', data);

  return (
    <>
      {loading ? (
        'Loading Pleas waite ...'
      ) : (
        <div className='flex mt-12 gap-7 z-[1]'>
          <div className='rounded-xl relative overflow-hidden h-[250px]'>
            <img
              alt='city'
              className=''
              src='https://cf.bstatic.com/xdata/images/city/600x600/968021.jpg?k=51943d9c8f50038e2764ea188e2cb4e8cc116765f17949d8310158f533c13019&o='
            />
            <div className='absolute w-full bottom-4 left-5 text-white font-bold'>
              <h1 className='pl-4 text-3xl bg-blue-500 opacity-70'>
                title Madrid
              </h1>
              <h2 className='pl-4 text-xl bg-blue-500 opacity-70'>
                {data[0]} Hotel
              </h2>
            </div>
          </div>
          <div className='rounded-xl relative overflow-hidden h-[250px]'>
            <img
              alt='city'
              className=''
              src='https://cf.bstatic.com/xdata/images/city/600x600/613095.jpg?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o='
            />
            <div className='absolute w-full bottom-4 left-5 text-white font-bold'>
              <h1 className='pl-4 text-3xl bg-blue-500 opacity-70'>
                title london
              </h1>
              <h2 className='pl-4 text-xl bg-blue-500 opacity-70'>
                {data[1]} Hotel
              </h2>
            </div>
          </div>
          <div className='rounded-xl relative overflow-hidden h-[250px]'>
            <img
              alt='city'
              className=''
              src='https://cf.bstatic.com/xdata/images/city/600x600/682071.jpg?k=d7fb5b90756ec0cafe4350896101d959673d75796d3932cb8c4692bcbe6e6eb5&o='
            />
            <div className='absolute w-full bottom-4 left-5 text-white font-bold'>
              <h1 className='pl-4 text-3xl bg-blue-500 opacity-70'>
                title Djelfa
              </h1>
              <h2 className='pl-4 text-xl bg-blue-500 opacity-70'>
                {data[2]} Hotel
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Featured;
