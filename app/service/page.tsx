import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceImg from '../../public/serviceImg.jpeg';
import serviceHome from '../../public/affinityHome.jpg';
import ServiceDetails from '@/components/ServiceDetails';
import HeaderPage from '@/components/HeaderPage';
import PageContent from '@/components/PageContent';
import { serviceContent } from '@/lib/data';

const Services = () => {
  return (
    <div className=" overflow-hidden">
      <HeaderPage actualPage={'Care Service'} />

      <PageContent
        imgSource={serviceHome}
        titleContent={serviceContent}
      />
      <ServiceDetails />
    </div>
  );
};

export default Services;
