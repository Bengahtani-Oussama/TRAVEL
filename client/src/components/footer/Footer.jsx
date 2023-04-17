import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container w-3/4 m-auto mb-5">
      <div className="flex justify-between mb-10">
        <div>
          <ul className="flex flex-col gap-1">
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Countries
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Regions
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Cities
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Districts
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Airports
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Hotels
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Places of interest
            </Link>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-1">
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Homes
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Apartments
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Resorts
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Villas
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Hostels
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              B&Bs
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Guest houses
            </Link>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-1">
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Unique places to stay
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              All destinations
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              All flight destinations
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Discover
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Reviews
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Discover monthly stays
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Unpacked: Travel articles
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Travel communities
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Seasonal and holiday deals
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Car rental
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Flight finder
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Restaurant reservations
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Booking.com for Travel Agents
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Coronavirus (COVID-19) FAQs
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              About Booking.com
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Customer Service Help
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Partner help
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Careers
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Sustainability
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Press Center
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Safety Resource Center
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Investor relations
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Terms & Conditions
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Partner dispute
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              How We Work
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Privacy & cookie statement
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              MSA statement
            </Link>
            <Link className="font-light text-sm text-slate-700 hover:text-blue-600 duration-150">
              Corporate contact
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-gray-500 text-sm">
        Copyright &#169; 2020–2023 Traveling.com&#8482;. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
