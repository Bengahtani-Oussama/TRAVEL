import NavBar from "../../components/navbar/NavBar";

import React, { useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import SearchComponent from "../../components/SearchComp/SearchComponent";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../components/Hokes/useFetch";
import { useLocation } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Input } from "@mui/material";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const HotelList = () => {
  const [showDate, setShowDate] = useState(false);

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [option, setOption] = useState(location.state.option);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, refetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handelClick = () => {
    refetch();
  };

  return (
    <div>
      <NavBar type={"listType"} />
      <div className="flex container w-3/4 m-auto py-5 gap-4">
        <div className="flex-1">
          {/* <SearchComponent /> */}
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
                {`${format(dates[0].startDate, "dd/MM/yyyy")} To ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )} `}
              </span>
              {showDate && (
                <DateRange
                  className="absolute top-12 left-0 z-[2]"
                  // editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  // moveRangeOnFirstSelection={false}
                  ranges={dates}
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
                      onChange={(e) => setMin(e.target.value)}
                      min={0}
                      className="w-[30%] pl-2 outline-sky-700"
                      type="number"
                    />
                  </li>
                  <li className="flex justify-between items-center">
                    <p className="text-sm w-[70%]">Max price (per night)</p>
                    <input
                      onChange={(e) => setMax(e.target.value)}
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
              <button
                onClick={handelClick}
                className="bg-blue-700 text-white w-full p-1 mt-3 rounded-md"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex-[3] flex flex-col gap-3">
          {loading ? (
            "Loading Please wait..."
          ) : (
            <>
              {data.map((item) => (
                <SearchItem key={item._id} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
