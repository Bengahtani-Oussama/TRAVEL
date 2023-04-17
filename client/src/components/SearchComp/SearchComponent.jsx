import React, { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Input } from "@mui/material";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import useFetch from "../Hokes/useFetch";

const SearchComponent = () => {
  const [showDate, setShowDate] = useState(false);

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);

  return (
    <div className="sticky top-3 bg-gradient-to-b from-[#d1c3eb] to-[#bcd7e2] flex flex-col rounded-xl p-3">
      <p className="font-semibold text-xl mb-2 ">Search</p>
      <div className="w-full my-3 relative">
        <p className="text-sm">Destination</p>
        <span className="absolute top-7 text-blue-700">
          <LocationOnIcon />
        </span>
        <Input
          color="primary"
          className="w-full p-1 pl-6 outline-none"
          type="text"
          placeholder={destination}
        />
      </div>
      <div className="my-3 relative">
        <p className="text-sm">Check in date</p>
        <span
          className="inline-block cursor-pointer text-center text-sm bg-transparent w-full p-1 border-b-[1px] border-slate-700"
          onClick={() => setShowDate(!showDate)}
        >
          {`${format(date[0].startDate, "dd/MM/yyyy")} To ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )} `}
        </span>
        {showDate && (
          <DateRange
            className="absolute top-12 left-0 z-[2]"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        )}
      </div>
      <div>
        <p className="mb-3 font-semibold text-xl">Options</p>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between items-center">
              <p className="text-sm w-[70%] ">Min price (per night)</p>
              <input
                min={0}
                className="w-[30%] pl-2 outline-sky-700"
                type="number"
              />
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm w-[70%]">Max price (per night)</p>
              <input
                min={0}
                className="w-[30%] pl-2 outline-sky-700"
                type="number"
              />
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm w-[70%]">Adult</p>
              <input
                min={1}
                placeholder={option.adult}
                className="w-[30%] pl-2 outline-sky-700"
                type="number"
              />
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm w-[70%]">Children</p>
              <input
                min={0}
                placeholder={option.children}
                className="w-[30%] pl-2 outline-sky-700"
                type="number"
              />
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm w-[70%]">Rooms</p>
              <input
                min={1}
                placeholder={option.room}
                className="w-[30%] pl-2 outline-sky-700"
                type="number"
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button className="bg-blue-700 text-white w-full p-1 mt-3 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;

/**
 *
 * background-image: linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%);
 */
