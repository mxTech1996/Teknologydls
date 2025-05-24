'use client';
import { useRouter } from 'next/navigation';
import { footerData } from '@/data';
import { Footer as FooterComponent } from 'ecommerce-mxtech';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();
  // bg-gray-900 to hexa
  const bgColor = '#1F2937'; // Tailwind's bg-gray-900 in hex
  return (
    <FooterComponent
      backgroundColor={bgColor}
      textColor='#FFFFFF' // White text
      legal={footerData}
      onRedirect={(path) => {
        window.open(path, '_blank');
      }}
      visaImage='/images/visaMaster.png'
    />
  );
};

export default Footer;
