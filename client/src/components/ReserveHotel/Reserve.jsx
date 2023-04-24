import { Button, Checkbox, Input } from '@mui/material';
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../Context/SerchContext';
import useFetch from '../Hokes/useFetch';

import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDate = getDateInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDate.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handelClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDate,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate('/');
    } catch (err) {}
  };

  return (
    <div className='z-20 w-full h-full fixed bg-black bg-opacity-60 top-0 left-0 flex justify-center items-center'>
      <div className='relative bg-white w-1/3 px-5 py-3 flex flex-col gap-8'>
        <CancelIcon
          className='absolute right-3 top-3 cursor-pointer'
          color='primary'
          onClick={() => setOpen(false)}
        />
        <p className='text-2xl font-semibold text-sky-700'>
          Select your rooms :
        </p>
        {data.map((item) => (
          <div className='rItem flex' key={item._id}>
            <div className='w-[80%] border-r border-sky-700'>
              <div className='rTitle font-semibold'>{item.title}</div>
              <div className='rDesc'>{item.desc}</div>
              <div className='rMax'>Max People : {item.maxPeople}</div>
              <div className='rPrice'>Price : {item.price}</div>
            </div>
            <div className='room w-[20%] flex gap-2 items-center justify-center flex-wrap'>
              {item.roomNumbers.map((roomNumber) => (
                <div className='flex flex-col items-center justify-start'>
                  <label className='text-xs text-gray-500'>
                    {roomNumber.number}
                  </label>
                  <input
                    type='checkbox'
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button className='w-[100%]' variant='contained' onClick={handelClick}>
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default Reserve;
