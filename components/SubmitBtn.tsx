'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group w-[8rem] border h-[3rem] text-black bg-slate-200 rounded-full outline-none flex justify-center items-center gap-2 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all ease-in-out duration-200 disabled:scale-100 disabled:bg-opacity-70 hover:text-white "
    >
      {pending ? (
        <div className=" h-5 w-5 animate-spin rounded-full border-b-2"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-75 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
