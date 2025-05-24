// components/Hero.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'; // FiCheckCircle for small features

const Hero = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const smallFeatures = [
    'Quality Products',
    'Competitive Pricing',
    'Leading Brands',
    'Bulk Orders',
  ];

  return (
    <section
      id='home'
      className='relative h-screen min-h-[700px] flex items-center justify-center text-white'
    >
      {/* Background Image with Overlay */}
      {data.image_hero && (
        <Image
          src={data.image_hero}
          alt='Hero Background'
          layout='fill'
          objectFit='cover'
          quality={85}
          priority // Important for LCP
          className='z-0'
        />
      )}
      <div className='absolute inset-0 bg-black opacity-60 z-10'></div>{' '}
      {/* Dark overlay */}
      {/* Content */}
      <motion.div
        className='relative z-20 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight'
          variants={itemVariants}
        >
          Welcome to <span className='text-orange-500'>{data.name}</span>
        </motion.h1>
        <motion.p
          className='mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto'
          variants={itemVariants}
        >
          {data.subtitle}
        </motion.p>
        <motion.p
          className='mt-4 text-md text-gray-400 max-w-xl mx-auto' // Using main description here for more context
          variants={itemVariants}
        >
          {data.description}
        </motion.p>
        <motion.div className='mt-10' variants={itemVariants}>
          <Link
            href='#products'
            className='inline-block px-10 py-4 border border-transparent text-lg font-semibold rounded-md shadow-lg text-white bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-300'
          >
            Explore Our Products <FiArrowRight className='inline ml-2' />
          </Link>
        </motion.div>

        {/* Small Features/Logos (like in mechanic image) */}
        <motion.div
          className='mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto'
          variants={itemVariants}
        >
          {smallFeatures.map((feature, index) => (
            <div
              key={index}
              className='flex items-center justify-center sm:justify-start text-gray-300'
            >
              <FiCheckCircle className='w-5 h-5 text-orange-500 mr-2 flex-shrink-0' />
              <span className='text-sm sm:text-base'>{feature}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
