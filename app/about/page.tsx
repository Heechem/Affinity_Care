import HeaderPage from '@/components/HeaderPage';
import PageContent from '@/components/PageContent';
import { aboutContent, aboutHour, serviceContent } from '@/lib/data';

import Image from 'next/image';
import React from 'react';
import hours from '../../public/hours.jpg';
import aboutUs from '../../public/aboutUs.jpg';

const About = () => {
  return (
    <>
      <div className=" relative">
        <HeaderPage actualPage={'About Us'} />
        <PageContent
          imgSource={aboutUs}
          titleContent={aboutContent}
        />
      </div>
      <div className=" w-1/2 border border-slate-300 text-center top-[50%] left-[50%] translate-y-1/2 translate-x-1/2 mb-10"></div>

      <div className="flex break-words items-center justify-between ml-2">
        <div>
          <h1 className="hTitle text-center my-3">
            SOME OF THE SERVICES WE OFFER
          </h1>
          <p>A full assessment to determine your needs and wishes.</p>
          <p className="pText underline underline-offset-2 ">
            Care available from 7.00 am - 10.30 pm, 7 days a week.
          </p>
          {aboutHour.map((item, index) => (
            <div
              key={index}
              className="my-6 flex flex-col justify-start items-start leading-3 "
            >
              <li className=" whitespace-pre-line">{item.name}</li>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Image
            src={hours}
            alt="hours"
            width={800}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

export default About;
