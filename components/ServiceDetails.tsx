'use client';
import React, { useState } from 'react';
import { personal, companion, home } from '../lib/data';
import { serviceObjectInterface } from '@/lib/interface';

const ServiceDetails = () => {
  const [serviceTitle, setServiceTitle] =
    useState<serviceObjectInterface[]>(home);
  return (
    <div className="my-14 mx-5">
      <div className="flex flex-col  transition-all duration-200 ">
        <ul className="flex items-center justify-between  md:space-x-12 md:text-2xl border rounded-md shadow-lg  h-[100px] w-full p-4 ">
          <li
            className="serviceList"
            onClick={() => setServiceTitle(companion)}
          >
            Companionship Service
          </li>
          <li
            className="serviceList"
            onClick={() => setServiceTitle(personal)}
          >
            Personal Services
          </li>
          <li
            className="serviceList"
            onClick={() => setServiceTitle(home)}
          >
            Home Helper Services
          </li>
        </ul>
        <div className="my-6 flex flex-col justify-start items-start leading-8 text-xl">
          {serviceTitle.map((item, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <li>{item.name}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
