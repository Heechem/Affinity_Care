import { actualPageInterface } from '@/lib/interface';
import Link from 'next/link';
import React from 'react';

const HeaderPage = ({ actualPage }: actualPageInterface) => {
  return (
    <div className=" h-[250px]  flex flex-col items-center justify-center my-5 ">
      <h1 className="text-4xl mb-2 py-6">{actualPage}</h1>
      <Link href={'/contact'}>Get in Touch</Link>
      <div className="my-2 py-4">
        <Link
          href={'/'}
          className=" hover:underline hover: underline-offset-2"
        >
          Home
        </Link>{' '}
        <span>&gt;&gt; {actualPage}</span>
      </div>
    </div>
  );
};

export default HeaderPage;
