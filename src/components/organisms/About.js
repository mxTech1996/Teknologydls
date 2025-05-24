// components/AboutSection.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiArrowRight } from 'react-icons/fi'; // Example icons for values

const AboutSection = ({ data }) => {
  // data es el JSON principal
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const valuePills = [
    {
      icon: <FiAward className='w-5 h-5 mr-2 text-orange-500' />,
      text: 'Quality Focus',
    },
    {
      icon: <FiUsers className='w-5 h-5 mr-2 text-orange-500' />,
      text: 'Client-Centric',
    },
    {
      icon: <FiTarget className='w-5 h-5 mr-2 text-orange-500' />,
      text: 'Competitive Edge',
    },
  ];

  return (
    <motion.section
      id='about'
      className='py-16 sm:py-24 bg-gray-800 overflow-hidden' // Slightly different dark bg
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <motion.h3
            className='text-base font-semibold text-orange-500 tracking-wide uppercase'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h3>
          <motion.h2
            className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className='text-orange-500'>{data.name}</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Columna de Texto */}
          <motion.div variants={textVariants}>
            <h3 className='text-2xl sm:text-3xl font-semibold text-white leading-tight'>
              {data.subtitle}
            </h3>
            <p className='mt-6 text-lg text-gray-300 leading-relaxed'>
              {data.description}
            </p>
            <div className='mt-8 space-y-4'>
              {valuePills.map((pill) => (
                <motion.div
                  key={pill.text}
                  className='flex items-center bg-gray-700/50 p-3 rounded-lg border border-gray-600'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + valuePills.indexOf(pill) * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {pill.icon}
                  <span className='text-gray-200 font-medium'>{pill.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className='mt-10'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href='#contact' // Cambiar a una página de contacto o sección más detallada si existe
                className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500 transition-transform transform hover:scale-105'
              >
                Get In Touch
                <FiArrowRight className='ml-2 w-5 h-5' />
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna de Imagen */}
          <motion.div
            className='relative w-full h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl'
            variants={imageVariants}
          >
            {data.image_hero2 ? (
              <Image
                src={data.image_hero2}
                alt={`About ${data.name}`}
                layout='fill'
                objectFit='cover'
                className='transform group-hover:scale-105 transition-transform duration-500'
              />
            ) : (
              <div className='w-full h-full bg-gray-700 flex items-center justify-center'>
                <p className='text-gray-500 text-lg'>
                  Company Image Placeholder
                </p>
              </div>
            )}
            <div className='absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-40 lg:opacity-20'></div>{' '}
            {/* Subtle gradient from side */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
