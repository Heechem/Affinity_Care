import { serviceContent } from '@/lib/data';
import { PageContentInterface, serviceContentInterface } from '@/lib/interface';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

type PageContentType = {
  imgSource: string | StaticImport;
  titleContent: serviceContentInterface[];
};

const PageContent = ({ imgSource, titleContent }: PageContentType) => {
  return (
    <div className="flex flex-col justify-center items-center  md:flex-row  ">
      <Image
        src={imgSource}
        alt="image"
        quality={100}
        width={250}
        height={250}
        className="w-full h-full  -z-50"
      />
      {titleContent.map((item: serviceContentInterface, index: number) => (
        <div
          className="my-10 mx-4 md:text-2xl"
          key={index}
        >
          <h1 className="font-bold py-3 md:text-4xl text-slate-300">
            {item.title} :
          </h1>
          <h3 className=" font-semibold text-xl py-3">{item.secondTitle}</h3>
          <p className=" leading-8">{item.firstPara}</p>
          <br />
          <p>{item.secondPara}</p>
        </div>
      ))}
    </div>
  );
};

export default PageContent;
