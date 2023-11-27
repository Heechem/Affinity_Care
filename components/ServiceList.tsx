import { ServiceListInterface } from '@/lib/interface';
import Link from 'next/link';
import React from 'react';

const ServiceList = ({ clickLink, mouseLeave }: ServiceListInterface) => {
  return (
    <div
      className="flex flex-col border p-5 w-[200px] justify-center text-center leading-8 rounded-lg bg-neutral-100 text-amber-300 bg-opacity-40 border-opacity-30 transition-all ease-in-out duration-300 absolute z-50"
      onMouseLeave={mouseLeave}
    >
      <Link
        href={'/service'}
        onClick={clickLink}
        className=" linkServiceList"
      >
        Companionship Service
      </Link>
      <Link
        href={'/service'}
        onClick={clickLink}
        className=" linkServiceList"
      >
        Personal Service
      </Link>
      <Link
        href={'/service'}
        onClick={clickLink}
        className=" linkServiceList"
      >
        Home Helper Service
      </Link>
    </div>
  );
};

export default ServiceList;
