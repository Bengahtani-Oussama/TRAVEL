import React from 'react';
import useFetch from '../Hokes/useFetch';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');

  const images = [
    'https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1',

    'https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1',

    'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1',

    'https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1',
  ];
  // console.log('DATA : ', data);
  return (
    <div className='flex gap-6 mt-8 '>
      {loading ? (
        'Loading pleas wait...'
      ) : (
        <>
          {data &&
            images.map((pic, i) => (
              <div
                key={i}
                className='lists flex flex-col gap-2 rounded-lg overflow-hidden'
              >
                <img alt='Hotels' className='' src={pic} />
                <div className=''>
                  <h1 className='text-lg font-medium text-black capitalize'>
                    {data[i]?.type}
                  </h1>
                  <h2 className='text-sm font-medium text-gray-500 capitalize'>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
