import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faEnvelope,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

// Images
import USA from '../../Assets/usa.png';
import DZ from '../../Assets/dz.png';
import FR from '../../Assets/fr.png';
import { Button } from '@mui/material';
import { SearchContext } from '../../Context/SerchContext';
import { AuthContext } from '../../Context/AuthContext';

const NavBar = ({ type }) => {
  // check user
  const { user } = useContext(AuthContext);

  const [destination, setDestination] = useState('');
  const [showDate, setShowDate] = useState(false);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showOption, setShowOption] = useState(false);

  const [option, setOption] = useState({
    adult: 0,
    children: 0,
    room: 1,
  });

  const handelOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === 'inc' ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const navigate = useNavigate();
  const handelSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, option } });
    navigate('/hotels', { state: { destination, dates, option } });
  };

  return (
    <div
      className={
        type === 'listType'
          ? 'h-[25vh] bg-gradient-to-r from-blue-700 to-blue-500'
          : 'navbar h-[55vh] bg-gradient-to-r from-blue-700 to-blue-500'
      }
    >
      <div className='relative container w-3/4 m-auto py-5 h-full flex flex-col gap-5'>
        <div className='navLink flex flex-col gap-5'>
          <div className='top-link flex justify-between items-center'>
            <div className='logo'>
              <Link to='/'>
                <span className='text-2xl font-bold text-white'>
                  Travel Booking
                </span>
              </Link>
            </div>
            <div className='link-button'>
              <ul className='flex gap-2 items-center'>
                <li>
                  <span className='text-white font-medium'>PLN</span>
                </li>

                <li>
                  <HelpOutlineIcon />
                </li>
                <li>
                  <Button
                    variant='outlined'
                    className=''
                    style={{ color: 'white', border: '1px solid' }}
                  >
                    List your property
                  </Button>
                </li>
                {user ? (
                  user.username
                ) : (
                  <div className='flex gap-2'>
                    <li className='login'>
                      <Link to='/login'>
                        <Button
                          className='w-[130px]'
                          variant='contained'
                          style={{ color: '#1D4ED8', backgroundColor: 'white' }}
                          endIcon={<LoginIcon />}
                        >
                          login
                        </Button>
                      </Link>
                    </li>
                    <li className='register'>
                      <Button
                        className='w-[130px]'
                        variant='contained'
                        style={{ color: '#1D4ED8', backgroundColor: 'white' }}
                        endIcon={<HowToRegIcon />}
                      >
                        register
                      </Button>
                    </li>
                  </div>
                )}
                <li>
                  <div>
                    <Select
                      defaultValue='us'
                      className='langue w-7 mr-10'
                      color='neutral'
                      variant='plain'
                    >
                      <Option value='us'>
                        <ListItemDecorator>
                          <Avatar size='sm' src={USA} />
                        </ListItemDecorator>
                      </Option>
                      <ListDivider role='none' inset='startContent' />
                      <Option value='dz'>
                        <ListItemDecorator>
                          <Avatar size='sm' src={DZ} />
                        </ListItemDecorator>
                      </Option>
                      <ListDivider role='none' inset='startContent' />
                      <Option value='fr'>
                        <ListItemDecorator>
                          <Avatar size='sm' src={FR} />
                        </ListItemDecorator>
                      </Option>
                    </Select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='bottom-link flex gap-3'>
            <button className=' px-3 py-1 text-white border border-transparent hover:border-white rounded-3xl'>
              <span className='mr-2'>
                <HotelIcon />
              </span>
              Stays
            </button>
            <button className=' px-3 py-1 text-white border border-transparent hover:border-white rounded-3xl'>
              <span className='mr-2'>
                <FlightIcon />
              </span>
              Flights
            </button>
            <button className=' px-3 py-1 text-white border border-transparent hover:border-white rounded-3xl'>
              <span className='mr-2'>
                <DirectionsCarIcon />
              </span>
              Car rentals
            </button>
            <button className=' px-3 py-1 text-white border border-transparent hover:border-white rounded-3xl'>
              <span className='mr-2'>
                <AttractionsIcon />
              </span>
              Attractions
            </button>
            <button className=' px-3 py-1 text-white border border-transparent hover:border-white rounded-3xl'>
              <span className='mr-2'>
                <AirportShuttleIcon />
              </span>
              Airport taxis
            </button>
          </div>
        </div>
        {type !== 'listType' && (
          <>
            <div className='bottom-content flex flex-col gap-5'>
              <div>
                <h2 className='text-white font-extrabold text-4xl'>
                  A lifetime of discounts? It's Genius.
                </h2>
                <p className='text-white w-2/3 mt-3'>
                  Get rewarded for your travels-unlock instant saving of 10% or
                  more with a free Hoteltravel.com account.{' '}
                </p>
              </div>
              <div>
                {!user && (
                  <Button className='' variant='contained'>
                    Sing in / register
                  </Button>
                )}
              </div>
            </div>
            <div className='bg-white w-full rounded-md absolute -bottom-6 h-[50px] p-1 border-[3px] border-yellow-500 header-search flex justify-around gap-2'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon className='text-gray-500' icon={faEnvelope} />
                <input
                  className='border-0 outline-none h-full'
                  placeholder='Where are you going?'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon
                  className='text-gray-400'
                  icon={faCalendarDays}
                />
                <span
                  className='text-gray-500 cursor-pointer'
                  onClick={() => setShowDate(!showDate)}
                >
                  {`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(
                    dates[0].endDate,
                    'dd/MM/yyyy'
                  )}`}
                </span>
                {showDate && (
                  <DateRange
                    className='absolute top-12 z-[2]'
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                  />
                )}
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon className='text-gray-400' icon={faPerson} />
                <span
                  className='text-gray-500 cursor-pointer'
                  onClick={() => setShowOption(!showOption)}
                >{`${option.adult} Adult - ${option.children} Children - ${option.room} room `}</span>
                {showOption && (
                  <div className='z-[2] options bg-white border border-yellow-500 w-64 absolute top-12 p-2 flex flex-col gap-3'>
                    <div className='flex items-center'>
                      <span className='flex-1 items-center text-center'>
                        Adult
                      </span>
                      <div className='flex-1'>
                        <button
                          disabled={option.adult <= 1}
                          className='border border-blue-600 w-6 text-blue-600'
                          onClick={() => handelOption('adult', 'dec')}
                        >
                          -
                        </button>
                        <span className='mx-3'>{option.adult}</span>
                        <button
                          className='border border-blue-600 w-6 text-blue-600'
                          onClick={() => handelOption('adult', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <span className='flex-1 items-center text-center'>
                        Children
                      </span>
                      <div className='flex-1'>
                        <button
                          disabled={option.children <= 0}
                          className='border border-blue-600 w-6 text-blue-600'
                          onClick={() => handelOption('children', 'dec')}
                        >
                          -
                        </button>
                        <span className='mx-3'>{option.children}</span>
                        <button
                          className='border border-blue-600 w-6 text-blue-600'
                          onClick={() => handelOption('children', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <span className='flex-1 items-center text-center'>
                        Room
                      </span>
                      <div className='flex-1'>
                        <button
                          disabled={option.room <= 1}
                          className='border border-blue-600 w-6 text-blue-600'
                          onClick={() => handelOption('room', 'dec')}
                        >
                          -
                        </button>
                        <span className='mx-3'>{option.room}</span>
                        <button
                          disabled={option.adult === 1 && option.room === 1}
                          className='border border-blue-600 w-6 text-blue-600'
                          onClick={() => handelOption('room', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='flex gap-2 items-center'>
                <button
                  className='bg-blue-700 text-white h-full w-20 rounded-md'
                  onClick={handelSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
