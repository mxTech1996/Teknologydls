'use client';
import React from 'react';
import { ContactInfo } from 'ecommerce-mxtech';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { dataSite } from '@/data';

export default function MoreInformation() {
  return (
    <main className='relative'>
      <Navbar data={dataSite} />
      <ContactInfo />
      <Footer />
    </main>
  );
}
