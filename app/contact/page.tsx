'use client';
import HeaderPage from '@/components/HeaderPage';
import PageContent from '@/components/PageContent';
import { aboutContent, contactData } from '@/lib/data';
import React from 'react';
import ImgContact from '../../public/contactImg.jpg';
import SubmitBtn from '@/components/SubmitBtn';

import toast from 'react-hot-toast';
import { sendEmail } from '../action/setEmail';

const Contact = () => {
  return (
    <div>
      <HeaderPage actualPage={'Contact US'} />
      <PageContent
        imgSource={ImgContact}
        titleContent={contactData}
      />
      <div className=" w-1/2 border border-slate-300 text-center top-[50%] left-[50%] translate-y-1/2 translate-x-1/2 mb-10"></div>
      <div className="flex flex-col items-center justify-center mb-12 ">
        <form
          className="mt-10  flex flex-col  w-2/3"
          action={async (FormData) => {
            const { data, error } = await sendEmail(FormData);
            if (error) {
              toast.error(error);
            }

            toast.success('Successfully toasted!');
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            className="h-14 rounded-lg borderBlack px-4"
            required
            maxLength={30}
            name="senderEmail"
          />
          <textarea
            className="h-52 my-3 p-4 rounded-lg borderBlack text-slate-600"
            placeholder="Your message"
            required
            maxLength={500}
            name="message"
          />
          <SubmitBtn />
        </form>
      </div>
    </div>
  );
};

export default Contact;
