import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { LocalTaxi, LocationOn } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import NavBar from '../../components/navbar/NavBar';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CancelIcon from '@mui/icons-material/Cancel';

import useFetch from '../../components/Hokes/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Context/SerchContext';
import { AuthContext } from '../../Context/AuthContext';
import Reserve from '../../components/ReserveHotel/Reserve';
// import { DATAIMG } from './dataImg';
import moduleName from '../../Assets/hotels/D2.jpg';
import moduleName2 from '../../Assets/hotels/D3.jpg';
import moduleName3 from '../../Assets/hotels/L1.jpg';
import moduleName4 from '../../Assets/hotels/L2.jpg';
import moduleName5 from '../../Assets/hotels/L3.jpg';
import moduleName6 from '../../Assets/hotels/L4.jpg';
import moduleName7 from '../../Assets/hotels/m02.jpg';
import moduleName8 from '../../Assets/hotels/m3.jpg';

const HotelDetaile = () => {
  const DATAIMG = [
    moduleName,
    moduleName2,
    moduleName3,
    moduleName4,
    moduleName5,
    moduleName6,
    moduleName7,
    moduleName8,
    moduleName8,
  ];
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const [openSlider, setOpenSlider] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const { dates, option } = useContext(SearchContext);

  const toDayCalc = 1000 * 60 * 60 * 24;
  function dayDifference(date_Start, date_End) {
    const timeDeff = Math.abs(date_End.getTime() - date_Start.getTime());
    const dayDeff = Math.ceil(timeDeff / toDayCalc);
    return dayDeff;
  }

  const Days = dayDifference(dates[0].startDate, dates[0].endDate);

  const handelSlider = (index) => {
    setImgIndex(index);
    setOpenSlider(true);
  };

  const handelDirection = (direction) => {
    let newSlideIndex;
    if (direction === 'l') {
      newSlideIndex = imgIndex === 0 ? 8 : imgIndex - 1;
    } else {
      newSlideIndex = imgIndex === 8 ? 0 : imgIndex + 1;
    }
    setImgIndex(newSlideIndex);
  };

  const handleClick = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate('/login');
    }
    // user ? setOpenModel(true) : navigate("/login");
  };

  // console.log(data);

  return (
    <div className='relative'>
      <NavBar type={'listType'} />

      {loading ? (
        'Loading Please wait'
      ) : (
        <div className='container w-3/4 m-auto py-5 flex flex-col gap-6'>
          {openSlider && (
            <div className='z-10 fixed w-full top-0 left-0'>
              <div className='flex m-auto justify-between items-center  bg-slate-600 w-[95%] h-[100vh] bg-opacity-80 px-9'>
                <CancelIcon
                  fontSize='large'
                  className='absolute top-5 right-16 cursor-pointer text-gray-300'
                  onClick={() => setOpenSlider(false)}
                />
                <ArrowCircleLeftIcon
                  fontSize='large'
                  className='cursor-pointer text-gray-300'
                  onClick={() => handelDirection('l')}
                />
                <img
                  className='w-[65%] h-[80vh]'
                  alt='hotel ph'
                  src={DATAIMG[imgIndex]}
                />
                <ArrowCircleRightIcon
                  fontSize='large'
                  className='cursor-pointer text-gray-300'
                  onClick={() => handelDirection('r')}
                />
              </div>
            </div>
          )}
          <div className='flex justify-between'>
            <div>
              <h2 className='text-2xl font-bold mb-3'>{data.name}</h2>
              <p className='flex gap-2 text-sm'>
                <span className='text-sky-700'>
                  <LocationOn />
                </span>
                {data.address}
                <span className='font-bold text-sky-700 cursor-pointer'>
                  {' '}
                  – Excellent location – show map{' '}
                </span>
              </p>
              <p className='my-2 text-sm text-sky-700'>
                Excellent location - {data.distance} from center
              </p>
              <p className='flex gap-2 text-green-600 text-sm font-semibold'>
                <span className='text-yellow-500'>
                  <LocalTaxi />
                </span>
                Book a stay over DZD {data.cheapestPrice} at this property and
                get a free airport taxi
              </p>
            </div>
            <div>
              <Button
                onClick={handleClick}
                className=''
                variant='contained'
                color='primary'
              >
                reserve or book now
              </Button>
            </div>
          </div>
          <div className='flex flex-wrap justify-between'>
            {DATAIMG.map((photo, index) => (
              <div key={index} className='w-[32.5%]'>
                <img
                  className='w-full h-[220px] mt-3'
                  src={photo}
                  alt='hotel ph'
                  onClick={() => handelSlider(index)}
                />
              </div>
            ))}
            {/* {data?.photos.map((photo, index) => (
              <div key={index} className='w-[32.5%]'>
                <img
                  className='w-full h-[220px] mt-3'
                  src={photo}
                  alt='hotel ph'
                  onClick={() => handelSlider(index)}
                />
              </div>
            ))} */}
          </div>
          <div className='flex gap-4'>
            <div className='flex-[3]'>
              <h2 className='text-xl font-semibold pb-3'>{data.title}</h2>
              <p className='text-base text-justify '>{data.desc}</p>
            </div>
            <div className='flex-1 flex flex-col justify-between'>
              <p className='font-semibold text-gray-600'>
                Perfect for a {Days}-night stay!
              </p>
              <p className='text-justify text-gray-600'>
                Located in the real heart of Dublin, this property has an
                excellent location score of {data.rating}!
              </p>
              <p className='text-2xl font-semibold'>
                ${Days * data.cheapestPrice * option.room}{' '}
                <span className='font-normal text-base'>({Days} nights)</span>
              </p>
              <Button className='' variant='contained' color='primary'>
                reserve
              </Button>
            </div>
          </div>
        </div>
      )}
      <MailList />
      <Footer />
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
    </div>
  );
};

export default HotelDetaile;
